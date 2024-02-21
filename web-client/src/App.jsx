import './App.css'
import { AppRouter } from './middleware/router/AppRouter';
import { DataMembersProvider } from "./middleware/context/DataMembers";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [activeButton, setActiveButton] = useState("books");
  const handleButtonChange = (event, newActiveButton) => {
    setActiveButton(newActiveButton);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");


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
