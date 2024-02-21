import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";
import "./test_server"


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