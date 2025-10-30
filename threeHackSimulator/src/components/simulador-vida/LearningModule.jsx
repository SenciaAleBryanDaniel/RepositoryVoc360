import React, { useState } from 'react';
import LearningCard from './LearningCard';
import AnimatedEmoji from './AnimatedEmoji';
import { getWeekLearningCards, getLearningCard } from '../data/simulador-vida/learningCards';

const LearningModule = ({ week, onComplete, cardsOverride = null, libraryMode = false }) => {
  const cards = cardsOverride
    ? cardsOverride.map(id => getLearningCard(id)).filter(Boolean)
    : getWeekLearningCards(week);
  const [cardStatus, setCardStatus] = useState(
    cards.reduce((acc, card) => {
      acc[card.id] = 'pending'; // pending, reading, completed, skipped
      return acc;
    }, {})
  );
  const [currentCard, setCurrentCard] = useState(null);

  const completedCount = Object.values(cardStatus).filter(s => s === 'completed').length;
  const skippedCount = Object.values(cardStatus).filter(s => s === 'skipped').length;
  const totalCount = cards.length;
  const allProcessed = completedCount + skippedCount === totalCount;

  const handleCardClick = (cardId) => {
    setCurrentCard(cardId);
    setCardStatus(prev => ({ ...prev, [cardId]: 'reading' }));
  };

  const handleCardComplete = (cardId) => {
    setCardStatus(prev => ({ ...prev, [cardId]: 'completed' }));
    setCurrentCard(null);
  };

  const handleCardSkip = (cardId) => {
    setCardStatus(prev => ({ ...prev, [cardId]: 'skipped' }));
  };

  const handleBackToGrid = () => {
    setCurrentCard(null);
  };

  const handleFinish = () => {
    const completed = Object.keys(cardStatus).filter(id => cardStatus[id] === 'completed');
    const skipped = Object.keys(cardStatus).filter(id => cardStatus[id] === 'skipped');
    onComplete(completed, skipped);
  };

  // Si no hay fichas para esta vista
  if (cards.length === 0) {
    return (
      <div className="simulador-container fade-enter">
        <div className="simulador-card">
          <div className="text-center">
            <div className="text-8xl mb-6">
              <AnimatedEmoji emoji={libraryMode ? '📚' : '✅'} animation="bounce" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {libraryMode ? 'No tienes fichas pendientes en la Biblioteca' : 'Esta semana no hay fichas educativas'}
            </h2>
            <button
              onClick={() => onComplete([], [])}
              className="btn btn-primary btn-large btn-hover-lift"
            >
              <span className="text-2xl mr-2">→</span>
              CONTINUAR
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Vista lectura de ficha
  if (currentCard) {
    const card = cards.find(c => c.id === currentCard);
    return (
      <LearningCard
        card={card}
        onComplete={() => handleCardComplete(currentCard)}
        onBack={handleBackToGrid}
      />
    );
  }

  // Vista de grid de fichas
  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-7xl mb-4">
            <AnimatedEmoji emoji={libraryMode ? '📚' : '📚'} animation="bounce" />
          </div>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            {libraryMode ? 'Biblioteca de Fichas Pendientes' : `Módulo Educativo - Año ${17 + week}`}
          </h1>
          {!libraryMode && (
            <p className="text-xl text-gray-600">
              Completaste las 4 decisiones del año. ¡Es momento de aprender! 📖
            </p>
          )}
        </div>

        {!libraryMode && (
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8">
            <p className="text-gray-700 text-center">
              Basado en tus decisiones, debes aprender sobre estos temas:
            </p>
            <p className="text-sm text-gray-600 text-center mt-2">
              ⚠️ Puedes saltar las fichas, pero quedarán marcadas. Aprenderlas te dará +5% Conocimiento por cada una.
            </p>
          </div>
        )}

        {/* Progreso */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Progreso: {completedCount + skippedCount}/{totalCount} fichas procesadas
            </span>
            <span className="text-sm font-semibold text-gray-600">
              ✅ {completedCount} completadas | ⚠️ {skippedCount} saltadas
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-teal-500 transition-all duration-500"
              style={{ width: `${((completedCount + skippedCount) / totalCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="learning-grid mb-8">
          {cards.map((card, index) => {
            const status = cardStatus[card.id];
            const isCompleted = status === 'completed';
            const isSkipped = status === 'skipped';
            const isPending = status === 'pending';

            return (
              <div
                key={card.id}
                className={`learning-card ${isCompleted ? 'completed' : ''} ${isSkipped ? 'skipped' : ''} slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="learning-card-header">
                  <div>
                    <div className="learning-emoji">
                      <AnimatedEmoji emoji={card.emoji} animation="pulse" />
                    </div>
                    <h3 className="learning-title">{card.titulo}</h3>
                  </div>
                  <div className={`learning-status ${isCompleted ? 'completed' : ''} ${isSkipped ? 'skipped' : ''}`}>
                    {isCompleted && '✓'}
                    {isSkipped && '⚠️'}
                    {isPending && '⏳'}
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  {card.categoria}
                </div>

                {isPending && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCardClick(card.id)}
                      className="btn btn-primary flex-1 btn-hover-grow"
                    >
                      📖 APRENDER
                    </button>
                    {!libraryMode && (
                      <button
                        onClick={() => handleCardSkip(card.id)}
                        className="btn btn-secondary btn-hover-grow"
                      >
                        ⏭️ SALTAR
                      </button>
                    )}
                  </div>
                )}

                {isCompleted && (
                  <button
                    onClick={() => handleCardClick(card.id)}
                    className="btn btn-success w-full"
                  >
                    ✓ VER RESUMEN
                  </button>
                )}

                {isSkipped && !libraryMode && (
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCardClick(card.id)}
                      className="btn btn-secondary w-full"
                    >
                      📖 APRENDER AHORA
                    </button>
                    <p className="text-xs text-orange-600 text-center">
                      Saltada - Disponible en tu biblioteca
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={handleFinish}
            disabled={!allProcessed}
            className={`btn btn-large ${allProcessed ? 'btn-primary btn-hover-lift' : 'btn-secondary btn-disabled'}`}
          >
            <span className="text-2xl mr-2">🚀</span>
            {libraryMode ? 'VOLVER' : allProcessed ? 'CONTINUAR AL SIGUIENTE AÑO' : 'COMPLETA O SALTA TODAS LAS FICHAS'}
          </button>
          
          {!allProcessed && !libraryMode && (
            <p className="text-sm text-gray-500 mt-4">
              Debes procesar todas las fichas para continuar
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningModule;