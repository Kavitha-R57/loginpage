import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setIsAuthenticated(isLoggedIn);
  };

  return (
    <div>
      
      {isAuthenticated ? (
        <Home isAuthenticated={isAuthenticated} />
      ) : (
        <>
          <Signup />
          <Login onLogin={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
