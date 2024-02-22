import "./Header.css";
import logo from "../../assets/greenfield-logo.png";
import { Link } from "react-router-dom";
import { NewBookButton } from "../NewBookButton/NewBookButton";
import { useAuthenticationContext } from "../../../middleware/context/AuthenticationContext";

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
        <NewBookButton />
        {userLoggedIn ?
          <Link to="/curators/logout"><button>Logout</button></Link> :
          <Link to="/curators/login"><button>Login</button></Link>
        }
      </header>
    </>
  );
};
