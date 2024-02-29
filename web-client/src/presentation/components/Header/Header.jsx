import "./Header.css";
import logo from "../../assets/greenfield-logo.png";
import { Link } from "react-router-dom";
import { NewBookButton } from "../NewBookButton/NewBookButton";
import GoBackButton from "../GoBackButton/GoBackButton";

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img src={logo} alt="Greenfield Library logo" />
          </Link>
          <h1> Powered by © Brownfield MegaCorporation</h1>
        </div>
        <NewBookButton />
        <GoBackButton />
      </header>
    </>
  );
};
