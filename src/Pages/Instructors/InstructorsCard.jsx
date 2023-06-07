import React from 'react';

const InstructorsCard = ({instructor}) => {
    const  {class_image_url,available_seats,instructor_name,instructor_email,category,number_of_students,price,class_name,instructor_image_url} = instructor
    return (
        <div className='text-center flex flex-col items-center justify-center'>
            <div className='h-72 w-72 aspect-square  relative  rounded-full overflow-hidden mb-8'> <img className='h-72 w-72 rounded-full border-[3px] border-success   hover:scale-125 transform transition  duration-300' src={instructor_image_url} alt="" /></div>
             <h3 className='text-3xl font-bold text-success mb-2'>{instructor_name}</h3>
             <p className='text-xl font-semibold text-slate-600'>{instructor_email}</p>
        </div>
    );
};

export default InstructorsCard;