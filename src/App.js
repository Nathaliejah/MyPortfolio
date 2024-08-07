import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import SignIn from './SignIn';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? <Dashboard /> : <SignIn onSignIn={handleSignIn} />}
    </div>
  );
}

export default App;
