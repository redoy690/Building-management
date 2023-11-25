import moment from "moment";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form"
import UseallCoupon from "../../../hooks/UseallCoupon";

const ManageCoupon = () => {
    const [allcoupon,refetch] = UseallCoupon()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        const newcoupon = {
            code: data.code,
            percent: parseFloat(data.percent),
            description: data.description,
            date: moment().format('D-MMM-YY, h:mma')
        }
        axiosSecure.post('/coupon', newcoupon)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coupon submited successfully",
                        icon: "success"
                    });
                }
                reset()
                refetch()
            })
    }



    return (
        <div>
             {allcoupon.length}

            <div className="mt-10">
                <a href="#my_modal_8" className="btn btn-outline">Add New Coupon</a>
                {/* Put this part before </body> tag */}
                <div className="modal" role="dialog" id="my_modal_8">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Add new Coupon!</h3>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Coupon Code</span>
                                    </label>
                                    <input {...register("code", { required: true })} type="text" placeholder="Coupon Code" className="input input-bordered w-full " required />
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Discount Percentage</span>
                                    </label>
                                    <input {...register("percent", { required: true })} type="number" placeholder="Example 5 , 8, 14" className="input input-bordered w-full " required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Coupon Description</span>
                                    </label>
                                    <textarea {...register("description", { required: true })} type="text" className="textarea textarea-bordered " placeholder="Coupon Description"></textarea>
                                </div>

                                <input className="btn btn-primary mt-4" type="submit" />
                            </form>
                        </div>
                        <div className="modal-action">
                            <a href="#" className="btn">Cancel</a>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default ManageCoupon;