import axios from "axios";
import { useState, useEffect } from "react";
import PrivateRoute from "../components/PrivateRoute";
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
import { useParams } from "react-router-dom";

const Cart = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchingOrder = async () => {
      const userId = localStorage.getItem("userId");
      const { data } = await axios.get(
        "http://localhost:3001/orders/ " + userId
      );

      console.log(data);
      setOrder(data);
    };

    fetchingOrder();
  }, []);

  return (
    <div className="flex-grow ">
      <PrivateRoute>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Number</TableCell>
                <TableCell>User</TableCell>
                <TableCell>ToyId</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.map((ord) => (
                <TableRow key={ord._id}>
                  <TableCell>{ord._id}</TableCell>
                  <TableCell>{ord.user}</TableCell>
                  <TableCell>{ord.toyId}</TableCell>
                  <TableCell>{ord.quantity}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PrivateRoute>
    </div>
  );
};

export default Cart;
