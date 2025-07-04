import { Navigate, Outlet } from "react-router";
import useUser from "../hooks/useUser";

const ProtectedCompanyRoute = () => {
    const { user } = useUser();
    if (user && user.role==='COMPANY') return (<Outlet />)
    else {
        console.log("Please Signin as Company");
        return (<Navigate to='/signin' />);
    }
}

export default ProtectedCompanyRoute;