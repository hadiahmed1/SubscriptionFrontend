import { Navigate, Outlet } from "react-router";
import useUser from "../hooks/useUser";

const ProtectedRoute = () => {
    const { user } = useUser();
    if (user) return (<Outlet />)
    else {
        console.log("Please Signin");
        return (<Navigate to='/signin' />);
    }
}

export default ProtectedRoute;