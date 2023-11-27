import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import usePendingApartment from "../../../hooks/usePendingApartment";


const MemberProfile = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email || ''
    const photo = user?.photoURL || ''
    const name = user?.displayName || ''
    console.log(email)
    const [pendingapartment] = usePendingApartment()
    return (
        <div>
        <h2>user profile</h2>
        <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">Your Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
            <div className="mt-[10%]">
                <h2 >User Name: {name}</h2>
                <h2 >Email: {email}</h2>
            </div>
            <div>
                <h2>Profile Picture:</h2>
                <div >
                    <img className=" w-[140px] border-2 border-red-200" src={photo} alt="" />
                </div>
            </div>
        </div>



        <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">My Aggrement List</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {
                pendingapartment.filter(item => item.email == email ).map(apartment =>
                    <div key={apartment._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={apartment.image} alt="Shoes" className="w-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Apartment No: {apartment.apartmentNo}</h2>
                            <p>Floor No: {apartment.floorNo}</p>
                            <p >Block Name: {apartment.blockName} </p>
                            <p>Rent: {apartment.rent}$</p>
                            <p>Status: {apartment.status}</p>
                            {
                                apartment.acceptedate &&
                                <p>Aggrement Accepted Date: {apartment.acceptdate} </p>
                            }
                        </div>
                    </div>
                )
            }
        </div>

    </div>
    );
};

export default MemberProfile;