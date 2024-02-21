/* eslint-disable react/prop-types */
import { Header } from "../../components/Header/Header"
import { Searcher } from "../../components/Searcher/Searcher"
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
      <Searcher
        searchTerm={searchTerm}
        setSearchResults={setSearchResults}
        activeButton={activeButton}
        handleButtonChange={handleButtonChange}
        setSearchTerm={setSearchTerm}
        searchResults={searchResults}
      />
    </>
  )
}
