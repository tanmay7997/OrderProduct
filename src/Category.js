import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ categories, handleCategorySelect, selectedCategory }) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.categoryId}>
            <Link
              to={`/subcategories/${category.categoryId}`}
              className={selectedCategory?.categoryId === category.categoryId ? 'active' : ''}
              onClick={() => handleCategorySelect(category)}
            >
              {category.categoryName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;