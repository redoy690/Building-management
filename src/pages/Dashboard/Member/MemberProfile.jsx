import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import usePendingApartment from "../../../hooks/usePendingApartment";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const MemberProfile = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const email = user?.email || ''
    const photo = user?.photoURL || ''
    const name = user?.displayName || ''
    console.log(email)
    const [pendingapartment] = usePendingApartment()
    const mypendingapartment = pendingapartment.filter(item => item.email == email && item.status=="checked")
    const { data: allpayment = [] } = useQuery({
        queryKey: ['allpayment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments')
            return res.data
        }

    })
    const mypaymentApartment = allpayment.filter(item => item.email == email)

    return (
        <div>
           
            <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">My Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                <div className="mt-[10px] text-xl">
                    <h2 >User Name: {name}</h2>
                    <h2 className="mt-2" >Email: {email}</h2>
                    <h2 className="mt-2">Profile Status: Member</h2>
                </div>
                <div>
                    <h2>Profile Picture:</h2>
                    <div >
                        {
                            photo ?
                                <img className=" w-[140px] border-2 border-red-200" src={photo} alt="" />
                                :
                                <img className="w-[140px] border-2" src='https://i.ibb.co/C0QmMFD/user.png' alt="pic" />
                        }
                    </div>
                </div>
            </div>



            {
                mypendingapartment.length > 0 &&
                <>
                    <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">My Pending Agreement List</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                        {
                            mypendingapartment.map(apartment =>
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
                                            apartment.status == "checked" &&
                                            <>
                                             <div className="flex  text-md md:text-2xl font-bold">
                                                <h2 className="w-[130px] md:w-[180px]">Accept Date </h2>
                                                <h2>: {apartment.acceptdate}</h2>
                                            </div>
                                            <p className="text-xl font-bold">Pleae Complete your payment</p>
                                            </>
                                           

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

            }

            {
                mypaymentApartment.length > 0 &&
                <>

                    <h2 className="text-3xl font-bold text-center my-8 bg-slate-300  py-6">My Confirmed Agreement List</h2>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                        {
                            mypaymentApartment.map(apartment =>
                                <div key={apartment._id} className="card bg-green-100 shadow-xl">
                                    <figure><img src={apartment.image} alt="Shoes" className="w-full" /></figure>
                                    <div className="card-body ">
                                        <div className="flex text-md  md:text-2xl font-bold">
                                            <h2 className="w-[130px] md:w-[180px]">Apartment No</h2>
                                            <h2>: {apartment.apartmentNo}</h2>
                                        </div>
                                        <div className="flex text-md  md:text-2xl font-bold">
                                            <h2 className="w-[130px] md:w-[180px]">Floor No</h2>
                                            <h2>: {apartment.floorNo}</h2>
                                        </div>
                                        <div className="flex text-md  md:text-2xl font-bold">
                                            <h2 className="w-[130px] md:w-[180px]">Block Name</h2>
                                            <h2>: {apartment.blockName}</h2>
                                        </div>

                                        <div className="flex text-md  md:text-2xl font-bold">
                                            <h2 className="w-[130px] md:w-[180px]">Rented Month</h2>
                                            <h2>: {apartment.month}</h2>
                                        </div>
                                        <div className="flex text-md  md:text-2xl font-bold">
                                            <h2 className="w-[130px] md:w-[180px]">Payment </h2>
                                            <h2>: {apartment.paymentamount}$</h2>
                                        </div>
                                        <div className="flex text-md  md:text-2xl font-bold">
                                            <h2 className="w-[130px] md:w-[180px]">Payment Date</h2>
                                            <h2>: {apartment.paymentdate.slice(0, 9)}</h2>
                                        </div>
                                        <div className="flex text-md  md:text-2xl font-bold">
                                            <h2 className="w-[130px] md:w-[180px]">Status</h2>
                                            <h2>: Confirmed</h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </>

            }


        </div>
    );
};

export default MemberProfile;