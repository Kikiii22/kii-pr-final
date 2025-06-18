import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import ManageBooks from './ManageBooks';
import './App.css';

function App() {
  return (
      <Router>
        <header>
          📚 Booky
          <nav>
            <Link to="/">Home</Link>
            <Link to="/manage">Manage Books</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage" element={<ManageBooks />} />
        </Routes>

        <footer>📸 Instagram | 👍 Facebook | © 2025 Booky</footer>
      </Router>
  );
}

export default App;
