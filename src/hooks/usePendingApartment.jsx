import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./useAxiosPublic";




const usePendingApartment = () => {
    const axiosPublic = UseAxiosPublic()

    const {data:pendingapartment = [],refetch} = useQuery({
            queryKey:['pendingapartment'],
            queryFn: async ()=>{
                const res = await axiosPublic.get('/agrementapartment')
                return res.data
            }
    })
    return [pendingapartment,refetch]
    
};

export default usePendingApartment;