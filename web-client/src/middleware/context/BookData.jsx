import { createContext, useContext } from "react";
import { BookService } from "../../services/BookService";

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

  const value = {
    searchBooks,
    createBook,
  };

  return <BookDataContext.Provider value={value}>{children}</BookDataContext.Provider>;
};

export const useBookDataContext = () => {
  return useContext(BookDataContext);
};