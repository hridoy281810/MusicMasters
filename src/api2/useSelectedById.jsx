import { useQuery } from "react-query";
import useAuth from "./useAuth";
import { useParams } from "react-router-dom";


const useSelectedById = () => {
    const {id} = useParams()
  const {loading } = useAuth()
  const {refetch,data: mySelected = []} = useQuery({
   queryKey:[ 'mySelected',id],
   enabled: !loading,
   queryFn: async()=>{
       const res = await fetch(`${import.meta.env.VITE_URL}/select/classes/${id}`)
       console.log(res)
    return res.json()
  }

  })
  return [mySelected,refetch]
};

export default useSelectedById;