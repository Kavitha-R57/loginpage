import React from 'react';

function Home({ isAuthenticated }) {
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome</h2>
          <p>You are logged in Successfully.</p>
        </div>
      ) : (
        <h2>Please log in to access the Home Page.</h2>
      )}
    </div>
  );
}

export default Home;
