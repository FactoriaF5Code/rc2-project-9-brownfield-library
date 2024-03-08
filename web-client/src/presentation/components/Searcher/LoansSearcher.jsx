import "./LoansSearcher.css";
import { useState } from "react";
import { BookSearchIcon } from "./BookSearchIcon";
import searchIcon from "../../assets/searchIcon.svg";
import { LoansTable } from "../Table/LoansTable";
import { useBookDataContext } from "../../../middleware/context/BookData";
import { useMemberDataContext } from "../../../middleware/context/MemberDataContext";

export const LoansSearcher = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const searchBooks  = useBookDataContext();
  const { searchMembers } = useMemberDataContext();

  const handleSearch = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const booksResult = await searchBooks(searchTerm);
      setBooks(booksResult);
      const membersResult = await searchMembers(searchTerm);
      setMembers(membersResult);
    } catch (error) {
      setError("an error occurred " + error);
    }
  };

  return (
    <div>
      <section className="loansSearchContainer">
        <div>
          <h3 className="loansTitle" id="loansTitle">Return Loans</h3>
        </div>
        <form onSubmit={handleSearch}>
          <div className="searchContainer__Field">
            <BookSearchIcon />
            <input
              type="search"
              className="searchContainer__Field-Input"
              placeholder={"Search loans by member name..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="searchContainer__Field-Button">
              <img src={searchIcon} alt="búsqueda icono" />
            </button>
            {error && <p>{error}</p>}
          </div>
        </form>
      </section>

      <LoansTable books={books} members={members}/>
    </div>
  );
};
