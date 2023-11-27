import  { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const {user}= useContext(AuthContext)
    
    const axiosSecure = useAxiosSecure()
    const {data : isuser,isPending:isUserloading}= useQuery({
        queryKey:[user?.email, 'isuser'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/user/${user.email}`)
           
            return res.data?.users
        }
        
    })
    
    return [isuser,isUserloading]
};

export default useUser;