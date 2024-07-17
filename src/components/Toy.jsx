import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Toy = ({ id, img, name, price }) => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex p-4 gap-4 flex-col border-2 transition-transform duration-300 hover:scale-105">
      <div className="flex h-full w-full justify-center items-center ">
        <img
          src={img}
          className="flex justify-center items-center h-3/4  w-1/4"
        />
      </div>
      <div className="text-center space-y-2">
        <div className="space-y-0.5">
          <p></p>
          <p className="text-lg text black">{name}</p>
          <p className="text-slate-500 font/medium"> Price:{price + "KM"}</p>
        </div>
        <Button
          onClick={() => navigate("/Toys/" + id)}
          variant="contained"
          className=""
        >
          Toy details
        </Button>
      </div>
    </div>
  );
};

export default Toy;
