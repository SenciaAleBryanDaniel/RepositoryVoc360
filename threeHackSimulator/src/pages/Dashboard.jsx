import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/platform/Navbar';
import GameCard from '../components/platform/GameCard';

const Dashboard = () => {
  const navigate = useNavigate();

  const juegos = [
    {
      id: 'simulador-vida',
      titulo: '¿Cómo Sería Mi Vida?',
      descripcion: 'Simulador de vida adulta personalizado con IA',
      icono: '🎮',
      duracion: '45-60 min',
      lecciones: 50,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'proximo-1',
      titulo: 'Finanzas para Jóvenes',
      descripcion: 'Aprende finanzas básicas jugando',
      icono: '💰',
      duracion: '20-30 min',
      lecciones: 25,
      color: 'from-emerald-500 to-teal-600',
      disabled: true
    },
    {
      id: 'proximo-2',
      titulo: 'Mi Primer Empleo',
      descripcion: 'Derechos y habilidades para tu primer trabajo',
      icono: '💼',
      duracion: '25-40 min',
      lecciones: 30,
      color: 'from-pink-500 to-rose-600',
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10">
        {/* HERO */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-white mb-3 tracking-tight">
            🎓 EduGames IA
          </h1>
          <p className="text-base md:text-lg text-slate-300/90 max-w-2xl mx-auto">
            Aprende jugando con experiencias simuladas. Nuevos módulos se añadirán pronto.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="h-px w-10 bg-slate-700" />
          <span className="text-slate-300/80 text-sm uppercase tracking-widest">Cartelera</span>
          <span className="h-px w-10 bg-slate-700" />
        </div>

        {/* Cartelera grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {juegos.map((juego) => (
            <GameCard
              key={juego.id}
              juego={juego}
              onClick={() => !juego.disabled && navigate(`/juego/${juego.id}`)}
            />
          ))}
        </div>

        {/* Footer mini-info */}
        <div className="text-center mt-10 text-slate-400 text-sm">
          <span>Prototype • Simulaciones educativas • Hecho con ❤️</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;