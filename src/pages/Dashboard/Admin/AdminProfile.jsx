import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

import useApartment from "../../../hooks/useApartment";
import Usealluser from "../../../hooks/Usealluser";


const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email || ''
    const photo = user?.photoURL || ''
    const name = user?.displayName || ''
    console.log(email)
    // const [pendingapartment] = usePendingApartment()
    const [apartment] = useApartment()
    const [users] = Usealluser()
    const bookedRoom = apartment.filter(item => item.booking == "closed")
    const freeRoom = apartment.filter(item => item.booking == "open")
    const totalRoomLength=(apartment.length)
    const bookedRoomLength = (bookedRoom.length)
    const freeRoomLength = (freeRoom.length)
    const availableRoomPercent = (freeRoomLength/totalRoomLength)*100
    const rentedRoomPercent=(bookedRoomLength/totalRoomLength)*100
    const totalUser = users.filter(item=> item.role == "user")
    const totalmember = users.filter(item=> item.role == "member")
    const totalUserLength=(totalUser.length)
    const totalMemberLength=(totalmember.length)
    return (
        <div>
            
            <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">Admin Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                <div className="mt-[10%]">
                    <h2 >User Name: {name}</h2>
                    <h2 className="mt-4" >Email: {email}</h2>
                </div>
                <div>
                    <h2>Profile Picture:</h2>
                    <div >
                        <img className=" w-[140px] border-2 border-red-200" src={photo} alt="" />
                    </div>
                </div>
            </div>



            <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">Apartment Information</h2>
       

            <div>
                <div className="flex border-2 border-pink-200 rounded-xl w-[295px] md:w-[500px] pl-6 py-2">
                   <div className="w-[400px] border-r-2">
                      <h2 className="text-lg md:text-2xl font-bold">TOTAL ROOMS IN DB</h2>
                   </div>
                   <div className="w-[120px] md:w-[80px]">
                       <h2 className="text-lg md:text-2xl font-bold pl-6"> {totalRoomLength}</h2>
                   </div>
                </div>
                <div className="flex border-2 border-pink-200 rounded-xl w-[295px] md:w-[500px] pl-6 py-2 mt-2">
                   <div className="w-[400px] border-r-2">
                      <h2 className="text-lg md:text-2xl font-bold">TOTAL AVAILABLE ROOMS</h2>
                   </div>
                   <div className="w-[120px] md:w-[80px]">
                       <h2 className="text-lg md:text-2xl font-bold pl-6"> {freeRoomLength}</h2>
                   </div>
                </div>
                <div className="flex border-2 border-pink-200 rounded-xl w-[295px] md:w-[500px] pl-6 py-2 mt-2">
                   <div className="w-[400px] border-r-2">
                      <h2 className="text-lg md:text-2xl font-bold">TOTAL RENTED ROOMS</h2>
                   </div>
                   <div className="w-[120px] md:w-[80px]">
                       <h2 className="text-lg md:text-2xl font-bold pl-6"> {bookedRoomLength}</h2>
                   </div>
                </div>
                <div className="flex border-2 border-pink-200 rounded-xl w-[295px] md:w-[500px] pl-6 py-2 mt-2">
                   <div className="w-[400px] border-r-2">
                      <h2 className="text-base md:text-2xl font-bold">AVAILABLE ROOMS PERCENTAGE</h2>
                   </div>
                   <div className="w-[120px] md:w-[80px]">
                       <h2 className="text-lg md:text-2xl font-bold pl-4">{Math.floor(availableRoomPercent)}% </h2>
                   </div>
                </div>
               
                <div className="flex border-2 border-pink-200 rounded-xl w-[295px] md:w-[500px] pl-6 py-2 mt-2">
                   <div className="w-[400px] border-r-2">
                      <h2 className="text-lg md:text-2xl font-bold">RENTED ROOMS PERCENTAGE</h2>
                   </div>
                   <div className="w-[120px] md:w-[80px]">
                       <h2 className="text-lg md:text-2xl font-bold pl-4">{Math.ceil(rentedRoomPercent)}%</h2>
                   </div>
                </div>
                <div className="flex border-2 border-pink-200 rounded-xl w-[295px] md:w-[500px] pl-6 py-2 mt-2">
                   <div className="w-[400px] border-r-2">
                      <h2 className="text-lg md:text-2xl font-bold">TOTAL USERS</h2>
                   </div>
                   <div className="w-[120px] md:w-[80px]">
                       <h2 className="text-lg md:text-2xl font-bold pl-6"> {totalUserLength}</h2>
                   </div>
                </div>
                <div className="flex border-2 border-pink-200 rounded-xl w-[295px] md:w-[500px] pl-6 py-2 mt-2">
                   <div className="w-[400px] border-r-2">
                      <h2 className="text-lg md:text-2xl font-bold">TOTAL MEMBERS</h2>
                   </div>
                   <div className="w-[120px] md:w-[80px]">
                       <h2 className="text-lg md:text-2xl font-bold pl-6"> {totalMemberLength}</h2>
                   </div>
                </div>
               
                
                
            </div>

        </div>
    );
};

export default AdminProfile;