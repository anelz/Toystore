import { TextField } from "@mui/material";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Register from "../components/Register";
import Publicroute from "../components/Publicroute";
import AdminLogin from "../components/AdminLogin";
const Home = () => {
  return (
    <Publicroute>
      <div className="flex-grow bg-lime-100 w-full flex justify-center gap-10 items-center ">
        <div className="h-2/3 w-1/4 flex bg-blue-400 flex-col rounded-2xl ">
          <Login />
        </div>

        <div className="h-2/3 w-1/4  flex bg-red-300 flex-col  rounded-2xl box-border">
          <div className="h-full w-full flex justify-center">
            <Register />
          </div>
        </div>
        <div className=" h-2/3 w-1/4  flex bg-green-300 flex-col  rounded-2xl box-border">
          <div className="h-full w-full flex justify-center">
            <AdminLogin />
          </div>
        </div>
      </div>
    </Publicroute>
  );
};

export default Home;
