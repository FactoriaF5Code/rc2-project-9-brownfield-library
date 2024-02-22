import "./Header.css";
import logo from "../../assets/greenfield-logo.png";
import { Link } from "react-router-dom";
import { useAuthenticationContext } from "../../../middleware/context/AuthenticationContext";

export const MemberHeader = () => {
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
        {userLoggedIn ?
          <Link to="/members/logout"><button className="btn-access">logout</button></Link> :
          <Link to="/members/login"><button className="btn-access">login</button></Link>
        }
      </header>
    </>
  );
};
