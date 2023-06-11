import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../api2/useAuth';
import { selectClass } from '../../api/selected';
import useMySelected from '../../api2/useMySelected';
import useInstructor from '../../api2/useInstructor';
import useAdmin from '../../api2/useAdmin';

const ClassesPageCard = ({cls}) => {
  const [isAdmin] = useAdmin();
    
  const [isInstructor] = useInstructor();

    const {user,role} = useAuth()
    const [, refetch] = useMySelected()

    const  {_id,class_image_url,available_seats,instructor_name,instructor_email,category,number_of_students,price,class_name,instructor_image_url} = cls

    const [select,setSelect] = useState({
        student: {name: user?.displayName,email: user?.email,image: user?.photoURL, role: user?.role},
        classId: _id,
        class_name: class_name,
        number_of_students: number_of_students,
        category:  category ,
        class_image_url: class_image_url ,
        instructor_image_url: instructor_image_url,
        instructor_email: instructor_email,
        available_seats:  available_seats,
        instructor_name:instructor_name,
        price:price,
        role: 'student'

    })
     const handleSelect = ()=>{
       if(!user){
        return   Swal.fire("Please log in to select the Class.!")
     
       }
       if(isAdmin  || isInstructor){
       return Swal.fire("You are not allowed to select the class as an admin or instructor")
       }
       if(available_seats === 0){
        return Swal.fire("This class is already full not available seats")
       }
       selectClass(select)
       .then(data => {
        console.log(data)
         if(data.insertedId){
          refetch();
          Swal.fire("Class selected!")
         }
       })
       .catch(error=>{
        console.log(error)
       })
     }

     const cardStyle = {
        backgroundColor: available_seats === 0 ? 'pink' : 'white',
      };

    return (
        <div className="card w-96 bg-base-100 shadow-xl " style={cardStyle}>
  <figure><img  className='w-full h-60 object-cover' src={class_image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {class_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Instructor: {instructor_name}</p>
    <p>Available Seats: {available_seats}</p>
    <p>Price: $ {price}</p>
    <div className="card-actions ">
      {available_seats <= 0 || isAdmin || isInstructor ? 
      <button disabled className="btn btn-block btn-disabled mt-4"> Class is Full </button>:
   <button onClick={handleSelect} className="btn btn-block btn-success text-white text-xl">Select</button>
      }
    </div>
  </div>
</div>
    );
};

export default ClassesPageCard;