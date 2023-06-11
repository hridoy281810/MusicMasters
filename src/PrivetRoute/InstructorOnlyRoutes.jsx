import React from 'react';
import useAuth from '../api2/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import useAdmin from '../api2/useAdmin';
import useInstructor from '../api2/useInstructor';

const InstructorOnlyRoutes = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    const [isInstructor,isInstructorLoading] = useInstructor()
    if(loading || isInstructorLoading){
        return <Loader />
    }
    if(user && isInstructor){
        return children
    }
        return <Navigate to='/login' state={{from:location}} replace> </Navigate>
};

export default InstructorOnlyRoutes;