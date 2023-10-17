import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
// import Welcome from './Welcome';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setIsAuthenticated(isLoggedIn);
  };

  return (
    <div>
      
      {isAuthenticated ? (
        <Home isAuthenticated={isAuthenticated} />
        // <Welcome username="" />
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
