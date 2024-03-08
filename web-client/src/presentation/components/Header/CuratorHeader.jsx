import "./Header.css";
import logo from "../../assets/greenfield-logo.png";
import { Link } from "react-router-dom";
import { useAuthenticationContext } from "../../../middleware/context/AuthenticationContext";
import GoBackButton from "../GoBackButton/GoBackButton";
export const CuratorHeader = () => {
  const { userLoggedIn } = useAuthenticationContext();

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
        <GoBackButton />
        {userLoggedIn ?
          <Link to="/curators/logout"><button className="btn-header">logout</button></Link> :
          <Link to="/curators/login"><button className="btn-header">login</button></Link>
        }
        </div>
      </header>
    </>
  );
};
