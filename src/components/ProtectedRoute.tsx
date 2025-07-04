import { Navigate, Outlet } from "react-router";
import useUser from "../hooks/useUser";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
    const { user } = useUser();
    if (user) return (<Outlet />)
    else {
        toast.warn("Please Signin");
        return (<Navigate to='/signin' />);
    }
}

export default ProtectedRoute;