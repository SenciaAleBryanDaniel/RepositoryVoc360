// Avatar de prueba: María López
// 60 decisiones predefinidas para las 15 semanas

export const mariaTemplate = {
  nombre: "María López",
  edad: 17,
  ubicacion: "Arequipa, Perú",
  
  // Perfil inicial
  perfil: {
    tipo: "Ahorradora Solidaria",
    descripcion: "Valoras la estabilidad económica y tu familia es muy importante para ti. Eres cautelosa con el dinero y prefieres seguridad sobre riesgo.",
    meta: "Tener casa propia y ayudar a mi familia"
  },
  
  // Parámetros iniciales
  parametrosIniciales: {
    nivelEconomico: 1,
    saludFisica: 80,
    saludMental: 75,
    satisfaccion: 60,
    estres: 40,
    conocimiento: 30,
    relaciones: 85,
    progresoMeta: 0
  },
  
  // 60 decisiones predefinidas (4 por cada una de las 15 semanas)
  decisiones: {
    // SEMANA 1 - AÑO 18
    semana1: [
      {
        numero: 1,
        respuesta: "A", // Familia muy unida
        impacto: { relaciones: 10, satisfaccion: 5 }
      },
      {
        numero: 2,
        respuesta: "B", // Situación económica ajustada
        impacto: { estres: 5 }
      },
      {
        numero: 3,
        respuesta: "D", // Meta: casa propia + ayudar familia
        impacto: { progresoMeta: 5, satisfaccion: 5 }
      },
      {
        numero: 4,
        respuesta: "B", // Mayor preocupación: futuro profesional
        impacto: { conocimiento: 5 }
      }
    ],
    
    // SEMANA 2 - AÑO 19
    semana2: [
      {
        numero: 1,
        respuesta: "C", // Estudiar + Trabajar
        impacto: { 
          conocimiento: 15, 
          nivelEconomico: 1, 
          estres: 20, 
          saludFisica: -10, 
          saludMental: -15 
        }
      },
      {
        numero: 2,
        respuesta: "A", // Elegir Enfermería Técnica
        impacto: { conocimiento: 10, progresoMeta: 10 }
      },
      {
        numero: 3,
        respuesta: "B", // Trabajo en farmacia medio tiempo
        impacto: { nivelEconomico: 1, estres: 5 }
      },
      {
        numero: 4,
        respuesta: "A", // Ahorra 30%, ayuda familia 20%
        impacto: { relaciones: 10, satisfaccion: 8, nivelEconomico: 0.5 }
      }
    ],
    
    // SEMANA 3 - AÑO 20
    semana3: [
      {
        numero: 1,
        respuesta: "C", // Pedir ayuda a familiares/amigos para emergencia
        impacto: { 
          nivelEconomico: -0.5, 
          relaciones: 15, 
          satisfaccion: 10, 
          estres: 5 
        }
      },
      {
        numero: 2,
        respuesta: "C", // Rechazar tarjeta de crédito
        impacto: { conocimiento: 5, estres: -5 }
      },
      {
        numero: 3,
        respuesta: "B", // Aceptar práctica profesional
        impacto: { conocimiento: 20, estres: 15, progresoMeta: 15 }
      },
      {
        numero: 4,
        respuesta: "A", // Organizar horario estricto
        impacto: { estres: -5, saludMental: 5 }
      }
    ],
    
    // SEMANA 4 - AÑO 21
    semana4: [
      {
        numero: 1,
        respuesta: "A", // Aceptar trabajo en clínica (S/1,500)
        impacto: { 
          nivelEconomico: 2, 
          satisfaccion: 15, 
          estres: 10, 
          progresoMeta: 10 
        }
      },
      {
        numero: 2,
        respuesta: "C", // Quedarse con padres 1 año más
        impacto: { nivelEconomico: 1, relaciones: 5, progresoMeta: 5 }
      },
      {
        numero: 3,
        respuesta: "B", // Esperar en relación 1 año más
        impacto: { relaciones: -5, saludMental: 5, satisfaccion: 3 }
      },
      {
        numero: 4,
        respuesta: "C", // Rechazar negocio de ropa
        impacto: { nivelEconomico: 0.5, estres: -5 }
      }
    ],
    
    // SEMANA 5 - AÑO 22
    semana5: [
      {
        numero: 1,
        respuesta: "B", // Continuar estudiando especialización
        impacto: { conocimiento: 15, estres: 10, progresoMeta: 10 }
      },
      {
        numero: 2,
        respuesta: "A", // Abrir cuenta de ahorros
        impacto: { nivelEconomico: 0.5, conocimiento: 5 }
      },
      {
        numero: 3,
        respuesta: "C", // Mantener equilibrio trabajo-estudio
        impacto: { saludMental: 5, satisfaccion: 5 }
      },
      {
        numero: 4,
        respuesta: "B", // Ayudar moderadamente a familia
        impacto: { relaciones: 5, nivelEconomico: -0.3 }
      }
    ],
    
    // SEMANA 6 - AÑO 23
    semana6: [
      {
        numero: 1,
        respuesta: "B", // Crisis de estrés: buscar ayuda
        impacto: { estres: -20, saludMental: 15, conocimiento: 5 }
      },
      {
        numero: 2,
        respuesta: "A", // Tomarse descanso de 1 mes
        impacto: { saludFisica: 10, saludMental: 15, estres: -15, satisfaccion: 10 }
      },
      {
        numero: 3,
        respuesta: "C", // Retomar con horario reducido
        impacto: { estres: -10, satisfaccion: 8 }
      },
      {
        numero: 4,
        respuesta: "B", // Aprender a decir "no"
        impacto: { saludMental: 10, relaciones: -5 }
      }
    ],
    
    // SEMANA 7 - AÑO 24
    semana7: [
      {
        numero: 1,
        respuesta: "A", // Terminar especialización exitosamente
        impacto: { conocimiento: 20, satisfaccion: 20, progresoMeta: 15 }
      },
      {
        numero: 2,
        respuesta: "B", // Buscar mejor trabajo con especialización
        impacto: { nivelEconomico: 1, progresoMeta: 10 }
      },
      {
        numero: 3,
        respuesta: "A", // Mudarse sola
        impacto: { 
          nivelEconomico: -1, 
          satisfaccion: 15, 
          relaciones: -5, 
          estres: 10 
        }
      },
      {
        numero: 4,
        respuesta: "C", // Iniciar relación seria
        impacto: { satisfaccion: 10, relaciones: 10 }
      }
    ],
    
    // SEMANA 8 - AÑO 25
    semana8: [
      {
        numero: 1,
        respuesta: "B", // Trabajo en clínica privada (S/2,500)
        impacto: { nivelEconomico: 1, satisfaccion: 15, progresoMeta: 10 }
      },
      {
        numero: 2,
        respuesta: "A", // Empezar a ahorrar para casa
        impacto: { progresoMeta: 15, satisfaccion: 10 }
      },
      {
        numero: 3,
        respuesta: "C", // Equilibrio vida personal-trabajo
        impacto: { satisfaccion: 10, saludMental: 10, relaciones: 5 }
      },
      {
        numero: 4,
        respuesta: "B", // Invertir en curso adicional
        impacto: { conocimiento: 10, nivelEconomico: -0.3 }
      }
    ],
    
    // SEMANA 9 - AÑO 26
    semana9: [
      {
        numero: 1,
        respuesta: "C", // Ruptura amorosa: enfocarse en sí misma
        impacto: { satisfaccion: -30, relaciones: -10, saludMental: -15 }
      },
      {
        numero: 2,
        respuesta: "B", // Terapia psicológica
        impacto: { saludMental: 20, estres: -10, conocimiento: 5 }
      },
      {
        numero: 3,
        respuesta: "A", // Mantener rutina laboral
        impacto: { satisfaccion: 5, estres: 5 }
      },
      {
        numero: 4,
        respuesta: "C", // Reconectarse con amistades
        impacto: { relaciones: 15, satisfaccion: 10, saludMental: 10 }
      }
    ],
    
    // SEMANA 10 - AÑO 27
    semana10: [
      {
        numero: 1,
        respuesta: "A", // Recuperación emocional completa
        impacto: { saludMental: 15, satisfaccion: 15 }
      },
      {
        numero: 2,
        respuesta: "B", // Aumento salarial a S/3,000
        impacto: { nivelEconomico: 1, satisfaccion: 10 }
      },
      {
        numero: 3,
        respuesta: "A", // Iniciar trámites para préstamo hipotecario
        impacto: { progresoMeta: 20, estres: 15 }
      },
      {
        numero: 4,
        respuesta: "C", // Planificación financiera profesional
        impacto: { conocimiento: 10, nivelEconomico: 0.5 }
      }
    ],
    
    // SEMANA 11 - AÑO 28
    semana11: [
      {
        numero: 1,
        respuesta: "A", // Comprar departamento con crédito hipotecario
        impacto: { 
          progresoMeta: 30, 
          satisfaccion: 25, 
          nivelEconomico: -1, 
          estres: 10 
        }
      },
      {
        numero: 2,
        respuesta: "B", // Nueva relación estable
        impacto: { relaciones: 15, satisfaccion: 15 }
      },
      {
        numero: 3,
        respuesta: "C", // Mudarse al departamento propio
        impacto: { satisfaccion: 20, estres: 5 }
      },
      {
        numero: 4,
        respuesta: "A", // Continuar ayudando a familia
        impacto: { relaciones: 10, nivelEconomico: -0.3 }
      }
    ],
    
    // SEMANA 12 - AÑO 29
    semana12: [
      {
        numero: 1,
        respuesta: "B", // Adaptación a vida independiente
        impacto: { satisfaccion: 10, estres: -10 }
      },
      {
        numero: 2,
        respuesta: "A", // Promoción laboral
        impacto: { nivelEconomico: 1, satisfaccion: 15, progresoMeta: 5 }
      },
      {
        numero: 3,
        respuesta: "C", // Equilibrio financiero
        impacto: { estres: -10, satisfaccion: 10 }
      },
      {
        numero: 4,
        respuesta: "B", // Inversión en educación continua
        impacto: { conocimiento: 10, nivelEconomico: -0.2 }
      }
    ],
    
    // SEMANA 13 - AÑO 30
    semana13: [
      {
        numero: 1,
        respuesta: "A", // Estabilidad emocional y profesional
        impacto: { satisfaccion: 15, saludMental: 10 }
      },
      {
        numero: 2,
        respuesta: "B", // Salario S/3,500
        impacto: { nivelEconomico: 0.5, satisfaccion: 10 }
      },
      {
        numero: 3,
        respuesta: "C", // Planes de matrimonio
        impacto: { relaciones: 10, satisfaccion: 10 }
      },
      {
        numero: 4,
        respuesta: "A", // Mejorar departamento
        impacto: { nivelEconomico: -0.5, satisfaccion: 5 }
      }
    ],
    
    // SEMANA 14 - AÑO 31
    semana14: [
      {
        numero: 1,
        respuesta: "B", // Matrimonio civil
        impacto: { relaciones: 15, satisfaccion: 20 }
      },
      {
        numero: 2,
        respuesta: "A", // Mantener carrera profesional
        impacto: { satisfaccion: 10, conocimiento: 5 }
      },
      {
        numero: 3,
        respuesta: "C", // Equilibrio familia-trabajo
        impacto: { satisfaccion: 10, saludMental: 5 }
      },
      {
        numero: 4,
        respuesta: "B", // Planificación familiar a futuro
        impacto: { relaciones: 5, estres: 5 }
      }
    ],
    
    // SEMANA 15 - AÑO 32
    semana15: [
      {
        numero: 1,
        respuesta: "A", // Consolidación profesional
        impacto: { satisfaccion: 10, progresoMeta: 5 }
      },
      {
        numero: 2,
        respuesta: "B", // Balance vida-trabajo óptimo
        impacto: { satisfaccion: 10, saludMental: 5, estres: -5 }
      },
      {
        numero: 3,
        respuesta: "C", // Familia apoyada y estable
        impacto: { relaciones: 10, satisfaccion: 5 }
      },
      {
        numero: 4,
        respuesta: "A", // Reflexión positiva de vida
        impacto: { satisfaccion: 10 }
      }
    ]
  },
  
  // Parámetros finales (después de 15 años)
  parametrosFinales: {
    nivelEconomico: 7,
    saludFisica: 78,
    saludMental: 82,
    satisfaccion: 88,
    estres: 35,
    conocimiento: 85,
    relaciones: 90,
    progresoMeta: 75
  },
  
  // Logros desbloqueados
  logros: [
    "Perseverante - Completaste trabajo y estudios",
    "Solidaria - Siempre ayudaste a tu familia",
    "Ahorradora - Nunca te endeudaste peligrosamente",
    "Profesional - Lograste especialización",
    "Equilibrada - Mantuviste buenas relaciones"
  ]
};