import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../api2/useAuth';
import Swal from 'sweetalert2';
import GoogleLogin from '../Shear/GoogleLogin/GoogleLogin';
import useTitle from '../../api2/useTitile';


const Registration = () => {
  useTitle("Music Masters | Registration")
  const [error, setError] = useState('')
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useAuth()
  const navigate = useNavigate()
  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        // console.log(loggedUser)
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, role: 'student', photo: data.photoURL }
            // console.log(saveUser)
            fetch(`${import.meta.env.VITE_URL}/users`, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset()
                  Swal.fire('User Registration successfully')
                  navigate('/')
                }
              })

          })
          .catch(error => {
            console.log(error)
            setError(error.message)
          })
      }).catch(error => {
        console.log(error)
        setError(error.message)
      })
  }

  return (
    <>
      <div className=" md:p-12 ">
        <div className="shadow-2xl bg-base-100 flex-shrink-0 w-full  rounded-2xl  border-2 border-dashed border-success">
          <h1 className='text-center mt-4 text-3xl font-bold '>Registration Now!</h1>
          <div className=" ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className='grid md:grid-cols-2 gap-4 '>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                  {errors.name && <span className='text-red-600  '>This field is required</span>}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                  {errors.email && <span className='text-red-600  '>This field is required</span>}
                </div>
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" {...register("password", {
                    required: true, minLength: 6, maxLength: 20,
                    pattern: /(?=.*[@$!%*#?&])(?=.*[A-Z])/
                  })} name='password' placeholder="password" className="input input-bordered" />
                  {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                  {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                  {errors.password?.type === 'pattern' && <p className='text-red-600'>Password  must have one uppercase , one number and one special character</p>}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === watch("password")
                    })}
                    name="confirmPassword"
                    placeholder="confirm password"
                    className="input input-bordered"
                  />
                  {errors.confirmPassword?.type === 'required' && (
                    <p className='text-red-600'>Confirm password is required</p>
                  )}
                  {errors.confirmPassword?.type === 'validate' && (
                    <p className='text-red-600'>Passwords do not match</p>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="url" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                  {errors.photoURL && <span className='text-red-600  '>photo URL is required</span>}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select  {...register("gender", { required: true })} name="gender" className="select select-bordered">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input type="number" {...register("phoneNumber", { required: true })} name="phoneNumber" placeholder="Phone Number" className="input input-bordered" />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea {...register("address")} name="address" placeholder="Address" className="textarea textarea-bordered"></textarea>
                </div>
                <p className='text-red-700 label-text-alt mt-2'>{error}</p>
              </div>
              <div className="form-control mt-6">
                <input type='submit' className="btn btn-primary" value={'Registration'} />
              </div>
              <div className="divider">Social Registration</div>
              <GoogleLogin></GoogleLogin>
              <p><small>Already have an account? <Link to={'/login'}>please login</Link></small></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;