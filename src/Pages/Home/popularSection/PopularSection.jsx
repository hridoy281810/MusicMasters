import React, { useEffect, useState } from 'react';
import { getInstructorsClasses } from '../../../api/classes';
import Loader from '../../../components/Loader';
import PopularCard from './PopularCard';
import Heading from '../../../components/Heading';

const PopularSection = () => {
    const [classes,setClasses] = useState([])
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        setLoading(true)
        getInstructorsClasses()
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
            <Heading heading={"popular instructors "} />
            <div className='grid md:grid-cols-3 gap-2 md:gap-4 lg:gap-14 xl:gap-20'>
                {
                    classes.map(cls => <PopularCard key={cls._id} cls={cls} />)
                }
            </div>
        </>
    );
};

export default PopularSection;