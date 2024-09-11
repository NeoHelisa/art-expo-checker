import React from 'react';

const WelcomeScreen = ({ onClick }) => {
  return (
    <div className="welcome-screen">
      <div className="background"></div>
      <div className="content">
        <h1>Welcome to the Art Gallery</h1>
        <h2>Discover the story behind every painting</h2>
        <button onClick={onClick}>Check the painting</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
