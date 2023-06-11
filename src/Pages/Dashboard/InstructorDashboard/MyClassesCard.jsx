import React from 'react';
import { Link } from 'react-router-dom';

const MyClassesCard = ({myClass}) => {
    const {adminFeedback,class_image_url,class_name,instructor_name,instructor_email,available_seats,price,status,number_of_students} = myClass
    return (
        
        <div className=" flex-col lg:flex-row">
          <img src={class_image_url} className="w-full h-52 rounded-lg shadow" />
          <div>
            <h1 className="text-4xl font-bold">{class_name}</h1>
            <p className="pt-2 text-2xl font-semibold text-slate-600">Instructor Name: {instructor_name}</p>
            <p className="pt-2 text-xl font-semibold text-slate-600">Instructor Email: {instructor_email}</p>
            <p className="pt-2 text-xl font-semibold text-slate-600">Available Seats: {available_seats}</p>
            <p className="pt-2 text-xl font-semibold text-slate-600">Total Enrolled Student: {number_of_students}</p>
            <p className="pt-2 text-xl font-semibold text-slate-600">Price: ${price}</p>
            <p className="pt-2 text-xl font-semibold text-slate-600">Status: {status}</p>
            <p className="pt-2 text-xl font-semibold text-slate-600">Admin Feedback: {adminFeedback}</p>
            <div className=' my-4'>
           
             <button className="btn btn-success btn-sm">Update</button>
     
        </div>
           
          </div>
        </div>
    );
};

export default MyClassesCard;