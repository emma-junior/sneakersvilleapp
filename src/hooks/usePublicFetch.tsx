import { useState, useEffect } from "react";
import { publicRequest } from "../api";
import { Product } from "../model";

const useFetch = (request: string, req: string, cat: string) => {
  const requestParam = `/${request}?new=${req}&&category=${cat}`;
  const [data, setData] = useState<Product[] | null>(null);
  const [isloading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(requestParam);
        setData(res.data);
        setIsloading(false);
        setIsError(null);
      } catch (error: any) {
        console.log(error);
        setIsloading(false);
        setIsError(error.message);
      }
    };
    getProducts();
  }, [request, req, cat, requestParam]);
  return { data, isloading, isError };
};

export default useFetch;
