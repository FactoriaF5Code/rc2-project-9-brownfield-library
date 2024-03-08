import "./Header.css";
import logo from "../../assets/greenfield-logo.png";
import { Link } from "react-router-dom";
import { useAuthenticationContext } from "../../../middleware/context/AuthenticationContext";
import GoBackButton from "../GoBackButton/GoBackButton";

export const MemberHeader = () => {
  const { userLoggedIn, getSessionUserName } = useAuthenticationContext();

  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img src={logo} alt="Greenfield Library logo" />
          </Link>
          <h1> Powered by © Brownfield MegaCorporation</h1>
        </div>
        <div className="nav-header">
        {userLoggedIn ? (
          <>
          <div className="user-name">{getSessionUserName()}</div>
        <div>
          <Link to="/members/logout">
            <button className="btn-header">logout</button>
          </Link>
        </div>
        </>
        ) : (
          <Link to="/members/login">
            <button className="btn-header">login</button>
          </Link>
        )}
        <GoBackButton />
        </div>
      </header>
    </>
  );
};
