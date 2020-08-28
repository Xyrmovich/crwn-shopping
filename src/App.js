import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact={true} path='/' component={HomePage} />
    </div>
  );
}

export default App;
