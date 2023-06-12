import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Pages/Shear/NavBar/NavBar';
import Footer from '../Pages/Shear/Footer/Footer';

const MainLayout = () => {
    const location = useLocation()
    const onNavBarFooter = location.pathname.includes('login') || location.pathname.includes('registration' )
    return (
        < >
         <div className='bg-base-100  container mx-auto'>  {onNavBarFooter || <NavBar ></NavBar>}</div>
           <div className='container min-h-[calc(100vh-220px)] mx-auto'> <Outlet></Outlet></div>
         {onNavBarFooter||<Footer></Footer>}
        </>
    );
};

export default MainLayout;