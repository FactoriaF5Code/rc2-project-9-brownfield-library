import "./Header.css";
import logo from "../../assets/greenfield-logo.png";
import { NewMemberButton } from "../NewMemberButton/NewMemberButton";
import { Link } from "react-router-dom";

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
        <NewMemberButton />
      </header>
    </>
  );
};
