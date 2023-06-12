import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useMyClasses = () => {
  const [axiosSecure] = useAxiosSecure()
  const { user, loading } = useAuth()
  const { refetch, data: myClasses = [] } = useQuery({
    queryKey: ['myClasses', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/instructor/${user?.email}`)
      return res.data
    }
  })
  return [myClasses, refetch]
};
export default useMyClasses;