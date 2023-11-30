
import { useContext } from "react";
import usePendingApartment from "../../../hooks/usePendingApartment";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email || ''
    const photo = user?.photoURL || ''
    const name = user?.displayName || ''
    console.log(email)
    const [pendingapartment] = usePendingApartment()
    const mypendingApartment = pendingapartment.filter(item => item.email == email)

    return (
        <div>

            <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">My Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                <div className="mt-[10px] text-lg">
                    <h2 >User Name: {name}</h2>
                    <h2 className="mt-2" >Email: {email}</h2>
                    <h2 className="mt-2">Profile Status: User</h2>
                </div>
                <div>
                    <h2>Profile Picture:</h2>
                    <div >
                        <img className=" w-[140px] border-2 border-red-200" src={photo} alt="" />
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">My Agreement request List</h2>
            <div>
                {
                    mypendingApartment.length ?
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                                {
                                    mypendingApartment.map(apartment =>
                                        <div key={apartment._id} className="card bg-base-100 shadow-xl">
                                            <figure><img src={apartment.image} alt="Shoes" className="w-full" /></figure>
                                            <div className="card-body ">
                                                <div className="flex text-md md:text-2xl font-bold">
                                                    <h2 className="w-[130px] md:w-[180px]">Apartment No</h2>
                                                    <h2>: {apartment.apartmentNo}</h2>
                                                </div>
                                                <div className="flex  text-md md:text-2xl font-bold">
                                                    <h2 className="w-[130px] md:w-[180px]">Floor No</h2>
                                                    <h2>: {apartment.floorNo}</h2>
                                                </div>
                                                <div className="flex  text-md md:text-2xl font-bold">
                                                    <h2 className="w-[130px] md:w-[180px]">Block Name</h2>
                                                    <h2>: {apartment.blockName}</h2>
                                                </div>
                                                <div className="flex  text-md md:text-2xl font-bold">
                                                    <h2 className="w-[130px] md:w-[180px]">Rent</h2>
                                                    <h2>: {apartment.rent}$</h2>
                                                </div>
                                                <div className="flex  text-md md:text-2xl font-bold">
                                                    <h2 className="w-[130px] md:w-[180px]">Status </h2>
                                                    <h2>: {apartment.status}</h2>
                                                </div>
                                                {
                                                    apartment.status == "rejected" &&
                                                    <h2 className="text-xl font-bold">Sorry Your Request has been Rejected</h2>

                                                }
                                                {
                                                    apartment.status == "pending" &&
                                                    <div className="flex  text-md md:text-2xl font-bold">
                                                        <h2 className="w-[130px] md:w-[180px]">Request Date </h2>
                                                        <h2>: {apartment.date}</h2>
                                                    </div>

                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </>
                        :
                        <div>
                            <h1 className="text-xl text-center mt-[10%] text-pink-600">You do not have any pending request</h1>
                        </div>
                }
            </div>

        </div>
    );
};

export default UserProfile;