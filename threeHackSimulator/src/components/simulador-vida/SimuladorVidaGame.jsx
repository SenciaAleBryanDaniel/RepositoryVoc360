import React, { useState } from 'react';
import Navbar from '../platform/Navbar';
import Welcome from './Welcome';
import AvatarCreation from './AvatarCreation';
import ProfileResult from './ProfileResult';
import WeekStatus from './WeekStatus';
import DecisionCard from './DecisionCard';
import DecisionResult from './DecisionResult';
import LearningModule from './LearningModule';
import WeeklySummary from './WeeklySummary';
import FinalReport from './FinalReport';
import { getScenario } from '../data/simulador-vida/scenarios';

const SimuladorVidaGame = () => {
  const [gameState, setGameState] = useState({
    phase: 'welcome', // welcome, avatar, profile, game, learning, summary, final
    playerName: '',
    avatarProfile: null,
    currentWeek: 1,
    currentDecision: 0,
    avatarParams: {
      nivelEconomico: 1,
      saludFisica: 80,
      saludMental: 75,
      satisfaccion: 60,
      estres: 40,
      conocimiento: 30,
      relaciones: 85,
      progresoMeta: 0
    },
    decisionsHistory: [],
    learningCardsCompleted: [],
    learningCardsSkipped: [],
    libraryCompleted: [],
    librarySkipped: [],
    careerFocus: null, // 'salud' | 'tech' | 'construccion' | 'admin'
    libraryMode: false
  });

  const handlePhaseChange = (newPhase, data = {}) => {
    setGameState(prev => ({
      ...prev,
      phase: newPhase,
      ...data
    }));
  };

  const handleDecision = (selectedId) => {
    const { currentWeek, currentDecision } = gameState;

    // Guardar enfoque/carrera en Año 19 (semana2), decisión 2
    if (currentWeek === 2 && currentDecision === 2) {
      const scenario = getScenario(2, 2);
      if (scenario) {
        const option = scenario.opciones.find(o => o.id === selectedId);
        let focus = null;
        if (option) {
          if (option.emoji === '⚕️') focus = 'salud';
          else if (option.emoji === '💻') focus = 'tech';
          else if (option.emoji === '🏗️') focus = 'construccion';
          else if (option.emoji === '💼') focus = 'admin';
        }
        if (focus) {
          setGameState(prev => ({ ...prev, careerFocus: focus }));
        }
      }
    }

    // Avance normal de decisiones
    if (gameState.currentDecision === 4) {
      handlePhaseChange('learning', { libraryMode: false });
    } else {
      handlePhaseChange('game', { currentDecision: gameState.currentDecision + 1 });
    }
  };

  const handleLearningComplete = (completed, skipped) => {
    const mergeUnique = (arr, vals) => Array.from(new Set([...(arr || []), ...vals]));
    const newLibraryCompleted = mergeUnique(gameState.libraryCompleted, completed);
    const newLibrarySkipped = mergeUnique(
      gameState.librarySkipped.filter(id => !completed.includes(id)),
      skipped
    );

    if (gameState.currentWeek === 15 && !gameState.libraryMode) {
      handlePhaseChange('final', {
        libraryCompleted: newLibraryCompleted,
        librarySkipped: newLibrarySkipped
      });
      return;
    }

    if (gameState.libraryMode) {
      handlePhaseChange('game', {
        libraryMode: false,
        libraryCompleted: newLibraryCompleted,
        librarySkipped: newLibrarySkipped
      });
      return;
    }

    handlePhaseChange('summary', {
      learningCardsCompleted: completed,
      learningCardsSkipped: skipped,
      libraryCompleted: newLibraryCompleted,
      librarySkipped: newLibrarySkipped
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {gameState.phase === 'welcome' && (
          <Welcome 
            onStart={(name) => handlePhaseChange('avatar', { playerName: name })}
          />
        )}
        
        {gameState.phase === 'avatar' && (
          <AvatarCreation 
            playerName={gameState.playerName}
            onComplete={(profile) => handlePhaseChange('profile', { avatarProfile: profile })}
          />
        )}
        
        {gameState.phase === 'profile' && (
          <ProfileResult 
            profile={gameState.avatarProfile}
            playerName={gameState.playerName}
            onStart={() => handlePhaseChange('game')}
          />
        )}
        
        {gameState.phase === 'game' && (
          <>
            {gameState.currentDecision === 0 && (
              <WeekStatus 
                week={gameState.currentWeek}
                params={gameState.avatarParams}
                careerFocus={gameState.careerFocus}
                onContinue={() => handlePhaseChange('game', { currentDecision: 1 })}
                onOpenLibrary={() => handlePhaseChange('learning', { libraryMode: true })}
                skippedCount={(gameState.librarySkipped || []).length}
              />
            )}
            
            {gameState.currentDecision > 0 && gameState.currentDecision <= 4 && (
              <DecisionCard
                week={gameState.currentWeek}
                decisionNumber={gameState.currentDecision}
                onDecision={handleDecision}
              />
            )}
          </>
        )}
        
        {gameState.phase === 'learning' && (
          <LearningModule
            week={gameState.currentWeek}
            libraryMode={gameState.libraryMode}
            cardsOverride={gameState.libraryMode ? (gameState.librarySkipped || []) : null}
            onComplete={handleLearningComplete}
          />
        )}
        
        {gameState.phase === 'summary' && (
          <WeeklySummary
            week={gameState.currentWeek}
            params={gameState.avatarParams}
            playerName={gameState.playerName}
            onContinue={() => handlePhaseChange('game', {
              currentWeek: gameState.currentWeek + 1,
              currentDecision: 0
            })}
          />
        )}
        
        {gameState.phase === 'final' && (
          <FinalReport
            playerName={gameState.playerName}
            profile={gameState.avatarProfile}
            finalParams={gameState.avatarParams}
            history={gameState.decisionsHistory}
          />
        )}
      </div>
    </div>
  );
};

export default SimuladorVidaGame;