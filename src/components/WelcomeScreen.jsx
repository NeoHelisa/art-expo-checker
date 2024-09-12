import React from 'react';

const WelcomeScreen = ({ onClick }) => {
  return (
    <div className="welcome-screen">
      <div className="background"></div>
      <div className="content">
        <h1 className='roboto-medium'>Art Exhibition System</h1>
        <h1 className='roboto-medium'>Welcome!</h1>
        <h2 className='roboto-medium'>Check your painting status to know if your painting was approved for Grand Exhibition</h2>
        <button onClick={onClick}><span className="text">Check the painting</span></button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
