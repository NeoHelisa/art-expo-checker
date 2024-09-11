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
        <h2>Enter painting code:</h2>
        <input maxlength="8" type="text" value={code} onChange={(e) => setCode(e.target.value)} />
        <button onClick={handleSubmit}><span className="text">Check</span></button>
        {error && <p className='error' style={{ color: 'red' }}>Invalid code, please try again.</p>}
      </div>
    </div>
  );
};

export default CodeInput;
