import React from 'react';
import Home from './components/Home'
import './App.scss';
import { Router } from '@reach/router';
import InstructorDashboard from './components/InstructorDashboard';
import ReviewTasks from './components/ReviewTasks'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/' />
        <InstructorDashboard path='/instructor-dashboard' />
        <ReviewTasks path='/review-tasks' />
      </Router>
    </div>
  );
}

export default App;
