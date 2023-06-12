import React from 'react';
import useAuth from '../api2/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import useAdmin from '../api2/useAdmin';

const AdminOlyRouts = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin()
    if (loading || isAdminLoading) {
        return <Loader />
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace> </Navigate>
};

export default AdminOlyRouts;