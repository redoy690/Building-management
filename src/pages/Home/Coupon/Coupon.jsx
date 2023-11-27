
import UseallCoupon from '../../../hooks/UseallCoupon';

const Coupon = () => {
    const [allcoupon] = UseallCoupon()

    return (
        <div>
            hi
            <div className="grid grid-cols-1 my-4  gap-4">
                <div>
                    {
                        allcoupon.map(coupon =>
                            <div key={coupon._id} className="card border-2 mt-4 border-pink-300 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <div className=" md:flex justify-between">
                                        <div>
                                            <h2 className="card-title font-bold">Coupon Code: {coupon.code}</h2>
                                            <h2 className="card-title font-bold">Discount : {coupon.percent}%</h2>
                                        </div>
                                        <div className="my-4 md:my-0 ">
                                            <p className="text-xs text-center border-2 border-blue-200 p-2 rounded-xl">Coupon started Date:<br />
                                                {coupon.date}</p>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-bold">Coupon Description: <span className="text-base font-normal">{coupon.description.slice(0,130)}</span></h2>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Coupon;