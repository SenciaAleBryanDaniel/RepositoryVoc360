import React from 'react';
import AnimatedEmoji from './AnimatedEmoji';

const ProfileResult = ({ profile, playerName, onStart }) => {
  return (
    <div className="simulador-container fade-enter">
      <div className="simulador-card">
        {/* Celebration Animation */}
        <div className="text-center mb-8 celebration">
          <div className="text-8xl mb-4 opacity-80">
            <AnimatedEmoji emoji="✨" animation="sparkle" size="xlarge" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            ¡TU AVATAR ESTÁ LISTO!
          </h1>
        </div>

        {/* Main 2-column layout: Narrator/Table/IA (left) + Profile/Traits (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* LEFT COLUMN: Narrator + Table + IA Message */}
          <div className="space-y-6">
            {/* Narrator Message */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-lg border-2 border-indigo-100">
              <h2 className="text-lg font-bold text-indigo-700 mb-4 tracking-wide">NARRADOR</h2>
              <div className="space-y-3 text-gray-800">
                <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                  <span className="font-semibold text-indigo-600">Nombre:</span>
                  <span className="font-bold text-gray-900">{playerName || 'Jugador'}</span>
                  <span className="font-semibold text-indigo-600">Edad:</span>
                  <span className="font-bold text-gray-900">17 años</span>
                </div>
                <div className="border-t-2 border-indigo-200 pt-4 mt-4">
                  <p className="text-sm leading-relaxed text-gray-700 italic">
                    "Perfecto. Eres un joven con ganas de aprender cómo tus decisiones influyen en tu futuro.
                    Ahora conocerás tu perfil inicial basado en situaciones reales.
                    Cada elección que hagas cambiará tus variables."
                  </p>
                </div>
              </div>
            </div>

            {/* Tabla de Dimensiones */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-wide">ANÁLISIS POR DIMENSIONES</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2 px-2 font-semibold text-gray-700">Dimensión</th>
                      <th className="text-center py-2 px-2 font-semibold text-gray-700">Puntaje</th>
                      <th className="text-left py-2 px-2 font-semibold text-gray-700">Interpretación</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-2 font-medium">Laboral</td>
                      <td className="py-2 px-2 text-center">
                        <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 rounded font-bold text-xs">45</span>
                      </td>
                      <td className="py-2 px-2 text-xs">Acepta oportunidades sin analizar condiciones.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-2 font-medium">Económica</td>
                      <td className="py-2 px-2 text-center">
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded font-bold text-xs">40</span>
                      </td>
                      <td className="py-2 px-2 text-xs">Gasta con impulsividad y poca planificación.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-2 font-medium">Financiera</td>
                      <td className="py-2 px-2 text-center">
                        <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 rounded font-bold text-xs">60</span>
                      </td>
                      <td className="py-2 px-2 text-xs">Maneja créditos con precaución, aunque sin control constante.</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 px-2 font-medium">Tributaria/Ciudadana</td>
                      <td className="py-2 px-2 text-center">
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded font-bold text-xs">70</span>
                      </td>
                      <td className="py-2 px-2 text-xs">Valora la formalidad, actúa con sentido ético.</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 font-medium">Estilo de vida</td>
                      <td className="py-2 px-2 text-center">
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-700 rounded font-bold text-xs">35</span>
                      </td>
                      <td className="py-2 px-2 text-xs">Tiende a sobrecargarse y descuida su descanso.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Traits + IA Message */}
          <div className="space-y-6">
            {/* Rasgos Derivados */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 tracking-wide">RASGOS DERIVADOS</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <span className="font-semibold text-indigo-600 block mb-1">1. Rasgo de comportamiento dominante</span>
                  <p className="pl-4 border-l-3 border-indigo-300 leading-relaxed">
                    <strong className="text-gray-900">Práctico impulsivo</strong> — Tiende a actuar con rapidez ante oportunidades, pero sin una estrategia clara.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-green-600 block mb-1">2. Rasgo de equilibrio general</span>
                  <p className="pl-4 border-l-3 border-green-300 leading-relaxed">
                    <strong className="text-gray-900">Responsable, con baja planificación</strong> — Su ética laboral es buena, aunque el manejo económico requiere mejora.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-orange-600 block mb-1">3. Rasgo de bienestar personal</span>
                  <p className="pl-4 border-l-3 border-orange-300 leading-relaxed">
                    <strong className="text-gray-900">Alta exigencia y poca pausa</strong> — Prefiere el rendimiento constante a costa de su bienestar físico y mental.
                  </p>
                </div>
              </div>
            </div>

            {/* IA Message */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border-2 border-purple-100">
              <h3 className="text-lg font-bold text-purple-700 mb-3 tracking-wide">MENSAJE DE LA IA</h3>
              <p className="text-sm leading-relaxed text-gray-800">
                Tus resultados muestran que eres <strong className="text-purple-900">trabajador y ético</strong>, pero te cuesta priorizarte y planificar recursos. 
                En este simulador, aprenderás a <strong className="text-purple-900">equilibrar el esfuerzo con la estrategia</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Full width sections below */}
        <div className="max-w-2xl mx-auto">

          {/* Game Instructions */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-5 tracking-wide">¿CÓMO FUNCIONA EL SIMULADOR?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                <p className="leading-relaxed">Vivirás <strong>15 años de tu vida</strong> (desde los 18 hasta los 32 años)</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                <p className="leading-relaxed">Cada año tomarás <strong>4 decisiones importantes</strong> que afectarán tu vida</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                <p className="leading-relaxed">Al final de cada año aprenderás sobre <strong>temas de vida adulta</strong></p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                <p className="leading-relaxed">Tus decisiones cambiarán tus <strong>8 parámetros vitales</strong></p>
              </div>
            </div>
          </div>

          {/* Parameters Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">PARÁMETROS QUE DEBERÁS CUIDAR</h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                <span>Situación Económica</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                <span>Salud Física</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                <span>Salud Mental</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0" />
                <span>Satisfacción</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                <span>Estrés</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                <span>Conocimiento</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0" />
                <span>Relaciones</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                <span>Progreso a Meta</span>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <button
              onClick={onStart}
              className="btn btn-primary btn-large btn-hover-lift px-16 py-6 text-xl"
            >
              <span className="text-3xl mr-3">🚀</span>
              COMENZAR MI VIDA
            </button>
            <p className="text-sm text-gray-500 mt-4">
              ¡Tu aventura de 15 años comienza ahora!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileResult;