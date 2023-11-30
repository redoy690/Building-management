import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../hooks/useAxiosSecure";



const UserAnnouncement = () => {
    const axiosSecure = useAxiosSecure()
    const { data: announcement = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/announcement')
            return res.data
        }
    })
    return (
        <div className="">
            
            <div>
                {
                    announcement.map(item =>
                        <div key={item._id} className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="font-semibold title-font text-gray-700">{item.date?.slice(0, 9)}</span>
                                <span className="mt-1 text-gray-500 text-sm">{item.date?.slice(10, 18)}</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{item.title}</h2>
                                <p className="leading-relaxed border-b-2 border-red-50 pb-8">{item.description}</p>
                            </div>
                            <div className=""></div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UserAnnouncement;