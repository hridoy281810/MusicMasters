import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useInstructor = () => {
    const {user,loading}= useAuth()
    const [axiosSecure]= useAxiosSecure()
    const {data: isInstructor, isLoading: isInstructorLoading} =useQuery({
       queryKey:['isInstructor',user?.email],
       enabled: !loading,
       queryFn:async()=>{
           const res =await axiosSecure.get(`/users/instructor/${user?.email}`)
        //    console.log("kasjdfjsodfsd",res.data)
           return res.data.instructor;
       }
    })
    return [isInstructor,isInstructorLoading]
};

export default useInstructor;