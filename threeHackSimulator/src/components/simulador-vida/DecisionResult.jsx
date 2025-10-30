import React from 'react';
import ParameterBar from './ParameterBar';
import AnimatedEmoji from './AnimatedEmoji';
import { compareParameters } from '../utils/simulador-vida/parameterCalculator';

const DecisionResult = ({ feedback, impact, oldParams, newParams, onContinue }) => {
  const comparison = compareParameters(oldParams, newParams);
  const changedParams = Object.entries(comparison).filter(
    ([_, data]) => data.change.absolute !== 0
  );

  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card celebration">
        {/* Feedback Header */}
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">
            <AnimatedEmoji emoji="✅" animation="bounce" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Decisión Tomada
          </h2>
        </div>

        {/* Feedback Message */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-4xl flex-shrink-0">
              <AnimatedEmoji emoji="💭" animation="think" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Consecuencias de tu decisión:
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {feedback}
              </p>
            </div>
          </div>
        </div>

        {/* Parameter Changes */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">
              <AnimatedEmoji emoji="📊" animation="pulse" />
            </span>
            Cambios en tus Parámetros
          </h3>

          {changedParams.length > 0 ? (
            <div className="space-y-6">
              {changedParams.map(([param, data]) => (
                <div key={param} className="slide-up">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-700">
                      {param === 'nivelEconomico' ? 'Situación Económica' : 
                       param === 'saludFisica' ? 'Salud Física' :
                       param === 'saludMental' ? 'Salud Mental' :
                       param === 'satisfaccion' ? 'Satisfacción' :
                       param === 'estres' ? 'Estrés' :
                       param === 'conocimiento' ? 'Conocimiento' :
                       param === 'relaciones' ? 'Relaciones' :
                       param === 'progresoMeta' ? 'Progreso a Meta' : param}
                    </span>
                    <span className={`font-bold ${
                      data.change.direction === 'up' ? 'text-green-600' :
                      data.change.direction === 'down' ? 'text-red-600' :
                      'text-gray-600'
                    }`}>
                      {data.change.emoji} {data.change.absolute > 0 ? '+' : ''}{data.change.absolute}
                      {param !== 'nivelEconomico' && '%'}
                    </span>
                  </div>
                  
                  {/* Before/After Bars */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Antes</div>
                      <ParameterBar 
                        paramName={param} 
                        value={data.old} 
                        showLabel={false}
                        animated={false}
                      />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Ahora</div>
                      <ParameterBar 
                        paramName={param} 
                        value={data.new} 
                        showLabel={false}
                        animated={true}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center">
              Esta decisión no tuvo impacto inmediato en tus parámetros
            </p>
          )}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={onContinue}
            className="btn btn-primary btn-large btn-hover-lift px-12"
          >
            <span className="text-2xl mr-2">→</span>
            CONTINUAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default DecisionResult;