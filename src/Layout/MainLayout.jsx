import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Pages/Shear/NavBar/NavBar';
import Footer from '../Pages/Shear/Footer/Footer';

const MainLayout = () => {
    const location = useLocation()
    const onNavBarFooter = location.pathname.includes('login') || location.pathname.includes('registration')
    return (
        < >
           {onNavBarFooter || <NavBar></NavBar>}
           <div className='container min-h-[calc(100vh-220px)]'> <Outlet></Outlet></div>
          {onNavBarFooter || <Footer></Footer>}
        </>
    );
};

export default MainLayout;