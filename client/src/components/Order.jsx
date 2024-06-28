import React from "react";

const Order = ({ name, order, status }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{order}</td>
      <td>{status}</td>
      <td>
        <button className="btn btn-primary ">Send email</button>
      </td>
    </tr>
  );
};

export default Order;
