import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddCategory.css'; // Import your CSS file

const AddCategoryForm = () => {
    const navigate = useNavigate();

  // State to manage form data
  const [categoryData, setCategoryData] = useState({
    name: '',
    description: '',
    status: 1, // Assuming 1 is the default status
  });

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the backend endpoint
      await axios.post('http://localhost:8010/saveCategory', categoryData);

      // Optionally, you can handle success (e.g., show a success message, redirect, etc.)
      console.log('Category added successfully');
      navigate('/category');
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error adding category:', error);
    }
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={categoryData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name="description"
            value={categoryData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <br />

        <label>
          Status:
          <select
            name="status"
            value={categoryData.status}
            onChange={handleInputChange}
            required
          >
            <option value={1}>Active</option>
            <option value={0}>Inactive</option>
          </select>
        </label>
        <br />

        <button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px', borderRadius: '3px', cursor: 'pointer' }}>
  Add Category
</button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
