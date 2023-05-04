import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";

import App from '../App';
import Product from "../pages/Product";
import Cart from '../pages/Cart';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/product/:type",
        element: <Product />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
]);