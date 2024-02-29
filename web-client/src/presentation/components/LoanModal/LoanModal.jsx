import "./LoanModal.css";
import equis from "../../assets/equissss.svg";
import { useEffect } from "react";

export default function LoanModal({ book, onclose }) {
  const { id, title } = book;

  useEffect(
    () => {
      console.log(`Hay que llamar a GET /api/loans?bookId=` + book.id);
      console.log(`Usando el book Context`)
    }
    , [book]);

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
                  src={equis}
                  alt="x"
                />
              </div>
              <div className="contenedorInformación">
                <div>
                  <h2>Title</h2>
                  <input type="text" placeholder={title} disabled />
                </div>
                <div>
                  <h2>Member</h2>
                  <input type="text" placeholder={"Member"} disabled />
                </div>
                <div>
                  <h2>Return Date</h2>
                  <input type="text" placeholder={"Return Date"} disabled />
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
