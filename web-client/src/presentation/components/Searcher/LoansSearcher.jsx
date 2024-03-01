import './Searcher.css';
import { useState } from 'react';
import "../Table/Table.css";
import searchIcon from "../../assets/searchIcon.svg";
import { BookSearchIcon } from './BookSearchIcon';
import { useLoansDataContext } from '../../../middleware/context/BookData';
import { LoansTable } from '../Table/LoansTable';


export const LoansSearcher = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);
  const { searchLoans } = useLoansDataContext();
  
    
  const handleSearch = async (event) => {
    event.preventDefault(); // Evita que se envíe el formulario y recargue la página
    setError(null);
    searchBooks(searchTerm)
      .then(response => setBooks(response))
      .catch(err => setError("an error occurred " + err));
  };

  return (
    <div style={{display: "flex", width: "100%", flexDirection: "column", alignItems: "center"}}>
      <section className="searchContainer" style={{display: "flex", gap: "20px"}}>
        <form onSubmit={handleSearch}>
          <div className='searchContainer__Field'>
            <BookSearchIcon />
            <input
              type="search"
              className="searchContainer__Field-Input"
              placeholder={"Búsqueda por nombre de socio"}
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
      
      <LoansTable loans={loans} />
    </div>
  );
};
