import React from 'react';

const PopularClassesSectionCard = ({cls}) => {
    const  {class_image_url,available_seats,instructor_name,instructor_email,category,number_of_students,price,class_name} = cls
 
    return (
        <>
        <div className='flex border-e-2 '>
            <img className='w-64 h-44 shadow rounded-lg' src={class_image_url} alt="" />
            <div className='flex flex-col ms-8'>
            <div className='flex items-center gap-6'>
                <p>Students:{number_of_students}</p> <p>Price: ${price}</p> <p>Available Seats: {available_seats}</p>
            </div>
            <div>
               <h3 className='text-3xl font-bold text-success'>{class_name}</h3> 
               <h3 className='text-xl text-slate-600 font-semibold'>Instructor: {instructor_name}</h3> 
               <h3 className='text-slate-600'>Category: {category}</h3> 
            </div>
            </div>
            
        </div>
        
        
        </>
    );
};

export default PopularClassesSectionCard;