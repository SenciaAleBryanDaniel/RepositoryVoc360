import React, { useState } from 'react';
import { questions, analizarRespuestas } from '../data/simulador-vida/questions';
import AnimatedEmoji from './AnimatedEmoji';

const AvatarCreation = ({ playerName, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Analizar respuestas y generar perfil
      const profile = analizarRespuestas(newAnswers);
      onComplete(profile);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const newAnswers = answers.slice(0, -1);
      setAnswers(newAnswers);
      setSelectedOption(answers[currentQuestion - 1]);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card">
        {/* Progreso compacto */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-semibold text-indigo-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-500 progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Cabecera breve */}
        <div className="text-center mb-4">
          <div className="text-3xl md:text-4xl mb-2 opacity-80">
            {currentQuestion < 3 && <AnimatedEmoji emoji="🧑" animation="pulse" />}
            {currentQuestion >= 3 && currentQuestion < 6 && <AnimatedEmoji emoji="👤" animation="float" />}
            {currentQuestion >= 6 && <AnimatedEmoji emoji="🎯" animation="targetPulse" />}
          </div>
          <p className="text-xs text-gray-500">🤖 IA analizando tus respuestas...</p>
        </div>

        {/* Pregunta */}
        <div className="mb-4 slide-up">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-4xl">
              <AnimatedEmoji emoji={question.emoji} animation="pulse" />
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3">
            {question.pregunta}
          </h2>

          {/* Opciones compactas con grid y scroll interno */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 md:max-h-96 overflow-auto pr-1">
            {question.opciones.map((opcion) => (
              <div
                key={opcion.id}
                onClick={() => handleOptionSelect(opcion.id)}
                className={`decision-option ${selectedOption === opcion.id ? 'selected' : ''}`}
              >
                <div className="option-emoji text-2xl md:text-3xl">
                  {opcion.id}
                </div>
                <div className="option-content">
                  <div className="option-text text-sm md:text-base">
                    {opcion.texto}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className={`btn btn-secondary ${currentQuestion === 0 ? 'btn-disabled' : 'btn-hover-grow'}`}
          >
            ← Anterior
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`btn btn-primary ${!selectedOption ? 'btn-disabled' : 'btn-hover-lift'}`}
          >
            {currentQuestion < questions.length - 1 ? (
              <>Siguiente →</>
            ) : (
              <>✨ Ver Mi Perfil</>
            )}
          </button>
        </div>

        {/* Ayuda */}
        <div className="text-center mt-3">
          <p className="text-xs text-gray-500">💡 Responde con honestidad para obtener el mejor perfil</p>
        </div>
      </div>
    </div>
  );
};

export default AvatarCreation;