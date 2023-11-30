
import { useContext } from 'react';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin,isAdminLoading]= useAdmin()
    const location = useLocation()
    console.log(location.pathname)
     if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-lg  ml-[50%] mt-[10%] mb-40"></span> 
        
     }
 
    if(user && isAdmin){
     return children;
    }
 
    return <Navigate state={location.pathname} to='/'></Navigate>
};

export default AdminRoute;