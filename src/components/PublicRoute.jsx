import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PublicRoute(props) {
  const { Component } = props;
  const token = useSelector((state) => state.token);
  console.log(token);
  if (!token) {
    return <Component {...props} />;
  }
  return <Navigate to="/" />;
}

export default PublicRoute;
