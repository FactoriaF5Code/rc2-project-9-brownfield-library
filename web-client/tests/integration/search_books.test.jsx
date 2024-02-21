import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";
import "./test_server"


test("The main page shows the book search view", () => {
    render(<App />);

    const searchBar = screen.getByPlaceholderText(/Búsqueda de libro por título, autor o ISBN/i);

    expect(searchBar).toBeInTheDocument();

    expect(screen.queryByText(/La Mano Izquierda de la Oscuridad/)).not.toBeInTheDocument();
});


test("we can search for a book", async () => { 
    render(<App />);
    const searchBar = screen.getByPlaceholderText(/Búsqueda de libro por título, autor o ISBN/i);
    const button = screen.getByAltText(/búsqueda icono/i);

    await userEvent.type(searchBar, "Mano");
    userEvent.click(button);

    expect(await screen.findByText(/La Mano Izquierda de la Oscuridad/)).toBeInTheDocument();
});