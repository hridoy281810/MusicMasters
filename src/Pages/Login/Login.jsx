import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../api2/useAuth';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import GoogleLogin from '../Shear/GoogleLogin/GoogleLogin';

const Login = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const {login} = useAuth()
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const onSubmit = data => {
  
        login(data.email, data.password)
        .then(result=>{
            const loggedUser =  result.user;
            console.log(loggedUser)
            Swal.fire('User login successfully')
            navigate(from, { replace: true });
          })
          .catch(error=>{
            console.log(error)
          })
    
    }

    return (
        <>
        <div className="hero-content  ">
          <div className="shadow-2xl bg-base-100 flex-shrink-0 w-full max-w-sm">
            <div className=" ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                {errors.email && <span className='text-red-600  '>This field is required</span>}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true, minLength: 6, maxLength: 20,
                  pattern: /(?=.*[@$!%*#?&])(?=.*[A-Z]){6,}/
                })} name='password' placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password  must have one uppercase , one number and one special character</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input type='submit' className="btn btn-primary" value={'Login'} />
              </div>
              <div className="divider">Social Login</div>
              <GoogleLogin></GoogleLogin>
              <p><small>New Hear? <Link to={'/registration'}>please Registration</Link></small></p>
            </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;