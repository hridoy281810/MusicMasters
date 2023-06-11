import React from 'react';
import useMyClasses from '../../../api2/useMyClasses';
import ConditionalMessage from '../../../components/Dashboard/ConditionalMessage';
import MyClassesCard from './MyClassesCard';
import SectionTitle from '../../../components/Dashboard/SectionTitle';
const MyClasses = () => {
    const [myClasses] = useMyClasses()
    console.log(myClasses)
    
    return (
        <>
        <SectionTitle  heading={"All classes added by instructor"}/>
     {myClasses && myClasses.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 gap-2  lg:gap-14 xl:gap-20 mb-8'>
   

    {myClasses.map((myClass)=> <MyClassesCard key={myClass._key} myClass={myClass} /> )}
  

</div> : <ConditionalMessage title={"No Class Available"} subtitle={"Please Go To Add a Class First"} center={true} text={"Add A class"} location={'/dashboard/addClass'} />}
    </>
    );
};

export default MyClasses;