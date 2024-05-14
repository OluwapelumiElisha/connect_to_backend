import About from "@/Pages/About";
import Error from "@/Pages/Error";
import Home from "@/Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Cart from "@/Pages/Product/Cart";
import Product from "@/Pages/Product/Component/Product";
import SingleProduct from "@/Pages/Product/Slug";
import DashboardPage from "@/Pages/Dashboard/DashboardPage";
import CreateProduct from "@/Pages/Dashboard/Create-Product";
import FromCom from "@/Pages/Dashboard/Create-Product/Components/FromCom";
import CreatePDFs from "@/Pages/PDF";
import AuthPage from "./AuthPage";
import Signup from "@/Pages/Auth/Signup";
import Login from "@/Pages/Auth/Login";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product",
        element: <Product/>,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path:'/cart',
        element: <Cart/>
      },
      {
        path : 'pdf',
        element: <h1>Hello, Here are all ur PDfs</h1>
      }
    ],
  },
  {
    path: "/Dashboard",
    element: <DashboardPage />,
    children: [
      {
        index: true,
        element: <h1>U Welcome to Our Dashboard</h1>,
      },
      {
        path: "Settings",
        element: <h1>U Welcome to Our Dashboard Settings</h1>,
      },
      {
        path: "Profile",
        element: <h1>U Welcome to Our Dashboard Profile</h1>,
      },
      {
        path: "Create-Product",
        element: <FromCom/>,
      },
      {
       path: 'pdf',
        element : <CreatePDFs/>
      }
    ],
  },
  {
    path: 'auth',
    element : <AuthPage/>,
    children :[
      {
        path : "login",
        element : <Login/>
      },{
        path : 'signup',
        element : <Signup/>
      }
    ]
  },
  {
    path: "*",
    element: <Error />,
  },
  
]);
