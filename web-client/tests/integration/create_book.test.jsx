import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";
import "./test_server"


test("The main page shows a button to create a new book", () => {
    render(<App />);

    const createBookbutton = screen.getByText(/New Book/i);

    expect(createBookbutton).toBeInTheDocument();
});

test("We can create a new book using the form", async () => {
    async function fill(fieldName, text) {
        await userEvent.type(screen.getByLabelText(fieldName), text)
    }

    render(<App />);

    await userEvent.click(screen.getByText(/New Book/i));

    await fill("Title", "La Mano Izquierda de la Oscuridad");
    await fill("Author", "Ursula K. Leguin");
    await fill("ISBN", "129834751375");
    await fill("Year", "1969");

    await userEvent.click(screen.getByText("Save"));

    const successMsg = await screen.findByText(/Book .+ saved successfully/);

    expect(successMsg).toBeInTheDocument();
});
