import "./ModalLoans.css";
import equis from "../../assets/equissss.svg";

export default function ModalLoans({ onclose }) {
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
                <input
                  type="text"
                  placeholder="The Left Hand of Darkness"
                  disabled
                />
              </div>
              <div>
                <h2>Member</h2>
                <input type="text" placeholder="Miguel Ruiz" disabled />
              </div>
              <div>
                <h2>Date return</h2>
                <input type="text" placeholder="24/02/2024" disabled />
              </div>
              <div>
                <h2>Contact</h2>
                <input type="text" placeholder="contact@gmail.com" disabled />
              </div>
              <button className="buttonReturn">Return</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
