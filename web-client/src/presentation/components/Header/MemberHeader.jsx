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
        <GoBackButton />
        {userLoggedIn ? (<div>
          <span>{getSessionUserName()}</span>
          <Link to="/members/logout">
            <button className="btn-access">logout</button>
          </Link>
        </div>
        ) : (
          <Link to="/members/login">
            <button className="btn-access">login</button>
          </Link>
        )}
      </header>
    </>
  );
};
