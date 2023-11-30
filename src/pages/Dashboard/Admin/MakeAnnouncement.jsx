import moment from "moment";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form"

const MakeAnnouncement = () => {
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        const newcoupon = {
            title: data.title,
            description: data.description,
            date: moment().format('D-MMM-YY, h:mma')
        }
        axiosSecure.post('/announcement', newcoupon)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Announcement submited successfully",
                        icon: "success"
                    });
                }
                reset()
            })
    }






    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-8 bg-slate-300 py-6">START NEW ANNOUNCEMENT</h2>
            <div className="flex justify-center">
                <div className="w-full md:w-full lg:w-1/2" onSubmit={handleSubmit(onSubmit)}>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input {...register("title", { required: true })} type="text" placeholder="Title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" {...register("description", { required: true })} className="textarea textarea-bordered h-[250px]" placeholder="Announcement Description"></textarea>
                        </div>
                        <div className="form-control mt-6">

                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MakeAnnouncement;