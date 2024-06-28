import React from "react";
import { useLoaderData } from "react-router-dom";
import Order from "./components/Order";

export const loader = async () => {
  let data;
  try {
    const response = await fetch("/api/v1/orders");
    data = await response.json();
  } catch (error) {
    console.log(error);
    data = null;
  }

  return data;
};

const Orders = () => {
  const data = useLoaderData();
  return (
    <div className="container">
      {data.length > 0 ? (
        <table className="responsive-table w-100 text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Order ID</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <Order
                  key={index}
                  name={item.name}
                  order={item._id}
                  status={item.status}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>No orders found</h1>
      )}
    </div>
  );
};

export default Orders;
