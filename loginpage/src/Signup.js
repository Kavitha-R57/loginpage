import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(formData));
  };

  return (
    <div>
      <h2>Signup</h2>
      <input  type="text" name="username" placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="password"name="password"placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
