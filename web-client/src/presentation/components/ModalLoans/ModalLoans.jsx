import "./ModalLoans.css";
import equis from "../../assets/equissss.svg";

export default function ModalLoans({ book, onclose }) {

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
                  <h2>Date return</h2>
                  <input type="text" placeholder={returnDate} disabled />
                </div>
                <div>
                  <h2>Contact</h2>
                  <input type="text" placeholder={contact} disabled />
                </div>
                <button className="buttonReturn">Return</button>
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
