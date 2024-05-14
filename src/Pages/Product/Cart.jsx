import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [carts, setCarts] = useState([]);

    async function getCart() {
        try {
            const res = await fetch('http://localhost:4002/get-All-carts');
            const data = await res.json();
            console.log(data, '17');
            setCarts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCart();
    }, []);

    return (
        <div>
            
                <div className="bg-white shadow-lg  flex flex-wrap">
          {carts?.response?.map((item, index) => (
            <div key={index} className="flex justify-between ">
              <div className="flex flex-col">
                <div className="">
                <img className="h-24.5 w-24.5" src={item.image} alt="Product" />
                <div>
                <h1 className=" text-3xl text-black">{item.title}</h1>
                <p className="text-lg m-3">{item.description}</p>
                <div className="mt-4"></div>
              </div>
              
                  <p>${item.price}</p>
                  <button className="text-red-500">Remove</button>
                </div>
              </div>
              <div className="flex items-center">
                {/* <button className="border p-1">-</button> */}
                <input
                  type="text"
                  readOnly
                  value={item.quantity}
                  className="w-8 text-center"
                />
                {/* <button className="border p-1">+</button> */}
              </div>
            </div>
          ))}
        </div>
                   
            
        </div>
    );
}

export default Cart;
