import React from 'react';

const OrderList = ({ cartItems, onRemoveItem, onShowCartPreview, onShowOrderSummary }) => {
  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="container">
      <h2>Order List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-danger" onClick={() => onRemoveItem(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={onShowCartPreview}>
        View Cart Preview
      </button>
      <button className="btn btn-primary" onClick={onShowOrderSummary}>
        View Order Summary
      </button>
    </div>
  );
};

export default OrderList;