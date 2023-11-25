import { useContext } from 'react';
import './ApartmentCard.css'
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

import moment from 'moment/moment';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const ApartmentCard = ({ apartment }) => {
    const axiosSecure=useAxiosSecure()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { blockName, image, floorNo, apartmentNo, rent, _id } = apartment
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
                        })
                }
            });



        } else {
            navigate('/login')
        }


    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className="w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Block Name: {blockName}</h2>
                    <p>Floor No: {floorNo}</p>
                    <p>Apartment No: {apartmentNo}</p>
                    <p>Rent: {rent}</p>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary btn-outline font-bold" onClick={() => handleaggrement(_id)}>Aggrement</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;