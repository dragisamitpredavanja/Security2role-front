import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children, roles }) => {
    const { loggedIn, roles: userRoles } = useContext(AuthContext);

    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    if (roles && !roles.some(role => userRoles.includes(role))) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default ProtectedRoute;