import Axios from "./Axios";

export const getToys = () => Axios.get("/toys");

export const getToysDetails = (toyId) => Axios.get("/:toyId" + toyId);

export const createToy = () => Axios.post("/toys");
