// ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
console.log("test");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8010/getallproduct');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once when the component mounts


    const handleDelete = async (id) => {
      const isConfirmed = window.confirm('Are you sure you want to delete this product?');
    
      if (!isConfirmed) {
        return; // User cancelled the deletion
      }
    try {
      // Assuming your backend endpoint for deleting is something like 'http://localhost:8010/deleteproductbyid'
      // Adjust the endpoint based on your backend API
      await axios.post('http://localhost:8010/deleteproductbyid', { id });
      console.log('Product deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  

  const handleEdit = (id) => {
    navigate(`/updateform/${id}`);
  };
  const handleAddProduct = () => {
    // Navigate to the AddProductForm route
    // history.push('/addproduct');
    navigate("/addproduct");
  };

  

  

  return (
    <div className="container mt-5">
       <div className="heading-and-button">
        <h1 className="text-center mb-9">Product List</h1>
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Add Now
        </button>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Packsize</th>
            <th>Category</th>
            <th>MRP</th>
            <th>Image</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.packsize}</td>
              <td>{product.category}</td>
              <td>{product.mrp}</td>
              <td>
                <img
                  src={`data:image/jpeg;base64,${product.image && product.image.toString('base64')}`}
                  alt="Product"
                  style={{ maxWidth: '50px', maxHeight: '50px' }}
                />
              </td>
              <td>{product.status}</td>
              <td>
                <button className="btn btn-warning mr-2" onClick={() => handleEdit(product.id)}>
                  Update
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
