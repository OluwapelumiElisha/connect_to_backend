import { publicRequest } from "@/shared/API/Request";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProduct = () => {
  const [product, setproduct] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  async function getAllProduct() {
    setisLoading(true);
    try {
      const res = await publicRequest.get('/getAllProducts')
      // console.log(data);
      setproduct(res?.data);
    } catch (error) {
      console.log(error);
      setisError(true);
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return {
    product,
    isLoading,
    isError,
  };
};
