import React from 'react';
import { getParameterColor, getParameterEmoji, getParameterName } from '../utils/simulador-vida/parameterCalculator';
import AnimatedEmoji from './AnimatedEmoji';

const ParameterBar = ({ paramName, value, showLabel = true, showValue = true, animated = true }) => {
  const color = getParameterColor(paramName, value);
  const emoji = getParameterEmoji(paramName);
  const name = getParameterName(paramName);
  
  // Calcular porcentaje para la barra
  let percentage = value;
  
  // Para nivel económico, convertir de 1-10 a 0-100
  if (paramName === 'nivelEconomico') {
    percentage = ((value - 1) / 9) * 100;
  }
  
  // Determinar animación del emoji según el parámetro
  const getEmojiAnimation = () => {
    switch (paramName) {
      case 'saludFisica':
        return 'heartbeat';
      case 'saludMental':
        return 'think';
      case 'satisfaccion':
        return 'rotate';
      case 'estres':
        return 'shake';
      case 'conocimiento':
        return 'sparkle';
      case 'relaciones':
        return 'float';
      case 'nivelEconomico':
        return 'sparkle';
      case 'progresoMeta':
        return 'targetPulse';
      default:
        return 'pulse';
    }
  };

  return (
    <div className="parameter-container">
      {showLabel && (
        <div className="parameter-label">
          {animated ? (
            <AnimatedEmoji emoji={emoji} animation={getEmojiAnimation()} size="normal" />
          ) : (
            <span className="parameter-emoji">{emoji}</span>
          )}
          <span>{name}:</span>
          {paramName === 'nivelEconomico' && (
            <span className="text-sm text-gray-500 ml-2">
              Nivel {value}/10
            </span>
          )}
        </div>
      )}
      
      <div className="parameter-bar-wrapper">
        <div
          className={`parameter-bar ${paramName} ${animated ? 'progress-bar-fill' : ''}`}
          style={{ width: `${percentage}%`, backgroundColor: color }}
        >
          {showValue && percentage > 15 && (
            <span>
              {paramName === 'nivelEconomico' ? `Nivel ${value}` : `${Math.round(value)}%`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// Versión especial para nivel económico con puntos
export const NivelEconomicoBar = ({ value }) => {
  return (
    <div className="nivel-economico-container">
      <div className="parameter-label">
        <AnimatedEmoji emoji="💼" animation="sparkle" size="normal" />
        <span>Situación Económica:</span>
      </div>
      
      <div className="nivel-dots">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`nivel-dot ${index < value ? 'active' : ''}`}
            title={`Nivel ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="text-sm text-gray-600 mt-2">
        {value <= 2 && 'Sin ingresos o muy limitados'}
        {value > 2 && value <= 4 && 'Ingresos básicos'}
        {value > 4 && value <= 6 && 'Ingresos estables'}
        {value > 6 && value <= 8 && 'Buena situación económica'}
        {value > 8 && 'Excelente situación económica'}
      </div>
    </div>
  );
};

export default ParameterBar;