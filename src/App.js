import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import OrderList from './OrderList';
import OrderSummary from './OrderSummary';
import Cart from './Cart';
import CartPreview from './CartPreview';
import ProductDetails from './ProductDetails';
import Toast from './Toast';
import Loader from './Loader';
import './App.css';

const CategoryList = () => {
  const [categories] = useState([
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' }
  ]);

  return (
    <div className="container">
      <h2>Category List</h2>
      <ul className="list-group">
        {categories.map(category => (
          <li key={category.id} className="list-group-item">
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SubCategoryList = () => {
  const [subCategories] = useState([
    { id: 1, categoryId: 1, name: 'SubCategory 1' },
    { id: 2, categoryId: 1, name: 'SubCategory 2' },
    { id: 3, categoryId: 2, name: 'SubCategory 3' }
  ]);

  const { categoryId } = useParams();

  const filteredSubCategories = subCategories.filter(subCategory => subCategory.categoryId === Number(categoryId));

  return (
    <div className="container">
      <h2>SubCategory List</h2>
      <ul className="list-group">
        {filteredSubCategories.map(subCategory => (
          <li key={subCategory.id} className="list-group-item">
            <Link to={`/products/${subCategory.id}`}>{subCategory.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductList = () => {
  const [products] = useState([
    { id: 1, subCategoryId: 1, name: 'Product 1' },
    { id: 2, subCategoryId: 1, name: 'Product 2' },
    { id: 3, subCategoryId: 2, name: 'Product 3' }
  ]);

  const { subCategoryId } = useParams();

  const filteredProducts = products.filter(product => product.subCategoryId === Number(subCategoryId));

  return (
    <div className="container">
      <h2>Product List</h2>
      <ul className="list-group">
        {filteredProducts.map(product => (
          <li key={product.id} className="list-group-item">{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <Link className="navbar-brand" to="/categories">
            E-commerce App
          </Link>
        </nav>

        <Routes>
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/:categoryId" element={<SubCategoryList />} />
          <Route path="/products/:subCategoryId" element={<ProductList />} />
          {/* Add additional routes here */}
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart-preview" element={<CartPreview />} />
          <Route path="/product-details/:productId" element={<ProductDetails />} />
        </Routes>

        {/* Add toast, loader, or other common components here */}
        <Toast />
        <Loader />
      </div>
    </Router>
  );
};

export default App;