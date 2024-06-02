import React from 'react';
import { FaDraft2Digital } from 'react-icons/fa';
import logo from './assets/digitalflake_logo.jpeg'; // Adjust the path according to your image location

const HomePage = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      textAlign: 'center', 
      padding: '0px' 
    }}>
     <img src={logo} alt="Logo" style={{ width: '150px', height: '150px', margin: '-200px 0 0 0' }} />

    
     
     
 
      <h3 style={{ margin: '0px 0' }}>Welcome To Digitalflake Admin</h3>
    </div>
  );
};

export default HomePage;
