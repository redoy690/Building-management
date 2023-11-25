import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Usealluser from "../../../hooks/Usealluser";



const AggrementRequestCard = ({ item, refetch }) => {
    const axiosSecure = useAxiosSecure()
    const { date, email, name, status, blockName, image, floorNo, apartmentNo, rent, _id } = item


    const [users] = Usealluser()
    const newrole = {
        role: "member"
    }





    const handlereject = (_id) => {
        console.log(_id)
        const status = "rejected"
        const updatestatus = { status }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Reject'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/agrementapartment/${_id}`, updatestatus)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Success!",
                                text: `Request Rejected Successfully`,
                                icon: "success"
                            });
                        }
                    })
            }
        })
    }



    const handleaccept = (_id) => {
        console.log(_id)
        const status = "checked"
        const updatestatus = { status }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Accept'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/agrementapartment/${_id}`, updatestatus)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Success!",
                                text: `Request Checked Successfully`,
                                icon: "success"
                            });
                        }
                    })
            }
        })


        const userid = users.find(item => item.email == email)
        axiosSecure.put(`/users/${userid._id}`, newrole)
            .then(res => {
                console.log(res.data)
            })



    }



    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl border-red-100 border-2">
                <h1 className="mx-auto mt-4 text-2xl font-bold">Apartment No: {apartmentNo}</h1>
                <div className="card-body ">
                    <div className="flex">
                        <div className="w-3/4">
                            <div className="flex text-xl font-bold">
                                <h2 className="w-[80px]">Rent</h2>
                                <h2>: {rent}$</h2>
                            </div>
                            <div className="flex ">
                                <h2 className="w-[80px]">Floor No </h2>
                                <h2>: {floorNo}</h2>
                            </div>
                            <div className="flex ">
                                <h2 className="w-[80px]">Block </h2>
                                <h2>: {blockName}</h2>
                            </div>
                            <div className="flex ">
                                <h2 className="w-[80px]">Status </h2>
                                <h2>: {status}</h2>
                            </div>
                            <div className="flex ">
                                <h2 className="w-[80px]">Req Date: </h2>
                                <h2>: {date}</h2>
                            </div>
                            <div className="flex ">
                                <h2 className="w-[80px]">UserName </h2>
                                <h2>: {name}</h2>
                            </div>
                            <div className="flex ">
                                <h2 className="w-[80px]">UserEmail </h2>
                                <h2>: {email}</h2>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
                {
                    status == 'pending'
                        ?
                        <div className="flex justify-between mx-12 mb-10">
                            <button onClick={() => handleaccept(_id)}>Accept</button>
                            <button onClick={() => handlereject(_id)}>Reject</button>
                        </div>
                        :
                        ''
                }
            </div>
        </div>

    );
};

export default AggrementRequestCard;