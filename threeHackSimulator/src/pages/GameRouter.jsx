import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SimuladorVidaGame from '../components/simulador-vida/SimuladorVidaGame';

const GameRouter = () => {
  return (
    <Routes>
      <Route path="simulador-vida" element={<SimuladorVidaGame />} />
      {/* Aquí irían las rutas de otros juegos */}
    </Routes>
  );
};

export default GameRouter;