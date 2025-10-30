import React, { useState } from 'react';
import AnimatedEmoji from './AnimatedEmoji';

const MiniQuiz = ({ questions, cardTitle, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const correctOption = question.opciones.find(opt => opt.correcto);

  const handleAnswerSelect = (optionId) => {
    if (showResult) return;
    setSelectedAnswer(optionId);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    setShowResult(true);
    setAttempts(attempts + 1);

    const isCorrect = question.opciones.find(opt => opt.id === selectedAnswer)?.correcto;

    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Quiz completado
      onComplete();
    } else {
      // Siguiente pregunta
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const isCorrect = showResult && question.opciones.find(opt => opt.id === selectedAnswer)?.correcto;

  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="btn btn-secondary mb-6 btn-hover-grow"
        >
          ← Volver a Ficha
        </button>

        {/* Quiz Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">
            <AnimatedEmoji emoji="🎯" animation="targetPulse" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Verifica tu Aprendizaje
          </h2>
          <p className="text-lg text-gray-600">
            {cardTitle}
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-semibold text-indigo-600">
              ✓ {correctAnswers} correctas
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="quiz-container mb-8 slide-up">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            {question.pregunta}
          </h3>

          {/* Options */}
          <div className="space-y-4">
            {question.opciones.map((opcion) => {
              const isSelected = selectedAnswer === opcion.id;
              const isCorrectOption = showResult && opcion.correcto;
              const isWrongSelection = showResult && isSelected && !opcion.correcto;

              return (
                <div
                  key={opcion.id}
                  onClick={() => handleAnswerSelect(opcion.id)}
                  className={`quiz-option ${
                    isSelected && !showResult ? 'selected' : ''
                  } ${isCorrectOption ? 'correct' : ''} ${isWrongSelection ? 'incorrect' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-lg flex-shrink-0">
                      {opcion.id})
                    </span>
                    <span className="flex-1">{opcion.texto}</span>
                    {showResult && opcion.correcto && (
                      <span className="text-2xl">
                        <AnimatedEmoji emoji="✓" animation="bounce" />
                      </span>
                    )}
                    {showResult && isWrongSelection && (
                      <span className="text-2xl">
                        <AnimatedEmoji emoji="✗" animation="shake" />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className={`mt-6 p-6 rounded-xl ${
              isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
            } slide-down`}>
              <div className="flex items-start gap-4">
                <span className="text-4xl">
                  {isCorrect ? (
                    <AnimatedEmoji emoji="✅" animation="bounce" />
                  ) : (
                    <AnimatedEmoji emoji="💡" animation="sparkle" />
                  )}
                </span>
                <div>
                  <h4 className={`font-bold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? '¡Correcto! +2.5% Conocimiento' : 'Respuesta incorrecta'}
                  </h4>
                  <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                    {question.explicacion}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className={`btn btn-primary btn-large ${
                !selectedAnswer ? 'btn-disabled' : 'btn-hover-lift'
              }`}
            >
              <span className="text-2xl mr-2">✓</span>
              RESPONDER
            </button>
          ) : (
            <div className="flex gap-4 justify-center">
              {!isCorrect && (
                <button
                  onClick={handleRetry}
                  className="btn btn-secondary btn-large btn-hover-grow"
                >
                  🔄 INTENTAR DE NUEVO
                </button>
              )}
              <button
                onClick={handleNext}
                className="btn btn-primary btn-large btn-hover-lift"
              >
                {isLastQuestion ? (
                  <>
                    <span className="text-2xl mr-2">🎉</span>
                    FINALIZAR QUIZ
                  </>
                ) : (
                  <>
                    <span className="text-2xl mr-2">→</span>
                    SIGUIENTE PREGUNTA
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Helper Text */}
        {!showResult && (
          <p className="text-sm text-gray-500 text-center mt-4">
            Selecciona una respuesta y haz clic en RESPONDER
          </p>
        )}
      </div>
    </div>
  );
};

export default MiniQuiz;