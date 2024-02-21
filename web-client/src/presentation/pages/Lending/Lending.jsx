import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { SecondaryHeader } from "../../components/Header/SecondaryHeader";
import { UsersSearcher } from "../../components/Searcher/UsersSearcher";

export const Lending = () => {
  const { idBooks } = useParams();
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/books/${idBooks}`);
        setBookData(response.data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBookData();
  }, [idBooks]);

  return (
    <div>
      <SecondaryHeader />
      <section className="lending">
        <h2 className="lending__title">Registrar préstamo del libro:</h2>
        {bookData && (
          <ul className="lending__book">
            <li className="lending__book-text">ID: {bookData.idBooks}</li>
            <li className="lending__book-text">ISBN: {bookData.isbn}</li>
            <li className="lending__book-text">Título: {bookData.title}</li>
            <li className="lending__book-text">Autor: {bookData.author}</li>
          </ul>
        )}
        <h2 className="lending__title">Escoger usuario:</h2>
        <UsersSearcher />
      </section>
    </div>
  );
}