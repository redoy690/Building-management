
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const UseallCoupon = () => {
    const axiosSecure=useAxiosSecure()

    const {data:allcoupon = [],refetch} = useQuery({
            queryKey:['allcoupon'],
            queryFn: async ()=>{
                const res = await axiosSecure.get('/coupon')
                return res.data
            }
    })
    return [allcoupon,refetch]
};

export default UseallCoupon;