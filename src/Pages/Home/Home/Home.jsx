import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import PopularSection from '../popularSection/PopularSection';
import PopularClassesSection from '../PopularClassesSection/PopularClassesSection';
import MusicalInstruments from '../../MusicalInstruments/MusicalInstruments';

const Home = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const themeClass = darkTheme ? ' bg-black' : 'bg-white';
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
      };
    return (
        <div className={`${themeClass}`}>
           <Banner />
           <PopularClassesSection></PopularClassesSection>
           <PopularSection></PopularSection>
           <MusicalInstruments></MusicalInstruments>

        <div className='flex justify-center py-8'>
        {darkTheme ? (
                  <div><input onClick={toggleTheme} type="checkbox" className="toggle" checked /></div>
              ) : (
               
                <input onClick={toggleTheme} type="checkbox" className="toggle" checked />
              )}
        </div>
        </div>
    );
};

export default Home;