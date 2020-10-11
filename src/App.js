import React from 'react';
import Home from './components/Home'
import './App.scss';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/' />
      </Router>
    </div>
  );
}

export default App;
