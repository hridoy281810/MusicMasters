// import { useParams } from "react-router-dom";

export const getAllClasses = async()=>{
    const res = await fetch(`http://localhost:5000/classes`)
    const classes = await res.json()
    console.log(classes)
    return classes;
}
export const getAllInstructors = async()=>{
    const res = await fetch(`http://localhost:5000/instructors`)
    const classes = await res.json()
    return classes;
}
export const getInstructorsClasses  = async()=>{
    const res = await fetch(`http://localhost:5000/classes/popular`)
    const popularClasses = await res.json()
    return popularClasses;
}
export const getPopularClasses = async()=>{
    const res = await fetch(`http://localhost:5000/classes/student`)
    const popularClasses = await res.json()
    return popularClasses;
}
export const updateClasses = async (number_of_students,available_seats,id) => {

    const response = await fetch(`http://localhost:5000/classes/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
      body: JSON.stringify({number_of_students,available_seats}),
    })
  
    const data = await response.json()
    console.log('new',data)
    return data
  }
// export const getUploadClassByInstructors =async()=>{
//    const res = await fetch(`http://localhost:5000/classes/role`)
//    const instructorsClasses = await res.json()
//    return instructorsClasses
// }

