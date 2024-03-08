import { createContext, useState, useContext } from "react";
import { AuthService } from "../../services/AuthService";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userType, setUserType] = useState(null);
    const [session, setSession] = useState({});

    const login = async (credentials) => {
        const authService = new AuthService();

        const loginResponse = await authService.login(credentials.email, credentials.password);
        if (!(loginResponse.error === "true")) {
            setUserLoggedIn(true);
            setUserType(loginResponse.loginType);
            setSession({
                ...session,
                userName: loginResponse.session.userName || "curator",
                email: credentials.email,
                password: credentials.password
            });
            return true;
        }
        return false;
    }

    const getSessionUserName = () => {
        return session.userName;
    }

    const getAuthenticationHeader = () => {
        if (!session || !session.email || !session.password) {
            return "";
        } else {
            return `Basic ${btoa(`${session.email}:${session.password}`)}`;
        }
    }

    const logout = () => {
        setUserLoggedIn(false);
    }

    const value = {
        userLoggedIn,
        getSessionUserName,
        getAuthenticationHeader,
        login,
        logout
    }

    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
}

export const useAuthenticationContext = () => useContext(AuthenticationContext);