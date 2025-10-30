import React, { useState } from 'react';
import MiniQuiz from './MiniQuiz';
import AnimatedEmoji from './AnimatedEmoji';

const LearningCard = ({ card, onComplete, onBack }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    // Esperar un momento antes de llamar onComplete
    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  if (showQuiz && !quizCompleted) {
    return (
      <MiniQuiz
        questions={card.quiz}
        cardTitle={card.titulo}
        onComplete={handleQuizComplete}
        onBack={() => setShowQuiz(false)}
      />
    );
  }

  if (quizCompleted) {
    return (
      <div className="simulador-container fade-enter">
        <div className="simulador-card text-center celebration">
          <div className="text-8xl mb-6">
            <AnimatedEmoji emoji="🎉" animation="bounce" />
          </div>
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            ¡Ficha Completada!
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Ganaste +5% de Conocimiento
          </p>
          <div className="text-6xl">
            <AnimatedEmoji emoji="✨" animation="sparkle" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="btn btn-secondary mb-6 btn-hover-grow"
        >
          ← Volver a Fichas
        </button>

        {/* Card Header */}
        <div className="text-center mb-8">
          <div className="text-8xl mb-4">
            <AnimatedEmoji emoji={card.emoji} animation="bounce" />
          </div>
          <span className="badge badge-info mb-3">{card.categoria}</span>
          <h1 className="text-4xl font-bold text-gray-800">
            {card.titulo}
          </h1>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 mb-8">
          {/* Introducción */}
          <div className="mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              {card.contenido.introduccion}
            </p>
          </div>

          {/* Puntos Clave */}
          <div className="space-y-6 mb-8">
            {card.contenido.puntosClave.map((punto, index) => (
              <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">
                    {index === 0 ? '1️⃣' : index === 1 ? '2️⃣' : '3️⃣'}
                  </span>
                  {punto.titulo}
                </h3>
                <ul className="space-y-2">
                  {punto.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
                      <span className="text-indigo-600 font-bold flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Alertas */}
          {card.contenido.alertas && card.contenido.alertas.length > 0 && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">
                  <AnimatedEmoji emoji="⚠️" animation="attention" />
                </span>
                Señales de Alerta
              </h3>
              <ul className="space-y-2">
                {card.contenido.alertas.map((alerta, index) => (
                  <li key={index} className="flex items-start gap-3 text-red-700">
                    <span className="text-red-500 font-bold flex-shrink-0">⚠️</span>
                    <span>{alerta}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dato Interesante */}
          {card.contenido.dato && (
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl">
                  <AnimatedEmoji emoji="💡" animation="sparkle" />
                </span>
                <div>
                  <h4 className="font-bold text-teal-900 mb-2">📊 Dato Interesante:</h4>
                  <p className="text-teal-800 text-lg">{card.contenido.dato}</p>
                </div>
              </div>
            </div>
          )}

          {/* Consejo */}
          {card.contenido.consejo && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="text-4xl">
                  <AnimatedEmoji emoji="💪" animation="pulse" />
                </span>
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">🎯 Consejo de Oro:</h4>
                  <p className="text-orange-800 text-lg font-medium">{card.contenido.consejo}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quiz Button */}
        <div className="text-center">
          <button
            onClick={handleStartQuiz}
            className="btn btn-primary btn-large btn-hover-lift px-12"
          >
            <span className="text-2xl mr-2">✅</span>
            HACER QUIZ Y COMPLETAR
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Responde 2 preguntas para verificar tu aprendizaje
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;