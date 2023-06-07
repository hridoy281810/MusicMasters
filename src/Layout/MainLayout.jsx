import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shear/NavBar/NavBar';
import Footer from '../Pages/Shear/Footer/Footer';

const MainLayout = () => {
    return (
        < >
            <NavBar></NavBar>
           <div className='container min-h-[calc(100vh-220px)]'> <Outlet></Outlet></div>
           <Footer></Footer>
        </>
    );
};

export default MainLayout;