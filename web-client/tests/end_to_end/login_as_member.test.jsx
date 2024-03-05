import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";
import "../test_server";
import { fill } from "../test_utils";

test("Cuando me logueo debo ver mi nombre y apellido en la pantalla", async () => {
    render(<App />);

    await loginAsMember();

    const memberName = await screen.findByText(/Elena Moreno/);

    expect(memberName).toBeInTheDocument();
});

async function loginAsMember() {
    await userEvent.click(screen.getByText("Member access"));
    await fill(/Email/, "elenamoreno@email.com");
    await fill(/Password/, "12345");
    await userEvent.click(screen.getByText(/Login/));
}
