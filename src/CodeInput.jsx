import React, { useState } from 'react';

const CodeInput = ({ onSubmit, error }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(code);
  };

  return (
    <div className="code-input">
      <label>Enter painting code:</label>
      <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleSubmit}>Check</button>
      {error && <p style={{ color: 'red' }}>Invalid code, please try again.</p>}
    </div>
  );
};

export default CodeInput;
