import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddSubcategoryForm = () => {
  const [subcategory, setSubcategory] = useState({
    subcategoryname: '',
    categoryname: '',
    status: 0,
    image: null, // Change to null to handle file input
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // If the input is a file, set the value to the file itself
    const newValue = type === 'file' ? e.target.files[0] : value;

    setSubcategory({ ...subcategory, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('subcategoryname', subcategory.subcategoryname);
      formData.append('categoryname', subcategory.categoryname);
      formData.append('status', subcategory.status);
      formData.append('image', subcategory.image);

      await axios.post('http://localhost:8010/savesubcategory', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Subcategory added successfully!');
      // Optionally, you can redirect to the subcategory list page or perform other actions after successful submission.
    } catch (error) {
      console.error('Error adding subcategory:', error);
      alert('Error adding subcategory. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center ms-3" style={{ marginRight: '500px' }}>Add Subcategory</h1>
      <form onSubmit={handleSubmit} className="mx-auto">
        <div className="mb-3 row align-items-center">
          <label htmlFor="subcategoryname" className="col-sm-2 col-form-label text-end">Subcategory Name:</label>
          <div className="col-sm-4">
            <input type="text" className="form-control form-control-sm" id="subcategoryname" name="subcategoryname" value={subcategory.subcategoryname} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label htmlFor="categoryname" className="col-sm-2 col-form-label text-end">Category Name:</label>
          <div className="col-sm-4">
            <input type="text" className="form-control form-control-sm" id="categoryname" name="categoryname" value={subcategory.categoryname} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label htmlFor="status" className="col-sm-2 col-form-label text-end">Status:</label>
          <div className="col-sm-4">
            <input type="number" className="form-control form-control-sm" id="status" name="status" value={subcategory.status} onChange={handleChange} required />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label htmlFor="image" className="col-sm-2 col-form-label text-end">Image:</label>
          <div className="col-sm-4">
            <input type="file" className="form-control form-control-sm" id="image" name="image" onChange={handleChange} accept="image/*" required />
            {subcategory.image && <img src={URL.createObjectURL(subcategory.image)} alt="Subcategory" className="mt-2" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary" style={{ marginRight: '700px' }}>Add Subcategory</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSubcategoryForm;
