import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import SheetCart from "./SheetCart";
const Display = ({id, productCart}) => {
    const [dataRes, setdataRes] = useState();
    // console.log(id,'rtyui');
  async  function handleshow() {
        const res = await fetch(
        `http://localhost:4002/getSingleProduct/${id}`
      );
      const data = await res.json();
      setdataRes(data)
      console.log(productCart, "here i am ");
    }
 async   function handleChart() {
      console.log(productCart, 'werty');
      try {
          const res = await fetch('http://localhost:4002/create-cart',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productCart),
     })
     const datares = await res.json()
     console.log(datares);
     
        toast({
            title: "Add to Chart Successfully ✔️✔️",
            description: productCart.title,
          });
      } catch (error) {
        console.log(error);
      }
    
        
    }
    
  return (
    <div>
        
            <Dialog>
        <DialogTrigger className="border-4 p-2 bg-blue-800" onClick={()=> handleshow()} >Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
          <div className="flex flex-wrap " >
          {
            dataRes && dataRes.response && (
                <div className="mx-auto  w-[900px] ">
            <div className="max-w-xs cursor-pointer rounded-lg bg-white w-[1200px]  p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
              <img
                className=" m-auto w-[250px] h-[250px]"
                src={dataRes.response.image}
                alt="product"
              />
              <div>
                <div className="my-1 flex items-center justify-between px-1">
                  <p className="font-bold text-gray-500">
                    {dataRes.response.title}
                  </p>
                  <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                    ${dataRes.response.price}
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <h1 className="text-bg font-bold text-gray-900">
                  </h1>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">
                    {dataRes.response.description.slice(0,220)}
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                    <Button onClick={handleChart}>Add To Chart</Button>
                </div>
              </div>
            </div>
          </div>
            )
          } 
      </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
        
      
    </div>
  );
};

export default Display;
