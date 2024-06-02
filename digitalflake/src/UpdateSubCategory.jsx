import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateSubCategory = () => {
  const { id } = useParams();
  const [subcategory, setSubCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubCategoryById = async () => {
      try {
        const response = await axios.post('http://localhost:8010/getSubCategoryById', { id });
        setSubCategory(response.data);
      } catch (error) {
        console.error('Error fetching subcategory by ID:', error);
      }
    };

    fetchSubCategoryById();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;
    setSubCategory((prevSubCategory) => ({
      ...prevSubCategory,
      [name]: newValue,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('id', subcategory.id);
      formData.append('subcategoryname', subcategory.subcategoryname);
      formData.append('categoryname', subcategory.categoryname);
      formData.append('status', subcategory.status);
      if (subcategory.image instanceof File) {
        formData.append('image', subcategory.image);
      }

      await axios.post('http://localhost:8010/updateSubCategory', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('SubCategory updated successfully');
      navigate("/subcategory");
    } catch (error) {
      console.error('Error updating subcategory:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h6 className="display-0 text-center">Update SubCategory Form for ID: {id}</h6>
      {subcategory ? (
        <form onSubmit={handleUpdate} className="mx-auto" style={{ maxWidth: '500px', margin: 'auto', padding: '0px', border: '0px solid #ccc', borderRadius: '5px', backgroundColor: '#' }}>
          <div className="mb-3 row align-items-center">
            <label htmlFor="subcategoryname" className="col-sm-2 col-form-label text-end">SubCategory Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="subcategoryname"
                name="subcategoryname"
                value={subcategory.subcategoryname}
                onChange={handleInputChange}
                required
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label htmlFor="categoryname" className="col-sm-2 col-form-label text-end">Category Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control form-control-sm"
                id="categoryname"
                name="categoryname"
                value={subcategory.categoryname}
                onChange={handleInputChange}
                required
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label htmlFor="status" className="col-sm-2 col-form-label text-end">Status:</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control form-control-sm"
                id="status"
                name="status"
                value={subcategory.status}
                onChange={handleInputChange}
                required
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div className="mb-3 row align-items-center">
            <label htmlFor="image" className="col-sm-2 col-form-label text-end">Image:</label>
            <div className="col-sm-10">
              <input
                type="file"
                className="form-control form-control-sm"
                id="image"
                name="image"
                onChange={handleInputChange}
                accept="image/*"
                style={{ width: '100%' }}
              />
              {subcategory.image && !(subcategory.image instanceof File) && (
                <img
                  src={`data:image/jpeg;base64,${subcategory.image}`}
                  alt="Subcategory"
                  className="mt-2"
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              )}
              {subcategory.image instanceof File && (
                <img
                  src={URL.createObjectURL(subcategory.image)}
                  alt="Subcategory"
                  className="mt-2"
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              )}
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-12 text-center">
              <button type="submit" className="btn btn-primary">Update SubCategory</button>
            </div>
          </div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdateSubCategory;
