import './Searcher.css';
import { useState } from 'react';
import "../Table/Table.css";
import searchIcon from "../../assets/searchIcon.svg";
import { BookSearchIcon } from './BookSearchIcon';
import BookTable from '../Table/BookTable';
import { useBookDataContext } from '../../../middleware/context/BookData';
import { Link } from 'react-router-dom';

export const BookSearcher = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);
  const { searchBooks } = useBookDataContext();
  
    
  const handleSearch = async (event) => {
    event.preventDefault(); // Evita que se envíe el formulario y recargue la página
    setError(null);
    searchBooks(searchTerm)
      .then(response => setBooks(response))
      .catch(err => setError("an error occurred " + err));
  };

  return (
    <>
      <Link to="/curators/books/new"><button className="btn-access">New Book</button></Link>
      <section className="searchContainer">
        <form onSubmit={handleSearch}>
          <div className='searchContainer__Field'>
            <BookSearchIcon />
            <input
              type="search"
              className="searchContainer__Field-Input"
              placeholder={"Búsqueda de libro por título, autor o ISBN"}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="searchContainer__Field-Button">
              {/* Utiliza type="submit" para el botón */}
              <img src={searchIcon} alt="búsqueda icono" />
            </button>
            {error && <p>{error}</p>}
          </div>
        </form>
      </section>
      <BookTable books={books} />
    </>
  );
};
