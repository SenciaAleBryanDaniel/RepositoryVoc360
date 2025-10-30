import React from 'react';
import ParameterBar from './ParameterBar';
import AnimatedEmoji from './AnimatedEmoji';

const WeeklySummary = ({ week, params, learningCardsCompleted, learningCardsSkipped, onContinue, playerName }) => {
  const totalCards = (learningCardsCompleted?.length || 0) + (learningCardsSkipped?.length || 0);
  const completionRate = totalCards > 0 ? ((learningCardsCompleted?.length || 0) / totalCards * 100).toFixed(0) : 0;

  // Simulación de rasgos basada en parámetros (simple y explicable)
  const deriveTraits = () => {
    const traits = [];
    if (params.conocimiento >= 65) traits.push('Analítico');
    if (params.progresoMeta >= 60) traits.push('Enfocado');
    if (params.estres >= 60) traits.push('Impulsivo');
    if (params.relaciones >= 70) traits.push('Colaborativo');
    if (params.satisfaccion >= 70) traits.push('Optimista');
    if (params.saludFisica < 50 || params.saludMental < 50) traits.push('Autoexigente');
    if (traits.length === 0) traits.push('Práctico');
    return traits.slice(0, 3);
  };

  const traits = deriveTraits();

  const closingMessage = () => {
    const name = playerName || 'Jugador';
    const hardworking = params.progresoMeta >= 60 || params.nivelEconomico >= 6;
    const ethical = params.relaciones >= 70 || params.satisfaccion >= 65;
    const strugglesPlanning = params.estres >= 60 || params.conocimiento < 55;
    const base = `${name}, tus resultados muestran que ${hardworking ? 'eres trabajador' : 'tienes potencial'} ${ethical ? 'y ético' : ''}`.trim();
    const gap = strugglesPlanning ? ', pero te cuesta priorizarte y planificar tus recursos.' : ', y vas encontrando tu balance.';
    return `${base}${gap} En este simulador, aprenderás a equilibrar el esfuerzo con la estrategia.`;
  };

  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card">
        {/* Celebration */}
        <div className="text-center mb-6 celebration">
          <div className="text-5xl md:text-6xl mb-2 opacity-80">
            <AnimatedEmoji emoji="🎉" animation="bounce" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            ¡Año {17 + week} Completado!
          </h1>
          <p className="text-base md:text-lg text-gray-600">Has tomado 4 decisiones importantes este año</p>
        </div>

        {/* Main 1/3 - 2/3 layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* 1/3: Summary Stats */}
          <div className="grid grid-cols-3 gap-3 md:col-span-1">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 text-center">
              <div className="text-3xl mb-1 opacity-80">
                <AnimatedEmoji emoji="✅" animation="pulse" />
              </div>
              <div className="text-2xl font-bold text-indigo-600 mb-0.5">4/4</div>
              <div className="text-xs text-gray-600">Decisiones</div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 text-center">
              <div className="text-3xl mb-1 opacity-80">
                <AnimatedEmoji emoji="📚" animation="sparkle" />
              </div>
              <div className="text-2xl font-bold text-teal-600 mb-0.5">
                {learningCardsCompleted?.length || 0}/{totalCards}
              </div>
              <div className="text-xs text-gray-600">Fichas</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 text-center">
              <div className="text-3xl mb-1 opacity-80">
                <AnimatedEmoji emoji="📊" animation="targetPulse" />
              </div>
              <div className="text-2xl font-bold text-pink-600 mb-0.5">{completionRate}%</div>
              <div className="text-xs text-gray-600">Completitud</div>
            </div>
          </div>

          {/* 2/3: Final Parameters compact grid */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 md:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">
                <AnimatedEmoji emoji="📊" animation="pulse" />
              </span>
              Estado Final del Año
            </h2>
            <div className="space-y-3">
              <ParameterBar paramName="nivelEconomico" value={params.nivelEconomico} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ParameterBar paramName="saludFisica" value={params.saludFisica} />
                <ParameterBar paramName="saludMental" value={params.saludMental} />
                <ParameterBar paramName="satisfaccion" value={params.satisfaccion} />
                <ParameterBar paramName="estres" value={params.estres} />
                <ParameterBar paramName="conocimiento" value={params.conocimiento} />
                <ParameterBar paramName="relaciones" value={params.relaciones} />
                <div className="sm:col-span-2">
                  <ParameterBar paramName="progresoMeta" value={params.progresoMeta} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: Learning, Traits, and IA Message in compact 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left: Learning Summary */}
          {totalCards > 0 ? (
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl opacity-80">
                  <AnimatedEmoji emoji="📚" animation="sparkle" />
                </span>
                Resumen de Aprendizaje
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">✅</span>
                    <span className="font-semibold text-gray-800 text-sm">Completadas</span>
                  </div>
                  <div className="text-xl font-bold text-green-600">
                    {learningCardsCompleted?.length || 0}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    +{(learningCardsCompleted?.length || 0) * 5}% Conocimiento
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">⚠️</span>
                    <span className="font-semibold text-gray-800 text-sm">Saltadas</span>
                  </div>
                  <div className="text-xl font-bold text-orange-600">
                    {learningCardsSkipped?.length || 0}
                  </div>
                  <div className="text-xs text-gray-600 mt-0.5">
                    En biblioteca
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          {/* Right: Traits and IA Message combined */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-xl opacity-80">🧩</span>
              Rasgos del año
            </h3>
            <div className="md:flex md:items-start md:gap-6">
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0 md:flex-1">
                {traits.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-sm font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="md:flex-1 pt-3 md:pt-0 md:border-t-0 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <span className="text-xl opacity-80">🤖</span>
                  <p className="text-sm text-slate-800 leading-relaxed">{closingMessage()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0 opacity-80">
              <AnimatedEmoji emoji="💪" animation="pulse" />
            </span>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Mensaje Motivacional:</h4>
              <p className="text-gray-700 text-sm">
                {week < 5 && "Excelente inicio. Cada decisión que tomas está moldeando tu futuro. ¡Sigue adelante!"}
                {week >= 5 && week < 10 && "Ya llevas varios años en esta simulación. Tus decisiones empiezan a mostrar resultados. ¡Continúa con ese esfuerzo!"}
                {week >= 10 && week < 15 && "Estás en la recta final. Las decisiones que tomes ahora definirán cómo terminarás tu vida a los 32 años."}
                {week === 15 && "¡Llegaste al final! Es momento de ver el resultado de 15 años de decisiones."}
              </p>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={onContinue}
            className="btn btn-primary btn-large btn-hover-lift px-12"
          >
            <span className="text-2xl mr-2">🚀</span>
            {week < 15 ? `CONTINUAR AL AÑO ${18 + week}` : 'VER RESULTADO FINAL'}
          </button>
          {week < 15 && (
            <p className="text-sm text-gray-500 mt-2">Te esperan 4 nuevas decisiones importantes</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeeklySummary;