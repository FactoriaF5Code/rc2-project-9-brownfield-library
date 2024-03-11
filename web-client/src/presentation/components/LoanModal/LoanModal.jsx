import "./LoanModal.css";
import CrossCloseModal from "../../assets/CrossCloseModal.svg";
import { useEffect, useState } from "react";
import { useBookDataContext } from "../../../middleware/context/BookData";
import axios from "axios";

export default function LoanModal({ book, onclose }) {
  const { searchInfoLoan } = useBookDataContext();
  const { id, title } = book;
  const [loanInfo, setLoanInfo] = useState({});

  useEffect(() => {
    if (book && book.id) {
      searchInfoLoan(book.id)
        .then((response) => {
          console.log(JSON.stringify(response)); 
          setLoanInfo(response);
        })
        .catch((error) => console.log("ha fallado"));
    }
  }, [id]);

  if (book && !book.available) {
    return (
      <>
        <section className="overlay">
          <section className="contenedorModal">
            <div className="contenedorModal__content">
              <div className="contenedorButton__cerrar">
                <img
                  className="cerrarModal"
                  onClick={onclose}
                  src={CrossCloseModal}
                  alt="x"
                />
              </div>
              <div className="contenedorInformación">
                <div>
                  <h2>Title</h2>
                  <p>{title}</p>
                </div>
                <div>
                  <h2>Member</h2>
                  <p>{loanInfo.member}</p>
                </div>
                <div>
                  <h2>Return Date</h2>
                  <p>{loanInfo.returnDate}</p>
                </div>
                <div>
                  <button className="ReturnButton">
                    RETURN BOOK
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </>
    );
  } else {
    return null;
  }
}
