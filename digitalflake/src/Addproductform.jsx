import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    packsize: '',
    category: '',
    mrp: '',
    image: null, // Change to null to handle file input
    status: 0,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // If the input is a file, set the value to the file itself
    const newValue = type === 'file' ? e.target.files[0] : value;

    setProduct({ ...product, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('packsize', product.packsize);
      formData.append('category', product.category);
      formData.append('mrp', product.mrp);
      formData.append('image', product.image);
      formData.append('status', product.status);

      await axios.post('http://localhost:8010/saveproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Product added successfully!');
      // Optionally, you can redirect to the product list page or perform other actions after successful submission.
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
   
    <div className="container mt-5">
    <h1 className="display-4 text-center ms-3" style={{ marginRight: '500px' }}>Add Product</h1>
  
    <form onSubmit={handleSubmit} className="mx-auto">
      <div className="mb-3 row align-items-center">
        <label htmlFor="name" className="col-sm-2 col-form-label text-end">Product Name:</label>
        <div className="col-sm-4">
          <input type="text" className="form-control form-control-sm" id="name" name="name" value={product.name} onChange={handleChange} required />
        </div>
      </div>
      <div className="mb-3 row align-items-center">
        <label htmlFor="packsize" className="col-sm-2 col-form-label text-end">Packsize:</label>
        <div className="col-sm-4">
          <input type="text" className="form-control form-control-sm" id="packsize" name="packsize" value={product.packsize} onChange={handleChange} required />
        </div>
      </div>
      <div className="mb-3 row align-items-center">
        <label htmlFor="category" className="col-sm-2 col-form-label text-end">Category:</label>
        <div className="col-sm-4">
          <input type="text" className="form-control form-control-sm" id="category" name="category" value={product.category} onChange={handleChange} required />
        </div>
      </div>
      <div className="mb-3 row align-items-center">
        <label htmlFor="mrp" className="col-sm-2 col-form-label text-end">MRP:</label>
        <div className="col-sm-4">
          <input type="text" className="form-control form-control-sm" id="mrp" name="mrp" value={product.mrp} onChange={handleChange} required />
        </div>
      </div>
      <div className="mb-3 row align-items-center">
        <label htmlFor="image" className="col-sm-2 col-form-label text-end">Image:</label>
        <div className="col-sm-4">
          <input type="file" className="form-control form-control-sm" id="image" name="image" onChange={handleChange} accept="image/*" required />
          {product.image && <img src={URL.createObjectURL(product.image)} alt="Product" className="mt-2" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        </div>
      </div>
      <div className="mb-3 row align-items-center">
        <label htmlFor="status" className="col-sm-2 col-form-label text-end">Status:</label>
        <div className="col-sm-4">
          <input type="number" className="form-control form-control-sm" id="status" name="status" value={product.status} onChange={handleChange} required />
        </div>
      </div>
      <div className="mb-3 row">
        <div className="col-sm-10 offset-sm-2">
          <button type="submit" className="btn btn-primary" style={{ marginRight: '700px' }}>Add Product</button>
        </div>
      </div>
    </form>
  </div>
  
  

    );
  };
  
  export default ProductForm;