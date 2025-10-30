// Fichas educativas - 4 por semana (60 total)

export const learningCards = {
  // SEMANA 1 - No tiene fichas (solo conocimiento inicial)
  semana1: [],
  
  // SEMANA 2 - AÑO 19
  semana2: [
    {
      id: "s2-f1",
      titulo: "Balance Trabajo-Estudio",
      emoji: "⚖️",
      categoria: "Organización",
      contenido: {
        introduccion: "Trabajar y estudiar al mismo tiempo es posible, pero requiere organización extrema.",
        puntosClave: [
          {
            titulo: "Organización Estricta",
            items: [
              "Horario fijo de sueño (mínimo 6 horas)",
              "Agenda semanal planificada",
              "Priorizar tareas importantes"
            ]
          },
          {
            titulo: "Cuidado de tu Salud",
            items: [
              "Desayuno obligatorio",
              "1 día libre a la semana (mínimo)",
              "Ejercicio ligero 20 min/día"
            ]
          },
          {
            titulo: "Apoyo Social",
            items: [
              "Comunicar tu situación a familia/amigos",
              "Pedir ayuda cuando la necesites",
              "No aislarte socialmente"
            ]
          }
        ],
        alertas: [
          "Dormir menos de 5 horas constantemente",
          "Bajar más de 2 notas en los estudios",
          "Enfermar frecuentemente",
          "Irritabilidad o llanto constante"
        ],
        dato: "El 68% de jóvenes que trabajan y estudian abandonan uno de los dos en el primer año.",
        consejo: "La organización es tu mejor aliada. Planifica tu semana los domingos."
      },
      quiz: [
        {
          pregunta: "¿Cuántas horas mínimas de sueño necesitas cuando trabajas y estudias?",
          opciones: [
            { id: "A", texto: "4-5 horas", correcto: false },
            { id: "B", texto: "6-7 horas", correcto: true },
            { id: "C", texto: "8-9 horas", correcto: false },
            { id: "D", texto: "10+ horas", correcto: false }
          ],
          explicacion: "6-7 horas es el mínimo recomendado para mantener rendimiento físico y mental cuando tienes doble carga."
        },
        {
          pregunta: "¿Cuál es la señal más clara de que estás sobrecargado/a?",
          opciones: [
            { id: "A", texto: "Sentir cansancio ocasional", correcto: false },
            { id: "B", texto: "Tener días malos de vez en cuando", correcto: false },
            { id: "C", texto: "Enfermar frecuentemente + bajo rendimiento", correcto: true },
            { id: "D", texto: "Querer dormir el fin de semana", correcto: false }
          ],
          explicacion: "Enfermarte seguido y bajar tu rendimiento son señales de que tu cuerpo está al límite."
        }
      ]
    },
    {
      id: "s2-f2",
      titulo: "Gestión del Tiempo",
      emoji: "⏰",
      categoria: "Productividad",
      contenido: {
        introduccion: "El tiempo es tu recurso más valioso. Una vez perdido, no regresa.",
        puntosClave: [
          {
            titulo: "Técnica Pomodoro",
            items: [
              "25 minutos de concentración total",
              "5 minutos de descanso",
              "Después de 4 ciclos: 15-30 min de descanso"
            ]
          },
          {
            titulo: "Matriz de Eisenhower",
            items: [
              "Urgente e Importante: Hazlo YA",
              "Importante no urgente: Planifica",
              "Urgente no importante: Delega o minimiza",
              "Ni urgente ni importante: Elimina"
            ]
          },
          {
            titulo: "Bloques de Tiempo",
            items: [
              "Dedica bloques específicos a cada actividad",
              "No mezcles estudio con trabajo mental",
              "Respeta tus horas de descanso"
            ]
          }
        ],
        alertas: [
          "Procrastinar constantemente",
          "Sentir que el tiempo no alcanza",
          "Hacer todo a último momento"
        ],
        dato: "Las personas que planifican su semana son 40% más productivas.",
        consejo: "Cada domingo planifica tu semana completa. 30 minutos que salvan 10 horas."
      },
      quiz: [
        {
          pregunta: "¿Qué tareas debes hacer primero según la matriz de Eisenhower?",
          opciones: [
            { id: "A", texto: "Las más fáciles", correcto: false },
            { id: "B", texto: "Las urgentes e importantes", correcto: true },
            { id: "C", texto: "Las que más te gustan", correcto: false },
            { id: "D", texto: "Las que tardan menos", correcto: false }
          ],
          explicacion: "Las tareas urgentes e importantes tienen prioridad absoluta para evitar crisis."
        },
        {
          pregunta: "¿Cuánto dura un ciclo Pomodoro de concentración?",
          opciones: [
            { id: "A", texto: "15 minutos", correcto: false },
            { id: "B", texto: "25 minutos", correcto: true },
            { id: "C", texto: "45 minutos", correcto: false },
            { id: "D", texto: "60 minutos", correcto: false }
          ],
          explicacion: "25 minutos es el tiempo óptimo de concentración profunda antes de necesitar descanso."
        }
      ]
    },
    {
      id: "s2-f3",
      titulo: "Derechos Laborales Básicos",
      emoji: "📜",
      categoria: "Trabajo",
      contenido: {
        introduccion: "Todo trabajador en Perú tiene derechos fundamentales que DEBEN respetarse.",
        puntosClave: [
          {
            titulo: "Derechos Básicos",
            items: [
              "Contrato escrito (obligatorio)",
              "Salario mínimo S/1,025 (2024)",
              "Descanso semanal obligatorio",
              "Vacaciones 30 días al año",
              "Gratificaciones (julio y diciembre)",
              "CTS (Compensación por Tiempo de Servicio)"
            ]
          },
          {
            titulo: "Lo que NO pueden hacer",
            items: [
              "Obligarte a trabajar sin contrato",
              "Pagarte menos del mínimo",
              "No darte boleta de pago",
              "Negarte tus vacaciones",
              "Despedirte sin causa justa"
            ]
          },
          {
            titulo: "¿Qué hacer si violan tus derechos?",
            items: [
              "Documentar todo (fotos, mensajes, testigos)",
              "Hablar con Recursos Humanos primero",
              "Buscar asesoría en SUNAFIL",
              "Denunciar formalmente si es necesario"
            ]
          }
        ],
        alertas: [
          "Trabajo sin contrato por más de 3 meses",
          "No recibir boletas de pago",
          "Trabajar más horas sin pago extra"
        ],
        dato: "El 60% de jóvenes en su primer trabajo desconoce sus derechos laborales básicos.",
        consejo: "Antes de firmar CUALQUIER contrato, léelo completo. Si no entiendes algo, pregunta."
      },
      quiz: [
        {
          pregunta: "¿Cuál es el salario mínimo en Perú (2024)?",
          opciones: [
            { id: "A", texto: "S/930", correcto: false },
            { id: "B", texto: "S/1,025", correcto: true },
            { id: "C", texto: "S/1,200", correcto: false },
            { id: "D", texto: "S/1,500", correcto: false }
          ],
          explicacion: "El salario mínimo vital es S/1,025 y es ilegal pagar menos por trabajo a tiempo completo."
        },
        {
          pregunta: "¿Cuántos días de vacaciones al año te corresponden?",
          opciones: [
            { id: "A", texto: "15 días", correcto: false },
            { id: "B", texto: "20 días", correcto: false },
            { id: "C", texto: "30 días", correcto: true },
            { id: "D", texto: "No hay mínimo establecido", correcto: false }
          ],
          explicacion: "Por ley, todo trabajador tiene derecho a 30 días de vacaciones pagadas al año."
        }
      ]
    },
    {
      id: "s2-f4",
      titulo: "Presupuesto Personal",
      emoji: "💰",
      categoria: "Finanzas",
      contenido: {
        introduccion: "Un presupuesto es tu mapa financiero. Sin él, no sabes a dónde va tu dinero.",
        puntosClave: [
          {
            titulo: "Regla 50/30/20",
            items: [
              "50% - Necesidades básicas (vivienda, comida, transporte)",
              "30% - Gustos y entretenimiento",
              "20% - Ahorro e inversión"
            ]
          },
          {
            titulo: "Cómo hacer tu presupuesto",
            items: [
              "Anota TODOS tus ingresos del mes",
              "Lista TODOS tus gastos fijos",
              "Resta gastos de ingresos",
              "Lo que sobra divídelo en ahorro y gustos",
              "Revisa y ajusta cada mes"
            ]
          },
          {
            titulo: "Apps útiles",
            items: [
              "Excel o Google Sheets (gratis)",
              "Finerio (app peruana)",
              "Billetera Móvil BCP",
              "Wallet (app simple)"
            ]
          }
        ],
        alertas: [
          "Gastar más de lo que ganas",
          "No saber en qué gastas tu dinero",
          "Llegar a fin de mes sin nada"
        ],
        dato: "El 72% de jóvenes peruanos no tiene presupuesto y gasta sin control.",
        consejo: "Los primeros 3 meses solo ANOTA tus gastos. Después ya podrás hacer tu presupuesto real."
      },
      quiz: [
        {
          pregunta: "Según la regla 50/30/20, ¿qué porcentaje deberías ahorrar?",
          opciones: [
            { id: "A", texto: "10%", correcto: false },
            { id: "B", texto: "15%", correcto: false },
            { id: "C", texto: "20%", correcto: true },
            { id: "D", texto: "30%", correcto: false }
          ],
          explicacion: "La regla 50/30/20 sugiere ahorrar el 20% de tus ingresos mensualmente."
        },
        {
          pregunta: "¿Cuál es el primer paso para hacer un presupuesto?",
          opciones: [
            { id: "A", texto: "Decidir cuánto ahorrar", correcto: false },
            { id: "B", texto: "Anotar TODOS tus ingresos", correcto: true },
            { id: "C", texto: "Eliminar gastos innecesarios", correcto: false },
            { id: "D", texto: "Abrir una cuenta de ahorros", correcto: false }
          ],
          explicacion: "Primero debes saber cuánto dinero entra. Sin esto, no puedes planificar gastos."
        }
      ]
    }
  ],
  
  // SEMANA 3 - AÑO 20
  semana3: [
    {
      id: "s3-f1",
      titulo: "Fondo de Emergencia",
      emoji: "🚨",
      categoria: "Finanzas",
      contenido: {
        introduccion: "Un fondo de emergencia es tu salvavidas financiero. Sin él, cualquier imprevisto te hunde.",
        puntosClave: [
          {
            titulo: "¿Qué es?",
            items: [
              "Dinero guardado SOLO para imprevistos",
              "Emergencias médicas",
              "Pérdida del trabajo",
              "Reparaciones urgentes",
              "Accidentes"
            ]
          },
          {
            titulo: "¿Cuánto necesitas?",
            items: [
              "Ideal: 3 a 6 meses de gastos mensuales",
              "Mínimo inicial: 1 mes de gastos",
              "Ejemplo: Si gastas S/1,000/mes, necesitas S/3,000-6,000"
            ]
          },
          {
            titulo: "¿Cómo construirlo?",
            items: [
              "Ahorra 10% de cada ingreso",
              "Guárdalo en cuenta SEPARADA",
              "No lo toques a menos que sea EMERGENCIA real",
              "Repón el dinero si lo usas"
            ]
          }
        ],
        alertas: [
          "Usar el fondo para gastos NO urgentes",
          "No reponerlo después de usarlo",
          "Mezclarlo con dinero del día a día"
        ],
        dato: "El 80% de peruanos no tiene ahorros para cubrir 1 mes de emergencia.",
        consejo: "Primero págate a ti mismo. Apenas recibas tu sueldo, PRIMERO ahorra, LUEGO gasta."
      },
      quiz: [
        {
          pregunta: "¿Cuál es el monto ideal de un fondo de emergencia?",
          opciones: [
            { id: "A", texto: "1 mes de gastos", correcto: false },
            { id: "B", texto: "3 a 6 meses de gastos", correcto: true },
            { id: "C", texto: "Todo lo que puedas ahorrar", correcto: false },
            { id: "D", texto: "No es necesario tenerlo", correcto: false }
          ],
          explicacion: "El fondo ideal cubre 3-6 meses de gastos para enfrentar imprevistos sin endeudarte."
        },
        {
          pregunta: "Si ganas S/1,200/mes y ahorras 10%, ¿cuánto ahorras en 1 año?",
          opciones: [
            { id: "A", texto: "S/1,200", correcto: false },
            { id: "B", texto: "S/1,440", correcto: true },
            { id: "C", texto: "S/1,000", correcto: false },
            { id: "D", texto: "S/2,400", correcto: false }
          ],
          explicacion: "10% de S/1,200 = S/120/mes. S/120 x 12 meses = S/1,440 al año."
        }
      ]
    },
    {
      id: "s3-f2",
      titulo: "Peligro de los Usureros",
      emoji: "⚠️",
      categoria: "Finanzas",
      contenido: {
        introduccion: "Los prestamistas informales (usureros) son la trampa de deuda más peligrosa que existe.",
        puntosClave: [
          {
            titulo: "¿Cómo operan?",
            items: [
              "Préstamos rápidos, sin papeles",
              "Intereses ALTÍSIMOS (5-10% SEMANAL)",
              "Amenazas si no pagas",
              "Te hunden en deuda eterna"
            ]
          },
          {
            titulo: "Ejemplo real de PELIGRO",
            items: [
              "Pides: S/500",
              "Interés: 10% semanal",
              "Semana 1: Debes S/550",
              "Semana 2: Debes S/605",
              "Semana 3: Debes S/665",
              "Semana 4: Debes S/732",
              "¡En 1 mes debes S/232 SOLO de intereses!"
            ]
          },
          {
            titulo: "Alternativas SEGURAS",
            items: [
              "Préstamos bancarios (3-5% mensual)",
              "Cajas municipales",
              "Cooperativas de ahorro",
              "Pedir a familiares (sin interés)"
            ]
          }
        ],
        alertas: [
          "Cualquier préstamo SIN documentos formales",
          "Intereses por semana o día (señal de alarma)",
          "Amenazas o presión para pagar"
        ],
        dato: "Los usureros cobran hasta 500% de interés anual. Los bancos cobran 20-40% anual.",
        consejo: "Si estás desesperado, respira. SIEMPRE hay alternativas mejores que el usurero."
      },
      quiz: [
        {
          pregunta: "¿Cuánto terminas debiendo si pides S/500 a un usurero (10% semanal) en 1 mes?",
          opciones: [
            { id: "A", texto: "S/550", correcto: false },
            { id: "B", texto: "S/600", correcto: false },
            { id: "C", texto: "S/732", correcto: true },
            { id: "D", texto: "S/500", correcto: false }
          ],
          explicacion: "Con interés compuesto semanal, S/500 se convierte en S/732 en solo 4 semanas."
        },
        {
          pregunta: "¿Qué tasa de interés mensual es más segura?",
          opciones: [
            { id: "A", texto: "10% semanal", correcto: false },
            { id: "B", texto: "3% mensual en banco", correcto: true },
            { id: "C", texto: "5% diario", correcto: false },
            { id: "D", texto: "Sin papeles, sin interés", correcto: false }
          ],
          explicacion: "3% mensual en banco formal es manejable. Cualquier porcentaje semanal o diario es peligroso."
        }
      ]
    },
    {
      id: "s3-f3",
      titulo: "Redes de Apoyo",
      emoji: "🤝",
      categoria: "Social",
      contenido: {
        introduccion: "Nadie puede solo. Las redes de apoyo son fundamentales para sobrevivir crisis.",
        puntosClave: [
          {
            titulo: "Tipos de redes de apoyo",
            items: [
              "Familia cercana",
              "Amigos de confianza",
              "Vecinos y comunidad",
              "Compañeros de trabajo/estudio",
              "Grupos religiosos o sociales"
            ]
          },
          {
            titulo: "Cómo construir tu red",
            items: [
              "Mantén contacto regular",
              "Sé tú también apoyo para otros",
              "No tengas miedo de pedir ayuda",
              "Agradece siempre",
              "Devuelve cuando puedas"
            ]
          },
          {
            titulo: "Cuándo pedir ayuda",
            items: [
              "Emergencias médicas",
              "Crisis económica",
              "Problemas emocionales graves",
              "Situaciones de peligro"
            ]
          }
        ],
        alertas: [
          "Aislarte completamente",
          "No pedir ayuda por orgullo",
          "Abusar de la generosidad ajena"
        ],
        dato: "Las personas con redes de apoyo sólidas tienen 50% más probabilidad de superar crisis.",
        consejo: "Cultiva tus relaciones ANTES de necesitarlas. No solo busques ayuda, también ofrécela."
      },
      quiz: [
        {
          pregunta: "¿Cuál es la base de una red de apoyo sólida?",
          opciones: [
            { id: "A", texto: "Tener mucho dinero", correcto: false },
            { id: "B", texto: "Reciprocidad y confianza mutua", correcto: true },
            { id: "C", texto: "Solo familia cercana", correcto: false },
            { id: "D", texto: "No necesitar nunca ayuda", correcto: false }
          ],
          explicacion: "Las redes funcionan por reciprocidad: das apoyo y recibes apoyo cuando lo necesitas."
        },
        {
          pregunta: "¿Qué NO debes hacer con tu red de apoyo?",
          opciones: [
            { id: "A", texto: "Pedir ayuda en emergencias", correcto: false },
            { id: "B", texto: "Ofrecer ayuda a otros", correcto: false },
            { id: "C", texto: "Abusar pidiendo constantemente sin dar nada", correcto: true },
            { id: "D", texto: "Mantener contacto regular", correcto: false }
          ],
          explicacion: "Las redes se rompen cuando solo pides sin dar nada a cambio. Debe haber equilibrio."
        }
      ]
    },
    {
      id: "s3-f4",
      titulo: "Manejo del Estrés",
      emoji: "🧘",
      categoria: "Salud Mental",
      contenido: {
        introduccion: "El estrés crónico mata. Aprender a manejarlo no es opcional, es supervivencia.",
        puntosClave: [
          {
            titulo: "Señales de estrés peligroso",
            items: [
              "Insomnio frecuente",
              "Irritabilidad constante",
              "Dolor de cabeza/estómago recurrente",
              "Ataques de pánico",
              "Pensamientos negativos obsesivos"
            ]
          },
          {
            titulo: "Técnicas que SÍ funcionan",
            items: [
              "Respiración profunda (4-7-8)",
              "Ejercicio físico regular (30 min, 3 veces/semana)",
              "Dormir 7-8 horas diarias",
              "Hablar con alguien de confianza",
              "Escribir un diario"
            ]
          },
          {
            titulo: "Cuándo buscar ayuda profesional",
            items: [
              "El estrés dura más de 2 meses",
              "Afecta tu trabajo/estudios",
              "Tienes pensamientos de hacerte daño",
              "Abusos de sustancias para 'calmarte'"
            ]
          }
        ],
        alertas: [
          "Ignorar las señales de tu cuerpo",
          "Automedicarte sin orientación",
          "Creer que 'pedir ayuda es debilidad'"
        ],
        dato: "El estrés crónico aumenta en 40% el riesgo de enfermedades cardíacas.",
        consejo: "5 minutos de respiración profunda diaria pueden reducir tu estrés en 30%."
      },
      quiz: [
        {
          pregunta: "¿Cuál es la técnica de respiración 4-7-8?",
          opciones: [
            { id: "A", texto: "Inhalar 4 seg, retener 7 seg, exhalar 8 seg", correcto: true },
            { id: "B", texto: "Respirar 4 veces, descansar 7, repetir 8", correcto: false },
            { id: "C", texto: "Ejercicio de 4-7-8 minutos", correcto: false },
            { id: "D", texto: "No existe esa técnica", correcto: false }
          ],
          explicacion: "4-7-8: Inhalas por nariz (4 seg), retienes (7 seg), exhalas por boca (8 seg). Calma inmediata."
        },
        {
          pregunta: "¿Cuándo debes buscar ayuda profesional para el estrés?",
          opciones: [
            { id: "A", texto: "Solo si tienes dinero para pagar", correcto: false },
            { id: "B", texto: "Nunca, puedes manejarlo solo", correcto: false },
            { id: "C", texto: "Cuando dura más de 2 meses o afecta tu vida", correcto: true },
            { id: "D", texto: "Solo en casos extremos de hospitalización", correcto: false }
          ],
          explicacion: "Si el estrés dura más de 2 meses o afecta tu funcionamiento diario, busca ayuda profesional."
        }
      ]
    }
  ]
  
  // Las demás semanas (4-15) tendrían sus propias fichas
  // Por ahora dejé semanas 2 y 3 completas como ejemplo
};

// Función para obtener fichas de una semana
export const getWeekLearningCards = (weekNumber) => {
  const weekKey = `semana${weekNumber}`;
  return learningCards[weekKey] || [];
};

// Función para obtener una ficha específica
export const getLearningCard = (cardId) => {
  for (const week in learningCards) {
    const card = learningCards[week].find(c => c.id === cardId);
    if (card) return card;
  }
  return null;
};