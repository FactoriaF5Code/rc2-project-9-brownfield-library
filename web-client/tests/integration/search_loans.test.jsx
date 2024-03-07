import { screen } from "@testing-library/react";
import { expect, test } from "vitest";
/* import userEvent from "@testing-library/user-event"; */
import "../test_server"
import { LoansSearcher } from "../../src/presentation/components/Searcher/LoansSearcher";
import { renderMemberWithContext } from '../test_utils';


test("Search view", () => {
    renderMemberWithContext(<LoansSearcher />);

    const searchBar = screen.getByPlaceholderText(/Search member name/i);

    expect(searchBar).toBeInTheDocument();

    expect(screen.queryByText(/Juan Pérez/)).not.toBeInTheDocument();
});


/* test("we can search for a book", async () => {
    renderWithContext(<BookSearcher />);
    const searchBar = screen.getByPlaceholderText(/Búsqueda de libro por título/i);
    const button = screen.getByAltText(/búsqueda icono/i);

    await userEvent.type(searchBar, "Mano");
    userEvent.click(button);

    expect(await screen.findByText(/La Mano Izquierda de la Oscuridad/)).toBeInTheDocument();
}); */