import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { listItemSecondaryActionClasses } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();

  const HandleLogOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    navigate(ROUTES.HOME);
  };

  return (
    <div className="flex w-full  ">
      <div className=" h-full flex w-1/2 bg-lime-500 gap-20 p-4 ">
        <div
          className="font-bold text-2xl cursor-pointer "
          onClick={() => {
            navigate("/Home");
          }}
        >
          Toystore
        </div>
        <div
          className=" flex h-full cursor-pointer items-end font-semibold"
          onClick={() => {
            navigate("/About");
          }}
        >
          About
        </div>
        <div
          className="flex h-full cursor-pointer items-end font-semibold"
          onClick={() => {
            navigate("/Toys");
          }}
        >
          Toys
        </div>
        <div
          className="flex h-full cursor-pointer items-end font-semibold"
          onClick={() => {
            navigate("/Contacts");
          }}
        >
          Contacts
        </div>
      </div>
      <div className=" h-full flex w-1/2 bg-lime-500 justify-center gap-10 p-4">
        <div className="flex h-full   items-end  font-bold">Cart</div>
        <div className="flex h-full cursor-pointer items-end">
          <ShoppingCartIcon onClick={() => navigate(ROUTES.CART)} />
        </div>
        <span className="flex items-end text-cyan-50 text-l"></span>
        <div className="flex h-full  items-end">
          {(!!localStorage.getItem("userId") ||
            !!localStorage.getItem("role")) && (
            <button
              onClick={HandleLogOut}
              className="flex items-end text-xl text-blue-700 cursor-pointer"
              variant="text"
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
