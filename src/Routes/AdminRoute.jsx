
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const {user,loading} = useAuth();
    const [isAdmin, isAdminLoading] =useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <p className="loading loading-bars loading-lg"></p>
    }
    if(user && isAdmin){

        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;