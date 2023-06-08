import React from 'react';
import useAuth from '../api2/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const PrivetRoute = ({children}) => {
const {user,loading} = useAuth()
const location = useLocation()
if(loading){
    return <Loader />
}
if(user){
    return children
}
    return <Navigate to='/login' state={{from:location}} replace> </Navigate>
};

export default PrivetRoute;