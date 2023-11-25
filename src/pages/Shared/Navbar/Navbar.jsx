import { useContext } from 'react';
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navbar =
        <>
            <NavLink to='/' className='m-2'>
                <button >Home</button>
            </NavLink >
            <NavLink to='/apartment' className='m-2'>
                <button >Apartment</button>
            </NavLink>
            {
                user ?
                <NavLink to='/contactus' className='m-2'>
                    <button >Contact Us</button>
                </NavLink>
                :
                <NavLink to='/registration' className='m-2'>
                <button >Register</button>
            </NavLink>

            }
            {
                !user &&
                <NavLink to='/login' className='m-2'>
                    <button >Login</button>
                </NavLink>

            }

        </>
    return (
        <div className=''>
            <div className="navbar  my-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-58">
                            {navbar}
                        </ul>
                    </div>
                    <div className='flex space-x-1'>
                        <img src="https://i.ibb.co/b24fMfP/logo3.png" alt="" className='w-[80px]' />
                        <div>
                            <h2 className='text-4xl font-extrabold'>SKYLINE</h2>
                            <p className='text-xs'>A . P . A . R . T . M . E . N . T</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  ">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-bottom dropdown-end ">
                                <label tabIndex={0} >
                                    {
                                        user.photoURL ?
                                            <img className="w-[45px] rounded-full mt-2" src={user.photoURL} alt="pic" />
                                            :
                                            <img className="w-[45px] rounded-full" src='https://i.ibb.co/C0QmMFD/user.png' alt="pic" />
                                    }
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52 p-4 mt-6">
                                    {
                                        user.displayName ?
                                            <li  className=""><a><button>{user.displayName}</button></a></li>
                                            :
                                            <li className=""><button>Username</button></li>
                                    }

                                    <Link to="/dashboard" className="mt-4 ml-4" ><button>Dashboard</button> </Link>
                                    <li className="mt-4" onClick={logOut}><a><button>Logout</button></a></li>
                                </ul>
                            </div>
                            :
                            ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;