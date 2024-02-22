import { useAuthenticationContext } from "../context/AuthenticationContext"
import { Navigate } from 'react-router-dom';

export const Logout = () => {

    const { logout } = useAuthenticationContext();

    logout();

    return <Navigate to="/" />;
}