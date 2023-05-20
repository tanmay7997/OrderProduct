import React from 'react';

const ProductDetails = ({ selectedProduct, onAddToCart }) => {
  if (!selectedProduct) {
    return <div>Please select a product.</div>;
  }

  return (
    <div className="container">
      <h2>Product Details</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{selectedProduct.name}</h5>
          <p className="card-text">Price: {selectedProduct.price}</p>
          <p className="card-text">Description: {selectedProduct.description}</p>
          <button className="btn btn-primary" onClick={() => onAddToCart(selectedProduct)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;