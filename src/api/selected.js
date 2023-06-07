
export const selectClass = async(selectData) => {
    const res = await fetch(`http://localhost:5000/selected`,{
        method:'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(selectData)
    })
    const data = await res.json()
    return data ;
}

// // update status /rooms/status/
// export const updateStatus =async (id,status)=>{
//     const res = await fetch(`${import.meta.env.VITE_API_URL}/rooms/status/${id}`,{
//         method: 'PATCH',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify({status})
//     })
//     const data = await res.json()
//     return data;
// }
// Get all selected class for a user by email
export const getSelectedClass = async(email) =>{
    const res = await fetch(`http://localhost:5000/selected?email=${email}`)
     const myClasses = await res.json()
     return myClasses;
 }
