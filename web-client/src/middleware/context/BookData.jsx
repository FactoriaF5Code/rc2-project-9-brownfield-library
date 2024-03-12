import { createContext, useContext } from "react";
import { BookService } from "../../services/BookService";
import { LoanService } from "../../services/LoanService";
import { PropTypes } from 'prop-types';
import { useAuthenticationContext } from "./AuthenticationContext";
const BookDataContext = createContext();

export const BookDataProvider = ({ children }) => {

  const { getAuthenticationHeader } = useAuthenticationContext();

  const searchBooks = async (query) => {
    const bookService = new BookService();
    return bookService.searchBooks(query, getAuthenticationHeader());
  };

  const availableBooks = async (query) => {
    const bookService = new BookService();
    return bookService.availableBooks(query, getAuthenticationHeader());
  };

  const createBook = async (bookRequest) => {
    const bookService = new BookService();
    return bookService.createBook(bookRequest, getAuthenticationHeader());
  };

  const createLoan = async (loanRequest) => {
    const loanService = new LoanService();
    return loanService.createLoan(loanRequest, getAuthenticationHeader());
  }
  const searchLoanInfo = async (bookId) => {
    const bookService = new BookService();
    return bookService.searchLoanInfo(bookId, getAuthenticationHeader());
  }
  
  const searchLoans = async (loanResponse) => {
    const loanService = new LoanService();
    return loanService.searchLoan(loanResponse, getAuthenticationHeader());
  }

  const value = {
    availableBooks,
    searchBooks,
    createBook,
    createLoan,
    searchInfoLoan: searchLoanInfo,
    searchLoans
  };

  return <BookDataContext.Provider value={value}>{children}</BookDataContext.Provider>;
};

BookDataProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useBookDataContext = () => {

  const context = useContext(BookDataContext);
  if (context === undefined) {
    console.error('useBookDataContext must be used within a BookDataProvider');
  }
  return context;
};