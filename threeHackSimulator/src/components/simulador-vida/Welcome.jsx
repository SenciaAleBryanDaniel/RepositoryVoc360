import React, { useState } from 'react';

const Welcome = ({ onStart }) => {
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (!playerName.trim()) {
      setError('Por favor, ingresa tu nombre');
      return;
    }
    
    if (playerName.trim().length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
      return;
    }

    onStart(playerName.trim());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleStart();
    }
  };

  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card scale-in relative overflow-hidden">
        {/* subtle glow ring */}
        <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-pink-500/10 to-purple-500/10 blur-2xl" />
        <div className="relative text-center">
          {/* Ilustración animada */}
          <div className="mb-6">
            <div className="text-7xl md:text-8xl mb-3 emoji-animated">🎮</div>
          </div>

          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium tracking-wide mb-3 border border-slate-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" />
            Simulación educativa
          </div>

          {/* Título */}
          <h1 className="text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            ¿Cómo Sería Mi Vida?
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-7">
            Fase 1 · Introducción
          </p>

          {/* Narrador */}
          <div className="max-w-3xl mx-auto text-left bg-white border border-slate-200 rounded-2xl shadow-sm p-0 mb-7">
            <div className="flex items-center gap-2 px-6 pt-6">
              <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Narrador</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="flex gap-4 px-6 pb-6 pt-4">
              <div className="hidden md:block w-1.5 rounded-full bg-gradient-to-b from-indigo-600 to-pink-600" />
              <div className="space-y-2.5 text-slate-800 leading-relaxed text-sm md:text-base">
                <p>Bienvenido. Aquí vivirás los próximos 12 años de tu vida adulta.</p>
                <p>Cada semana representa un año.</p>
                <p>Tomarás 4 decisiones: laboral, económica, personal y ética.</p>
                <p>Cada elección afecta tu salud, estrés, experiencia, satisfacción y dinero.</p>
                <p>No podrás retroceder.</p>
                <p>Aprende, equilibra y decide con responsabilidad.</p>
              </div>
            </div>
          </div>

          {/* Frase destacada antes del nombre */}
          <div className="mb-5">
            <p className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Listo para comenzar tu historia.
            </p>
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500" />
          </div>

          {/* Input de nombre */}
          <div className="max-w-md mx-auto mb-6 text-left">
            <label 
              htmlFor="playerName" 
              className="block text-base md:text-lg font-semibold text-gray-800 mb-2"
            >
              Ingresa tu nombre completo
            </label>
            <input
              id="playerName"
              type="text"
              value={playerName}
              onChange={(e) => {
                setPlayerName(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
              placeholder="Ej: María López"
              className={`w-full px-5 py-3.5 md:px-6 md:py-4 text-base md:text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                error ? 'border-red-500' : 'border-slate-300'
              }`}
              maxLength={50}
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </div>

          {/* Botón de inicio */}
          <div className="flex items-center justify-center mb-4">
            <button
              onClick={handleStart}
              className="btn btn-primary btn-large btn-hover-lift px-10 shadow-md"
            >
              <span className="text-2xl mr-2">🚀</span>
              CREAR MI AVATAR
            </button>
          </div>

          {/* Info adicional */}
          <div className="text-sm text-gray-500 space-y-1 mt-2">
            <p>⏱️ Duración: 45-60 minutos</p>
            <p>📱 Puedes guardar tu progreso en cualquier momento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;