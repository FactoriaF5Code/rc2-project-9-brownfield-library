/* eslint-disable react/prop-types */
import { MemberHomeHeader } from "../../components/Header/MemberHomeHeader";
import { BookSearcher } from "../../components/Searcher/BookSearcher";
import "../../components/Table/Table.css";


export const MemberHome = () => {
  return (
    <>
      <MemberHomeHeader />
      <BookSearcher />
    </>
  )
}
