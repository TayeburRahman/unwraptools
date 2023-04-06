import { Box } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Firebase/Hooks/useAuth";
import Loading from "../components/loading/LiadingPulsate";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin} = useAuth();
  let location = useLocation();
  if (isLoading) {
    return ( <Box
    sx={{
     width: "100%",height: "100vh",  display: "grid",  alignItems: "center", justifyItems: "center"
    }}
   >
      <Loading />
   </Box>)
    
  }

  if (user.email && admin) {
    return children;

  }
  return  <Navigate to="/" state={{ from: location }} />;
};
 
export default AdminRoute;
