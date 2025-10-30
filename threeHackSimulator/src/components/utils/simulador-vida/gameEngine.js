// Motor del juego - Lógica central del simulador

import { mariaTemplate } from '../data/mariaTemplate';
import { getScenario } from '../data/scenarios';
import { getWeekLearningCards } from '../data/learningCards';

class GameEngine {
  constructor() {
    this.gameState = {
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
      unlockedCards: []
    };
  }

  // Inicializar juego
  initGame(playerName, avatarProfile) {
    this.gameState.playerName = playerName;
    this.gameState.avatarProfile = avatarProfile;
    this.gameState.currentWeek = 1;
    this.gameState.currentDecision = 0;
    return this.gameState;
  }

  // Obtener estado actual del juego
  getGameState() {
    return { ...this.gameState };
  }

  // Obtener parámetros actuales del avatar
  getAvatarParams() {
    return { ...this.gameState.avatarParams };
  }

  // Procesar una decisión
  processDecision(weekNumber, decisionNumber, selectedOption) {
    const scenario = getScenario(weekNumber, decisionNumber);
    
    if (!scenario) {
      console.error('Escenario no encontrado');
      return null;
    }

    const option = scenario.opciones.find(opt => opt.id === selectedOption);
    
    if (!option) {
      console.error('Opción no encontrada');
      return null;
    }

    // Aplicar impactos en parámetros
    this.applyImpacts(option.impacto);

    // Desbloquear fichas educativas si las hay
    if (option.desbloquea) {
      this.gameState.unlockedCards.push(...option.desbloquea);
    }

    // Guardar en historial
    const decisionRecord = {
      week: weekNumber,
      decisionNumber: decisionNumber,
      scenario: scenario.titulo,
      selectedOption: selectedOption,
      optionText: option.texto,
      impact: option.impacto,
      feedback: option.feedback,
      timestamp: new Date().toISOString()
    };

    this.gameState.decisionsHistory.push(decisionRecord);

    // Avanzar decisión
    this.gameState.currentDecision = decisionNumber;

    return {
      feedback: option.feedback,
      impact: option.impacto,
      newParams: this.getAvatarParams(),
      unlockedCards: option.desbloquea || []
    };
  }

  // Aplicar impactos en los parámetros
  applyImpacts(impacts) {
    Object.keys(impacts).forEach(param => {
      if (this.gameState.avatarParams.hasOwnProperty(param)) {
        // Aplicar cambio
        this.gameState.avatarParams[param] += impacts[param];

        // Limitar valores entre 0 y 100 (excepto nivelEconomico que es 1-10)
        if (param === 'nivelEconomico') {
          this.gameState.avatarParams[param] = Math.max(
            1,
            Math.min(10, this.gameState.avatarParams[param])
          );
        } else {
          this.gameState.avatarParams[param] = Math.max(
            0,
            Math.min(100, this.gameState.avatarParams[param])
          );
        }
      }
    });
  }

  // Completar ficha educativa
  completeLearningCard(cardId) {
    if (!this.gameState.learningCardsCompleted.includes(cardId)) {
      this.gameState.learningCardsCompleted.push(cardId);
      
      // Bonus de conocimiento por completar ficha
      this.applyImpacts({ conocimiento: 5 });
      
      return true;
    }
    return false;
  }

  // Saltar ficha educativa
  skipLearningCard(cardId) {
    if (!this.gameState.learningCardsSkipped.includes(cardId)) {
      this.gameState.learningCardsSkipped.push(cardId);
      return true;
    }
    return false;
  }

  // Avanzar a la siguiente semana
  advanceWeek() {
    if (this.gameState.currentWeek < 15) {
      this.gameState.currentWeek += 1;
      this.gameState.currentDecision = 0;
      this.gameState.unlockedCards = [];
      return true;
    }
    return false;
  }

  // Obtener fichas de la semana actual
  getCurrentWeekLearningCards() {
    return getWeekLearningCards(this.gameState.currentWeek);
  }

  // Verificar si todas las decisiones de la semana están completas
  isWeekComplete() {
    return this.gameState.currentDecision >= 4;
  }

  // Verificar si el juego está completo
  isGameComplete() {
    return this.gameState.currentWeek === 15 && this.isWeekComplete();
  }

  // Calcular puntuación final
  calculateFinalScore() {
    const params = this.gameState.avatarParams;
    
    // Puntuación basada en parámetros
    const paramScore = (
      params.saludFisica +
      params.saludMental +
      params.satisfaccion +
      (100 - params.estres) +
      params.conocimiento +
      params.relaciones +
      (params.nivelEconomico * 10) +
      params.progresoMeta
    ) / 8;

    // Bonus por fichas completadas
    const learningBonus = this.gameState.learningCardsCompleted.length * 0.5;

    // Penalización por fichas saltadas
    const skipPenalty = this.gameState.learningCardsSkipped.length * 0.3;

    const finalScore = Math.min(100, Math.max(0, paramScore + learningBonus - skipPenalty));

    return {
      score: finalScore.toFixed(1),
      paramScore: paramScore.toFixed(1),
      learningBonus: learningBonus.toFixed(1),
      skipPenalty: skipPenalty.toFixed(1),
      rating: this.getScoreRating(finalScore)
    };
  }

  // Obtener calificación según puntuación
  getScoreRating(score) {
    if (score >= 90) return { text: 'Excelente', emoji: '🏆', color: '#10b981' };
    if (score >= 80) return { text: 'Muy Bien', emoji: '🌟', color: '#3b82f6' };
    if (score >= 70) return { text: 'Bien', emoji: '👍', color: '#f59e0b' };
    if (score >= 60) return { text: 'Regular', emoji: '😐', color: '#f97316' };
    return { text: 'Necesitas Mejorar', emoji: '😔', color: '#ef4444' };
  }

  // Obtener logros desbloqueados
  getAchievements() {
    const achievements = [];
    const params = this.gameState.avatarParams;
    const history = this.gameState.decisionsHistory;

    // Logros basados en parámetros finales
    if (params.conocimiento >= 80) {
      achievements.push({
        titulo: 'Sabio',
        descripcion: 'Alcanzaste 80% de conocimiento',
        emoji: '🧠'
      });
    }

    if (params.saludMental >= 80 && params.saludFisica >= 80) {
      achievements.push({
        titulo: 'Saludable',
        descripcion: 'Mantuviste ambas saludes sobre 80%',
        emoji: '💪'
      });
    }

    if (params.relaciones >= 85) {
      achievements.push({
        titulo: 'Sociable',
        descripcion: 'Mantuviste excelentes relaciones',
        emoji: '👥'
      });
    }

    if (params.nivelEconomico >= 7) {
      achievements.push({
        titulo: 'Exitoso',
        descripcion: 'Alcanzaste nivel económico 7+',
        emoji: '💰'
      });
    }

    if (params.progresoMeta >= 70) {
      achievements.push({
        titulo: 'Enfocado',
        descripcion: 'Lograste 70%+ de tu meta',
        emoji: '🎯'
      });
    }

    // Logros basados en decisiones
    if (this.gameState.learningCardsCompleted.length >= 50) {
      achievements.push({
        titulo: 'Estudiante Dedicado',
        descripcion: 'Completaste 50+ fichas educativas',
        emoji: '📚'
      });
    }

    if (this.gameState.learningCardsSkipped.length === 0) {
      achievements.push({
        titulo: 'Perfeccionista',
        descripcion: 'No saltaste ninguna ficha',
        emoji: '✨'
      });
    }

    // Logros especiales según decisiones
    const helpFamilyCount = history.filter(d => 
      d.optionText.toLowerCase().includes('familia') || 
      d.optionText.toLowerCase().includes('ayudar')
    ).length;

    if (helpFamilyCount >= 10) {
      achievements.push({
        titulo: 'Solidario',
        descripcion: 'Siempre ayudaste a tu familia',
        emoji: '❤️'
      });
    }

    return achievements;
  }

  // Obtener resumen del juego
  getGameSummary() {
    return {
      playerName: this.gameState.playerName,
      profile: this.gameState.avatarProfile,
      weeksCompleted: this.gameState.currentWeek,
      decisionsTotal: this.gameState.decisionsHistory.length,
      learningCardsCompleted: this.gameState.learningCardsCompleted.length,
      learningCardsSkipped: this.gameState.learningCardsSkipped.length,
      finalParams: this.getAvatarParams(),
      score: this.calculateFinalScore(),
      achievements: this.getAchievements()
    };
  }

  // Reiniciar juego
  resetGame() {
    this.gameState = {
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
      unlockedCards: []
    };
  }

  // Modo prueba con María
  loadMariaTemplate() {
    this.initGame(mariaTemplate.nombre, mariaTemplate.perfil);
    this.gameState.avatarParams = { ...mariaTemplate.parametrosIniciales };
    return this.gameState;
  }

  // Simular decisión predefinida de María
  simulateMaria Decision(weekNumber, decisionNumber) {
    const weekKey = `semana${weekNumber}`;
    const mariaDecision = mariaTemplate.decisiones[weekKey]?.[decisionNumber - 1];
    
    if (mariaDecision) {
      return this.processDecision(weekNumber, decisionNumber, mariaDecision.respuesta);
    }
    
    return null;
  }
}

// Exportar instancia única (Singleton)
export const gameEngine = new GameEngine();