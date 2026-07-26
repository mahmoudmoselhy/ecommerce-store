

import { createBrowserRouter } from "react-router-dom"; 



import Layout from "../layout/layout"

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register"
import Profile from "../pages/Profile"
import Cart from "../pages/Cart"
import ConfirmedOrder from "../pages/ConfirmedOrder"
import Checkout from "../pages/Checkout";
import About from "../pages/About"
import Contact from "../pages/Contact"

import ProductDetails from "../pages/ProductDetails"
import BlogPage from "../pages/BlogPage";









const Router = createBrowserRouter([
    {
        path:"/",
        element :<Layout/>,
        children :[
            {
                element : <Home/> , index:true
            },

            {

                path :"shop" , element :<Shop/>
            },
            {
                path : "product/:id" , element : <ProductDetails/>
            },
            {
                path: "login" , element : <Login/>

            },
            {
                path : "register" , element : <Register/>

            },
            {
                path :"me" , element :<Profile/>
            },
            {
                path: "cart", element : <Cart/>
            },
            {
                path:"cart/checkout/ordercomplete",element:<ConfirmedOrder/>
            },
            {
                path:"cart/checkout" , element: <Checkout/>
            },
            {
                path:"about",element: <About/>
            },
            {
                path: "contact", element:<Contact/>
            },
            {
                path: "blogs" , element : <BlogPage/>
            },

        ]
    }
])




export default Router;