import {jwtDecode} from 'jwt-decode';

export const saveToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const getUserRoles = () => {
    const token = getToken();
    if (token) {
        const decodedToken = [];
        return decodedToken.roles || [];
    }
    return [];
};

export const isLoggedIn = () => {
    return !!getToken();
};

export const logout = () => {
    localStorage.removeItem('token');
};