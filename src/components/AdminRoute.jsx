import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "../constants";

const AdminRoute = ({ children }) => {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  console.log(role);

  useEffect(() => {
    if (role !== "Admin") {
      navigate("/toys");
    }
    if (role === "Admin") {
      navigate("/admin");
    }
  });

  return children;
};

export default AdminRoute;
