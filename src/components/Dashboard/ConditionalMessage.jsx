import React from 'react';
import { Link } from 'react-router-dom';

const ConditionalMessage = ({ title, subtitle, center, location, text }) => {
    return (
        <>  <div>
            <div className='flex items-center justify-center mt-20'>
                <div className={center ? 'text-center' : 'text-start'}>
                    <div className='text-2xl font-bold'>{title}</div>
                    <div className='font-light text-neutral-500 mt-2'>{subtitle}</div>
                    <Link to={location} className='btn btn-primary'> {text} </Link>

                </div>
            </div>
        </div>
        </>
    );
};

export default ConditionalMessage;