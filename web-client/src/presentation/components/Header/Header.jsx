import "./Header.css";
import logo from "../../assets/greenfield-logo.png";
import { Link } from "react-router-dom";
import { NewBookButton } from "../NewBookButton/NewBookButton";

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img src={logo} alt="Greenfield Library logo" />
          </Link>
          <h1>Software de gestión de bibliotecas</h1>
        </div>
        <NewBookButton />
      </header>
    </>
  );
};
