import React from 'react';

function NotFound() {
  return (
    <div style={notFoundStyles.container}>
    
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
    </div>
  );
}

const notFoundStyles = {

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: "150px",
    backgroundColor: "#fceee8",
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
};

export default NotFound;