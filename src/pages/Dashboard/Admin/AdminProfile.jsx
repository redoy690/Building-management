import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

import useApartment from "../../../hooks/useApartment";
import Usealluser from "../../../hooks/Usealluser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email || ''
    const photo = user?.photoURL || ''
    const name = user?.displayName || ''
    console.log(email)
    const axiosSecure = useAxiosSecure()
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data
        }
    })

    const totalPrice = payments.reduce((sum, item) => sum + item.paymentamount, 0)
    console.log(totalPrice)
    // const [pendingapartment] = usePendingApartment()
    const [apartment] = useApartment()
    const [users] = Usealluser()

    const bookedRoomLength = (payments.length)
    const freeRoomLength = (apartment.length)
    const totalRoomLength = (bookedRoomLength + freeRoomLength)
    const availableRoomPercent = (freeRoomLength / totalRoomLength) * 100
    const rentedRoomPercent = (bookedRoomLength / totalRoomLength) * 100
    const totalUser = users.filter(item => item.role == "user")
    const totalmember = users.filter(item => item.role == "member")
    const totalUserLength = (totalUser.length)
    const totalMemberLength = (totalmember.length)


    return (
        <div>

            <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">ADMIN PROFILE INFORMATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">

                <div className="mt-[10px]">
                    <h2 >User Name: {name}</h2>
                    <h2 className="mt-4" >Email: {email}</h2>
                    <h2 className="mt-4" >Profile Status: Admin</h2>
                    <div>
                        <Link to='/dashboard/addapartment'>
                            <button className="mt-4 btn btn-outline w-[170px] btn-primary">Add New Apartment</button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/dashboard/allpaymenthistory'>
                            <button className="mt-4 btn btn-outline w-[170px] btn-primary">Payment History</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <h2>Profile Picture:</h2>
                    <div >
                        <img className=" w-[140px] border-2 border-red-200" src={photo} alt="" />
                    </div>
                </div>
            </div>



            <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">APARTMENT INFORMATION</h2>



            <div className="mt-4">
                <div className="flex items-center justify-center bg-gray-800 p-4 md:h-40">
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                            <div className="flex-col">
                                <div className="text-sm font-medium text-gray-400 my-2">TOTAL ROOMS</div>
                                <div className="className flex  items-center">
                                    <div className="text-3xl  font-bold text-gray-200">{totalRoomLength}</div>

                                </div>
                                <div className="text-sm font-medium text-gray-400 ">Rooms</div>
                            </div>
                        </div>
                        <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                            <div className="flex-col">
                                <div className="text-sm font-medium text-gray-400 my-2">FREE ROOMS</div>
                                <div className="className flex items-center">
                                    <div className="text-3xl font-bold text-gray-200">{freeRoomLength}</div>
                                    <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                                        <div><ion-icon name="arrow-up-outline"></ion-icon></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-gray-400 ">Free Rooms</div>
                            </div>
                        </div>
                        <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                            <div className="flex-col">
                                <div className="text-sm font-medium text-gray-400 my-2">RENTED ROOMS</div>
                                <div className="className flex items-center">
                                    <div className="text-3xl font-bold text-gray-200">{bookedRoomLength}</div>
                                    <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-violet-500 font-medium ">
                                        <div><ion-icon name="arrow-down-outline"></ion-icon></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-gray-400 ">Rented</div>
                            </div>
                        </div>
                        <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                            <div className="flex-col">
                                <div className="text-sm font-medium text-gray-400 my-2">FREE ROOMS %</div>
                                <div className="className flex items-center">
                                    <div className="text-3xl font-bold text-gray-200">{Math.floor(availableRoomPercent)}%</div>

                                </div>
                                <div className="text-sm font-medium text-gray-400 ">Percentage</div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className="">
                <div className="flex items-center justify-center bg-gray-800 p-4 md:h-40">
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                            <div className="flex-col">
                                <div className="text-sm font-medium text-gray-400 my-2">RENTED ROOMS % </div>
                                <div className="className flex items-center">
                                    <div className="text-3xl font-bold text-gray-200">{Math.ceil(rentedRoomPercent)}%</div>

                                </div>
                                <div className="text-sm font-medium text-gray-400 ">Percentage</div>
                            </div>
                        </div>
                        <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                            <div className="flex-col">
                                <div className="text-sm font-medium text-gray-400 my-2">TOTAL MEMBERS</div>
                                <div className="className flex items-center">
                                    <div className="text-3xl font-bold text-gray-200">{totalMemberLength}</div>
                                    <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                                        <div><ion-icon name="arrow-up-outline"></ion-icon></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-gray-400 ">members</div>
                            </div>
                        </div>
                        <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                            <div className="flex-col">
                                <div className="text-sm font-medium text-gray-400 my-2">TOTAL USERS</div>
                                <div className="className flex items-center">
                                    <div className="text-3xl font-bold text-gray-200">{totalUserLength}</div>

                                </div>
                                <div className="text-sm font-medium text-gray-400 ">users</div>
                            </div>
                        </div>
                        <div className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5">
                            <div className="flex-col">
                                <div className="text-sm font-medium text-gray-400 my-2">TOTAL COLLECTION</div>
                                <div className="className flex items-center">
                                    <div className="text-3xl font-bold text-gray-200">{totalPrice}$</div>

                                </div>
                                <div className="text-sm font-medium text-gray-400 ">Dollar</div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminProfile;