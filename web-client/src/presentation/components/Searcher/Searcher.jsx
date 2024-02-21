/* eslint-disable react/prop-types */
import './Searcher.css';
import { VerticalToggleButtons } from './VerticalToogleButtons';
import Fuse from 'fuse.js';
import axios from 'axios';
import { useState } from 'react';
import FixedHeaderTable from '../Table/Table';
import "../Table/Table.css";
import searchIcon from "../../assets/searchIcon.svg";

export const Searcher = ({
  searchTerm,
  setSearchResults,
  activeButton,
  handleButtonChange,
  setSearchTerm,
  searchResults
}) => {
  const [firstResult, setFirstResult] = useState(null); // Estado para almacenar el primer resultado de la búsqueda
  const [resultMembers, setResultMembers] = useState(null);
  const [memberName, setMemberName] = useState("");
  const [memberLastName, setMemberLastName] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault(); // Evita que se envíe el formulario y recargue la página
    try {
      let response;
      if (activeButton === "books") {
        response = await axios.get("http://localhost:9000/books");
      } else if (activeButton === "members") {
        response = await axios.get("http://localhost:9000/members");
      }
      if (response && response.status === 200) {
        const data = response.data;
        let keysToSearch;
        if (activeButton === "books") {
          keysToSearch = ["title", "author", "isbn"];
        } else if (activeButton === "members") {
          keysToSearch = ["idMember", "name", "lastName"];
        }
        const fuseOptions = {
          keys: keysToSearch,
          threshold: 1.8
        };
        const fuse = new Fuse(data, fuseOptions); // Configura Fuse.js para buscar en los campos correspondientes
        const results = fuse.search(searchTerm); // Realiza la búsqueda
        setSearchResults(results.map(result => result.item));
        if (results.length > 0) {
          // Si hay resultados, establece el primer resultado como el estado firstResult
          setFirstResult(results[0].item);
          if (activeButton === "members") {
            // Si el botón activo es "members", establece los valores de nombre y apellido
            setMemberName(results[0].item.name);
            setMemberLastName(results[0].item.lastName);
            setResultMembers(results[0].item);
          }
        } else {
          // Si no hay resultados, establece firstResult en null y reinicia los valores de nombre y apellido
          setFirstResult(null);
          setMemberName("");
          setMemberLastName("");
        }
      } else {
        console.error("Error al obtener datos");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };
  
  return (
    <>
      <section className="searchContainer">
        <form onSubmit={handleSearch}>
          <div className='searchContainer__Field'>
            <VerticalToggleButtons
              activeButton={activeButton}
              handleButtonChange={handleButtonChange}
            />
            <input
              type="search"
              className="searchContainer__Field-Input"
              placeholder={activeButton === "books" ? "Búsqueda de libro por título, autor o ISBN" : "Buscar socio por nombre, apellido, nº de socio"}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="searchContainer__Field-Button">
              {/* Utiliza type="submit" para el botón */}
              <img src={searchIcon} alt="búsqueda icono" />
            </button>
          </div>
        </form>
      </section>
      <FixedHeaderTable
        activeButton={activeButton}
        searchResults={searchResults}
        setFirstResult={setFirstResult}
        firstResult={firstResult}
        setResultMembers={setResultMembers}
        resultMembers={resultMembers}
      />
    </>
  );
};
