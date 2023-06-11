import { useQuery } from "react-query";
import useAuth from "./useAuth";


const useMySelected = () => {
  const {user,loading } = useAuth()
  const {refetch,data: mySelected = []} = useQuery({
   queryKey:[ 'mySelected',user?.email],
   enabled: !loading,
   queryFn: async()=>{
       const res = await fetch(`http://localhost:5000/selected?email=${user?.email}`)
    return res.json()
  
  }

  })
  return [mySelected,refetch]
};

export default useMySelected;