import { createContext, useContext, useState, useEffect } from "react";


const DataBooksContext = createContext();


export const DataBooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [needsReload, setNeedsReload] = useState(true);
  const URL = "http://localhost:9000/books";

  const getBooks = async (URL) => {
    try {
      const response = await axios.get(URL);
      if (response.ok) {
        const data = await response.data;
        setBooks(data);
        setNeedsReload(false);
      } else {
        console.error("Error al obtener datos");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  useEffect(() => {
    if (needsReload) {
      axiosData(URL);
    }
  }, [needsReload]);

  const value = {
    books,
    needsReload,
    getBooks,
  };


  return <DataBooksContext.Provider value={value}>{children}</DataBooksContext.Provider>;
};