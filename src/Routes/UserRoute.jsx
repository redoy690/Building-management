import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useUser from "../hooks/useUser";
import { Navigate, useLocation } from "react-router-dom";


const UserRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isuser,isUserloading]= useUser()
    const location = useLocation()
    console.log(location.pathname)
     if(loading || isUserloading){
        return <span className="loading loading-spinner loading-lg  ml-[50%] mt-[10%] mb-40"></span> 
     }
 
    if(user && isuser){
     return children;
    }
 
    return <Navigate state={location.pathname} to='/'></Navigate>
};

export default UserRoute;