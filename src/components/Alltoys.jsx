import { useNavigate } from "react-router-dom";

const Alltoys = () => {
  const navigate = useNavigate();

  return (
    <div className=" h-1/6 w-full flex justify-center gap-6 border-b  p-7 ">
      <div className="flex h-12 w-full  font-bold text-l cursor-pointe text-xl">
        <div className="flex  h-12 w-1/4 rounded-xl justify-center text-3xl">
          All Toys
        </div>
      </div>
    </div>
  );
};

export default Alltoys;
