import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../api2/useAuth';
import logo from '../../../assets/logo/logopng.png'
const NavBar = () => {
    const {user,logOut} = useAuth()
    const handleLogOut = () => {
        logOut()
          .then()
          .catch(error => {
            console.log(error.message)
          })
      }
    const Options = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/instructors'>Instructor</Link></li>
    <li><Link to='/classes'>Classes</Link></li>
     {user &&   <li><Link to='/dashboard/mySelected'>Dashboard </Link></li>}
   </>

    return (
        <div className='bg-base-100 shadow' >
     <div className='container'>
     <div className="navbar">
  <div className="navbar-start">
  <div className="dropdown z-10">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold ">
      <img src={logo} className='w-28' alt="" />
       {Options}
      </ul>
    </div>
    <div className='md:inline-flex  justify-center items-center '>
    <img  src={logo} className='w-16 md:w-28 lg:28 banner-p-hidden' alt="" />
    <Link to='/'><p className="text-[12px] md:normal-case md:text-xl font-semibold md:font-bold text-success ">MusicMasters</p></Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  font-semibold text-xl">
    {Options}
    </ul>
  </div>
  <div className="navbar-end res-end">
            {
              user && <><div title={user?.displayName} > <img
                className='w-12 h-12 rounded-full cursor-pointer ' src={user?.photoURL} alt="User Profile" />  </div>  </>
            }
            {
              user ? <button onClick={handleLogOut} className="btn btn-outline btn-success ms-2">Logout</button>
                : <Link  to='/login'><button className="btn-outline btn btn-success">Login</button></Link>
            }
          </div>
</div>
     </div>
        </div>
    );
};

export default NavBar;