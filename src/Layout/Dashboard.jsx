

import { FaBuilding, FaFileInvoiceDollar, FaHome, FaList, FaMoneyCheck } from 'react-icons/fa';
import { FaCircleUser, FaHeadphonesSimple, FaMessage, FaMoneyCheckDollar } from "react-icons/fa6";
import { NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'
import useAdmin from '../hooks/useAdmin';
import useMember from '../hooks/useMember';
import useUser from '../hooks/useUser';




const Dashboard = () => {



    const [isuser] = useUser()
    const [isMember] = useMember()
    const [isAdmin] = useAdmin()
    return (
        <div className='flex gap-0 md:gap-2  my-8 '>
            <div className=' w-16 md:w-16 lg:w-[260px]  min-h-screen bg-blue-100'>




                
                {
                    isuser &&
                    <>

                        <ul className='menu space-y-2 big-device'>
                            <li><NavLink to="/dashboard/userprofile"><FaHome></FaHome>My Profile</NavLink></li>
                            <li><NavLink to="/dashboard/userannouncement"> <FaMessage />Announcement</NavLink></li>
                        </ul>
                        <ul className='menu space-y-2 small-device'>
                            <li><NavLink to="/dashboard/userprofile"><FaHome></FaHome></NavLink></li>
                            <li><NavLink to="/dashboard/userannouncement"> <FaMessage /></NavLink></li>
                        </ul>



                    </>
                }


               

                {
                    isMember &&
                    <>

                        <ul className='menu space-y-2 big-device'>
                            <li><NavLink to="/dashboard/memberprofile"><FaHome></FaHome>My Profile</NavLink></li>
                            <li><NavLink to="/dashboard/makepayment"><FaMoneyCheckDollar />Make Payment</NavLink></li>
                            <li><NavLink to="/dashboard/paymenthistory"><FaList></FaList> Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/memberannouncement"><FaMessage /> Announcement</NavLink></li>
                        </ul>
                        <ul className='menu space-y-2 small-device'>
                            <li><NavLink to="/dashboard/memberprofile"><FaHome></FaHome></NavLink></li>
                            <li><NavLink to="/dashboard/makepayment"><FaMoneyCheckDollar /></NavLink></li>
                            <li><NavLink to="/dashboard/paymenthistory"><FaList></FaList> </NavLink></li>
                            <li><NavLink to="/dashboard/memberannouncement"><FaMessage /> </NavLink></li>
                        </ul>
                    </>


                }





               
                {
                    isAdmin &&
                    <>
                        <ul className='menu space-y-2 big-device'>
                            <li><NavLink to="/dashboard/adminprofile"><FaHome></FaHome>Admin Profile</NavLink></li>
                            <li><NavLink to="/dashboard/managemember"><FaCircleUser />Manage Members</NavLink></li>
                            <li><NavLink to="/dashboard/makeannouncement"><FaMessage />Make Announcement</NavLink></li>
                            <li><NavLink to="/dashboard/aggrementrequest"><FaFileInvoiceDollar />Agreement Requests</NavLink></li>
                            <li><NavLink to="/dashboard/managecoupon"><FaMoneyCheck />Manage Coupons</NavLink></li>
                        </ul>

                        <ul className='menu space-y-2 small-device'>
                            <li><NavLink to="/dashboard/adminprofile"><FaHome></FaHome></NavLink></li>
                            <li><NavLink to="/dashboard/managemember"><FaCircleUser /></NavLink></li>
                            <li><NavLink to="/dashboard/makeannouncement"><FaMessage /></NavLink></li>
                            <li><NavLink to="/dashboard/aggrementrequest"><FaFileInvoiceDollar /></NavLink></li>
                            <li><NavLink to="/dashboard/managecoupon"><FaMoneyCheck /></NavLink></li>
                        </ul>
                    </>
                }


                {/* ssss */}
                <div className='divider '></div>
                <ul className='menu space-y-2 big-device'>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/apartment"><FaBuilding />Apartment</NavLink></li>
                    <li><NavLink to="/contactus"><FaHeadphonesSimple /> Contact Us</NavLink></li>
                </ul>

                <ul className='menu space-y-2 small-device'>
                    <li><NavLink to="/"><FaHome></FaHome></NavLink></li>
                    <li><NavLink to="/apartment"><FaBuilding /></NavLink></li>
                    <li><NavLink to="/contactus"><FaHeadphonesSimple /></NavLink></li>
                </ul>

            </div>
            <div className='w-full ml-2 mr-2'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;