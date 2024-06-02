import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Category from './Category';
import './App.css';
import Navbar from './Navbar';
import ProductList from './Product';
import AddProductForm from './Addproductform';
import UpdateForm from './UpdateForm';
import HomePage from './HomePage';
import AddCategory from './AddCategory';
import UpdateCategory from './UpdateCategory';
import ForgotPassword from './ForgetPassword';
import Login from './login';
import SubCategory from './SubCategory';
import AddSubcategoryForm from './AddSubcategoryForm';
import UpdateSubCategory from './UpdateSubCategory';

// Create a separate component for rendering the Sidebar
const AppWithSidebar = () => {
  const location = useLocation();

  // Check if the current route is the login page
  const isLoginPage = location.pathname === '/login';
  const isForgotPasswordPage = location.pathname === '/forgetpassword';
  const shouldRenderSidebar = !(isLoginPage || isForgotPasswordPage);

  return (
    <div className="app">
      <Navbar />

      {/* Conditionally render the Sidebar based on the current route */}
      {shouldRenderSidebar && <Sidebar />}

      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/addproduct" element={<AddProductForm />} />
        <Route path="/updateform/:id" element={<UpdateForm />} />
        <Route path="/updatecategory/:id" element={<UpdateCategory />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />
        <Route path="/subcategory" element={<SubCategory/>} />
        <Route path="/addsubcategory" element={<AddSubcategoryForm/>} />
        <Route path="/updatesubcategory/:id" element={<UpdateSubCategory/>} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Use AppWithSidebar component for rendering with Sidebar */}
        <Route path="/*" element={<AppWithSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
