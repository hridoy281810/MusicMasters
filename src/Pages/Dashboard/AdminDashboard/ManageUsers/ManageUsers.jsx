
import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
// /users/admin/:id
// /users/instructor/:id
// handleMakeInstructor
const ManageUsers = () => {
  
    const {data: users = [],refetch} = useQuery(['users'],async()=>{
        const res = await fetch(`http://localhost:5000/users`)
        return res.json()
    }) 

    const handleMakeInstructor = user =>{
      fetch(`http://localhost:5000/users/instructor/${user._id}`,{
        method: 'PATCH'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount){
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user?.name} is instructor now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    const handleMakeAdmin = user =>{
      fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount){
          refetch()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user?.name} is Admin now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }



    return (
        <div className="w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th> # </th>
              <th>Image</th>
              <th>Name</th>
              <th>User Email</th>
              <th>User Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,i)=>
              <tr key={user._id}>
              <th> {i + 1} </th>
              <td>
                
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  
               
              </td>
              <td> {user.name} </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
               {user.role === 'instructor' ?  <button disabled className="btn btn-success btn-sm">Make Instructor</button>:
               <button onClick={()=>handleMakeInstructor(user)}  className="btn btn-success btn-sm">Make Instructor</button>
               }
              </td>
             
              <td>
                {user.role === 'admin' ? <button disabled className="btn btn-success btn-sm">Make Admin</button>: <button onClick={()=>handleMakeAdmin(user)} className="btn btn-success btn-sm">Make Admin</button>}
              </td>
            </tr>
              )}
            
          </tbody>
      
          
        </table>
      </div>
    );
};

export default ManageUsers;

