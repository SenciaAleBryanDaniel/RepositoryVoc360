import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import GameRouter from './pages/GameRouter';

function App() {
  return (
    <div className="app-bg min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/juego/*" element={<GameRouter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;