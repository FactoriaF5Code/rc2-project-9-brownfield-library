import { SecondaryHeader } from "../../components/Header/SecondaryHeader"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ReturnOk.css'
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";


export const ReturnOk = () => {
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
    <>
      <SecondaryHeader />
      <section className="returnOk">
        <CheckCircleIcon className='returnOk__checkIcon'/>
        <h2 className="returnOk__title">Devolución realizada correctamente del libro:</h2>
        {bookData && (
          <ul className="returnOk__book">
            <li className="returnOk__book-text">ID: {bookData.idBooks}</li>
            <li className="returnOk__book-text">ISBN: {bookData.isbn}</li>
            <li className="returnOk__book-text">Título: {bookData.title}</li>
            <li className="returnOk__book-text">Autor: {bookData.author}</li>
          </ul>
        )}
      </section>
    </>
  )
}
