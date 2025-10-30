import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ className = '' }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-colors ${className}`}
    >
      <span>←</span>
      <span>Volver al Dashboard</span>
    </button>
  );
};

export default BackButton;