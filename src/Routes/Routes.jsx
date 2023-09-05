import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";


import Login from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Carts from "../pages/Carts/Carts";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
          
        },
        {
          path:'/carts',
          element: <Carts></Carts>
        }
      ]
    },
  ]);

  export default router;