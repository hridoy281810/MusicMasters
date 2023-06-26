import React from 'react';
import './SectionTitle.css'

const SectionTitle = ({ heading }) => {
  return (
    <div className='title-bg'>
      <div className='bg-slate-600 bg-opacity-60 text-center h-[200px] flex flex-col items-center justify-center   md:p-24 '>
        <h2 className='text-xl md:text-3xl text-white font-bold uppercase'> {heading}</h2>
        <p className='text-slate-100 px-12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Tenetur ea commodi debitis, ad in deleniti facere culpa dolores. </p>
      </div>
    </div>
  );
};

export default SectionTitle;