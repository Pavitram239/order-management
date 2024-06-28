import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart, { action as cartAction } from "./Cart";
import Orders, { loader as orderLoader } from "./Orders";

const router = createBrowserRouter([
  { path: "", element: <Orders />, loader: orderLoader },
  { path: "/cart", element: <Cart />, action: cartAction },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
