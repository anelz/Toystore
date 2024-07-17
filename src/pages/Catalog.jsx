import { TextField } from "@mui/material";
import Alltoys from "../components/Alltoys";
import Footer from "../components/Footer";
import { useState } from "react";
import Toys from "./Toys";
import AllToys from "./Toys";

const Catalog = () => {
  const [search, Setsearch] = useState("");

  return (
    <div className="h-screen  w-full flex flex-col">
      <AllToys />
    </div>
  );
};

export default Catalog;
