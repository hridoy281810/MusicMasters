import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { getSelectedClass } from '../../../api/selected';
import Loader from '../../../components/Loader';

const MySelectedClasses = () => {
    const {user} = useAuth()
    const [myClasses,setMyClasses] = useState([])
    const [loading,setLoading] = useState(false)
    console.log(myClasses)
    // const fetchSelected = ()=>{
    //     getSelectedClass(user?.email)
    //     .then(data=>{
    //         setMyClasses(data)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
    // }
    // useEffect(()=>{
    //     fetchSelected()
    // },[user])
  useEffect(()=>{
    setLoading(true)
    getSelectedClass(user?.email)
    .then(data=>{
        setMyClasses(data)
        setLoading(false)
    })
    .catch(error=>{
        console.log(error)
    })
  },[user])
 if(loading){
    return <Loader />
 }

    return (
        <>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th> # </th>
        <th>Image</th>
        <th>Class Title</th>
        <th>Instructor Name</th>
        <th>Price</th>
        <th>Delete</th>
        <th>Pay</th>

      </tr>
    </thead>
    <tbody>
      {myClasses.map((myClass,i)=>
        <tr key={myClass._id}>
        <th> {i + 1} </th>
        <td>
          
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={myClass.class_image_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
         
        </td>
        <td> {myClass.class_name} </td>
        <td>{myClass.instructor_name}</td>
        <td> $ {myClass.price}</td>
        <td>
          <button className="btn btn-secondary btn-sm">Delete</button>
        </td>
        <td>
          <button className="btn btn-success btn-sm">Pay</button>
        </td>
      </tr>
        )}
      
    </tbody>

    
  </table>
</div>
        </>
    );
};

export default MySelectedClasses;