import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { Component } = props;
  const token = useSelector((state) => state.token);
  console.log("token111111", token);
  if (!token) {
    return <Navigate to="/login" />;
  } else {
    return <Component {...props} />;
  }
}

export default ProtectedRoute;
