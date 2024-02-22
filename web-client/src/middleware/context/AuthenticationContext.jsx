import { createContext, useState, useContext } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({children}) => {

    const [userLoggedIn, setUserLoggedIn] = useState(false);

    const login = (credentials) => {
        setUserLoggedIn(true);
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