import { TextField, TextareaAutosize } from "@mui/material";
import Alltoys from "../components/Alltoys";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import Toy from "../components/Toy";
import axios from "axios";
import { getToys } from "../api/Toys";
import PrivateRoute from "../components/PrivateRoute";

const Toys = () => {
  const [search, setSearch] = useState("");
  const [toys, setToys] = useState([]);

  const fetchtoys = async () => {
    const { data } = await getToys();
    setToys(data);
  };

  useEffect(() => {
    fetchtoys();
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-col gap-4">
        <div className=" w-full flex justify-center pt-8">
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            label="Search product"
            className="w-1/2  "
          />
        </div>
        <Alltoys />
        <div className="grid  p-4 gap-4 ">
          {toys
            .filter(({ name }) =>
              name?.toLowerCase().includes(search.toLowerCase())
            )
            .map((toy) => {
              return (
                <Toy
                  key={toy._id}
                  id={toy._id}
                  name={toy.name}
                  img={toy.img}
                  price={toy.price}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Toys;
