
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";


const InstructorRoute = ({ children }) => {
    const {user,loading} = useAuth();
    const [isInstructor, isInstructorLoading] =useInstructor();
    const location = useLocation();
    if(loading || isInstructorLoading){
        return <p className="loading loading-bars loading-lg"></p>
    }
    if(user && isInstructor){

        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;