import "./Header.css";
import logo from "../../assets/greenfield-logo.png";
import { Link } from "react-router-dom";

export const SecondaryHeader = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img src={logo} alt="Greenfield Library logo" />
          </Link>
          <h1>Powered by Brownfield MegaCorporation Inc</h1>
        </div>
        <Link to="/" className="backButton">Volver a inicio</Link>
      </header>
    </>
  );
};
