/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header"
import { BookSearcher } from "../../components/Searcher/BookSearcher";
import "../../components/Table/Table.css";


export const RHome = () => {

  const location = useLocation();
  const message = location.state?.msg; 

  return (
    <>
      <Header />
      <BookSearcher />
      { message && <p>{message}</p>}
    </>
  )
}
