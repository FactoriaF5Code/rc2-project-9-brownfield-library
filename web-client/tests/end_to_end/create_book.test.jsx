import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";
import "../test_server";
import { fill } from "../test_utils";

test("The curator page shows a button to create books", async () => {
    render(<App />);

    await loginAsCurator();

    await userEvent.click(screen.getByText(/Book/));

    await userEvent.click(screen.getByText(/New Book/));

    await fill("Title", "La Mano Izquierda de la Oscuridad");
    await fill("Author", "Ursula K. Leguin");
    await fill("ISBN", "129834751375");
    await fill("Year", "1969");

    await userEvent.click(screen.getByText("Save"));

    const successMsg = await screen.findByText(/Book .+ saved successfully/);

    expect(successMsg).toBeInTheDocument();
});

async function loginAsCurator() {
    await userEvent.click(screen.getByText("Curator access"));
    await fill(/Email/, "severus@hogwarts.com");
    await fill(/Password/, "voldemort4ever");
    await userEvent.click(screen.getByText(/Login/));
}

