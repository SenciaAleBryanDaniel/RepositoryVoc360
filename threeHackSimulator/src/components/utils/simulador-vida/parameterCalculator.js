// Calculador de parámetros del avatar

/**
 * Obtiene el color según el valor del parámetro
 */
export const getParameterColor = (paramName, value) => {
  const colors = {
    nivelEconomico: '#14b8a6',
    saludFisica: '#10b981',
    saludMental: '#8b5cf6',
    satisfaccion: '#f59e0b',
    estres: '#ef4444',
    conocimiento: '#3b82f6',
    relaciones: '#ec4899',
    progresoMeta: '#6366f1'
  };
  
  return colors[paramName] || '#6b7280';
};

/**
 * Obtiene el emoji según el parámetro
 */
export const getParameterEmoji = (paramName) => {
  const emojis = {
    nivelEconomico: '💼',
    saludFisica: '❤️',
    saludMental: '🧠',
    satisfaccion: '😊',
    estres: '😰',
    conocimiento: '📚',
    relaciones: '👥',
    progresoMeta: '🎯'
  };
  
  return emojis[paramName] || '📊';
};

/**
 * Obtiene el nombre legible del parámetro
 */
export const getParameterName = (paramName) => {
  const names = {
    nivelEconomico: 'Situación Económica',
    saludFisica: 'Salud Física',
    saludMental: 'Salud Mental',
    satisfaccion: 'Satisfacción',
    estres: 'Estrés',
    conocimiento: 'Conocimiento',
    relaciones: 'Relaciones',
    progresoMeta: 'Progreso a Meta'
  };
  
  return names[paramName] || paramName;
};

/**
 * Analiza el estado de un parámetro (bajo, medio, alto)
 */
export const analyzeParameterStatus = (paramName, value) => {
  // Para nivel económico (1-10)
  if (paramName === 'nivelEconomico') {
    if (value <= 3) return { status: 'bajo', color: '#ef4444', message: 'Situación económica difícil' };
    if (value <= 6) return { status: 'medio', color: '#f59e0b', message: 'Situación económica estable' };
    return { status: 'alto', color: '#10b981', message: 'Buena situación económica' };
  }
  
  // Para estrés (invertido: más bajo es mejor)
  if (paramName === 'estres') {
    if (value >= 70) return { status: 'critico', color: '#ef4444', message: '⚠️ Nivel de estrés crítico' };
    if (value >= 50) return { status: 'alto', color: '#f97316', message: 'Estrés elevado' };
    if (value >= 30) return { status: 'medio', color: '#f59e0b', message: 'Estrés moderado' };
    return { status: 'bajo', color: '#10b981', message: 'Estrés bajo, bien manejado' };
  }
  
  // Para el resto de parámetros (0-100)
  if (value <= 30) return { status: 'critico', color: '#ef4444', message: '⚠️ Nivel crítico, requiere atención' };
  if (value <= 50) return { status: 'bajo', color: '#f97316', message: 'Nivel bajo, necesita mejorar' };
  if (value <= 70) return { status: 'medio', color: '#f59e0b', message: 'Nivel aceptable' };
  if (value <= 85) return { status: 'bueno', color: '#3b82f6', message: 'Buen nivel' };
  return { status: 'excelente', color: '#10b981', message: '¡Excelente nivel!' };
};

/**
 * Analiza todos los parámetros y da recomendaciones
 */
export const analyzeAllParameters = (params) => {
  const analysis = {
    fortalezas: [],
    debilidades: [],
    alertas: [],
    recomendaciones: []
  };
  
  Object.entries(params).forEach(([paramName, value]) => {
    const status = analyzeParameterStatus(paramName, value);
    const name = getParameterName(paramName);
    
    if (status.status === 'critico') {
      analysis.alertas.push({
        parametro: name,
        mensaje: status.message,
        valor: value,
        emoji: getParameterEmoji(paramName)
      });
      analysis.recomendaciones.push(getRecommendation(paramName, value));
    } else if (status.status === 'bajo') {
      analysis.debilidades.push({
        parametro: name,
        mensaje: status.message,
        valor: value,
        emoji: getParameterEmoji(paramName)
      });
    } else if (status.status === 'excelente' || status.status === 'bueno') {
      analysis.fortalezas.push({
        parametro: name,
        mensaje: status.message,
        valor: value,
        emoji: getParameterEmoji(paramName)
      });
    }
  });
  
  return analysis;
};

/**
 * Obtiene recomendaciones específicas según parámetro bajo
 */
export const getRecommendation = (paramName, value) => {
  const recommendations = {
    saludFisica: {
      titulo: 'Mejora tu Salud Física',
      acciones: [
        'Hacer ejercicio al menos 30 minutos, 3 veces por semana',
        'Dormir 7-8 horas diarias',
        'Comer de forma balanceada',
        'Hacer chequeos médicos regulares'
      ]
    },
    saludMental: {
      titulo: 'Cuida tu Salud Mental',
      acciones: [
        'Buscar apoyo psicológico si lo necesitas',
        'Practicar mindfulness o meditación',
        'Mantener contacto con seres queridos',
        'Tomarte descansos regulares'
      ]
    },
    satisfaccion: {
      titulo: 'Aumenta tu Satisfacción',
      acciones: [
        'Identifica qué te hace feliz',
        'Dedica tiempo a hobbies',
        'Celebra tus logros pequeños',
        'Busca propósito en lo que haces'
      ]
    },
    estres: {
      titulo: 'Reduce tu Estrés',
      acciones: [
        'Identifica las fuentes de estrés',
        'Aprende técnicas de relajación',
        'Organiza mejor tu tiempo',
        'Aprende a decir "no" cuando es necesario'
      ]
    },
    conocimiento: {
      titulo: 'Aumenta tu Conocimiento',
      acciones: [
        'Dedica tiempo diario al aprendizaje',
        'Toma cursos online gratuitos',
        'Lee libros o artículos',
        'Practica lo que aprendes'
      ]
    },
    relaciones: {
      titulo: 'Fortalece tus Relaciones',
      acciones: [
        'Dedica tiempo de calidad a tu familia',
        'Mantén contacto con amigos',
        'Sé honesto y comunicativo',
        'Participa en actividades sociales'
      ]
    },
    nivelEconomico: {
      titulo: 'Mejora tu Situación Económica',
      acciones: [
        'Crea un presupuesto mensual',
        'Busca formas de aumentar ingresos',
        'Reduce gastos innecesarios',
        'Invierte en tu educación'
      ]
    },
    progresoMeta: {
      titulo: 'Avanza hacia tu Meta',
      acciones: [
        'Define pasos concretos hacia tu meta',
        'Establece plazos realistas',
        'Celebra avances pequeños',
        'Ajusta tu plan si es necesario'
      ]
    }
  };
  
  return recommendations[paramName] || {
    titulo: 'Mejora General',
    acciones: ['Analiza qué está fallando', 'Busca apoyo', 'Crea un plan de acción']
  };
};

/**
 * Calcula el cambio porcentual entre dos valores
 */
export const calculateChange = (oldValue, newValue) => {
  const change = newValue - oldValue;
  const percentage = oldValue !== 0 ? ((change / oldValue) * 100).toFixed(1) : 0;
  
  return {
    absolute: change,
    percentage: percentage,
    direction: change > 0 ? 'up' : change < 0 ? 'down' : 'neutral',
    emoji: change > 0 ? '↑' : change < 0 ? '↓' : '→'
  };
};

/**
 * Compara parámetros entre dos estados
 */
export const compareParameters = (oldParams, newParams) => {
  const comparison = {};
  
  Object.keys(newParams).forEach(param => {
    comparison[param] = {
      old: oldParams[param],
      new: newParams[param],
      change: calculateChange(oldParams[param], newParams[param])
    };
  });
  
  return comparison;
};

/**
 * Calcula score general del avatar
 */
export const calculateAvatarScore = (params) => {
  // Peso de cada parámetro en el score total
  const weights = {
    nivelEconomico: 0.15,
    saludFisica: 0.15,
    saludMental: 0.15,
    satisfaccion: 0.15,
    estres: 0.10, // Invertido
    conocimiento: 0.10,
    relaciones: 0.10,
    progresoMeta: 0.10
  };
  
  let totalScore = 0;
  
  Object.entries(params).forEach(([param, value]) => {
    let normalizedValue = value;
    
    // Normalizar nivel económico de 1-10 a 0-100
    if (param === 'nivelEconomico') {
      normalizedValue = (value - 1) * (100 / 9);
    }
    
    // Invertir estrés (más estrés = menor score)
    if (param === 'estres') {
      normalizedValue = 100 - value;
    }
    
    totalScore += normalizedValue * weights[param];
  });
  
  return Math.round(totalScore);
};

/**
 * Obtiene el percentil del jugador comparado con otros
 */
export const getPlayerPercentile = (score) => {
  // Simulación de distribución normal
  // En producción, esto vendría de una base de datos real
  if (score >= 90) return 95;
  if (score >= 85) return 90;
  if (score >= 80) return 80;
  if (score >= 75) return 70;
  if (score >= 70) return 60;
  if (score >= 65) return 50;
  if (score >= 60) return 40;
  if (score >= 55) return 30;
  if (score >= 50) return 20;
  return 10;
};

/**
 * Predice tendencia futura basado en historial
 */
export const predictTrend = (paramHistory) => {
  if (paramHistory.length < 3) {
    return { trend: 'insufficient_data', message: 'Datos insuficientes' };
  }
  
  // Calcular tendencia simple con últimos 3 valores
  const recent = paramHistory.slice(-3);
  const avg1 = recent[0];
  const avg2 = recent[1];
  const avg3 = recent[2];
  
  if (avg3 > avg2 && avg2 > avg1) {
    return { trend: 'improving', message: '📈 Tendencia positiva', color: '#10b981' };
  } else if (avg3 < avg2 && avg2 < avg1) {
    return { trend: 'declining', message: '📉 Tendencia negativa', color: '#ef4444' };
  } else {
    return { trend: 'stable', message: '→ Tendencia estable', color: '#f59e0b' };
  }
};

/**
 * Genera mensaje personalizado según estado del avatar
 */
export const generatePersonalizedMessage = (params, playerName) => {
  const analysis = analyzeAllParameters(params);
  const score = calculateAvatarScore(params);
  
  let message = `${playerName}, `;
  
  if (score >= 80) {
    message += '¡vas muy bien! ';
  } else if (score >= 60) {
    message += 'vas por buen camino, ';
  } else {
    message += 'necesitas hacer algunos ajustes. ';
  }
  
  if (analysis.fortalezas.length > 0) {
    const fortaleza = analysis.fortalezas[0];
    message += `Tu ${fortaleza.parametro.toLowerCase()} es una fortaleza. `;
  }
  
  if (analysis.alertas.length > 0) {
    const alerta = analysis.alertas[0];
    message += `⚠️ Presta atención a tu ${alerta.parametro.toLowerCase()}. `;
  } else if (analysis.debilidades.length > 0) {
    const debilidad = analysis.debilidades[0];
    message += `Trabaja en mejorar tu ${debilidad.parametro.toLowerCase()}. `;
  }
  
  return message;
};