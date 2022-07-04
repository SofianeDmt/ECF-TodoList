import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LogContext } from "../context/LogContext";


const PrivateRoute = () => {
    const {loginStatus} = useContext(LogContext)
    
    return loginStatus ? <Outlet /> : <Navigate to='/' />;
}

export default PrivateRoute;