import React, { useState } from 'react';

const CodeInput = ({ onSubmit, error }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(code);
  };

  return (
    <div className="code-input">
      <div className="background"></div>
      <div className="content">
        <div className='top-wrapper'>
          <h1 className='cookie-regular glow header'>Art Exhibition System</h1>
        </div>
        <div className='middle-wrapper'>
          <h2>Enter painting code:</h2>
          <input maxLength="6" type="text" value={code} onChange={(e) => setCode(e.target.value)} />
        </div>
        <div className='bottom-wrapper'>
          <button onClick={handleSubmit}><span className="text">Check</span></button>
        </div>
        {error && <p className='error' style={{ color: 'red' }}>Invalid code, please try again.</p>}
      </div>
    </div>
  );
};

export default CodeInput;
