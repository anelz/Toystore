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
import AdminRoute from "../components/AdminRoute";
import { Navigate, useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [toys, setToys] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  //
  const navigate = useNavigate();

  const userRole = localStorage.getItem("role");
  console.log(role);

  useEffect(() => {
    if (userRole !== "Admin") {
      navigate("/toys");
    }
    if (userRole === "Admin") {
      navigate("/admin");
    }
  }, [userRole]);
  //

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
      await axios.post("http://localhost:3001/admin/register", {
        name,
        surname,
        username,
        password,
        role,
      });
    } catch (e) {}
  };

  return (
    <>
      <div className="flex-grow w-full flex-col p-8 gap-8">
        <h1 className="text-3xl">Admin Dashboard</h1>
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
                  <TableCell>{toy.img}</TableCell>
                  <TableCell>
                    <Button
                      onClick={(e) => handleDelete(toy._id)}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>
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
      <div className="flex h-full flex-col w-1/3 gap-6 p-4 border-2 ml-4 mb-5">
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
        <TextField
          value={role}
          onChange={(e) => setRole(e.target.value)}
          label="role"
        >
          role
        </TextField>
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </div>
    </>
    // <AdminRoute>
    //   <div className="flex-grow w-full flex-col p-8 gap-8">
    //     <h1 className="text-3xl">Admin Dashboard</h1>
    //     <div className="flex justify-end">
    //       <Button onClick={() => setOpenModal(true)} variant="contained">
    //         Add Toy
    //       </Button>
    //     </div>
    //     <TableContainer>
    //       <Table>
    //         <TableHead>
    //           <TableRow>
    //             <TableCell>Description</TableCell>
    //             <TableCell>Name</TableCell>
    //             <TableCell>Price</TableCell>
    //             <TableCell>Img Url</TableCell>
    //             <TableCell>Actions</TableCell>
    //           </TableRow>
    //         </TableHead>
    //         <TableBody>
    //           {toys.map((toy) => (
    //             <TableRow key={toy._id}>
    //               <TableCell>{toy.description}</TableCell>
    //               <TableCell>{toy.name}</TableCell>
    //               <TableCell>{toy.price}</TableCell>
    //               <TableCell>{toy.img}</TableCell>
    //               <TableCell>
    //                 <Button
    //                   onClick={(e) => handleDelete(toy._id)}
    //                   variant="contained"
    //                   color="error"
    //                 >
    //                   Delete
    //                 </Button>
    //               </TableCell>
    //               <TableCell>
    //                 <Button variant="contained" color="secondary">
    //                   Edit
    //                 </Button>
    //               </TableCell>
    //             </TableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //     <AddToyModal open={openModal} handleclose={() => setOpenModal(false)} />
    //   </div>
    //   <div className="flex h-full flex-col w-1/3 gap-6 p-4 border-2 ml-4 mb-5">
    //     <span className="text-4xl">Create User Admin</span>
    //     <TextField
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       label="name"
    //     >
    //       name
    //     </TextField>
    //     <TextField
    //       value={surname}
    //       onChange={(e) => setSurname(e.target.value)}
    //       label="surname"
    //     >
    //       Surname
    //     </TextField>
    //     <TextField
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //       label="username"
    //     >
    //       Username
    //     </TextField>
    //     <TextField
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       type="password"
    //       label="password"
    //     >
    //       password
    //     </TextField>
    //     <TextField
    //       value={role}
    //       onChange={(e) => setRole(e.target.value)}
    //       label="role"
    //     >
    //       role
    //     </TextField>
    //     <Button onClick={handleSubmit} variant="contained">
    //       Submit
    //     </Button>
    //   </div>
    // </AdminRoute>
  );
};

export default AdminPage;
