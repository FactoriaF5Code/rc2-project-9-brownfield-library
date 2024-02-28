import "./ModalLoans.css";

export default function ModalLoans({ onclose }) {
  return (
    <>
      <section className="overlay">
        <section className="contenedorModal">
          <div className="contenedorModal__content">
            <div className="contenedorButton__cerrar">
              <button className="cerrarModal" onClick={onclose}>
                {/* <img src={cruz} alt="x" /> */}
              </button>
            </div>
            <div className="contenedorInformación">
              <div className="h2Input">
                <h2 className="h2Info">TÍTULO</h2>
                <section className="inputInfo"></section>
              </div>
              <div className="h2Input">
                <h2 className="h2Info">AUTOR</h2>
                <section className="inputInfo"></section>
              </div>
              <div className="h2Input">
                <h2 className="h2Info">SINOPSIS</h2>
                <section className="inputInfo__sinopsis"></section>
                <article className="contenedorBotonDescatalogar">
                  <button>DESCATALOGAR</button>
                </article>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
