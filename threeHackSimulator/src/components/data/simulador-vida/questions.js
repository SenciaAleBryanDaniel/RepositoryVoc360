// ✅ NUEVAS PREGUNTAS DEL TEST (3 preguntas)

// Lista de preguntas para crear el perfil del jugador
export const questions = [
  {
    id: 1,
    categoria: "laboral",
    pregunta: "Un amigo te ofrece un trabajo rápido sin contrato ni beneficios.",
    emoji: "💼",
    opciones: [
      {
        id: "A",
        texto: "Aceptas sin pensarlo, necesitas dinero.",
        perfil: { riesgo: 2, impulsividad: 2, estabilidad: -1 }
      },
      {
        id: "B",
        texto: "Aceptas, pero aclaras que solo será temporal.",
        perfil: { riesgo: 1, cautela: 1, estabilidad: 0 }
      },
      {
        id: "C",
        texto: "Pides que te expliquen condiciones y horarios antes de aceptar.",
        perfil: { cautela: 2, autonomia: 1 }
      },
      {
        id: "D",
        texto: "Rechazas y prefieres esperar una oportunidad.",
        perfil: { cautela: 2, riesgo: -1, estabilidad: 1 }
      }
    ]
  },
  {
    id: 2,
    categoria: "economica",
    pregunta: "Te pagan por tu primer trabajo y recibes más de lo esperado.",
    emoji: "💰",
    opciones: [
      {
        id: "A",
        texto: "Lo gastas todo en algo que querías hace tiempo.",
        perfil: { ahorro: -2, impulsivo: 2 }
      },
      {
        id: "B",
        texto: "Compras solo lo necesario y guardas el resto.",
        perfil: { ahorro: 2, autocontrol: 1 }
      },
      {
        id: "C",
        texto: "Guardas la mitad y usas la otra para invertir en algo útil.",
        perfil: { ahorro: 1, inversion: 2 }
      },
      {
        id: "D",
        texto: "Calculas tus próximos gastos y decides cuánto ahorrar.",
        perfil: { ahorro: 2, organizacion: 2 }
      }
    ]
  },
  {
    id: 3,
    categoria: "financiera",
    pregunta: "Un amigo te ofrece una tarjeta de crédito con 'cero interés los primeros meses'.",
    emoji: "💳",
    opciones: [
      {
        id: "A",
        texto: "La aceptas de inmediato, suena como una buena oportunidad.",
        perfil: { riesgo: 2, impulsivo: 2 }
      },
      {
        id: "B",
        texto: "La aceptas, pero solo la usarás en caso de emergencia.",
        perfil: { cautela: 1, riesgo: 1 }
      },
      {
        id: "C",
        texto: "Preguntas y lees bien las condiciones antes de decidir.",
        perfil: { cautela: 2, aprendizaje: 2 }
      },
      {
        id: "D",
        texto: "Decides no usar crédito hasta aprender más sobre finanzas.",
        perfil: { ahorro: 2, cautela: 2 }
      }
    ]
  }
];


// ✅ FUNCIÓN PARA ANALIZAR RESPUESTAS Y GENERAR PERFIL

export const analizarRespuestas = (respuestas) => {
  const puntajes = {};
  
  respuestas.forEach((respuesta, index) => {
    const pregunta = questions[index];
    const opcion = pregunta.opciones.find(opt => opt.id === respuesta);
    
    if (opcion) {
      Object.entries(opcion.perfil).forEach(([clave, valor]) => {
        puntajes[clave] = (puntajes[clave] || 0) + valor;
      });
    }
  });
  
  // Determinar tipo de perfil
  let tipoPerfil = "";
  let descripcion = "";
  
  if (puntajes.ahorro >= 2 && puntajes.cautela >= 1) {
    tipoPerfil = "Planificador Financiero";
    descripcion = "Te organizas, analizas tus decisiones y piensas en el futuro.";
  } else if (puntajes.riesgo >= 2 && puntajes.impulsivo >= 2) {
    tipoPerfil = "Tomador de Riesgos";
    descripcion = "Actúas rápido, buscas oportunidades, aunque a veces sin pensar mucho.";
  } else if (puntajes.aprendizaje >= 2) {
    tipoPerfil = "Aprendiz Estratégico";
    descripcion = "Antes de actuar, investigas y buscas conocimiento.";
  } else {
    tipoPerfil = "Flexible y Adaptable";
    descripcion = "Buscas equilibrio, adaptándote a cada situación.";
  }

  return {
    tipo: tipoPerfil,
    descripcion: descripcion,
    puntajes: puntajes
  };
};

