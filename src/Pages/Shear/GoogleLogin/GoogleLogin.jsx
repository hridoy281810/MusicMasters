import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {

    const {loginWithGoogle} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.path || '/'

    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then(result=>{
            const loggedUser = result.user;
            const saveUser = { name: loggedUser?.displayName, email: loggedUser?.email,role: 'student' }
            fetch(`http://localhost:5000/users`, {
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
              })
                .then(res => res.json())
                .then(()=> {  
                    Swal.fire('User login successfully')
                    navigate(from, {replace: true})
                  
                })
             
        })
    }
    return (
        <>
            <button onClick={handleGoogleLogin}  className="btn btn-block btn-outline btn-success"><FcGoogle size={30}></FcGoogle></button>
        </>
    );
};

export default GoogleLogin;