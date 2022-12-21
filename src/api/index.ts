import axios from "axios";
import { Product } from "../model";


// const url = "https://sneakersvilleapi.onrender.com/products";


const BASE_URL = "https://sneakersvilleapi.onrender.com/api";

const user = JSON.parse(localStorage.getItem("persist:root") || '{}')?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

// export const fetchProduct = () => publicRequest.get(`${BASE_URL}/products`);
// export const fetchDetails = (id:string) => publicRequest.get(`${BASE_URL}/products/${id}`);