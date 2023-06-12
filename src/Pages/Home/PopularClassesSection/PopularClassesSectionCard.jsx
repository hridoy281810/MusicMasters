import React from 'react';
import { animated, useSpring } from '@react-spring/web'


const PopularClassesSectionCard = ({ cls }) => {
    const { class_image_url, available_seats, instructor_name, instructor_email, category, number_of_students, price, class_name } = cls
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
    })
    return (
        <>
            <animated.div style={{
                ...springs,
            }} className='md:flex border-e-2 md:mb-2 mb-5 lg:mb-2'>
                <img className='w-64 h-44 shadow rounded-lg  mb-2' src={class_image_url} alt="" />
                <div className='flex flex-col md:ms-8'>
                    <div className='md:flex items-center gap-6 '>
                        <p>Students:{number_of_students}</p> <p>Price: ${price}</p> <p>Available Seats: {available_seats}</p>
                    </div>
                    <div>
                        <h3 className='text-xl md:text-3xl font-bold text-success pb-2'>{class_name}</h3>
                        <h3 className='text-xl text-slate-600 font-semibold'>Instructor: {instructor_name}</h3>
                        <h3 className='text-slate-600'>Category: {category}</h3>
                    </div>
                </div>
            </animated.div>
        </>
    );
};

export default PopularClassesSectionCard;