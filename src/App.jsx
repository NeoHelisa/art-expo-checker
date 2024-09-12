import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import CodeInput from './CodeInput';
import PaintingInfo from './components/PaintingInfo';
import mockData from './mockData.json';
import usePullToRefresh from './usePullToRefresh';

const App = () => {
  const [step, setStep] = useState('welcome');
  const [painting, setPainting] = useState(null);
  const [error, setError] = useState(false);

  const handleCodeCheck = (code) => {
    const painting = mockData.find(item => item.code === code);
    if (painting) {
      setPainting(painting);
      setStep('info');
    } else {
      setError(true);
    }
  };

  const handleBack = () => {
    setStep('welcome');
    setError(false);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const isRefreshing = usePullToRefresh(handleRefresh);

  return (
    <div className="app">
      {isRefreshing && <div className="refresh-indicator">Refreshing...</div>}
      {step === 'welcome' && <WelcomeScreen onClick={() => setStep('code')} />}
      {step === 'code' && <CodeInput onSubmit={handleCodeCheck} error={error} />}
      {step === 'info' && painting && <PaintingInfo painting={painting} onBack={handleBack} />}
    </div>
  );
};

export default App;
