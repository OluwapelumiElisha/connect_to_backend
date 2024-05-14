import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
import {  useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
export const useGetSingleProduct = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:4002/getSingleProduct/${id}`);
      if (!res) {
        console.log(error);
      }
      const data = await res.json();
      setProduct(data.response);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleDelete = async (product) =>{
    console.log(product);
    try {
      let res = await axios.delete(`http://localhost:4002/deleteProduct/${product}`)
      toast({
        title: "Delete Successfully ✔️✔️",
        description: product.title,
      })

    } catch (error) {
      console.log(error);
      toast({
        title: "Error ❌❌",
        description: error.message,
      })
    }
    navigate('/product')
    }
  return {
    product,
    isError,
    isLoading,
    handleDelete
  };
};
