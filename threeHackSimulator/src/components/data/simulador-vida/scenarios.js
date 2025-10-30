// 60 escenarios de decisión (4 por cada una de las 15 semanas/años)

export const scenarios = {
  // SEMANA 1 - AÑO 18
  semana1: [
    {
      numero: 1,
      titulo: "Conociendo tu Familia",
      descripcion: "Vives con tus padres en Arequipa. Tu familia es de clase media-baja. Tu papá trabaja como taxista y tu mamá vende comida en el mercado. Tienen 3 hijos (tú eres el/la mayor). La economía está ajustada pero hay mucho cariño.",
      pregunta: "¿Cómo describirías tu relación familiar?",
      tiempo: 120,
      opciones: [
        {
          id: "A",
          emoji: "👨‍👩‍👧",
          texto: "Muy unida, nos apoyamos siempre",
          impacto: { relaciones: 10, satisfaccion: 5 },
          feedback: "Tu familia es tu mayor fortaleza. Este apoyo será fundamental en tu vida adulta."
        },
        {
          id: "B",
          emoji: "😐",
          texto: "Normal, altibajos como toda familia",
          impacto: { relaciones: 5, satisfaccion: 2 },
          feedback: "Una relación familiar equilibrada. Habrá buenos y malos momentos."
        },
        {
          id: "C",
          emoji: "😔",
          texto: "Distante, hay conflictos económicos",
          impacto: { relaciones: -5, estres: 10 },
          feedback: "Los problemas económicos generan tensión. Esto afectará tus decisiones futuras."
        },
        {
          id: "D",
          emoji: "🤷",
          texto: "Complicada, prefiero independizarme",
          impacto: { relaciones: -10, estres: 5, progresoMeta: 5 },
          feedback: "Buscar independencia rápido puede ser difícil sin apoyo familiar."
        }
      ]
    },
    {
      numero: 2,
      titulo: "Tu Situación Económica",
      descripcion: "Acabas de terminar el colegio. No tienes ingresos propios y dependes completamente de tus padres. Ellos hacen lo posible, pero el dinero es ajustado.",
      pregunta: "¿Cómo te sientes respecto a tu situación económica?",
      tiempo: 120,
      opciones: [
        {
          id: "A",
          emoji: "😰",
          texto: "Muy preocupado, necesito generar ingresos ya",
          impacto: { estres: 10, progresoMeta: 5 },
          feedback: "La presión por generar ingresos puede llevarte a decisiones apresuradas."
        },
        {
          id: "B",
          emoji: "🤔",
          texto: "Consciente, sé que debo hacer algo pronto",
          impacto: { estres: 5 },
          feedback: "Reconoces la realidad sin desesperarte. Buen punto de partida."
        },
        {
          id: "C",
          emoji: "😊",
          texto: "Tranquilo, mis padres me apoyan",
          impacto: { satisfaccion: 5, relaciones: 5 },
          feedback: "Confías en el apoyo familiar, pero eventualmente necesitarás independizarte."
        },
        {
          id: "D",
          emoji: "🎓",
          texto: "Enfocado en estudiar primero",
          impacto: { conocimiento: 5, progresoMeta: 3 },
          feedback: "Priorizar la educación es bueno, pero considera los costos y el tiempo."
        }
      ]
    },
    {
      numero: 3,
      titulo: "Definiendo tu Meta",
      descripcion: "Es momento de pensar en tu futuro. ¿Qué quieres lograr en los próximos 15 años de tu vida?",
      pregunta: "¿Cuál es tu principal meta en la vida?",
      tiempo: 120,
      opciones: [
        {
          id: "A",
          emoji: "💼",
          texto: "Tener un buen trabajo y estabilidad",
          impacto: { progresoMeta: 5, conocimiento: 3 },
          feedback: "Una meta clara y alcanzable. La estabilidad laboral será tu guía."
        },
        {
          id: "B",
          emoji: "🚀",
          texto: "Emprender mi propio negocio",
          impacto: { progresoMeta: 5, estres: 5 },
          feedback: "El emprendimiento es arriesgado pero puede ser muy gratificante."
        },
        {
          id: "C",
          emoji: "🎓",
          texto: "Ser profesional universitario",
          impacto: { progresoMeta: 5, conocimiento: 5 },
          feedback: "La educación superior abre muchas puertas, pero requiere tiempo y recursos."
        },
        {
          id: "D",
          emoji: "🏠",
          texto: "Casa propia y ayudar a mi familia",
          impacto: { progresoMeta: 5, satisfaccion: 5 },
          feedback: "Una meta equilibrada entre tu bienestar y el apoyo familiar."
        }
      ]
    },
    {
      numero: 4,
      titulo: "Tu Mayor Preocupación",
      descripcion: "Todos tenemos miedos sobre el futuro. Es normal sentirse inseguro cuando la vida adulta apenas comienza.",
      pregunta: "¿Qué es lo que más te preocupa en este momento?",
      tiempo: 120,
      opciones: [
        {
          id: "A",
          emoji: "💰",
          texto: "No tener suficiente dinero",
          impacto: { estres: 5 },
          feedback: "La preocupación financiera es válida. Aprenderás a manejar el dinero."
        },
        {
          id: "B",
          emoji: "🎯",
          texto: "No saber qué hacer con mi vida",
          impacto: { estres: 5, conocimiento: 5 },
          feedback: "Es normal no tener todo claro. Descubrirás tu camino con el tiempo."
        },
        {
          id: "C",
          emoji: "👨‍👩‍👧",
          texto: "Decepcionar a mi familia",
          impacto: { estres: 8, relaciones: 5 },
          feedback: "La presión familiar puede ser pesada. Recuerda que tu felicidad también importa."
        },
        {
          id: "D",
          emoji: "😔",
          texto: "Fracasar en lo que intente",
          impacto: { estres: 10, satisfaccion: -5 },
          feedback: "El miedo al fracaso es paralizante. Recuerda que los errores son aprendizajes."
        }
      ]
    }
  ],
  
  // SEMANA 2 - AÑO 19
  semana2: [
    {
      numero: 1,
      titulo: "Tu Primera Gran Decisión",
      descripcion: "Han pasado 6 meses desde que terminaste el colegio. Tus papás te presionan: '¿Qué vas a hacer con tu vida? No puedes quedarte así...'",
      pregunta: "¿Qué decides hacer?",
      tiempo: 150,
      opciones: [
        {
          id: "A",
          emoji: "🎓",
          texto: "Estudiar - Carrera técnica (2 años, S/3,000 total)",
          impacto: { conocimiento: 20, nivelEconomico: 2, relaciones: -10, estres: 10 },
          feedback: "La educación es una inversión a futuro. Tu familia hará sacrificios por ti.",
          desbloquea: ["Balance trabajo-estudio", "Gestión del tiempo"]
        },
        {
          id: "B",
          emoji: "💼",
          texto: "Trabajar - Buscar empleo ahora (S/930/mes)",
          impacto: { nivelEconomico: 1, conocimiento: -5, satisfaccion: 10, progresoMeta: -10 },
          feedback: "Generas ingresos inmediatos, pero sin estudios tus opciones serán limitadas.",
          desbloquea: ["Primer empleo", "Derechos laborales"]
        },
        {
          id: "C",
          emoji: "🎓💼",
          texto: "Ambos - Estudiar de noche + trabajo de día",
          impacto: { conocimiento: 15, nivelEconomico: 1, estres: 20, saludFisica: -10, saludMental: -15 },
          feedback: "El camino más difícil pero más completo. Requerirá mucha disciplina.",
          desbloquea: ["Balance trabajo-estudio", "Gestión del estrés", "Organización efectiva"]
        },
        {
          id: "D",
          emoji: "⏸️",
          texto: "Esperar - 6 meses más para decidir bien",
          impacto: { nivelEconomico: 0.5, estres: 15, relaciones: -15, progresoMeta: -5 },
          feedback: "Trabajos temporales mientras piensas. La presión familiar aumentará.",
          desbloquea: ["Toma de decisiones"]
        }
      ]
    },
    {
      numero: 2,
      titulo: "Eligiendo tu Carrera",
      descripcion: "Si decidiste estudiar, ahora debes elegir qué carrera seguir. Tienes varias opciones técnicas de 2-3 años.",
      pregunta: "¿Qué carrera te atrae más?",
      tiempo: 120,
      opciones: [
        {
          id: "A",
          emoji: "⚕️",
          texto: "Enfermería Técnica - Demanda alta, ayudas a personas",
          impacto: { conocimiento: 10, progresoMeta: 10 },
          feedback: "Excelente elección. Siempre habrá demanda de personal de salud."
        },
        {
          id: "B",
          emoji: "💻",
          texto: "Computación e Informática - Futuro tecnológico",
          impacto: { conocimiento: 10, progresoMeta: 8 },
          feedback: "El sector tecnológico crece rápido. Buenas oportunidades laborales."
        },
        {
          id: "C",
          emoji: "🏗️",
          texto: "Construcción Civil - Trabajo físico, buen sueldo",
          impacto: { conocimiento: 8, progresoMeta: 10, saludFisica: -5 },
          feedback: "Trabajo demandante físicamente pero bien remunerado."
        },
        {
          id: "D",
          emoji: "💼",
          texto: "Administración - Versátil, oficinas",
          impacto: { conocimiento: 8, progresoMeta: 7 },
          feedback: "Carrera versátil con muchas salidas laborales en diferentes sectores."
        },
        {
          id: "E",
          emoji: "✍️",
          texto: "Otra carrera (especifica tu propia opción)",
          impacto: { conocimiento: 9, progresoMeta: 8, estres: 7 },
          feedback: "Has elegido tu propio camino educativo. El éxito dependerá de tu dedicación y las oportunidades del mercado.",
          customInput: true
        }
      ]
    },
    {
      numero: 3,
      titulo: "Buscando Trabajo",
      descripcion: "Han llegado 4 ofertas de trabajo diferentes. Cada una tiene ventajas y riesgos. Lee cuidadosamente antes de decidir.",
      pregunta: "¿Cuál oferta aceptas?",
      tiempo: 180,
      opciones: [
        {
          id: "A",
          emoji: "🔧",
          texto: "Oferta 1: Asistente de mantenimiento - Metalúrgica Andina Steel, Cerro Colorado\n• Contrato temporal 6 meses (renovable)\n• Sueldo: S/ 1,300\n• Beneficios: ESSALUD, refrigerio, capacitación en maquinaria hidráulica",
          impacto: { nivelEconomico: 2, conocimiento: 8, progresoMeta: 7, estres: 5 },
          feedback: "Contrato temporal con posibilidad de renovación. Es una buena primera experiencia, pero la incertidumbre puede generar estrés."
        },
        {
          id: "B",
          emoji: "⚙️",
          texto: "Oferta 2: Técnico de planta - Cementos Yura S.A., Yura\n• Contrato fijo con planilla completa\n• Sueldo: S/ 1,900 + almuerzos + movilidad\n• Beneficios: CTS, vacaciones, ESSALUD, AFP, formación continua\n• Riesgo: turnos rotativos, ambiente industrial de alta presión",
          impacto: { nivelEconomico: 3, conocimiento: 10, progresoMeta: 10, estres: 10, saludFisica: -5 },
          feedback: "Excelente estabilidad y sueldo. Es una oportunidad sólida, pero los turnos rotativos y la presión industrial afectarán tu salud y vida personal."
        },
        {
          id: "C",
          emoji: "⚡",
          texto: "Oferta 3: Practicante en planta hidroeléctrica - Majes (Proyecto Colca)\n• Contrato de prácticas con seguro y beca alimentaria\n• Sueldo: S/ 950\n• Beneficios: transporte, aprendizaje con ingenieros senior, certificado profesional\n• Riesgo: distancia prolongada de casa (viajes semanales)",
          impacto: { conocimiento: 15, progresoMeta: 12, nivelEconomico: 1, estres: 12, relaciones: -10, satisfaccion: -5 },
          feedback: "Experiencia invaluable en un proyecto real y certificado profesional. Pero la distancia de casa y los viajes semanales afectarán tus relaciones familiares y tu bienestar."
        },
        {
          id: "D",
          emoji: "🔨",
          texto: "Oferta 4: Emprendimiento propio - MecaServ, servicios de mantenimiento domiciliario, Miraflores\n• Capital inicial: S/ 400\n• Ingresos variables: S/ 1,200 - 2,500 mensuales\n• Beneficios: autonomía total, trabajo desde casa, horario libre\n• Riesgo: ingresos inestables, alta competencia",
          impacto: { nivelEconomico: 1.5, satisfaccion: 15, relaciones: 5, estres: 15, progresoMeta: 8 },
          feedback: "Total independencia y potencial de ingresos alto. Pero la inestabilidad económica y la competencia te generarán mucho estrés, especialmente al inicio."
        },
        {
          id: "E",
          emoji: "✍️",
          texto: "Otra opción (especifica tu propia oferta de trabajo)",
          impacto: { nivelEconomico: 1.5, conocimiento: 5, estres: 8, progresoMeta: 5 },
          feedback: "Has elegido tu propio camino. Los resultados dependerán de tu creatividad y esfuerzo.",
          customInput: true
        }
      ]
    },
    {
      numero: 4,
      titulo: "Tu Primer Sueldo",
      descripcion: "¡Recibiste tu primer sueldo! Después de tanto esfuerzo, tienes dinero propio en tus manos. ¿Cómo lo administras?",
      pregunta: "¿Qué haces con tu primer sueldo?",
      tiempo: 120,
      opciones: [
        {
          id: "A",
          emoji: "💰",
          texto: "Ahorra 30%, ayuda familia 20%, gasta 50%",
          impacto: { nivelEconomico: 0.5, relaciones: 10, satisfaccion: 8 },
          feedback: "Excelente balance. Ahorras, apoyas y te das gustos.",
          desbloquea: ["Presupuesto personal", "Fondo de emergencia"]
        },
        {
          id: "B",
          emoji: "🎁",
          texto: "Comprar regalos para la familia",
          impacto: { nivelEconomico: -0.3, relaciones: 15, satisfaccion: 10 },
          feedback: "Gesto hermoso pero no olvides ahorrar también.",
          desbloquea: ["Importancia del ahorro"]
        },
        {
          id: "C",
          emoji: "🛍️",
          texto: "Gastar en ti: ropa, salidas, diversión",
          impacto: { nivelEconomico: -0.5, satisfaccion: 15, estres: -5 },
          feedback: "Merecido después de tanto esfuerzo, pero cuidado con no ahorrar nada.",
          desbloquea: ["Control de gastos"]
        },
        {
          id: "D",
          emoji: "🏦",
          texto: "Ahorrar el 80% para emergencias",
          impacto: { nivelEconomico: 1, satisfaccion: -5, estres: 5 },
          feedback: "Muy responsable, pero no olvides disfrutar un poco también.",
          desbloquea: ["Fondo de emergencia"]
        }
      ]
    }
  ],
  
  // SEMANA 3 - AÑO 20
  semana3: [
    {
      numero: 1,
      titulo: "Primera Emergencia Familiar",
      descripcion: "Es fin de mes. Te quedan S/200 para los próximos 15 días. Tu mamá te llama llorando: tu hermanito de 12 años se cayó jugando fútbol. Se rompió el brazo. Necesitan S/500 para la operación. El seguro no cubre todo. No tienen ahorros.",
      pregunta: "¿Qué haces?",
      tiempo: 150,
      opciones: [
        {
          id: "A",
          emoji: "💳",
          texto: "Pedir a 'prestamista rápido' (S/500, 10% interés SEMANAL)",
          impacto: { nivelEconomico: -2, estres: 20, relaciones: 10 },
          feedback: "¡PELIGRO! Los intereses te ahogarán. En 1 mes deberás S/700.",
          desbloquea: ["Peligro de usureros", "Deudas tóxicas"]
        },
        {
          id: "B",
          emoji: "🏦",
          texto: "Préstamo en banco (demora 3 días, 3% mensual)",
          impacto: { nivelEconomico: -1, estres: 10, relaciones: 10 },
          feedback: "Decisión más responsable. Los intereses son manejables.",
          desbloquea: ["Crédito responsable", "Préstamos bancarios"]
        },
        {
          id: "C",
          emoji: "🤝",
          texto: "Pedir ayuda a familiares/amigos (juntas S/300)",
          impacto: { nivelEconomico: -0.5, relaciones: 15, satisfaccion: 10, estres: 5 },
          feedback: "Las redes de apoyo son valiosas. La familia pone el resto.",
          desbloquea: ["Redes de apoyo", "Solidaridad"]
        },
        {
          id: "D",
          emoji: "💰",
          texto: "Das S/200 + organizar 'pollada' para el resto",
          impacto: { nivelEconomico: -0.5, relaciones: 20, satisfaccion: 15 },
          feedback: "Creatividad y comunidad. Una solución hermosa y colaborativa.",
          desbloquea: ["Solidaridad comunitaria", "Creatividad financiera"]
        }
      ]
    },
    {
      numero: 2,
      titulo: "Oferta de Tarjeta de Crédito",
      descripcion: "Llega un vendedor del banco a tu trabajo: 'Te ofrecemos una tarjeta de crédito con S/2,000 de línea. Sin cuota de manejo el primer año. ¿Qué dices?'",
      pregunta: "¿Aceptas la tarjeta de crédito?",
      tiempo: 120,
      opciones: [
        {
          id: "A",
          emoji: "✅",
          texto: "Sí, me sirve para emergencias",
          impacto: { nivelEconomico: 0.3, estres: 5 },
          feedback: "Puede ser útil pero requiere disciplina extrema.",
          desbloquea: ["Uso de tarjetas", "Deuda vs crédito"]
        },
        {
          id: "B",
          emoji: "🤔",
          texto: "Sí, pero solo S/500 de línea",
          impacto: { conocimiento: 5, estres: 3 },
          feedback: "Inteligente limitar tu exposición al crédito.",
          desbloquea: ["Uso responsable de crédito"]
        },
        {
          id: "C",
          emoji: "❌",
          texto: "No, aún no sé usarla bien",
          impacto: { conocimiento: 5, estres: -5 },
          feedback: "Decisión sabia. Mejor aprender primero sobre crédito.",
          desbloquea: ["Educación financiera"]
        },
        {
          id: "D",
          emoji: "📚",
          texto: "Pedir tiempo para informarme mejor",
          impacto: { conocimiento: 8, estres: 2 },
          feedback: "Muy responsable investigar antes de decidir.",
          desbloquea: ["Toma de decisiones financieras"]
        }
      ]
    },
    {
      numero: 3,
      titulo: "Oportunidad de Práctica",
      descripcion: "Tu instituto ofrece prácticas pre-profesionales en una clínica reconocida. No pagan, pero aprenderías mucho. Son 20 horas semanales adicionales.",
      pregunta: "¿Aceptas las prácticas sin pago?",
      tiempo: 120,
      opciones: [
        {
          id: "A",
          emoji: "✅",
          texto: "Sí, necesito la experiencia",
          impacto: { conocimiento: 20, estres: 15, progresoMeta: 15, saludFisica: -5 },
          feedback: "La experiencia vale oro. Pero te exigirás al máximo.",
          desbloquea: ["Valor de la experiencia", "Balance vida-trabajo"]
        },
        {
          id: "B",
          emoji: "💼",
          texto: "Sí, pero reduzco horas en mi trabajo",
          impacto: { conocimiento: 20, nivelEconomico: -0.5, estres: 10, progresoMeta: 15 },
          feedback: "Balance inteligente entre experiencia e ingresos.",
          desbloquea: ["Priorización de metas"]
        },
        {
          id: "C",
          emoji: "❌",
          texto: "No, necesito el dinero de mi trabajo",
          impacto: { nivelEconomico: 0.3, progresoMeta: -5 },
          feedback: "Priorizas los ingresos inmediatos. Puede limitarte después.",
          desbloquea: ["Inversión vs ingreso inmediato"]
        },
        {
          id: "D",
          emoji: "⏰",
          texto: "Espero a prácticas remuneradas",
          impacto: { estres: -5, progresoMeta: -3 },
          feedback: "Válido esperar mejores condiciones, pero puede tardar.",
          desbloquea: ["Negociación laboral"]
        }
      ]
    },
    {
      numero: 4,
      titulo: "Gestión del Estrés",
      descripcion: "Llevas 1 año trabajando y estudiando. Duermes 5 horas diarias. Te sientes agotado/a. Tus notas bajaron. Te enfermas seguido. Algo debe cambiar.",
      pregunta: "¿Qué decides hacer?",
      tiempo: 120,
      opciones: [
        {
          id: "A",
          emoji: "📅",
          texto: "Organizar mejor mi horario y dormir 7 horas",
          impacto: { estres: -10, saludFisica: 10, saludMental: 10, conocimiento: 5 },
          feedback: "El descanso no es lujo, es necesidad. Tu rendimiento mejorará.",
          desbloquea: ["Importancia del descanso", "Organización efectiva"]
        },
        {
          id: "B",
          emoji: "💪",
          texto: "Aguantar, solo falta 1 año para terminar",
          impacto: { estres: 10, saludFisica: -10, saludMental: -10 },
          feedback: "Peligroso. Estás cerca del burnout. Tu salud es primero.",
          desbloquea: ["Señales de burnout", "Límites personales"]
        },
        {
          id: "C",
          emoji: "🏥",
          texto: "Reducir horas de trabajo temporalmente",
          impacto: { nivelEconomico: -0.5, estres: -15, saludFisica: 10, saludMental: 10 },
          feedback: "Priorizar tu salud es inteligente. Vale más que el dinero extra.",
          desbloquea: ["Salud primero", "Balance vida-trabajo"]
        },
        {
          id: "D",
          emoji: "🧘",
          texto: "Buscar apoyo: terapia, ejercicio, meditación",
          impacto: { estres: -12, saludMental: 15, nivelEconomico: -0.2 },
          feedback: "Cuidar tu salud mental es inversión, no gasto.",
          desbloquea: ["Salud mental", "Herramientas de autocuidado"]
        }
      ]
    }
  ]
  
  // Las demás semanas (4-15) seguirían el mismo patrón
  // Por ahora dejo estas 3 semanas como ejemplo
  // En producción, necesitarías completar las 12 semanas restantes
};

// Función para obtener escenarios de una semana
export const getWeekScenarios = (weekNumber) => {
  const weekKey = `semana${weekNumber}`;
  return scenarios[weekKey] || [];
};

// Función para obtener un escenario específico
export const getScenario = (weekNumber, decisionNumber) => {
  const weekScenarios = getWeekScenarios(weekNumber);
  return weekScenarios[decisionNumber - 1] || null;
};