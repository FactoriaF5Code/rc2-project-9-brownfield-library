import { createContext, useContext } from "react";
import { BookService } from "../../services/BookService";
import { LoanService } from "../../services/LoanService";
import { PropTypes } from 'prop-types';
const BookDataContext = createContext();

export const BookDataProvider = ({ children }) => {

  const searchBooks = async (query) => {
    const bookService = new BookService();
    return bookService.searchBooks(query);
  };

  const availableBooks = async (query) => {
    const bookService = new BookService();
    return bookService.availableBooks(query);
  };

  const createBook = async (bookRequest) => {
    const bookService = new BookService();
    return bookService.createBook(bookRequest);
  };

  const createLoan = async (loanRequest) => {
    const loanService = new LoanService();
    return loanService.createLoan(loanRequest);
  }

  const value = {
    availableBooks,
    searchBooks,
    createBook,
    createLoan,
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