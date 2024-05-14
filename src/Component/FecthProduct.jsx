import React, { useEffect, useState } from "react";
import logo from "../assets/ZION ELISHA.png";
import Display from "./Display";
import SheetCart from "./SheetCart";


const FecthProduct = ({reaction}) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [product, setProduct] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [isError, setisError] = useState(false);
  useEffect(() => {
    getData();
  }, [reaction]);

  const getData = async () => {
    setisloading(true);
    try {
      const res = await fetch(`${url}/getAllProducts`);
      const datares = await res.json();
      console.log(datares);
      if (!datares) {
        setisError(true);
      }

      setProduct(datares);
      if (product) {
        console.log(product, "rtyuertyu");
      }
    } catch (error) {
      console.log(error);
      setisError(true);
    } finally {
      setisloading(false);
    }
  };
  if (isloading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Something Went Wrong</h1>;
  }
  // async function handleAdd(message) {
  //   demo.innerHTML = `${i++}`;
  //   alert(message);
  //   const res = await fetch(
  //     `http://localhost:4002/getSingleProduct/${message}`
  //   );
  //   const data = await res.json();
  //   console.log(data);
  //   chart.push(data);
  // }

 
  return (
    <div>
      <div className="first">
        <div className="second">
          <img src={logo}   alt="" />
          <h1 >ZION PRODUCT</h1>
          <div className="chart">
            <SheetCart></SheetCart>
            <h1 id="demo"></h1>
          </div>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap" id="hello">
        {product.response?.map((prod, i) => (
          //   <div
          //     key={i + prod._id}
          //     className="max-w-sm rounded overflow-hidden shadow-lg"
          //   >

          //     <img
          //       className="w-[250px] h-[250px]"
          //       src={prod?.image}
          //       alt={prod.description}
          //     />
          //     <div className="px-6 py-4">
          //       <div className="font-bold text-xl mb-2">{prod.title}</div>
          //       <p className="text-gray-700 text-base">{prod.description}</p>
          //     </div>
          //     <div className="px-6 pt-4 pb-2">
          //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          //         {prod.category}
          //       </span>
          //       <span className='ms-28 text-blue-500'>${prod.price}</span> <br /> <br />
          //       <button  onClick={() => handleAdd(`${prod._id}`)} className='ms-24 rounded-lg border border-gray-300 p-4 bg-blue-500 p-2 text-white'>ADD TO CHART</button>

          //            </div>
          // </div>
          <div className="mx-auto px-5">
            <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
              <img
                className=" rounded-lg object-cover object-center w-[300px] h-[280px]"
                src={prod?.image}
                alt="product"
              />
              <div>
                <div className="my-6 flex items-center justify-between px-4">
                  <p className="font-bold text-gray-500">
                    {product.response.title}
                  </p>
                  <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                    ${prod.price}
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <h1 className="text-bg font-bold text-gray-900">
                    {prod.title}
                  </h1>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  <p className="text-sm font-semibold text-gray-500">
                    {prod.description.slice(0, 190)}
                  </p>
                </div>
                <div className="my-4 flex items-center justify-between px-4">
                  

                  <Display id={prod._id} productCart={prod}/>
                  
                </div>
                {/* <div className="my-4 flex items-center justify-between px-4">
              <p className="text-sm font-semibold text-gray-500">Fourth option</p>
              <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">23</p>
            </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex  items-center justify-center bg-gray-100"></div>
      <div id="show"></div>
    </div>
  );
};
export default FecthProduct;
