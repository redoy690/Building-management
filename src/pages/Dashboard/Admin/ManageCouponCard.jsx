import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageCouponCard = ({coupon,refetch}) => {
    const axiosSecure=useAxiosSecure()
    const {_id, code, percent,description,date}=coupon
    const handledeleteCoupon = (_id)=>{
         axiosSecure.delete(`/coupon/${_id}`)
         .then(data=>{
            if(data.data.deletedCount){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Coupon deleted succefully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
         })
    }
    return (
        <div>
            <div className="card border-2 border-pink-300 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className=" md:flex justify-between">
                        <div>
                            <h2 className="card-title font-bold">Coupon Code: {code}</h2>
                            <h2 className="card-title font-bold">Discount : {percent}%</h2>
                        </div>
                        <div className="my-4 md:my-0 ">
                            <p className="text-xs text-center border-2 border-blue-200 p-2 rounded-xl">Coupon started Date:<br />
                                {date}</p>
                        </div>
                    </div>
                    <h2 className="text-lg font-bold">Coupon Description: <span className="text-base font-normal">{description}</span></h2>
                    <div className="card-actions justify-end mt-10">
                        <button onClick={() => handledeleteCoupon(_id)} className="btn w-[180px] font-bold btn-primary">Delete Coupon</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageCouponCard;