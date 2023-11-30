import './Coupon.css'
import UseallCoupon from '../../../hooks/UseallCoupon';

const Coupon = () => {
    const [allcoupon] = UseallCoupon()

    return (
        <div className=' '>
           
            <div className="grid grid-cols-1 my-4 coupon  gap-4">
                <div className='bg-gray-300 my-4'>
                    
                    <div className='w-[80%] mx-auto my-8'>
                    <h2 className='text-4xl my-4 py-4 font-bold text-white text-center border-4 border-white'>Use Coupon Code For Discount</h2>
                        {
                            allcoupon.map(coupon =>
                                <div key={coupon._id} className=" couponcc border-2 mt-4 border-black-300 bg-base-100 ">
                                    <div className="card-body bg-red">
                                        <div className=" md:flex justify-between">
                                            <div className='bg-slate-100 rounded-xl  p-4 md:w-[40%]'>
                                                <h2 className="card-title font-bold">Coupon Code: {coupon.code}</h2>
                                                <h2 className="card-title font-bold">Discount : {coupon.percent}%</h2>
                                            </div>
                                            <div className="my-4 md:my-0 ">
                                                <p className="text-xs text-center border-2 border-blue-200 p-2 rounded-xl bg-slate-100">Coupon started Date:<br />
                                                    {coupon.date}</p>
                                            </div>
                                        </div>
                                        <h2 className="text-lg bg-slate-100 rounded-xl mt-4 p-4 font-bold">Coupon Description: <span className="text-base font-normal">{coupon.description.slice(0, 130)}</span></h2>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coupon;