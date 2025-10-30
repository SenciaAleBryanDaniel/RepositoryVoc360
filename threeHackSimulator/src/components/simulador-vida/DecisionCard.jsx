import React, { useState } from 'react';
import Timer from './Timer';
import AnimatedEmoji from './AnimatedEmoji';
import { getScenario } from '../data/simulador-vida/scenarios';

const DecisionCard = ({ week, decisionNumber, onDecision }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showImpact, setShowImpact] = useState(false);
  const [customInput, setCustomInput] = useState('');

  const scenario = getScenario(week, decisionNumber);

  if (!scenario) {
    return (
      <div className="simulador-container">
        <div className="simulador-card">
          <p className="text-red-500">Error: Escenario no encontrado</p>
        </div>
      </div>
    );
  }

  // Detectar si es la decisión de "Eligiendo tu Carrera" (week 2, decision 2) o "Buscando Trabajo" (week 2, decision 3) para ocultar impactos
  const hideImpacts = (week === 2 && decisionNumber === 2) || (week === 2 && decisionNumber === 3);

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    setShowImpact(true);
  };

  const handleConfirm = () => {
    if (selectedOption) {
      onDecision(selectedOption);
    }
  };

  const selectedOptionData = scenario.opciones.find(opt => opt.id === selectedOption);

  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card">
        {/* Header compacto con timer */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="badge badge-info">Decisión {decisionNumber} de 4</span>
            <span className="badge badge-info">Semana {week}/15</span>
          </div>
          <div className="shrink-0">
            <Timer duration={scenario.tiempo} flexible={true} />
          </div>
        </div>

        {/* Título y pregunta */}
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {scenario.titulo}
          </h2>
          {scenario.descripcion && (
            <div className="text-gray-700 text-sm md:text-base leading-relaxed bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 mb-3">
              {scenario.descripcion}
            </div>
          )}
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">{scenario.pregunta}</h3>
        </div>

        {/* Opciones en grid con scroll interno */}
        <div className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 md:max-h-[28rem] overflow-auto pr-1">
            {scenario.opciones.map((opcion) => (
              <div
                key={opcion.id}
                onClick={() => handleOptionSelect(opcion.id)}
                className={`decision-option ${selectedOption === opcion.id ? 'selected' : ''}`}
              >
                <div className="option-emoji">
                  <AnimatedEmoji 
                    emoji={opcion.emoji} 
                    animation={selectedOption === opcion.id ? 'bounce' : 'pulse'} 
                    size="normal"
                  />
                </div>
                <div className="option-content">
                  <div className="option-text text-sm md:text-base">
                    {opcion.id}) {opcion.texto}
                  </div>
                  {opcion.customInput && selectedOption === opcion.id && (
                    <div className="mt-3">
                      <input
                        type="text"
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        placeholder="Escribe tu oferta de trabajo aquí..."
                        className="w-full px-4 py-2 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 text-sm"
                        maxLength={200}
                      />
                      <p className="text-xs text-gray-500 mt-1">{customInput.length}/200 caracteres</p>
                    </div>
                  )}
                  {!hideImpacts && showImpact && selectedOption === opcion.id && (
                    <div className="option-impact mt-2">
                      <strong>Impacto:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {Object.entries(opcion.impacto).map(([param, value]) => (
                          <span
                            key={param}
                            className={`badge ${
                              value > 0 ? 'badge-success' : value < 0 ? 'badge-danger' : 'badge-info'
                            }`}
                          >
                            {param}: {value > 0 ? '+' : ''}{value}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vista previa breve */}
        {selectedOption && selectedOptionData && (
          <div className="bg-indigo-50 rounded-xl p-4 mb-4 slide-up">
            <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wide">Vista previa</h4>
            <p className="text-gray-700 italic text-sm md:text-base leading-relaxed">
              {selectedOptionData.feedback}
            </p>
          </div>
        )}

        {/* Confirmación */}
        <div className="text-center">
          <button
            onClick={handleConfirm}
            disabled={!selectedOption}
            className={`btn btn-primary btn-large ${!selectedOption ? 'btn-disabled' : 'btn-hover-lift'}`}
          >
            CONFIRMAR DECISIÓN
          </button>
          {!selectedOption && (
            <p className="text-sm text-gray-500 mt-2">Selecciona una opción para continuar</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DecisionCard;