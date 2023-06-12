
import useAuth from './useAuth';
import { useQuery } from 'react-query';

const useMyEnrolledClasses = () => {
    const { user, loading } = useAuth()
    const { refetch, data: myEnrolledClasses = [] } = useQuery({
        queryKey: ['myEnrolledClasses', user.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_URL}/payments/${user?.email}`)
            return res.json()
        }
    })
    return [myEnrolledClasses, refetch]
};

export default useMyEnrolledClasses;


