import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      console.log('Login successful');
      // Save the token in local storage or session storage
      localStorage.setItem('token', response.data.token);
      // Redirect or update state to indicate successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for email and password */}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
