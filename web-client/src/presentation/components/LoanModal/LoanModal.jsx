import "./LoanModal.css";
import equis from "../../assets/equissss.svg";

export default function LoanModal({ book, onclose }) {

  if (book && !book.available) {
    const { title, member, returnDate, contact } = book;

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
                  <input type="text" placeholder={member} disabled />
                </div>
                <div>
                  <h2>Return Date</h2>
                  <input type="text" placeholder={returnDate} disabled />
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
