import { useContext } from 'react';
import './ApartmentCard.css'
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

import moment from 'moment/moment';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import usePendingApartment from '../../hooks/usePendingApartment';


const ApartmentCard = ({ apartment }) => {
    const [pendingapartment,refetch]=usePendingApartment()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { blockName, image, floorNo, apartmentNo, rent, _id } = apartment
    const mypendingapartment = pendingapartment.filter(item=>item.email == user?.email && item.status == "pending")
    
    const mypendingaplength = mypendingapartment.length
    const handleaggrement = (id) => {
        
        console.log(id)
        if (user && user.email) {
            const aggrementdetails = {
                email: user.email,
                name: user.displayName,
                date: moment().format('D-MMM-YY, h:mma'),
                apId: _id,
                status: 'pending',
                blockName,
                image,
                floorNo,
                apartmentNo,
                rent
            }
            Swal.fire({
                title: "Rent This Apartment ?",
                text: `You won't be able to revert this!`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    if(mypendingaplength <= 0  ){
                        axiosSecure.post('/agrementapartment', aggrementdetails)
                        .then(res => {
                            console.log(res.data)
                            if (res.data.insertedId) {
                                Swal.fire({
                                    title: "Success!",
                                    text: "Your request has been send.",
                                    icon: "success"
                                });
                            }
                            refetch()
                        })
                    } else {
                        Swal.fire({
                            title: "error!",
                            text: "You already have a pending request.",
                            icon: "error"
                        });
                    }
                        
                }
            })
           



        } else {
            navigate('/login')
        }


    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className="w-full h-[450px]" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">Apartment No: {apartmentNo}</h2>
                    <div className='flex'>
                        <h2 className='text-xl font-bold w-[130px]'>Block Name</h2>
                        <h2 className='text-xl font-bold '>: {blockName}</h2>
                    </div>
                    <div className='flex'>
                        <h2 className='text-xl font-bold w-[130px]'>Floor No</h2>
                        <h2 className='text-xl font-bold '>: {floorNo}</h2>
                    </div>

                    <div className='flex'>
                        <h2 className='text-xl font-bold w-[130px]'>Rent</h2>
                        <h2 className='text-xl font-bold '>: {rent}$</h2>
                    </div>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary btn-outline font-bold buttons" onClick={() => handleaggrement(_id)}>Agreement</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ApartmentCard;