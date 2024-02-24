import { createContext, useContext } from "react";
import { BookService } from "../../services/BookService";
import { LoanService } from "../../services/LoanService";
const BookDataContext = createContext();

export const BookDataProvider = ({ children }) => {

  const searchBooks = async (query) => {
    const bookService = new BookService();
    return bookService.searchBooks(query);
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
    searchBooks,
    createBook,
    createLoan,
  };

  return <BookDataContext.Provider value={value}>{children}</BookDataContext.Provider>;
};

export const useBookDataContext = () => {

  const context = useContext(BookDataContext);
  if (context === undefined) {
    console.error('useBookDataContext must be used within a BookDataProvider');
  }
  return context;
};