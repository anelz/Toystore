import { TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("");

  const handleLogin = async (e) => {
    try {
      const { data } = await axios.post("http://localhost:3001/users/login", {
        username,
        password,
      });
      console.log(data);

      localStorage.setItem("userId", data);
      handelClickDelete();
      navigate(ROUTES.TOYS);
    } catch (e) {
      alert(e?.reaponse?.data || "Username or Password incorrect");
    }
  };
  const handelClickDelete = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="h-full w-full flex flex-col gap-8 p-4">
      <h1 className=" text-3xl flex justify-center">Login to Toystore </h1>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        label="username"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="password"
        type="password"
      />
      <div className=" flex justify-center ">
        <Button onClick={handleLogin} variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
