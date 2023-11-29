import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import usePendingApartment from "../../../hooks/usePendingApartment";
import UseallCoupon from "../../../hooks/UseallCoupon";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const MakePaymentConfirm = () => {
    const [successcoupon, setsuccessCoupon] = useState('')
    const [invalidcoupon, setinvalidCoupon] = useState('')
    const [discount, setDiscount] = useState(0)
    const [allcoupon] = UseallCoupon()
    const { user } = useContext(AuthContext)
    const email = user?.email || ''
    const [pendingapartment] = usePendingApartment()
    const allproduct = pendingapartment.find(item => item.email == email)
    const {  rent } = allproduct || ''
    const month = localStorage.getItem('month')
    
    const totalAmount = rent - discount

    localStorage.setItem('taka',totalAmount)
    const handlecoupon = (e) => {
        e.preventDefault()
        const coupon = e.target.coupon.value
        const matchingcoupon = allcoupon.find(item => item.code == coupon)
        console.log(matchingcoupon)

        if (matchingcoupon) {
            setinvalidCoupon('')
            setsuccessCoupon(`Your Coupon is Granted, You get ${matchingcoupon.percent} % discount`)
            const totaldiscountamount = (rent * matchingcoupon.percent) / 100
            setDiscount(totaldiscountamount)



        } else {
            setsuccessCoupon('')
            setinvalidCoupon('Your Coupon Code is Invalid')

        }



    }






    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card border-2 pl-2 pb-2 md:p-4">
                    <div className="flex gap-4 mt-4">
                        <h2 className="text-xl md:text-3xl font-bold w-[170px] md:w-[250px]  ">Rent  Month</h2>
                        <h2 className="text-xl md:text-3xl font-bold">: {month}</h2>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <h2 className="text-xl md:text-3xl font-bold w-[170px] md:w-[250px]  ">Rent  Amount</h2>
                        <h2 className="text-xl md:text-3xl font-bold">: {rent}$</h2>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <h2 className="text-xl md:text-3xl font-bold w-[170px] md:w-[250px]  ">Coupon Discount</h2>
                        <h2 className="text-xl md:text-3xl font-bold">: {discount}$</h2>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <h2 className="text-xl md:text-3xl font-bold w-[170px] md:w-[250px]  ">Total  Amount</h2>
                        <h2 className="text-xl md:text-3xl font-bold">: {totalAmount}$</h2>
                    </div>

                </div>
                <div className="card border-2 pl-2 pb-2 md:p-4">
                    <h2 className="text-2xl font-bold">Submit Coupon Code for Discount</h2>
                    <form onSubmit={handlecoupon} >
                        <input className="input input-bordered input-accent mt-4 w-[150px] " name="coupon" placeholder="Coupon Code" type="text" />
                        <input className="btn btn-outline btn-error ml-4" type="submit" />
                    </form>
                    <div className="mt-2">
                        <p className="text-green-400">{successcoupon}</p>
                        <p className="text-red-400">{invalidcoupon}</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 w-full md:w-1/2 border-2 rounded-xl p-8">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default MakePaymentConfirm;