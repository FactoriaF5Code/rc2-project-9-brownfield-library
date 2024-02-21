import './App.css'
import { AppRouter } from './router/AppRouter'
import { DataMembersProvider } from "./context/DataMembers";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [activeButton, setActiveButton] = useState("books");
  const handleButtonChange = (event, newActiveButton) => {
    setActiveButton(newActiveButton);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");


  useEffect(() => {
    const fetchDataFromDatabase = async () => {
      try {
        let response;
        if (activeButton === "books") {
          response = await axios.get("http://localhost:9000/books");
          setTableHeaders(["ID", "ISBN", "Título", "Autor", "Estado"]);
        } else if (activeButton === "members") {
          response = await axios.get("http://localhost:9000/members");
          setTableHeaders(["ID", "Nombre", "Apellidos", "Email", "Teléfono"]);
        }

        if (response && response.data) {
          const modifiedData = response.data.map((item) => {
            if (item.status === "En préstamo") {
              return { ...item, status: "Devolución" };
            }
            return item;
          });
          setData(modifiedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromDatabase();
  }, [activeButton]);


  return (
    <>
      <DataMembersProvider>
        <AppRouter
          searchTerm={searchTerm}
          setSearchResults={setSearchResults}
          activeButton={activeButton}
          handleButtonChange={handleButtonChange}
          setSearchTerm={setSearchTerm}
          searchResults={searchResults}
        />
      </DataMembersProvider>
    </>
  )
}

export default App
