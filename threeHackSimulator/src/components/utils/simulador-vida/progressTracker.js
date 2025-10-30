// Sistema de guardado y seguimiento de progreso

const STORAGE_KEY = 'simulador_vida_progress';

/**
 * Guarda el progreso del juego en localStorage
 */
export const saveProgress = (gameState) => {
  try {
    const progressData = {
      ...gameState,
      lastSaved: new Date().toISOString(),
      version: '1.0.0'
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
    return { success: true };
  } catch (error) {
    console.error('Error al guardar progreso:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Carga el progreso guardado
 */
export const loadProgress = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    
    if (!savedData) {
      return { success: false, data: null, message: 'No hay progreso guardado' };
    }
    
    const progressData = JSON.parse(savedData);
    
    return { success: true, data: progressData };
  } catch (error) {
    console.error('Error al cargar progreso:', error);
    return { success: false, data: null, error: error.message };
  }
};

/**
 * Verifica si existe progreso guardado
 */
export const hasProgress = () => {
  return localStorage.getItem(STORAGE_KEY) !== null;
};

/**
 * Elimina el progreso guardado
 */
export const clearProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return { success: true };
  } catch (error) {
    console.error('Error al limpiar progreso:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Exporta el progreso como JSON descargable
 */
export const exportProgress = (gameState) => {
  try {
    const exportData = {
      ...gameState,
      exportDate: new Date().toISOString(),
      version: '1.0.0'
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `simulador_vida_${gameState.playerName}_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    return { success: true };
  } catch (error) {
    console.error('Error al exportar progreso:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Importa progreso desde archivo JSON
 */
export const importProgress = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        
        // Validar estructura básica
        if (!importedData.playerName || !importedData.avatarParams) {
          throw new Error('Archivo de progreso inválido');
        }
        
        resolve({ success: true, data: importedData });
      } catch (error) {
        reject({ success: false, error: error.message });
      }
    };
    
    reader.onerror = () => {
      reject({ success: false, error: 'Error al leer archivo' });
    };
    
    reader.readAsText(file);
  });
};

/**
 * Obtiene estadísticas del progreso
 */
export const getProgressStats = (gameState) => {
  const stats = {
    weeksCompleted: gameState.currentWeek - 1,
    totalWeeks: 15,
    progressPercentage: ((gameState.currentWeek - 1) / 15 * 100).toFixed(1),
    decisionsTotal: gameState.decisionsHistory.length,
    learningCardsCompleted: gameState.learningCardsCompleted.length,
    learningCardsSkipped: gameState.learningCardsSkipped.length,
    learningCompletionRate: 0,
    playTime: calculatePlayTime(gameState)
  };
  
  const totalCards = stats.learningCardsCompleted + stats.learningCardsSkipped;
  if (totalCards > 0) {
    stats.learningCompletionRate = (
      (stats.learningCardsCompleted / totalCards) * 100
    ).toFixed(1);
  }
  
  return stats;
};

/**
 * Calcula tiempo de juego estimado
 */
const calculatePlayTime = (gameState) => {
  const decisionsTime = gameState.decisionsHistory.length * 2; // 2 min por decisión
  const learningTime = gameState.learningCardsCompleted.length * 5; // 5 min por ficha
  const totalMinutes = decisionsTime + learningTime;
  
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  
  return {
    total: totalMinutes,
    hours: hours,
    minutes: minutes,
    formatted: hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`
  };
};

/**
 * Registra evento para analytics (preparado para futuro)
 */
export const trackEvent = (eventName, eventData = {}) => {
  try {
    // Por ahora solo log en consola
    // En producción conectar a Google Analytics, Mixpanel, etc.
    console.log('Event:', eventName, eventData);
    
    // Guardar en array local para análisis
    const events = JSON.parse(localStorage.getItem('simulador_events') || '[]');
    events.push({
      event: eventName,
      data: eventData,
      timestamp: new Date().toISOString()
    });
    
    // Limitar a últimos 100 eventos
    if (events.length > 100) {
      events.shift();
    }
    
    localStorage.setItem('simulador_events', JSON.stringify(events));
  } catch (error) {
    console.error('Error al trackear evento:', error);
  }
};

/**
 * Obtiene métricas de sesión
 */
export const getSessionMetrics = () => {
  try {
    const events = JSON.parse(localStorage.getItem('simulador_events') || '[]');
    
    return {
      totalEvents: events.length,
      events: events
    };
  } catch (error) {
    console.error('Error al obtener métricas:', error);
    return { totalEvents: 0, events: [] };
  }
};

/**
 * Crea un checkpoint del progreso
 */
export const createCheckpoint = (gameState, checkpointName) => {
  try {
    const checkpoints = JSON.parse(localStorage.getItem('simulador_checkpoints') || '[]');
    
    const checkpoint = {
      name: checkpointName,
      gameState: { ...gameState },
      createdAt: new Date().toISOString()
    };
    
    checkpoints.push(checkpoint);
    
    // Limitar a 5 checkpoints
    if (checkpoints.length > 5) {
      checkpoints.shift();
    }
    
    localStorage.setItem('simulador_checkpoints', JSON.stringify(checkpoints));
    
    return { success: true, checkpoint };
  } catch (error) {
    console.error('Error al crear checkpoint:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Obtiene lista de checkpoints
 */
export const getCheckpoints = () => {
  try {
    const checkpoints = JSON.parse(localStorage.getItem('simulador_checkpoints') || '[]');
    return { success: true, checkpoints };
  } catch (error) {
    console.error('Error al obtener checkpoints:', error);
    return { success: false, checkpoints: [] };
  }
};

/**
 * Carga un checkpoint específico
 */
export const loadCheckpoint = (checkpointName) => {
  try {
    const checkpoints = JSON.parse(localStorage.getItem('simulador_checkpoints') || '[]');
    const checkpoint = checkpoints.find(cp => cp.name === checkpointName);
    
    if (!checkpoint) {
      return { success: false, message: 'Checkpoint no encontrado' };
    }
    
    return { success: true, gameState: checkpoint.gameState };
  } catch (error) {
    console.error('Error al cargar checkpoint:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Auto-guardado periódico
 */
let autoSaveInterval = null;

export const startAutoSave = (gameState, intervalMinutes = 2) => {
  stopAutoSave(); // Detener auto-guardado previo si existe
  
  autoSaveInterval = setInterval(() => {
    saveProgress(gameState());
    console.log('Auto-guardado realizado');
  }, intervalMinutes * 60 * 1000);
};

export const stopAutoSave = () => {
  if (autoSaveInterval) {
    clearInterval(autoSaveInterval);
    autoSaveInterval = null;
  }
};

/**
 * Genera reporte de progreso
 */
export const generateProgressReport = (gameState) => {
  const stats = getProgressStats(gameState);
  const playTime = calculatePlayTime(gameState);
  
  const report = {
    jugador: gameState.playerName,
    perfil: gameState.avatarProfile?.tipo || 'No definido',
    progreso: {
      semanas: `${stats.weeksCompleted}/${stats.totalWeeks}`,
      porcentaje: `${stats.progressPercentage}%`,
      decisiones: stats.decisionsTotal,
      fichasCompletadas: stats.learningCardsCompleted,
      fichasSaltadas: stats.learningCardsSkipped,
      tasaCompletitud: `${stats.learningCompletionRate}%`
    },
    tiempoJuego: playTime.formatted,
    parametrosActuales: gameState.avatarParams,
    ultimaActualizacion: new Date().toISOString()
  };
  
  return report;
};

/**
 * Compara progreso con promedio
 */
export const compareWithAverage = (gameState) => {
  // Valores promedio simulados (en producción vendrían de BD)
  const averageParams = {
    nivelEconomico: 5,
    saludFisica: 65,
    saludMental: 60,
    satisfaccion: 65,
    estres: 50,
    conocimiento: 60,
    relaciones: 70,
    progresoMeta: 50
  };
  
  const comparison = {};
  
  Object.keys(gameState.avatarParams).forEach(param => {
    const playerValue = gameState.avatarParams[param];
    const avgValue = averageParams[param];
    const diff = playerValue - avgValue;
    const percentDiff = ((diff / avgValue) * 100).toFixed(1);
    
    comparison[param] = {
      player: playerValue,
      average: avgValue,
      difference: diff,
      percentDiff: percentDiff,
      status: diff > 0 ? 'above' : diff < 0 ? 'below' : 'equal'
    };
  });
  
  return comparison;
};