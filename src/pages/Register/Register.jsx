import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProvider";


const Registration = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value

        console.log(email, password, name, photo)


        if (password.length < 6) {
            toast.error("Password Must be 6 characters")
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error("Password Must be have a capital letter")
            return;
        } else if (!/[@#$%^&-+=()]/.test(password)) {
            toast.error("Password Must be have a symbol")
            return;
        }

        createUser(email, password, name)
            .then(res => {
                console.log(res)
                toast.success("Registration successfull")
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo
                })
                navigate(location?.state ? location.state : '/')
            })

            .catch(error => {
                console.log(error)
                toast.error("Email already Used")
            })



    }
    return (
        <div>
            <div>
                <div className="hero my-10">
                    <div className="hero-content ">
                        <div className="card flex-shrink-0  shadow-2xl bg-base-100">
                            <h1 className="text-5xl text-center font-bold mt-6">Register now!</h1>
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                                </div>
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

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Registration</button>
                                </div>
                                {/* {
                                    registerError && <p className='text-red-700 text-xl'>{registerError}</p>
                                }
                                {
                                    success &&
                                    <div>
                                        <p className='text-green-800 text-xl'>Your Registration Successfuly done</p>

                                    </div>
                                } */}
                                <div className='mt-4'>Your already have an account <span><Link to='/login' className='text-red-500 font-bold'>Log in Now</Link></span></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;