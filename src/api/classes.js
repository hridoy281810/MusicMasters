export const getAllClasses = async()=>{
    const res = await fetch(`http://localhost:5000/classes`)
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


