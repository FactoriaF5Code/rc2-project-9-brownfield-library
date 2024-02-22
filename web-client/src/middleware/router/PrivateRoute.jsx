import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticationContext } from "../context/AuthenticationContext";
import PropTypes from 'prop-types';

const PrivateRoute = ({ loginPath }) => {

    const { userLoggedIn } = useAuthenticationContext();

    return userLoggedIn ? <Outlet /> : <Navigate to={loginPath} />
}

PrivateRoute.propTypes = {
    loginPath: PropTypes.string.isRequired
}

export default PrivateRoute;