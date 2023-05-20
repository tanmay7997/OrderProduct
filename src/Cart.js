import React from 'react';

const Cart = ({ cartItems, handleClearCart, setShowCartPreview }) => {
  const handleClearCartClick = () => {
    handleClearCart();
  };

  const handleCartPreviewClick = () => {
    setShowCartPreview(true);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <p>Total Items: {cartItems.length}</p>
          <button className="clear-cart-btn" onClick={handleClearCartClick}>
            Clear Cart
          </button>
          <button className="cart-preview-btn" onClick={handleCartPreviewClick}>
            Cart Preview
          </button>
        </div>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;