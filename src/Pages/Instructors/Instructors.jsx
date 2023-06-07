import React, { useEffect, useState } from 'react';
import { getAllClasses } from '../../api/classes';
import Loader from '../../components/Loader';
import Heading from '../../components/Heading';
import InstructorsCard from './InstructorsCard';

const Instructors = () => {
    const [instructors,setInstructors] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getAllClasses()
        .then(data => {
            setInstructors(data)
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
        <div>
             <Heading heading={"All instructor In our school"} />
            <div  className='grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 lg:gap-14 xl:gap-20 mb-10  border border-dashed border-success rounded-lg p-10'>
                {
                    instructors.map(instructor => <InstructorsCard key={instructor._id} instructor={instructor} />)
                }
            </div>
        </div>
    );
};

export default Instructors;