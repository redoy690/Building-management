import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";




const usePendingApartment = () => {
    const axiosSecure = useAxiosSecure()

    const {data:pendingapartment = [],refetch} = useQuery({
            queryKey:['agrementapartment'],
            queryFn: async ()=>{
                const res = await axiosSecure.get('/agrementapartment')
                return res.data
            }
    })
    return [pendingapartment,refetch]
    
};

export default usePendingApartment;