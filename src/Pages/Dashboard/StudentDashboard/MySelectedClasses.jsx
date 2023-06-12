import Swal from "sweetalert2";
import useMySelected from "../../../api2/useMySelected";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/Dashboard/SectionTitle";
import ConditionalMessage from '../../../components/Dashboard/ConditionalMessage';
import useTitle from "../../../api2/useTitile";


const MySelectedClasses = () => {
  useTitle("Music Masters | My Selected Classes")
  const [mySelected, refetch] = useMySelected()
  console.log(mySelected)
  const handleDelete = (myClass) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_URL}/selected/${myClass._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch()
            }
          })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success')
      }
    })
  }

  return (
    <>
      <SectionTitle heading={"All classes selected by students"} />
      {mySelected && mySelected.length > 0 ? <div className="w-full p-10">
        <div className="overflow-x-auto">
          <table className="table sm:min-w-full sm:table-auto rounded-lg border">
            {/* head */}
            <thead className=" bg-cyan-100 border rounded-lg shadow sm:p-0">
              <tr>
                <th className="py-2"> # </th>
                <th className="py-2" >Image</th>
                <th className="py-2">Class Title</th>
                <th className="py-2">Instructor Name</th>
                <th className="py-2">Price</th>
                <th className="py-2">Delete</th>
                <th className="py-2">Pay</th>
              </tr>
            </thead>
            <tbody>
              {mySelected.map((myClass, i) =>
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
                    <button onClick={() => handleDelete(myClass)} className="btn btn-secondary btn-sm">Delete</button>
                  </td>
                  <td>
                    <Link to={`/dashboard/selected/${myClass._id}`}> <button className="btn btn-success btn-sm">Pay</button></Link>
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
      </div> : <ConditionalMessage title={"No Selected Class Available"} subtitle={"Please Go Class Selecte First"} center={true} text={"Select Now"} location={'/classes'} />}
    </>
  );
};

export default MySelectedClasses;