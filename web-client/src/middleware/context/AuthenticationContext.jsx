import { createContext, useState, useContext } from "react";
import { AuthService } from "../../services/AuthService";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({children}) => {

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userType, setUserType] = useState(null);

    const login = async (credentials) => {
        const authService = new AuthService();
        
        const loginResponse = await authService.login(credentials.email, credentials.password);
        if (!(loginResponse.error === "true")) {
            setUserLoggedIn(true);
            setUserType(loginResponse.loginType);
            return true;
        }
        return false;
    }

    const logout = () => {
        setUserLoggedIn(false);
    }

    const value = {
        userLoggedIn,
        login,
        logout
    }

    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
}

export const useAuthenticationContext = () => useContext(AuthenticationContext);