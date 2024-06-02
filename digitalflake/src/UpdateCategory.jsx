import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const UpdateCategory = () => {
    const { id } = useParams();
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryById = async () => {
      try {
        const response = await axios.post('http://localhost:8010/getCotegoryById', { id });
        setCategory(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching category by ID:', error);
      }
    };

    fetchCategoryById();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      // Assuming your backend endpoint for updating category is something like 'http://localhost:8010/updateCategory'
      // Adjust the endpoint based on your backend API
      await axios.post('http://localhost:8010/updatecotegory', category);
      console.log('Category updated successfully');
      // You might want to navigate or perform other actions after updating
      navigate("/category");
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '15px' }}>Update Category Form for ID: {id}</h1>
      {category ? (
      <form>
      {/* Update form fields for category go here */}
      <label style={{ display: 'block', margin: '5px 0' }}>Category Id:</label>
      <input type="text" name="id" value={category.id} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
      <label style={{ display: 'block', margin: '5px 0' }}>Category Name:</label>
      <input type="text" name="name" value={category.name} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
      
      <label style={{ display: 'block', margin: '5px 0' }}>Category Description:</label>
      <input type="text" name="description" value={category.description} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
      
      <label style={{ display: 'block', margin: '5px 0' }}>Category Status:</label>
      <input type="text" name="status" value={category.status} onChange={handleInputChange} style={{ marginBottom: '10px' }} />
      <br />
      <button
        type="button"
        onClick={handleUpdate}
        style={{
          padding: '8px 15px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '3px',
          cursor: 'pointer',
        }}
      >
        Update Category
      </button>
    </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdateCategory;
