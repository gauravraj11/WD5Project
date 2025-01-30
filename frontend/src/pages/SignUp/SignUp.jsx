import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    number: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    console.log(e.target.name);
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9000/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'token1': "fhfhhhh" },
        body: JSON.stringify(formData)
      });

      console.log(response);
      
      const data = await response.json();
      console.log(data);
      
      if (data.success) {
        alert('Registration Successful');
        setIsLoggedIn(true);
        localStorage.setItem('token', data.token); // Save token in localStorage
        navigate('/');
        
      } else {
        alert(data.message || 'Registration Failed');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="number"
          placeholder="Number"
          value={formData.number}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <span onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
};

export default Signup;




