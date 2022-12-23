import React, { useState, useEffect } from "react";
import { publicRequest } from "../api";
import { Product } from "../model";

const useFetch = (request:string, req:string) => {
  const requestParam = `/${request}?new=${req}`;
  const [data, setData] = useState<Product[] | null>(null);
  const [isloading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(null);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(requestParam)
        setData(res.data)
        setIsloading(false)
        setIsError(null);
      } catch (error:any) {
        console.log(error)
        setIsloading(false);
        setIsError(error.message);
      }
    }
    getProducts()
  },[request, req])
  return { data, isloading, isError };
};

export default useFetch;