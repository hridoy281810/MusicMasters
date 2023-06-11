import React from 'react';

const Heading = ({heading}) => {
    
    return (
        <div className='text-center mt-24 mb-8'>
        <h2 className='text-3xl text-success font-bold uppercase'>{heading}</h2>
        <progress className="progress w-96 bg-success"></progress>
    </div>
    );
};

export default Heading;