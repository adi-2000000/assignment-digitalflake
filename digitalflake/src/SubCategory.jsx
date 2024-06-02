// SubCategoryList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubCategory = () => {
  const [subcategories, setSubcategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8010/getallsubcategory');
        setSubcategories(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once when the component mounts

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this subcategory?');

    if (!isConfirmed) {
      return; // User cancelled the deletion
    }
    try {
      // Assuming your backend endpoint for deleting is something like 'http://localhost:8010/deletesubcategorybyid'
      // Adjust the endpoint based on your backend API
      await axios.post('http://localhost:8010/deletesubcategorybyid', { id });
      console.log('Subcategory deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting subcategory:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/updatesubcategory/${id}`);
  };

  const handleAddSubCategory = () => {
    navigate("/addsubcategory");
  };

  return (
    <div className="container mt-5">
      <div className="heading-and-button">
        <h1 className="text-center mb-4">SubCategory List</h1>
        <button className="btn btn-primary" onClick={handleAddSubCategory}>
          Add Now
        </button>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>SubCategory Name</th>
            <th>Category Name</th>
            <th>Status</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subcategories.map((subcategory) => (
            <tr key={subcategory.id}>
              <td>{subcategory.id}</td>
              <td>{subcategory.subcategoryname}</td>
              <td>{subcategory.categoryname}</td>
              <td>{subcategory.status}</td>
              <td>
                <img
                  src={`data:image/jpeg;base64,${subcategory.image && subcategory.image.toString('base64')}`}
                  alt="Subcategory"
                  style={{ maxWidth: '50px', maxHeight: '50px' }}
                />
              </td>
              <td>
                <button className="btn btn-warning mr-2" onClick={() => handleEdit(subcategory.id)}>
                  Update
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(subcategory.id)}>
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

export default SubCategory;
