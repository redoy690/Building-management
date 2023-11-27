import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import usePendingApartment from "../../../hooks/usePendingApartment";
import { Link } from "react-router-dom";


const MakePayment = () => {
    const [selects, setSelects] = useState()
    const { user } = useContext(AuthContext)
    const email = user?.email || ''

    const [pendingapartment] = usePendingApartment()
    const allproduct = pendingapartment.find(item => item.email == email && item.status=="checked")
    const { apartmentNo, floorNo, blockName, rent } = allproduct || ''

    const handlepayment = () => {
        console.log(selects)
        localStorage.setItem('month', selects)

    }
    return (

        <div>

            {
                allproduct ?
                    <div>
                        <div className="">
                            <div className="flex gap-4 mt-4">
                                <h2 className="text-2xl md:text-3xl font-bold w-[200px] md:w-[270px] ">APARTMENT NO: </h2>
                                <input type="text" placeholder="Type here" defaultValue={apartmentNo} readOnly className="input pl-6 text-xl font-bold input-bordered input-info h-[44px] w-[80px] md:w-[200px]" />
                            </div>
                            <div className="flex gap-4 mt-4 ">
                                <h2 className="text-2xl md:text-3xl font-bold w-[200px] md:w-[270px] ">FLOOR NO : </h2>
                                <input type="text" placeholder="Type here" defaultValue={floorNo} readOnly className="input pl-6 text-xl font-bold input-bordered input-info h-[44px]  w-[80px]  md:w-[200px]" />
                            </div>
                            <div className="flex gap-4 mt-4 ">
                                <h2 className="text-2xl md:text-3xl font-bold w-[200px] md:w-[270px] ">BLOCK NAME : </h2>
                                <input type="text" placeholder="Type here" defaultValue={blockName} readOnly className="input pl-6 text-xl font-bold input-bordered input-info h-[44px]  w-[80px]  md:w-[200px]" />
                            </div>
                            <div className="flex gap-4 mt-4">
                                <h2 className="text-2xl md:text-3xl font-bold w-[200px] md:w-[270px] ">RENT : </h2>
                                <input type="text" placeholder="Type here" defaultValue={rent} readOnly className="input  text-xl font-bold input-bordered input-info h-[44px]  w-[80px]  md:w-[200px]" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold mt-12">Select which month rent you want to pay</h2>
                                <div>
                                    <select className="select select-bordered w-1/8 mt-6 " value={selects} onChange={e => setSelects(e.target.value)} required>
                                        <option >Select Month Name</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                    <Link to='/dashboard/confirm'>
                                        <button onClick={handlepayment} className="ml-8 mt-4">Pay</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    :
                    <div>
                       <p className="text-center mt-[20%] text-green-600 text-2xl">You do not have any pending apartment for payment,</p>
                    </div>
            }
        </div>
    );
};

export default MakePayment;