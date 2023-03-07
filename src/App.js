import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './styles/App.css';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
