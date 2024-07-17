import axios from "axios";
import { useState, useEffect } from "react";
import PrivateRoute from "../components/PrivateRoute";

const Cart = () => {
  const [order, setOrder] = useState("");

  const fetchingOrder = async () => {
    const { data } = await axios.get("http://localhost:3001/orders");
    setOrder(data);
    console.log(data);
  };

  useEffect(() => {
    fetchingOrder();
  }, []);

  return (
    <PrivateRoute>
      <div className="flex-1 flex-col gap-5 p-4">
        <div className="h-full w-1/2 flex flex-col gap-5 p-4">
          <span className=" w-full gap-4  text-2xl">
            Order Number : {order._id}
          </span>
          <span className="text-2xl">ToyId : {order.toyId}</span>
          <span className="text-2xl">User : {order.user}</span>
          <span className="text-2xl">Quantity : {order.quantity}</span>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Cart;
