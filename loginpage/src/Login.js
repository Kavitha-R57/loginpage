import React, { useState } from 'react';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // retrieve data from Localstor
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === formData.username && storedUser.password === formData.password) {
      onLogin(true);
    } else {
      onLogin(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>onLogin
      <input
        type="text" name="username"placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="password"name="password"placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default Login;
