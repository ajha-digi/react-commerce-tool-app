import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";

import Layout from '../components/Layout'
import App from '../App';
import Products from "../pages/ProductListing";
import Cart from '../pages/Cart';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';


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
                path: "products/:type",
                element: <Products />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ]
    },
]);