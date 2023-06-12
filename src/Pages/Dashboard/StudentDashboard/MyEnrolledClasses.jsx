import React from 'react';
import useMyEnrolledClasses from '../../../api2/useMyEnrolledClasses';
import SectionTitle from '../../../components/Dashboard/SectionTitle';
import ConditionalMessage from '../../../components/Dashboard/ConditionalMessage';
import useTitle from '../../../api2/useTitile';

const MyEnrolledClasses = () => {
  useTitle("Music Masters | My Enrolled Classes")
  const [myEnrolledClasses] = useMyEnrolledClasses()
  // console.log(myEnrolledClasses)
  return (
    <>
      <SectionTitle heading={"All enrolled classes of students"} />
      {myEnrolledClasses && myEnrolledClasses.length > 0 ? <div className="w-full p-10">
        <div className='overflow-x-auto'>
          <table className="table sm:min-w-full sm:table-auto rounded-lg border">
            {/* head */}
            <thead className='bg-cyan-100 border rounded-lg shadow sm:p-0'>
              <tr>
                <th className="py-2"> # </th>
                <th className="py-2">Image</th>
                <th className="py-2">Class Title</th>
                <th className="py-2">Instructor Name</th>
                <th className="py-2">Instructor Email</th>
                <th className="py-2">Price</th>
                <th className="py-2">Enrolled Status</th>
                <th className="py-2">Enrolled Date</th>
              </tr>
            </thead>
            <tbody>
              {myEnrolledClasses.map((myClass, i) =>
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
                  <td>{myClass.instructor_email}</td>
                  <td>$ {myClass.price}</td>
                  <td>  {myClass.enrolledStatus}</td>
                  <td>  {myClass.date}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div> : <ConditionalMessage title={"No Enrolled Classes Available"} subtitle={"Please Enrolled Other Classes"} center={true} text={"Go Now"} location={'/dashboard/mySelected'} />}
    </>
  );
};

export default MyEnrolledClasses;