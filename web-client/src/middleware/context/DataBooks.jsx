import { createContext, useContext, useState, useEffect } from "react";


const DataBooksContext = createContext();


export const DataBooksProvider = ({ children }) => {
  
  const host = getApiHost();

  const searchBooks = async (query) => {
    try {
      const response = await axios.get(`${host}/api/books?q=${query}`);
      if (response.ok) {
        const data = await response.data;
      } else {
        console.error("Error al obtener datos");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  const value = {
    searchBooks
  };


  return <DataBooksContext.Provider value={value}>{children}</DataBooksContext.Provider>;
};