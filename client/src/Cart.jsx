import React from "react";
import { Form, redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const form = await request.formData();
  const formData = {
    name: form.get("name"),
    address: form.get("address"),
    email: form.get("email"),
    items: form.getAll("items"),
  };
  try {
    const response = await fetch("/api/v1/orders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw new Error("Something went wrong");
  }
  return "1";
};

const Cart = () => {
  return (
    <div className="container">
      <h1 className="text-center">Shopping Form</h1>
      <Form method="post">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <h2 className="text-center">Shopping Items:</h2>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              id="apple"
              name="items"
              value="apple"
              className="custom-control-input"
            />
            <label htmlFor="apple" className="custom-control-label">
              Apple
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              id="banana"
              name="items"
              value="banana"
              className="custom-control-input"
            />
            <label htmlFor="banana" className="custom-control-label">
              Banana
            </label>
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              id="orange"
              name="items"
              value="orange"
              className="custom-control-input"
            />
            <label htmlFor="orange" className="custom-control-label">
              Orange
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Cart;
