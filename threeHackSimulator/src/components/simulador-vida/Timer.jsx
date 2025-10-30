import React, { useState, useEffect } from 'react';
import AnimatedEmoji from './AnimatedEmoji';

const Timer = ({ duration = 120, onTimeUp, paused = false, flexible = true }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    setTimeLeft(duration);
    setIsWarning(false);
  }, [duration]);

  useEffect(() => {
    if (paused) return;

    // Si es flexible, el tiempo no se agota nunca (solo es informativo)
    if (flexible && timeLeft === 0) {
      return;
    }

    if (timeLeft <= 0) {
      if (onTimeUp && !flexible) {
        onTimeUp();
      }
      return;
    }

    // Advertencia cuando quedan 30 segundos
    if (timeLeft <= 30 && !isWarning) {
      setIsWarning(true);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (flexible) {
          // En modo flexible, después de 0 seguimos contando en negativo
          return prev - 1;
        } else {
          return Math.max(0, prev - 1);
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, paused, flexible, onTimeUp, isWarning]);

  const formatTime = (seconds) => {
    if (seconds < 0) {
      const absSeconds = Math.abs(seconds);
      const mins = Math.floor(absSeconds / 60);
      const secs = absSeconds % 60;
      return `+${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timeLeft < 0) return 'from-gray-400 to-gray-600';
    if (isWarning) return 'from-orange-500 to-red-600';
    return 'from-indigo-600 to-pink-600';
  };

  const getTimerMessage = () => {
    if (timeLeft < 0) {
      return 'Tiempo extra - Sin presión';
    }
    if (isWarning) {
      return '⚠️ Últimos segundos';
    }
    return 'Tiempo sugerido';
  };

  return (
    <div className={`timer-container bg-gradient-to-r ${getTimerColor()} ${isWarning && timeLeft > 0 ? 'timer-warning' : ''}`}>
      <div className="timer-icon">
        <AnimatedEmoji 
          emoji={timeLeft < 0 ? '⏰' : isWarning ? '⏱️' : '⏱️'} 
          animation={isWarning && timeLeft > 0 ? 'shake' : 'pulse'} 
        />
      </div>
      
      <div className="flex flex-col items-center">
        <div className="timer-text">
          {formatTime(timeLeft)}
        </div>
        <div className="text-xs text-white opacity-90">
          {getTimerMessage()}
        </div>
      </div>
      
      {flexible && timeLeft < 0 && (
        <div className="text-xs text-white opacity-75">
          (Puedes tomarte el tiempo que necesites)
        </div>
      )}
    </div>
  );
};

export default Timer;