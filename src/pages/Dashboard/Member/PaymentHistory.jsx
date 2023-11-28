import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const [search, setSearch] = useState('')
    const { user } = useContext(AuthContext)
    const email = user?.email || ''
    const axiosSecure = useAxiosSecure()
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${email}`)
            return res.data
        }
    })

    const handlesubmit = e => {
        e.preventDefault()
        const input = e.target.text.value
        setSearch(input)
    }

    // const hanleall (e) =>{
    //     e.preventDefault()
    //     setSearch('')
    // }

    const hanletoall = () => {
        setSearch('')
    }

    refetch()
    return (
        <div>
            <div className="">
                <div className="md:flex justify-between ">
                    <h2 className="text-3xl mb-8 text-blue-500 font-bold mt-2">Total Payments: {payments.length}</h2>
                    <div>
                        <div className="flex items-center justify-center mb-8 mt-2">
                            <form onSubmit={handlesubmit}>
                                <div className="rounded-lg bg-gray-200 border-2">
                                    <div className="flex">
                                        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                                            <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                            </svg>
                                        </div>
                                        <input type="text" placeholder="Month Name" name="text" className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" id="" />
                                        <input type="submit" value="Search" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    search &&
                    <div className="text-center">
                        <h2 className=" text-3xl font-bold text-blue-500 pt-6">Search Result: {search}</h2>
                        {/* <input type="submit" onSubmit={hanleall} value="All Result" className="bg-blue-500 p-2 rounded text-white font-semibold hover:bg-blue-800 transition-colors" /> */}
                        <div >
                        
                            <button className="h-[23px] my-4 p-0  w-[100px] text-[8px]" onClick={hanletoall}>ALL RESULT</button>
                        </div>

                    </div>


                }

            </div>
            <div>
                <div className="overflow-x-auto w-[300px] md:w-[650px] lg:w-full">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Status</th>
                                <th>Payment Date</th>
                                <th>Ap. No.</th>
                                <th>Rent Month</th>
                                <th>Amount</th>
                                <th>Transaction ID.</th>

                            </tr>
                        </thead>
                        {payments.filter((card) => { return search.toLowerCase() == '' ? card : card.month.toLowerCase().includes(search.toLowerCase()) }).map((item, index) =>
                            <tbody key={item._id}>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <td><img src="https://i.ibb.co/RbnNqKG/Screenshot-11.png" className="w-[80px]" alt="" /></td>
                                    <td>{item.paymentdate}</td>
                                    <td>{item.apartmentNo}</td>
                                    <td>{item.month}</td>
                                    <td>{item.paymentamount}$</td>
                                    <td>{item.paymentId}</td>

                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;