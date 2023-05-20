import React from 'react';

const OrderSummary = ({ cartItems }) => {
  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container">
      <h2>Order Summary</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total Amount: {totalAmount}</h4>
    </div>
  );
};

export default OrderSummary;