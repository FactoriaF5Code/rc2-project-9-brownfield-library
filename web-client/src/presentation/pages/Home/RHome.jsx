/* eslint-disable react/prop-types */
import { Header } from "../../components/Header/Header"
import { BookSearcher } from "../../components/Searcher/BookSearcher";
import "../../components/Table/Table.css";


export const RHome = ({
  searchTerm,
  setSearchResults,
  activeButton,
  handleButtonChange,
  setSearchTerm,
  searchResults
}) => {
  return (
    <>
      <Header />
      <BookSearcher />
    </>
  )
}
