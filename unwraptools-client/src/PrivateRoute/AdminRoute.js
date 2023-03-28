import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Firebase/Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin} = useAuth();
  let location = useLocation();
  if (isLoading) {
    return <CircularProgress color="success" />;
    
  }

  if (user.email && admin) {
    return children;

  }
  return  <Navigate to="/" state={{ from: location }} />;
};
 
export default AdminRoute;
