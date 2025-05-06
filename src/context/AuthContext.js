import React, { createContext, useState, useEffect } from 'react';
import { getUserRoles, isLoggedIn, logout } from '../utils/Auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [roles, setRoles] = useState([]);
    const [loggedIn, setLoggedIn] = useState(isLoggedIn());

    useEffect(() => {
        if (loggedIn) {
            setRoles(getUserRoles());
            setRoles(['admin']);
            // setLoggedIn(true);
        } else {
            // setRoles([]);
            setRoles(['admin']);
            // setLoggedIn(true);
        }
    }, [loggedIn]);

    const handleLogout = () => {
        logout();
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ roles, loggedIn, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};