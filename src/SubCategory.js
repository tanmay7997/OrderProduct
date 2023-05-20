import React from 'react';

const SubCategory = ({ subCategories, onSelectSubCategory, loading, error }) => {
  if (loading) {
    return <div>Loading subcategories...</div>;
  }

  if (error) {
    return <div>Error loading subcategories. Please try again.</div>;
  }

  return (
    <div className="container">
      <h2>Subcategories</h2>
      <div className="row">
        {subCategories.map((subcategory) => (
          <div className="col-md-4" key={subcategory.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{subcategory.name}</h5>
                <button className="btn btn-primary" onClick={() => onSelectSubCategory(subcategory.id)}>
                  View Products
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;