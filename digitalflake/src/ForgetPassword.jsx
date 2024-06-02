import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ForgetPassword.css';



const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

//   const handleResetRequest = () => {
//     // You can implement the logic to send a reset link to the provided email address
//     // For simplicity, let's just log the email for now
//     console.log(`Reset requested for email: ${email}`);
//   };

const handleResetRequest = async () => {
    try {
        console.log(email);
      // Assuming you have a server endpoint for sending reset emails
      const response = await axios.post('http://localhost:8010/sendEmail', { email });

      // Check the response from the server (adjust based on your server's response)
      if (response.data.success) {
        console.log('Reset link sent successfully');
        // Redirect to the login page after sending the reset link
        navigate('/login');
      } else {
        console.error('Failed to send reset link');
        // Handle error case (display a message to the user, etc.)
      }
    } catch (error) {
      console.error('Error sending reset link:', error);
      // Handle error case (display a message to the user, etc.)
    }
  };

  return (
    <div style={{ border: '2px solid #3498db', padding: '20px', borderRadius: '5px' }}>
      <h2>Forgot Password</h2>
      <label htmlFor="email">Enter Your Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <button onClick={handleResetRequest}>Request Reset Link</button>
    </div>
  );
};

export default ForgotPassword;
