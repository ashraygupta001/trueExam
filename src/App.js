import React from 'react';
import Home from './components/Home'
import './App.scss';
import { Router } from '@reach/router';
import StudentLogin from './components/StudentLogin';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/' />
        <StudentLogin path='/student-login' />
      </Router>
    </div>
  );
}

export default App;
