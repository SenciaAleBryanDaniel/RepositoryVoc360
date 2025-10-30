import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="bg-slate-800 border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="text-3xl">🎓</span>
            <span className="text-xl font-bold text-white">EduGames IA</span>
          </div>
          
          <div className="flex items-center gap-4">
            {!isHome && (
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
              >
                ← Volver al Dashboard
              </button>
            )}
            
            <div className="flex items-center gap-2 text-white">
              <span className="text-2xl">👤</span>
              <span className="font-medium">Estudiante</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;