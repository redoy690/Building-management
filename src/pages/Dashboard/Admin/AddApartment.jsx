import Swal from "sweetalert2";
import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const AddApartment = () => {
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        const newrent = parseFloat(data.rent)
        const newproduct = {
            blockName: data.blockName,
            apartmentNo: data.apartmentNo,
            floorNo: data.floorNo,
            rent: newrent,
            image: data.image,
            
        }
        console.log(newproduct)
        axiosSecure.post('/allapartment', newproduct)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "New Apartment submited successfully",
                        icon: "success"
                    });
                }
                reset()
                navigate('/dashboard/adminprofile')
            })
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-full md:w-full lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Apartment No</span>
                            </label>
                            <input {...register("apartmentNo", { required: true })} type="number" placeholder="Apartment No" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Floor No</span>
                            </label>
                            <input {...register("floorNo", { required: true })} type="number" placeholder="Floor No" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Block Name</span>
                            </label>
                            <input {...register("blockName", { required: true })} type="text" placeholder="Block Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rent</span>
                            </label>
                            <input {...register("rent", { required: true })} type="number" placeholder="Rent" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input {...register("image", { required: true })} type="url" placeholder="Image url" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control mt-6">

                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddApartment;