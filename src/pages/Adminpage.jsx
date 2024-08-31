import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Button } from "@mui/material";
import AddToyModal from "../components/AddToyModal";
import { useState, useEffect } from "react";
import { getToys } from "../api/Toys";
import axios from "axios";
import PrivateRoute from "../components/PrivateRoute";

import { Navigate, useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [toys, setToys] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [order, setOrder] = useState([]);

  const navigate = useNavigate();

  const userRole = localStorage.getItem("role");

  useEffect(() => {
    if (userRole !== "Admin") {
      navigate("/toys");
    }
    if (userRole === "Admin") {
      navigate("/admin");
    }
  }, [userRole]);

  const newToys = async () => {
    const { data } = await getToys();
    setToys(data);
  };
  useEffect(() => {
    newToys();
  }, []);

  const handleDelete = (toyId) => {
    axios
      .delete("http://localhost:3001/toys/" + toyId)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleSubmit = async () => {
    try {
      await axios
        .post("http://localhost:3001/admin/register", {
          name,
          surname,
          username,
          password,
          role,
        })
        .then((response) => {
          alert("You registration as Admin was successful");
        });
    } catch (e) {
      alert(e?.response?.data || "Admin creation failed");
    }
  };
  const fetchingOrder = async () => {
    const { data } = await axios.get("http://localhost:3001/orders");
    setOrder(data);
  };

  useEffect(() => {
    fetchingOrder();
  }, []);

  return (
    <>
      <div className="flex-grow w-full flex-col p-8 gap-8">
        <h1 className="text-3xl p-4">Admin Dashboard</h1>
        <div className="flex justify-end">
          <Button onClick={() => setOpenModal(true)} variant="contained">
            Add Toy
          </Button>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Img Url</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {toys.map((toy) => (
                <TableRow key={toy._id}>
                  <TableCell>{toy.description}</TableCell>
                  <TableCell>{toy.name}</TableCell>
                  <TableCell>{toy.price}</TableCell>
                  <TableCell>
                    <img className="h-12 w-12" src={toy.img} alt="" />
                  </TableCell>
                  <TableCell className="h-full flex justify-end w-32">
                    <Button
                      onClick={(e) => handleDelete(toy._id)}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell className="h-full flex justify-end w-32">
                    <Button variant="contained" color="secondary">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <AddToyModal open={openModal} handleclose={() => setOpenModal(false)} />
      </div>
      <div className="flex h-full  w-full  gap-8 p-4   mb-5">
        <div className="flex h-full flex-col w-1/3 gap-6 p-2 border-2 ml-4 mb-5">
          <span className="text-4xl">Create User Admin</span>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="name"
          >
            name
          </TextField>
          <TextField
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            label="surname"
          >
            Surname
          </TextField>
          <TextField
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="username"
          >
            Username
          </TextField>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            label="password"
          >
            password
          </TextField>

          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </div>
        <div className="flex-grow h-full  gap-8 p-2 border-2 ml-4 mb-5 ">
          <span className="text-4xl border-b w-full gap-8">
            Orders From Users
          </span>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order Number</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>ToyId</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map((ord) => (
                  <TableRow key={ord._id}>
                    <TableCell>{ord._id}</TableCell>
                    <TableCell>{ord.userId}</TableCell>
                    <TableCell>{ord.toyId}</TableCell>
                    <TableCell>{ord.quantity}</TableCell>
                    <TableCell>{ord.price + "KM"}</TableCell>
                    <TableCell>{ord.price * ord.quantity + "KM"}</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
