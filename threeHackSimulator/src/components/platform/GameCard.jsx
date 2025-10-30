import React from 'react';

const GameCard = ({ juego, onClick }) => {
  const isDisabled = Boolean(juego.disabled);
  return (
    <div
      onClick={isDisabled ? undefined : onClick}
      className={`group relative overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-700 backdrop-blur-sm shadow-lg transition-all duration-300 cursor-pointer ${
        isDisabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-2xl hover:-translate-y-1'
      }`}
      title={isDisabled ? 'Próximamente' : 'Jugar'}
    >
      {/* Poster gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${juego.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
      {/* Glow */}
      <div className={`absolute -inset-1 opacity-0 group-hover:opacity-30 blur-2xl bg-gradient-to-br ${juego.color} transition-opacity`}></div>

      <div className="relative p-0">
        {/* Aspect poster */}
        <div className="aspect-[2/3] w-full overflow-hidden">
          <div className="h-full w-full flex flex-col justify-between p-6">
            <div className="flex items-start justify-between">
              <div className="text-4xl opacity-80 drop-shadow-sm">{juego.icono}</div>
              {isDisabled && (
                <span className="px-2 py-1 text-xs font-semibold rounded bg-slate-800/80 text-slate-200 border border-slate-600">Próximamente</span>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight line-clamp-2">
                {juego.titulo}
              </h3>
              <p className="text-slate-300/90 text-sm mb-4 line-clamp-3">
                {juego.descripcion}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-200/80">
                <span className="flex items-center gap-1">⏱️ {juego.duracion}</span>
                <span className="flex items-center gap-1">📚 {juego.lecciones} lecciones</span>
              </div>
            </div>
          </div>
        </div>

        {!isDisabled && (
          <button className={`absolute bottom-3 left-3 right-3 py-3 rounded-lg bg-gradient-to-r ${juego.color} text-white font-semibold shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all`}>
            🚀 Jugar Ahora
          </button>
        )}
      </div>
    </div>
  );
};

export default GameCard;