import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const registerHandleAdd = async (e) => {
    try {
      await axios.post("http://localhost:3001/users/register", {
        name,
        surname,
        username,
        password,
        role,
      });

      handleClickClose();
    } catch (e) {
      alert(e?.response?.data || "All fields must be filled out");
    }
  };

  const handleClickClose = () => {
    setName("");
    setSurname("");
    setUsername("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="h-full w-full flex flex-col gap-5 p-4">
      <h1 className=" text-3xl flex justify-center">Register to Toystore </h1>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="name"
      />
      <TextField
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        label="surname"
      />
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
      <TextField
        value={role}
        onChange={(e) => setRole(e.target.value)}
        label="type"
      />
      <div className=" flex justify-center ">
        <Button onClick={registerHandleAdd} variant="contained">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
