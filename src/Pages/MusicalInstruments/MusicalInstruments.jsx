import React from 'react';
import Heading from '../../components/Heading';
import { GiAccordion, GiGrandPiano, GiMusicalScore, GiSaxophone, GiViolin} from "react-icons/gi";
import {  MdOutlineSettingsVoice } from "react-icons/md";
import { FaDrumSteelpan, FaGuitar } from "react-icons/fa";
const MusicalInstruments = () => {
    return (
        <div className='mb-8'>
          <Heading heading={"Musical Instruments"}  />
          <div className='grid grid-cols-1 md:grid-cols-4  gap-4'>

           <div className='flex flex-col w-[300px] justify-center items-center '>
             <GiSaxophone  size={96} className='text-success mb-4'  />
             <h3 className='text-3xl  font-bold font-serif text-slate-600'>Saxophone</h3>
             <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti, cumque. Dicta dolorum porro, quod accusantium consequatur  .</p>
           </div>
           <div className='flex flex-col justify-center items-center '>
             <GiAccordion  size={96} className='text-success mb-4'  />
             <h3 className='text-3xl  font-bold font-serif text-slate-600'>Accordion</h3>
             <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti, cumque. Dicta dolorum porro, quod accusantium consequatur  .</p>
           </div>
           <div className='flex flex-col justify-center items-center '>
             <GiMusicalScore  size={96} className='text-success mb-4'  />
             <h3 className='text-3xl  font-bold font-serif text-slate-600'>Cello</h3>
             <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti, cumque. Dicta dolorum porro, quod accusantium consequatur  .</p>
           </div>
           <div className='flex flex-col justify-center items-center '>
             <GiViolin  size={96} className='text-success mb-4'  />
             <h3 className='text-3xl  font-bold font-serif text-slate-600'>Violin</h3>
             <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti, cumque. Dicta dolorum porro, quod accusantium consequatur  .</p>
           </div>
           <div className='flex flex-col justify-center items-center '>
             <GiGrandPiano  size={96} className='text-success mb-4'  />
             <h3 className='text-3xl  font-bold font-serif text-slate-600'>Piano</h3>
             <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti, cumque. Dicta dolorum porro, quod accusantium consequatur  .</p>
           </div>
           <div className='flex flex-col justify-center items-center '>
             <FaGuitar size={96} className='text-success mb-4'  />
             <h3 className='text-3xl  font-bold font-serif text-slate-600'>Guitar</h3>
             <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti, cumque. Dicta dolorum porro, quod accusantium consequatur  .</p>
           </div>
           <div className='flex flex-col justify-center items-center '>
             <MdOutlineSettingsVoice size={96} className='text-success mb-4'  />
             <h3 className='text-3xl  font-bold font-serif text-slate-600'>Voice</h3>
             <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti, cumque. Dicta dolorum porro, quod accusantium consequatur  .</p>
           </div>
           <div className='flex flex-col justify-center items-center '>
             <FaDrumSteelpan size={96} className='text-success mb-4'  />
             <h3 className='text-3xl  font-bold font-serif text-slate-600'>Drums</h3>
             <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corrupti, cumque. Dicta dolorum porro, quod accusantium consequatur  .</p>
           </div>
   
          </div>
        </div>
    );
};

export default MusicalInstruments;