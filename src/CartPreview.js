import React from 'react';

const CartPreview = ({ cartItems, onCloseCartPreview }) => {
  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="container">
      <h2>Cart Preview</h2>
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
      <button className="btn btn-primary" onClick={onCloseCartPreview}>
        Close
      </button>
    </div>
  );
};

export default CartPreview;