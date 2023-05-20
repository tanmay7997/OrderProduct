import React from 'react';

const Product = ({ products, onSelectProduct }) => {
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <button className="btn btn-primary" onClick={() => onSelectProduct(product)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;