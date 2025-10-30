import React from 'react';
import ParameterBar, { NivelEconomicoBar } from './ParameterBar';
import AnimatedEmoji from './AnimatedEmoji';
import { analyzeAllParameters } from '../utils/simulador-vida/parameterCalculator';

const WeekStatus = ({ week, params, onContinue, onOpenLibrary, skippedCount = 0, careerFocus = null }) => {
  const analysis = analyzeAllParameters(params);
  
  const getWeekTitle = () => {
    const age = 17 + week;
    if (week === 1) return '🌟 TU PUNTO DE PARTIDA';
    if (week === 2) return '💼 DEFINIENDO TU CAMINO';
    if (week === 3) return '⚡ LA VIDA REAL EMPIEZA';
    if (week === 15) return '🏆 TU VIDA A LOS 32';
    return `📅 AÑO ${age}`;
  };

  const getWeekMessage = () => {
    if (week === 1) return 'Acabas de terminar el colegio. Tu vida adulta comienza ahora.';
    if (week === 2) return 'Han pasado 6 meses. Tu familia empieza a preocuparse por tu futuro.';
    if (week === 3) return 'Ya llevas 1 año trabajando y/o estudiando. Las decisiones se vuelven más complejas.';
    if (week === 15) return 'Han pasado 15 años desde que empezaste. Es momento de ver cómo resultó tu vida.';
    return `Continúa tomando decisiones que moldearán tu futuro.`;
  };

  const getWeekTheme = () => {
    const themesByWeek = {
      1: 'autoconocimiento y entorno familiar',
      2: 'formación y decisiones de futuro',
      3: 'finanzas personales y gestión del estrés',
      4: 'hábitos saludables y organización',
      5: 'relaciones y red de apoyo',
      6: 'crecimiento profesional',
      7: 'equilibrio trabajo-estudio',
      8: 'ahorro e imprevistos',
      9: 'salud mental y límites',
      10: 'proyectos personales',
      11: 'responsabilidad ciudadana',
      12: 'planificación a mediano plazo',
      13: 'oportunidades y riesgos',
      14: 'consolidación de metas',
      15: 'cierre y evaluación de vida'
    };
    return themesByWeek[week] || 'desarrollo integral y equilibrio de vida';
  };

  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Semana {week} de 15
            </span>
            <span className="text-sm font-semibold text-indigo-600">
              {Math.round((week / 15) * 100)}%
            </span>
          </div>
          <div className="week-progress">
            {[...Array(15)].map((_, index) => (
              <div
                key={index}
                className={`week-dot ${
                  index < week - 1 ? 'completed' : index === week - 1 ? 'current' : ''
                }`}
              />
            ))}
          </div>
        </div>

        {/* Week Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3 opacity-80">
            <AnimatedEmoji emoji={week === 1 ? '🌟' : week === 15 ? '🏆' : '📅'} animation="bounce" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            {getWeekTitle()}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {getWeekMessage()}
          </p>
        </div>

        {/* Weekly Narrator */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎧</span>
            <div className="text-slate-800 text-sm md:text-base leading-relaxed">
              <p><strong>Narrador IA</strong> · Esta semana te enfocarás en <strong>{getWeekTheme()}</strong>.</p>
              <p className="mt-1">Las decisiones que tomes estarán relacionadas con este aspecto, y afectarán tu desarrollo integral como profesional y ciudadano.</p>
            </div>
          </div>
        </div>

        {/* Two-column layout: Estado Actual + Análisis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Current Parameters */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">
                <AnimatedEmoji emoji="📊" animation="pulse" />
              </span>
              TU ESTADO ACTUAL
            </h2>

            <div className="space-y-4">
              {/* Economic level full width */}
              <div className="col-span-2">
                <NivelEconomicoBar value={params.nivelEconomico} />
              </div>
              {/* Other parameters in two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          {/* Analysis as tiles */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-2xl">
                <AnimatedEmoji emoji="💡" animation="sparkle" />
              </span>
              ANÁLISIS
            </h3>

            <div className="space-y-6">
              {/* Fortalezas */}
              {analysis.fortalezas.length > 0 && (
                <div>
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    ✅ Puntos Fuertes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {analysis.fortalezas.map((fortaleza, index) => (
                      <div key={index} className="rounded-lg border border-green-100 bg-green-50 p-3 flex items-start gap-2">
                        <span className="text-lg">{fortaleza.emoji}</span>
                        <div className="text-sm text-gray-700">
                          <strong>{fortaleza.parametro}:</strong> {fortaleza.mensaje}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Alertas */}
              {analysis.alertas.length > 0 && (
                <div>
                  <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                    ⚠️ Requiere Atención Urgente
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {analysis.alertas.map((alerta, index) => (
                      <div key={index} className="rounded-lg border border-red-200 bg-red-50 p-3 flex items-start gap-2">
                        <span className="text-lg">{alerta.emoji}</span>
                        <div className="text-sm text-gray-700">
                          <strong>{alerta.parametro}:</strong> {alerta.mensaje}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Debilidades */}
              {analysis.debilidades.length > 0 && (
                <div>
                  <h4 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                    ⚠️ Áreas de Mejora
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {analysis.debilidades.map((debilidad, index) => (
                      <div key={index} className="rounded-lg border border-orange-200 bg-orange-50 p-3 flex items-start gap-2">
                        <span className="text-lg">{debilidad.emoji}</span>
                        <div className="text-sm text-gray-700">
                          <strong>{debilidad.parametro}:</strong> {debilidad.mensaje}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          {onOpenLibrary && skippedCount > 0 && (
            <button onClick={onOpenLibrary} className="btn btn-secondary btn-hover-grow">
              📚 Biblioteca ({skippedCount})
            </button>
          )}
          <button
            onClick={onContinue}
            className="btn btn-primary btn-large btn-hover-lift px-12"
          >
            <span className="text-2xl mr-2">🚀</span>
            CONTINUAR A LAS DECISIONES
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeekStatus;