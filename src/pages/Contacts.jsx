import { TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const HandleClickAdd = async (e) => {
    try {
      await axios.post("http://localhost:3001/comments", {
        name,
        email,
        text,
        number,
      });
    } catch (e) {
      alert(e?.response?.data);
    }

    const HandelClickClose = () => {
      setName("");
      setEmail("");
      setText("");
      setNumber("");
    };
  };
  return (
    <div className="flex-1 flex flex-col gap-6 p-4">
      <span className=" h-1/6 flex w-full justify-center text-4xl p-8 ">
        Contact us
      </span>
      <span className="flex justify-center text-2xl p-8  ">
        Leave a Message
      </span>
      <div className="w-full flex justify-center">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="name"
          className=" flex w-1/2 "
        />
      </div>
      <div className="w-full flex justify-center">
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          className=" flex w-1/2 "
        />
      </div>
      <div className="w-full flex justify-center">
        <TextField
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          label="Contact number"
          className=" flex w-1/2 "
          inputProps={{ min: 0 }}
        />
      </div>
      <div className="h-1/4 w-full flex justify-center">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="  w-1/2 border-2 border-blue-300"
          label="Comment"
          minLength={360}
          name=""
          id="textarea"
        ></textarea>
      </div>
      <div className="h-1/2 w-full flex justify-center items-center">
        <Button onClick={HandleClickAdd} className="h-2/4 " variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Contacts;
