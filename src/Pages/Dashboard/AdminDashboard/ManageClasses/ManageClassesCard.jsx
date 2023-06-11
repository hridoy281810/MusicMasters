import React from 'react';
import Swal from 'sweetalert2';
import Feedback from './Feedback';

const 
ManageClassesCard = ({cls,refetch}) => {
    const  {class_image_url,available_seats,instructor_name,instructor_email,category,number_of_students,price,class_name,status,_id} = cls
   
    
    const handleClassApproveAdmin = (_id) => {
        fetch(`http://localhost:5000/classes/approve/${_id}`, {
          method: 'PATCH',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${class_name} is approved now!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Failed to approve class',
              showConfirmButton: false,
              timer: 1500,
            });
          });
      };
    const handleClassDenyAdmin = (_id) => {
        fetch(`http://localhost:5000/classes/deny/${_id}`, {
          method: 'PATCH',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              refetch()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${class_name} is Deny now!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Failed to deny class',
              showConfirmButton: false,
              timer: 1500,
            });
          });
      };
   
    return (
        <div className=" flex-col lg:flex-row">
          <img src={class_image_url} className="w-full h-52 rounded-lg shadow" />
          <div>
            <h1 className="text-4xl font-bold">{class_name}</h1>
            <p className="pt-2 text-2xl font-semibold text-slate-600">Instructor Name: {instructor_name}</p>
            <p className="pt-2 text-xl font-semibold text-slate-600">Instructor Email: {instructor_email}</p>
            <p className="pt-2 text-xl font-semibold text-slate-600">Available Seats: {available_seats}</p>
            <p className="pt-2 text-xl font-semibold text-slate-600">Price: ${price}</p>
            <p className="pt-2 text-xl font-semibold text-slate-600">Status: {status}</p>
            <div className='flex gap-4 my-4'>
           {status === 'approve'? <button disabled className="btn btn-success btn-sm">Approved</button>: <button onClick={()=> handleClassApproveAdmin(_id)} className="btn btn-success btn-sm">Approve</button>}

            {status === 'deny'? <button disabled className="btn bg-red-600  btn-sm">Denied</button> : <button onClick={()=> handleClassDenyAdmin(_id)} className="btn bg-red-600  btn-sm">Deny</button>}
            </div>
           <Feedback _id={_id} status={status}/>
          </div>
        </div>
    );
};

export default ManageClassesCard;