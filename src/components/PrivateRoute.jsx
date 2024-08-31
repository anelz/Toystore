import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants";

const PrivateRoute = ({ children }) => {
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");

  if (!userId && !role) return <Navigate to={ROUTES.HOME} />;

  return children;
};

export default PrivateRoute;
