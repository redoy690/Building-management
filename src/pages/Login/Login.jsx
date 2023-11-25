import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";




const Login = () => {

    const {signIn,googleLogin}=useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    // google log in
    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                console.log(res)   
                navigate(location?.state ? location.state : '/')
                toast.success("Login successfull")
                
            })
            .catch(error => console.log(error))
    }





    // email password log in
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                toast.success("Login successfull")
                
                navigate(location?.state ? location.state : '/')       
            })
            .catch(error => {
                console.log(error)
                toast.error("Email and Password do not match")
            })
    }

    return (
        <div>
            <div>
                <div>
                    <div className="hero min-h-screen ">
                        <div className="hero-content ">
                            <div className="card flex-shrink-0  max-w-md shadow-2xl bg-base-100">
                                <h1 className="text-5xl text-center font-bold mt-6">LogIn now!</h1>
                                <form onSubmit={handleLogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6 ">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>

                                    <div className='mt-6'>
                                        <button className='btn w-3/4' onClick={() => handleSocialLogin(googleLogin)}>Log in with<FaGoogle></FaGoogle></button>
                                    </div>
                                    <p className='mt-4'>Your do not have an account <Link to='/registration' className='text-red-500 font-bold'>Register Now</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;