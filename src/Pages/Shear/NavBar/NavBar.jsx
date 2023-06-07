import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
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
    <li><Link to='/selected'>Dashboard </Link></li>
   </>

    return (
        <div className='bg-base-100 shadow' >
     <div className='container'>
     <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {Options}
          
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">RhythmCraft Music School</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {Options}
    </ul>
  </div>
  <div className="navbar-end res-end">
            {
              user && <><div title={user?.displayName} > <img
                className='me-8' style={{ height: '50px', width: '50px', borderRadius: '50%', cursor: 'pointer' }} src={user?.photoURL} alt="User Profile" />  </div>  </>
            }
            {
              user ? <button onClick={handleLogOut} className="btn btn-outline btn-success ">Logout</button>
                : <Link to='/login'><button className="btn-outline btn btn-success ">Login</button></Link>
            }
          </div>
</div>
     </div>
        </div>
    );
};

export default NavBar;