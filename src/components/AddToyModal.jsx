import { Button, Modal, TextField, TextareaAutosize } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { createToy } from "../api/Toys";

const AddToyModal = ({ open, handleclose }) => {
  const [description, Setdescription] = useState("");
  const [name, Setname] = useState("");
  const [img, Setimg] = useState("");
  const [price, Setprice] = useState(0);

  const handleClickClose = () => {
    Setdescription("");
    Setname("");
    Setprice(0);
    Setimg("");
    handleclose("");
  };

  const HandleClickAdd = async (e) => {
    await axios
      .post("http://localhost:3001/toys", { description, name, img, price })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    handleclose("");
  };

  return (
    <Modal className="flex justify-center items-center" open={open}>
      <div className="w-3/4 h-3/4 bg-white rounded-xl flex flex-col gap-4 p-4 ">
        <div className="flex justify-between items-center">
          <h1 className="flex  text-3xl p-4 gap-4 ">Add Toy</h1>
          <Button onClick={handleClickClose} variant="contained">
            Close
          </Button>
        </div>

        <TextField
          value={description}
          onChange={(e) => Setdescription(e.target.value)}
          label="description"
        />
        <TextField
          value={name}
          onChange={(e) => Setname(e.target.value)}
          label="name"
        />
        <TextField
          value={img}
          onChange={(e) => Setimg(e.target.value)}
          label="Img Url"
        />

        <TextField
          value={price}
          onChange={(e) => Setprice(e.target.value)}
          type="number"
          label="price"
          inputProps={{ min: 1 }}
        />

        <div className="flex justify-center ">
          <Button onClick={HandleClickAdd} variant="contained">
            Add Toy{" "}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddToyModal;
