import { render, screen } from "@testing-library/react";
import { afterAll, beforeAll, expect, test } from "vitest";
import App from "../../App";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";

const handlers = [
    http.get("http://localhost:8080/api/books?q=Mano", () => {
        return HttpResponse.json({
            results: [
                { authod: "Ursula K. Leguin", title: "La Mano Izquierda de la Oscuridad", isbn: "9781234567897", year: "1969" },
                { authod: "Ursula K. Leguin", title: "Los desposeídos", isbn: "9780425032794", year: "1974" }
            ]
        });
    })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => { server.resetHandlers() });

test("The main page shows the catalog view", () => {
    render(<App />);

    const searchBar = screen.getByPlaceholderText(/Busca libros por título/i);

    expect(searchBar).toBeInTheDocument();

    expect(screen.queryByText(/La Mano Izquierda de la Oscuridad/)).not.toBeInTheDocument();
});


test("the page shows search results", async () => {
    render(<App />);
    const searchBar = screen.getByPlaceholderText(/Busca libros por título/i);
    const button = screen.getByText(/Buscar/i);

    await userEvent.type(searchBar, "Mano");
    userEvent.click(button);

    expect(await screen.findByText(/La Mano Izquierda de la Oscuridad/)).toBeInTheDocument();
});