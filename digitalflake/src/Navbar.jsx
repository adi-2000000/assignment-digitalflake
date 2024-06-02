import React from 'react';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import './Navbar.css'; // Import your CSS file for additional styles
import { FaDraft2Digital } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useParams, useNavigate } from 'react-router-dom';
import logo from './assets/digitalflake_logo.jpeg'; // Adjust the path according to your image location


const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to logout?');
  
    // If the user confirms, proceed with logout
    if (isConfirmed) {
      // You can add logic here for performing logout actions
      // For now, let's just navigate to the login page
      navigate('/login');
    }
  };
  
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          {/* Add your logo or brand name here */}
          <img src={logo} alt="Logo" style={{ width: '50px', height: '50px', margin: '0px 0', backgroundColor: '#e7e7ef', }} />
    
          <h4>DigitalFlake</h4>
        </div>
        <div className="menu">
          {/* Update the Link component to use "to" instead of "component" */}
          {/* <Link to="/">Home</Link> */}
          {/* Add other navigation links as needed */}
        </div>
        <div className="burger-menu">
          <IoIosLogOut className="burger-icon" onClick={handleLogout} />
          <p className="logout-text">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
