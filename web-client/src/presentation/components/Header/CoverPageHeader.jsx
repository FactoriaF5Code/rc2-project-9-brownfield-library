import "./Header.css";
import logo from "../../assets/greenfield-logo.png";
import { Link } from "react-router-dom";

export const CoverPageHeader = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img src={logo} alt="Greenfield Library logo" />
          </Link>
          <h1>Powered by © Brownfield MegaCorporation</h1>
        </div>
      </header>
    </>
  );
};
