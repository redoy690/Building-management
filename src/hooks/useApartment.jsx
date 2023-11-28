import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./useAxiosPublic";




const useApartment = () => {
    const axiosPublic = UseAxiosPublic()


    const { data: apartment = [] } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allapartment')
            return res.data
        }
    })
    return [apartment]
}
export default useApartment;