import AllToys from "./Toys";
import Toy from "../components/Toy";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { getToysDetails } from "../api/Toys";
import PrivateRoute from "../components/PrivateRoute";
import Ratingstars from "../components/Rating";
import BasicRating from "../components/Rating";

const Toysinfo = () => {
  const { toyId } = useParams();
  const [toysdetails, setToysDetails] = useState([]);
  const [user, Setuser] = useState("");
  const [toy, setToy] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    const fetchtoysdetails = async () => {
      const { data } = await axios.get("http://localhost:3001/Toys/" + toyId);
      setToysDetails(data);
    };

    fetchtoysdetails();
  }, [toyId]);

  const handleClickBuy = async () => {
    const user = localStorage.getItem("userId");
    await axios.post("http://localhost:3001/orders", { toyId, user, quantity });
    quantitykDeletefield();
  };

  const quantitykDeletefield = () => {
    setQuantity("");
  };

  const rateDeletefields = () => {
    setRating("");
    setComments("");
  };

  const handleClickRate = async () => {
    const user = localStorage.getItem("userId");
    await axios.post("http://localhost:3001/reviews", {
      toyId,
      user,
      comments,
      rating,
    });
    rateDeletefields();
  };

  return (
    <PrivateRoute>
      <div className="flex flex-1  ">
        <div className="flex w-1/2 h-full flex-col gap-5 p-4  ">
          <h1 className="text-4xl p-4  ">Toy </h1>
          <div className="flex justify-center items-center h-2/3  w-full ">
            <img className="h-full w-1/2 " src={toysdetails.img} />
          </div>
          <div className="flex h-full w-full flex-col  gap-5 items-center  ">
            <TextField
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
              type="Number"
              className="w-20 h-15"
              inputProps={{ min: 1 }}
            >
              0
            </TextField>

            <Button
              onClick={handleClickBuy}
              variant="contained"
              className="flex justify-center  w-1/5 "
            >
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="flex w-1/2 h-full flex-col gap-6 p-4 ">
          <h1 className="text-4xl p-4 border-b ">Toy details</h1>
          <div className="flex gap-3 text-2xl">
            Product name:
            <span className="flex items-end text-2xl gap-2">
              {toysdetails.name}{" "}
            </span>
          </div>
          <div className="flex gap-3 text-2xl">
            Description:
            <span className="flex items-end text-2xl gap-2">
              {toysdetails.description}{" "}
            </span>
          </div>
          <div className="flex gap-3 text-2xl">
            Price:
            <span className="text-2xl">{toysdetails.price + "KM"}</span>
          </div>
          <div className="h-1/4 w-full flex flex-col gap-5 ">
            <BasicRating
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <textarea
              placeholder="Please rate our product"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className=" h-full w-1/2 border-2 border-blue-300"
              minLength={360}
              name=""
              id="texarea"
            ></textarea>
          </div>
          <div className="w-1/2  flex justify-center ">
            <Button onClick={handleClickRate} className="w-1/6">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Toysinfo;
