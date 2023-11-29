import { useContext } from "react";
import useMember from "../hooks/useMember";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const MemberRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isMember]= useMember()
    const location = useLocation()
    console.log(location.pathname)
     if(loading ){
        // return <span className="loading loading-spinner loading-lg  ml-[50%] mt-[10%] mb-40"></span> 
        return
     }
 
    if(user && isMember){
     return children;
    }
 
    return <Navigate state={location.pathname} to='/'></Navigate>
};

export default MemberRoute;