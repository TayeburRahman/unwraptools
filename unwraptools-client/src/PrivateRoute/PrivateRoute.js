import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Firebase/Hooks/useAuth";
import Loading from "../components/loading/LiadingPulsate";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return  <Loading/>
  }

  if (user.email) {
    return children;

  }
  return  <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
