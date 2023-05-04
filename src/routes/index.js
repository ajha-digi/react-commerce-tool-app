import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";

import Layout from '../components/Layout'
import App from '../App';
import Product from "../pages/Product";
import Cart from '../pages/Cart';
import ErrorPage from '../pages/ErrorPage';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "product/:type",
                element: <Product />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ]
    },
]);