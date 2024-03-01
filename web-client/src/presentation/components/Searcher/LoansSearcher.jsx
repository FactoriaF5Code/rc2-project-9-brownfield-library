import "./LoansSearcher.css";
import { BookSearchIcon } from "./BookSearchIcon";
import searchIcon from "../../assets/searchIcon.svg";
import { BookTable } from "../Table/BookTable";
/* import { useState } from 'react';
import "../Table/Table.css";
import searchIcon from "../../assets/searchIcon.svg";
import { BookSearchIcon } from './BookSearchIcon';
import { useLoansDataContext } from '../../../middleware/context/BookData';
import { LoansTable } from '../Table/LoansTable'; */

export const LoansSearcher = () => {
  /* const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);
  const { searchLoans } = useLoansDataContext(); */

  /* const handleSearch = async (event) => {
    event.preventDefault(); // Evita que se envíe el formulario y recargue la página
    setError(null);
    searchBooks(searchTerm)
      .then(response => setBooks(response))
      .catch(err => setError("an error occurred " + err));
  }; */

  return (
    <div>
      <section className="loansSearchContainer">
        <div>
          <h3 className="loansTitle">Return Books</h3>
        </div>
        <form>
          <div className="searchContainer__Field">
            <BookSearchIcon />
            <input
              type="search"
              className="searchContainer__Field-Input"
              placeholder={"Search book by title..."}
            />
            <button type="submit" className="searchContainer__Field-Button">
              {/* Utiliza type="submit" para el botón */}
              <img src={searchIcon} alt="búsqueda icono" />
            </button>
          </div>
        </form>
      </section>

      {/* <BookTable /> */}
    </div>
  );
};
