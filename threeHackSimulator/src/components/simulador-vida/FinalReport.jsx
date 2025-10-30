import React from 'react';
import { useNavigate } from 'react-router-dom';
import ParameterBar from './ParameterBar';
import AnimatedEmoji from './AnimatedEmoji';
import { calculateAvatarScore, getPlayerPercentile } from '../utils/simulador-vida/parameterCalculator';

const FinalReport = ({ playerName, profile, finalParams, history }) => {
  const navigate = useNavigate();
  const score = calculateAvatarScore(finalParams);
  const percentile = getPlayerPercentile(score);

  const getScoreRating = () => {
    if (score >= 90) return { text: 'Excelente', emoji: '🏆', color: 'text-green-600' };
    if (score >= 80) return { text: 'Muy Bien', emoji: '🌟', color: 'text-blue-600' };
    if (score >= 70) return { text: 'Bien', emoji: '👍', color: 'text-yellow-600' };
    if (score >= 60) return { text: 'Regular', emoji: '😐', color: 'text-orange-600' };
    return { text: 'Necesitas Mejorar', emoji: '😔', color: 'text-red-600' };
  };

  const rating = getScoreRating();

  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card">
        {/* Fireworks Animation */}
        <div className="text-center mb-8">
          <div className="text-9xl mb-4 celebration">
            <AnimatedEmoji emoji="🎆" animation="sparkle" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            TU VIDA A LOS 32 AÑOS
          </h1>
          <p className="text-2xl text-gray-600 mb-2">
            Balance Final de {playerName}
          </p>
          <p className="text-lg text-gray-500">
            Han pasado 15 años desde que empezaste...
          </p>
        </div>

        {/* Score Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8 text-center border-4 border-indigo-200">
          <div className="text-7xl mb-4">
            <AnimatedEmoji emoji={rating.emoji} animation="bounce" />
          </div>
          <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            {score}/100
          </div>
          <div className={`text-3xl font-bold mb-4 ${rating.color}`}>
            {rating.text}
          </div>
          <div className="text-lg text-gray-600">
            Mejor que el <strong>{percentile}%</strong> de los jugadores
          </div>
        </div>

        {/* Final Parameters */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">
              <AnimatedEmoji emoji="📊" animation="pulse" />
            </span>
            Estadísticas Finales
          </h2>

          <div className="space-y-4">
            <ParameterBar paramName="nivelEconomico" value={finalParams.nivelEconomico} />
            <ParameterBar paramName="saludFisica" value={finalParams.saludFisica} />
            <ParameterBar paramName="saludMental" value={finalParams.saludMental} />
            <ParameterBar paramName="satisfaccion" value={finalParams.satisfaccion} />
            <ParameterBar paramName="estres" value={finalParams.estres} />
            <ParameterBar paramName="conocimiento" value={finalParams.conocimiento} />
            <ParameterBar paramName="relaciones" value={finalParams.relaciones} />
            <ParameterBar paramName="progresoMeta" value={finalParams.progresoMeta} />
          </div>
        </div>

        {/* Profile Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-3xl">
              <AnimatedEmoji emoji="👤" animation="float" />
            </span>
            Tu Perfil: {profile?.tipo}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {profile?.descripcion}
          </p>
        </div>

        {/* Journey Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-5xl mb-3">
              <AnimatedEmoji emoji="🎯" animation="targetPulse" />
            </div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">60</div>
            <div className="text-sm text-gray-600">Decisiones tomadas</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-5xl mb-3">
              <AnimatedEmoji emoji="📚" animation="sparkle" />
            </div>
            <div className="text-4xl font-bold text-teal-600 mb-2">
              {history?.learningCardsCompleted?.length || 0}
            </div>
            <div className="text-sm text-gray-600">Fichas educativas completadas</div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-5xl mb-3">
              <AnimatedEmoji emoji="⏱️" animation="pulse" />
            </div>
            <div className="text-4xl font-bold text-pink-600 mb-2">15</div>
            <div className="text-sm text-gray-600">Años simulados</div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-5xl flex-shrink-0">
              <AnimatedEmoji emoji="💬" animation="pulse" />
            </span>
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Mensaje Final:</h4>
              <div className="text-gray-700 text-lg leading-relaxed space-y-3">
                <p>
                  {playerName}, tu historia es inspiradora. A lo largo de 15 años, tomaste 60 decisiones 
                  importantes que moldearon tu vida.
                </p>
                <p>
                  Tu puntuación final de <strong>{score}/100</strong> refleja el resultado de tus elecciones. 
                  Cada decisión tuvo un impacto en tu salud, economía, relaciones y satisfacción personal.
                </p>
                <p className="font-semibold text-indigo-600">
                  {score >= 80 && "¡Excelente trabajo! Lograste un balance excepcional en tu vida."}
                  {score >= 70 && score < 80 && "Buen trabajo. Mantuviste un equilibrio aceptable en tu vida."}
                  {score >= 60 && score < 70 && "Tu camino tuvo desafíos, pero seguiste adelante."}
                  {score < 60 && "Hubo momentos difíciles, pero cada experiencia es un aprendizaje."}
                </p>
                <p>
                  Recuerda: En la vida real, al igual que en esta simulación, <strong>cada decisión cuenta</strong>. 
                  La planificación, el equilibrio y el aprendizaje continuo son claves para una vida plena.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-3xl">
              <AnimatedEmoji emoji="💡" animation="sparkle" />
            </span>
            Aprendizajes Clave
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✓</span>
              <span className="text-gray-700">La educación abre puertas, incluso si es difícil</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✓</span>
              <span className="text-gray-700">El apoyo familiar es fundamental</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✓</span>
              <span className="text-gray-700">Los sacrificios a corto plazo traen recompensas</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✓</span>
              <span className="text-gray-700">Pedir ayuda no es debilidad</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✓</span>
              <span className="text-gray-700">El equilibrio es clave para la felicidad</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">✓</span>
              <span className="text-gray-700">Cada decisión tiene consecuencias a largo plazo</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="btn btn-secondary btn-large btn-hover-grow"
          >
            <span className="text-2xl mr-2">🔄</span>
            JUGAR DE NUEVO
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary btn-large btn-hover-lift"
          >
            <span className="text-2xl mr-2">🏠</span>
            VOLVER AL DASHBOARD
          </button>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            ¡Gracias por jugar! 🎮
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Esperamos que hayas aprendido sobre la vida adulta
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalReport;