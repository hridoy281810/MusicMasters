import React from 'react';
import Banner from '../Banner/Banner';
import PopularSection from '../popularSection/PopularSection';
import PopularClassesSection from '../PopularClassesSection/PopularClassesSection';

const Home = () => {
    return (
        <div>
           <Banner />
           <PopularClassesSection></PopularClassesSection>
           <PopularSection></PopularSection>
        </div>
    );
};

export default Home;