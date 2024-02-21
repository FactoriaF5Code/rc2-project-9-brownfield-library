import './App.css'
import { AppRouter } from './middleware/router/AppRouter';
import { DataMembersProvider } from "./middleware/context/DataMembers";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BookDataProvider } from './middleware/context/BookData';

function App() {
  const [activeButton, setActiveButton] = useState("books");
  const handleButtonChange = (event, newActiveButton) => {
    setActiveButton(newActiveButton);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("");


  return (
    <>
      <BookDataProvider>
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
      </BookDataProvider>
    </>
  )
}

export default App
