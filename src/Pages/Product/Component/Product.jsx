import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useGetProduct } from "../hook/useGetProduct";

const Product = () => {
  const { isError, isLoading, product } = useGetProduct();

  if (isLoading) {
    return <div className="text-3xl text-black">loading...</div>;
  }
  if (isError) {
    return <div>error...</div>;
  }
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 flex-wrap gap-10">
        {product?.response?.map((product) => {
          return (
            <Link to={`/product/${product._id}`} key={product._id}>
              <div className="mx-auto px-5">
                <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                  <div className="h-[200px]">
                    <img
                      className=" rounded-lg object-cover object-center w-full h-full"
                      src={product.image}
                      alt="product"
                    />
                  </div>
                  <div>
                    <div className="my-6 flex items-center justify-between px-4">
                      <p className="font-bold text-gray-500">{product.title}</p>
                      <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                        $ {product.price}
                      </p>
                    </div>
                    <div className="my-4 flex items-center justify-between px-4">
                      <p className="text-sm font-semibold text-gray-500">
                        {product?.description?.slice(0, 50)}
                      </p>
                    </div>
                    <Button className="bg-transparent border-1 text-black border hover:bg-slate-200">
                      Add TO Cart
                    </Button>

                    {/* <Modal id={product._id} /> */}

                    {/* <div className="my-4 flex items-center justify-between px-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Second option
                    </p>
                    <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                      7
                    </p>
                  </div>
                  <div className="my-4 flex items-center justify-between px-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Third option
                    </p>
                    <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                      1
                    </p>
                  </div>
                  <div className="my-4 flex items-center justify-between px-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Fourth option
                    </p>
                    <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                      23
                    </p>
                  </div> */}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
