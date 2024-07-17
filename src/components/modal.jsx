import React from "react";
import DangerousIcon from '@mui/icons-material/Dangerous';

const Modal =({open, close})=> {

  return open? <div className="modal">
    <div onClick={close} className="modal2">
    <div className="  h-2/3 w-full bg-slate-50 border-2  rounded-t-lg ">
      <div className="h-full w-full flex justify-center ">
      <img className="image1" src="https://www.dexyco.ba/files/watermark/files/images/slike_proizvoda/media/IM9/IM93881/images/thumbs_w/IM93881_1_w_800_800px.jpg" alt=""  />
      </div>
    </div>
    <div className=" flex justify-center items-center h-1/2 w-full flex-col gap-5 bg-slate-50 border-2 ">
      <span className="flex justify-center">Unicorn </span>
      <button  className="h-10 w-1/4 bg-green-600 rounded-2xl">
        <span className="h-full w-fulL text-white">Add to Cart
        </span>
      </button>
    </div>
    </div>
  </div>:null
}



export default Modal;