import axios from "axios";
import { Product } from "../model";

const url = "https://sneakersvilleapi.onrender.com/products";

export const fetchProduct = () => axios.get(url);
export const fetchCart = () => axios.get(`${url}/cart`)
export const fetchDetails = (id:string) => axios.get(`${url}/details/${id}`);
export const createCart = (newCart:Product) => axios.post(`${url}/cart`, newCart);
export const delCart = (id:string) => axios.delete(`${url}/cart/${id}`);
export const incQty = (id:string) => axios.patch(`${url}/cart/${id}/incQty`);
export const decQty = (id:string) => axios.patch(`${url}/cart/${id}/decQty`);