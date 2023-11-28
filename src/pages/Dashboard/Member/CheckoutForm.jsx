
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProvider';
import moment from 'moment';
import usePendingApartment from '../../../hooks/usePendingApartment';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const CheckoutForm = () => {

    const axiosSecure = useAxiosSecure()
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransctionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const [pendingapartment, refetch] = usePendingApartment()
    const { user } = useContext(AuthContext)
    const email = user?.email || ''
    const allproduct = pendingapartment.find(item => item.email == email)
    const { _id, apartmentNo, floorNo, blockName, rent, image, apId } = allproduct || ''
    const amount = localStorage.getItem('taka')
    const month = localStorage.getItem('month')
    const newamount=parseInt(amount)
    
    const navigate = useNavigate()

    useEffect(() => {
        if (amount > 0 && amount !== isNaN) {
            axiosSecure.post('/create-payment-intent', { price: amount })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, amount])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id)
                setTransctionId(paymentIntent.id)

                const payment = {

                    email: user.email,
                    username: user.displayName,
                    paymentamount: newamount ,
                    paymentId: paymentIntent.id,
                    paymentdate: moment().format('D-MMM-YY, h:mma'),
                    month: month,
                    apartmentNo,
                    floorNo,
                    blockName,
                    rent,
                    image,


                }
                const res = await axiosSecure.post('/payments', payment)
                console.log('payment save', res)

                axiosSecure.delete(`/agrementapartment/${_id}`)
                    .then(res => {
                        console.log(res)
                    })

                
                axiosSecure.delete(`/apartment/${apId}`)
                    .then(res => {
                        console.log(res)
                    })
                refetch()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Your Payment ${amount}$ has been succeed `,
                    showConfirmButton: false,
                    timer: 2500
                });

                localStorage.removeItem('month')
                localStorage.removeItem('taka')
                navigate('/dashboard/paymenthistory')
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='buttons py-2 mt-10' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-red-600 mt-4'>{error}</p>
                {transactionId && <p className='text-green-600'>Your transction id:{transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;