import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useMySelected from '../api2/useMySelected';

const DashboardLayout = () => {
    const [mySelected,] = useMySelected()

    const isAdmin = true;
    const isInstructor = true;
    
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side md:fixed">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-success text-xl text-slate-700 font-semibold bold">
            <h1 className='text-2xl font-bold mb-4 '>Student Dashboard</h1>
            {/* Sidebar content here */}
            {isAdmin ? (
  <>
  <li><NavLink>Admin Home</NavLink></li>
<li><NavLink to='/dashboard/mySelected' >My Selected Classes <small className="badge badge-secondary">{mySelected?.length || 0}</small></NavLink></li>
<li><NavLink>My Enrolled Classes</NavLink></li>
<li><NavLink to='/dashboard/allUsers'>All Users</NavLink></li>
</>
) : (
  <>
    {isInstructor ? (
      <>
      <li><NavLink>Instructor Home</NavLink></li>
  <li><NavLink to='/dashboard/mySelected' >My Selected Classes <small className="badge badge-secondary">{mySelected?.length || 0}</small></NavLink></li>
  <li><NavLink>My Enrolled Classes</NavLink></li>
  </>
    ) : (
        <>
        <li><NavLink>Student Home</NavLink></li>
    <li><NavLink to='/dashboard/mySelected' >My Selected Classes <small className="badge badge-secondary">{mySelected?.length || 0}</small></NavLink></li>
    <li><NavLink>My Enrolled Classes</NavLink></li>
    </>
    )}
  </>
)}



















          </ul>
        
        </div>
      </div>
    );
};

export default DashboardLayout;