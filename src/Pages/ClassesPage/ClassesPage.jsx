import React, { useEffect, useState } from 'react';
import useAuth from '../../api2/useAuth';
import { getAllClasses } from '../../api/classes';
import Loader from '../../components/Loader';
import ClassesPageCard from './ClassesPageCard';
import Heading from '../../components/Heading';
import useTitle from '../../api2/useTitile';

const ClassesPage = () => {
    const {user} = useAuth()
    const [classes,setClasses] = useState([])
    const [loading,setLoading] = useState(false)
 useTitle("Music Masters | All Class")
    useEffect(()=>{
        setLoading(true)
        getAllClasses()
        .then(data => {
            setClasses(data)
            setLoading(false)
        })
        .catch(error=>{
            const errorMessage = error.errorMessage;
            console.log(errorMessage)
        })
     },[])
    if(loading){
        return <Loader />
    }
    return (
        <>
              <Heading heading={"All Classes in our school"} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2  lg:gap-14 xl:gap-20 mb-8'>
                {
                    classes.map(cls => <ClassesPageCard key={cls._id} user={user} cls={cls} />)
                }
            </div>
        </>
    );
};

export default ClassesPage;