import Swal from "sweetalert2";
import useMySelected from "../../../api2/useMySelected";


const MySelectedClasses = () => {
  //   const {user} = useAuth()
  //   const [myClasses,setMyClasses] = useState([])
  //   const [loading,setLoading] = useState(false)
  //   console.log(myClasses)
  //   // const fetchSelected = ()=>{
  //   //     getSelectedClass(user?.email)
  //   //     .then(data=>{
  //   //         setMyClasses(data)
  //   //     })
  //   //     .catch(error=>{
  //   //         console.log(error)
  //   //     })
  //   // }
  //   // useEffect(()=>{
  //   //     fetchSelected()
  //   // },[user])
  // useEffect(()=>{
  //   setLoading(true)
  //   getSelectedClass(user?.email)
  //   .then(data=>{
  //       setMyClasses(data)
  //       setLoading(false)
  //   })
  //   .catch(error=>{
  //       console.log(error)
  //   })
  // },[user])

  const [mySelected,refetch] = useMySelected()
  const handleDelete = (myClass) =>{
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
            fetch(`http://localhost:5000/selected/${myClass._id}`,{
                        method:'DELETE'
                    })
                    .then(res=> res.json())
                    .then(data =>{
                        if(data.deletedCount > 0){
                          refetch()}
                     })
                    Swal.fire(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success' )
      }
      })
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
      {mySelected.map((myClass,i)=>
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
          <button onClick={()=>handleDelete(myClass)} className="btn btn-secondary btn-sm">Delete</button>
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