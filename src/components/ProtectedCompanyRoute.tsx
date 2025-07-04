import { Navigate, Outlet } from "react-router";
import useUser from "../hooks/useUser";
import { toast } from "react-toastify";

const ProtectedCompanyRoute = () => {
    const { user } = useUser();
    if (user && user.role==='COMPANY') return (<Outlet />)
    else {
        toast.warn("Please Signin as Company");
        return (<Navigate to='/signin' />);
    }
}

export default ProtectedCompanyRoute;