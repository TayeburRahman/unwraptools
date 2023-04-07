import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div  
    style={{
height: "100vh",
width: "100%",
display: "flex",
alignItems: "center",
justifyContent: "center"
    }}
    >
      <HashLoader size={55} color={"#19D3AE"} />
    </div>
  );
};

export default Loading;

 