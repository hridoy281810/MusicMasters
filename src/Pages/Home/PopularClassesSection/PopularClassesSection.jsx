import React, { useEffect, useState } from 'react';
import { getPopularClasses } from '../../../api/classes';
import Loader from '../../../components/Loader';
import Heading from '../../../components/Heading';
import PopularClassesSectionCard from './PopularClassesSectionCard';

const PopularClassesSection = () => {
    const [classes,setClasses] = useState([])
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        setLoading(true)
        getPopularClasses()
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
             <Heading heading={"popular classes "} />
            <div className='grid grid-cols-1 md:gap-8 md:grid-cols-2 md:me-28 md:ms-[-40px]'>
                {
                    classes.map(cls => <PopularClassesSectionCard key={cls._id} cls={cls} />)
                }
            </div>
        </>
    );
};

export default PopularClassesSection;