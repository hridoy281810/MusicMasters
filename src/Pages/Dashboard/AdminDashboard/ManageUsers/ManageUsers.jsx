
import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../api2/useAxiosSecure';
import SectionTitle from '../../../../components/Dashboard/SectionTitle';
import useTitle from '../../../../api2/useTitile';
import Loader from '../../../../components/Loader';
const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure()
  useTitle("Music Masters | Manage Users")
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get(`/users`)
    return res.data
  })

  const handleMakeInstructor = user => {
    fetch(`${import.meta.env.VITE_URL}/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.modifiedCount) {
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
  const handleMakeAdmin = user => {

    fetch(`${import.meta.env.VITE_URL}/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.modifiedCount) {
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
  if (users.length === 0) {
    return <Loader />;
}
  return (
    <>
      <SectionTitle heading={"Admin Manage All Users"} />
      <div className="w-full p-4 md:p-10">
        <div className='overflow-x-auto'>
          <table className="table  sm:min-w-full sm:table-auto rounded-lg border">
            {/* head */}
            <thead className='bg-cyan-100 border rounded-lg shadow sm:p-0'>
              <tr>
                <th className="py-2"> # </th>
                <th className="py-2">Image</th>
                <th className="py-2">Name</th>
                <th className="py-2">User Email</th>
                <th className="py-2">User Role</th>
                <th className="py-2">Make Instructor</th>
                <th className="py-2">Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) =>
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
                    {user.role === 'instructor' ? <button disabled className="btn btn-success ">Instructor</button> :
                      <button onClick={() => handleMakeInstructor(user)} className="btn btn-success ">Make Instructor</button>
                    }
                  </td>
                  <td>
                    {user.role === 'admin' ? <button disabled className="btn btn-success ">Admin</button> : <button onClick={() => handleMakeAdmin(user)} className="btn btn-success ">Make Admin</button>}
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;

