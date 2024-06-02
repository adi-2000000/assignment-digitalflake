import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.post('http://localhost:8010/getProductById', { id });
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product by ID:', error);
      }
    };

    fetchProductById();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      // Assuming your backend endpoint for updating is something like 'http://localhost:8010/updateProduct'
      // Adjust the endpoint based on your backend API
      await axios.post('http://localhost:8010/updateproduct', product);
      console.log('Product updated successfully');
      navigate('/product');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
    <h1 style={{ fontSize: '24px', marginBottom: '15px' }}>Update Form for Product ID: {id}</h1>
    {product ? (
      <form>
        <label style={{ display: 'block', margin: '5px 0' }}>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
  
        <label style={{ display: 'block', margin: '5px 0' }}>Packsize:</label>
        <input type="text" name="packsize" value={product.packsize} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
  
        <label style={{ display: 'block', margin: '5px 0' }}>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
  
        <label style={{ display: 'block', margin: '5px 0' }}>MRP:</label>
        <input type="text" name="mrp" value={product.mrp} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
  
        {/* <label style={{ display: 'block', margin: '5px 0' }}>Image:</label> */}
        <input type="hidden" name="image" value={product.image} onChange={handleInputChange} />
  
        <label style={{ display: 'block', margin: '5px 0' }}>Status:</label>
        <input type="text" name="status" value={product.status} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
         <br />
        {/* Other form fields go here */}
  
        <button type="button" onClick={handleUpdate} style={{ padding: '8px 15px', backgroundColor: '#007bff', color: '#fff', borderRadius: '3px', cursor: 'pointer' }}>
          Update
        </button>
      </form>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  
  );
};

export default UpdateForm;
