import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants";

const Publicroute = ({ children }) => {
  const userId = localStorage.getItem("userId");

  if (userId) return <Navigate to={ROUTES.TOYS} />;

  return children;
};

export default Publicroute;
