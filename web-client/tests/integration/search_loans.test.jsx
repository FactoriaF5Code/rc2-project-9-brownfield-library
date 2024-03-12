import { screen } from "@testing-library/react";
import { expect, test } from "vitest";
import "../test_server";
import { LoansSearcher } from "../../src/presentation/components/Searcher/LoansSearcher";
import { renderWithContext } from "../test_utils";
import userEvent from "@testing-library/user-event";

test("we can search for a loan by member name", async () => {
  renderWithContext(<LoansSearcher />)

  const searchBar = screen.getByPlaceholderText(/Search loans by member name/i);
  const searchIcon = screen.getByAltText(/búsqueda icono/i);

  await userEvent.type(searchBar, "Juan");
  await userEvent.click(searchIcon);

  expect(await screen.findByText(/Juan/i)).toBeInTheDocument();
});

