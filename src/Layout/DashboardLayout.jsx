import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useMySelected from '../api2/useMySelected';
import useAdmin from '../api2/useAdmin';
import useInstructor from '../api2/useInstructor';
import logo from '../assets/logo/logopng.png'
import useAuth from '../api2/useAuth';
import { FaBook, FaCcStripe, FaHome, FaUsers} from "react-icons/fa";
import { MdLibraryBooks, MdManageAccounts, MdPayment } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { HiHomeModern, HiUsers } from "react-icons/hi2";
import { AiFillFileAdd } from "react-icons/ai";

const DashboardLayout = () => {
    const [mySelected,] = useMySelected()
    const {user} = useAuth()
// TODO: condition er kaj korte hobe 
    const [isAdmin] = useAdmin();
    
    const [isInstructor] = useInstructor();

    // const isAdmin = true;
    
    // const isInstructor = true;
    
    return (
        <div className="drawer lg:drawer-open  container">
        
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <Outlet></Outlet>
        </div> 
        <div className="drawer-side md:fixed">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          
          <ul className="menu p-4 w-80 h-full bg-cyan-600 text-[16px]  textarea-warning text-slate-200 font-serif font-medium ">
          <div className='flex flex-col justify-center items-center'>
          <img className='w-32' src={logo} alt="" />
          <p className='text-white mb-2'>MusicMasters</p>
          <p className='bg-slate-300 px-8 text-slate-600 py-2 shadow-xl shadow-cyan-400 mb-2'>{user?.displayName}</p>
          </div>
            <div className='divider'></div>
            {/* Sidebar content here */}
            {isAdmin ? (
  <>
<li><NavLink to='/dashboard/adminHome'><FaHome /> Admin Home</NavLink></li>
<li><NavLink to='/dashboard/manageClasses'><MdManageAccounts /> Manage Classes</NavLink></li>
<li><NavLink to='/dashboard/allUsers'><FaUsers />  Manage Users</NavLink></li>
</>
) : (
  <>
    {isInstructor  ? (
      <>
      <li><NavLink to='/dashboard/instructorHome'><FaHome /> Instructor Home</NavLink></li>
  <li><NavLink to='/dashboard/addClass'><AiFillFileAdd /> Add A Class</NavLink></li>
  <li><NavLink to='/dashboard/myClasses' ><FaBook /> My Classes</NavLink></li>
  </>
    ) : (
        <>
        <li><NavLink to='/dashboard/studentHome'><FaHome /> Student Home</NavLink></li>
    <li><NavLink to='/dashboard/mySelected' ><BiSelectMultiple />My Selected Classes <small className="badge badge-secondary">{mySelected?.length || 0}</small></NavLink></li>
    <li><NavLink to='/dashboard/myEnrolled'><FaCcStripe /> My Enrolled Classes</NavLink></li>
    <li><NavLink to='/dashboard/paymentHistory'><MdPayment /> Payment History</NavLink></li>
    </>
    )}
  </>
)}
         <div className='divider'></div>
         <li><Link to='/'><HiHomeModern /> Home</Link></li>
    <li><Link to='/instructors'><HiUsers /> Instructor</Link></li>
    <li><Link to='/classes'><MdLibraryBooks /> Classes</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default DashboardLayout;