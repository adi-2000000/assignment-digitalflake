// Category.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import UpdateCategory from './UpdateCategory'; // Import the UpdateCategory component
import './Cotegory.css'; // Import the CSS file

const Category = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8010/getAllCategory');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddProduct = () => {
    navigate('/addcategory');
  };

  const handleUpdateProduct = (id) => {
    // Use React Router to navigate to the update form
    navigate(`/updatecategory/${id}`);
  };

  const handleDeleteProduct = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this Category?');
  
    if (!isConfirmed) {
      return; // User cancelled the deletion
    }
    try {
      // Perform the delete operation
      await axios.post('http://localhost:8010/deleteCategoryById', { id });

      console.log('Product deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="heading-and-button">
        <h1 className="text-center mb-9">Category List</h1>
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Add Now
        </button>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.status}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdateProduct(product.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* React Router Route for UpdateCategory component */}
      <Link to="/updatecategory/:id" component={UpdateCategory} />
    </div>
  );
};

export default Category;
