// Game Data Configuration
// La Academia de los Cuatro Reinos - Enhanced Version

export interface Problem {
  id: number;
  question: string;
  answer: number;
  options: number[];
  hint?: string;
}

export interface KnowledgeContent {
  title: string;
  content: string;
  miniQuestions: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export interface Level {
  id: number;
  name: string;
  realm: string;
  operation: string;
  operationSpanish: string;
  icon: string;
  color: string;
  bgColor: string;
  accentColor: string;
  problems: Problem[];
  knowledge: KnowledgeContent;
}

export interface Ability {
  id: string;
  name: string;
  description: string;
  icon: string;
  cost: number;
  maxUses: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
  requirement: number;
}

// Level 1: Addition - Reino de la Energía
export const level1Data: Level = {
  id: 1,
  name: "Reino de la Energía",
  realm: "Energía",
  operation: "addition",
  operationSpanish: "Adición",
  icon: "⚡",
  color: "#dc2626",
  bgColor: "#fef2f2",
  accentColor: "#fecaca",
  problems: [
    { id: 1, question: "15 + 23 = ?", answer: 38, options: [35, 38, 42, 40], hint: "Suma las unidades primero: 5 + 3 = 8" },
    { id: 2, question: "27 + 34 = ?", answer: 61, options: [58, 61, 64, 59], hint: "7 + 4 = 11, lleva 1" },
    { id: 3, question: "45 + 28 = ?", answer: 73, options: [70, 73, 75, 68], hint: "5 + 8 = 13, escribe 3 y lleva 1" },
    { id: 4, question: "56 + 37 = ?", answer: 93, options: [90, 93, 95, 88], hint: "6 + 7 = 13, más 1 = 14" },
    { id: 5, question: "68 + 45 = ?", answer: 113, options: [110, 113, 115, 108], hint: "8 + 5 = 13, escribe 3 y lleva 1" },
    { id: 6, question: "129 + 84 = ?", answer: 213, options: [210, 213, 215, 208], hint: "9 + 4 = 13, más 1 = 14" },
    { id: 7, question: "247 + 158 = ?", answer: 405, options: [400, 402, 405, 395], hint: "7 + 8 = 15, escribe 5 y lleva 1" },
    { id: 8, question: "356 + 279 = ?", answer: 635, options: [630, 632, 635, 625], hint: "6 + 9 = 15, más 1 = 16" },
    { id: 9, question: "478 + 346 = ?", answer: 824, options: [820, 822, 824, 815], hint: "8 + 6 = 14, más 1 = 15" },
    { id: 10, question: "589 + 467 = ?", answer: 1056, options: [1050, 1052, 1056, 1045], hint: "9 + 7 = 16, más 1 = 17" }
  ],
  knowledge: {
    title: "El Sistema Numérico Romano",
    content: "Los romanos usaban un sistema de numeración no posicional con letras: I (1), V (5), X (10), L (50), C (100), D (500), M (1000). No tenían cero. Para sumar, juntaban los símbolos. Ejemplo: III + II = V (3 + 2 = 5). El sistema romano se usaba para construir acueductos, templos y registrar impuestos.",
    miniQuestions: [
      {
        question: "¿Qué valor tiene el número romano X?",
        options: ["1", "5", "10", "50"],
        correctAnswer: 2
      },
      {
        question: "¿Cómo se escribe 100 en números romanos?",
        options: ["C", "M", "L", "D"],
        correctAnswer: 0
      }
    ]
  }
};

// Level 2: Subtraction - Reino de la Defensa
export const level2Data: Level = {
  id: 2,
  name: "Reino de la Defensa",
  realm: "Defensa",
  operation: "subtraction",
  operationSpanish: "Sustracción",
  icon: "🛡️",
  color: "#2563eb",
  bgColor: "#eff6ff",
  accentColor: "#dbeafe",
  problems: [
    { id: 1, question: "45 - 23 = ?", answer: 22, options: [20, 22, 25, 18], hint: "5 - 3 = 2, 4 - 2 = 2" },
    { id: 2, question: "78 - 34 = ?", answer: 44, options: [42, 44, 46, 40], hint: "8 - 4 = 4, 7 - 3 = 4" },
    { id: 3, question: "93 - 47 = ?", answer: 46, options: [44, 46, 48, 42], hint: "Resta prestando: 13 - 7 = 6" },
    { id: 4, question: "125 - 68 = ?", answer: 57, options: [55, 57, 59, 53], hint: "5 - 8 no funciona, toma prestado" },
    { id: 5, question: "204 - 89 = ?", answer: 115, options: [112, 115, 118, 110], hint: "4 - 9, toma prestado de las decenas" },
    { id: 6, question: "347 - 159 = ?", answer: 188, options: [185, 188, 190, 182], hint: "7 - 9, toma prestado: 17 - 9 = 8" },
    { id: 7, question: "500 - 234 = ?", answer: 266, options: [264, 266, 268, 260], hint: "0 - 4, toma prestado del 5" },
    { id: 8, question: "712 - 378 = ?", answer: 334, options: [330, 332, 334, 328], hint: "2 - 8, toma prestado: 12 - 8 = 4" },
    { id: 9, question: "856 - 429 = ?", answer: 427, options: [425, 427, 429, 420], hint: "6 - 9, toma prestado: 16 - 9 = 7" },
    { id: 10, question: "1000 - 567 = ?", answer: 433, options: [430, 432, 433, 435], hint: "0 - 7, toma prestado repetidamente" }
  ],
  knowledge: {
    title: "El Sistema Numérico Maya",
    content: "Los mayas usaban un sistema vigesimal (base 20) con tres símbolos: el punto (1), la barra (5) y la concha (0). Escribían verticalmente de abajo arriba. Por ejemplo: dos puntos (2) más un punto (1) = tres puntos (3). Los mayas fueron de las primeras civilizaciones en usar el cero como número, ¡hace más de 2000 años!",
    miniQuestions: [
      {
        question: "¿En qué base funcionaba el sistema maya?",
        options: ["10", "20", "5", "60"],
        correctAnswer: 1
      },
      {
        question: "¿Qué símbolo representaba el 5 en números mayas?",
        options: ["Punto", "Barra", "Concha", "Círculo"],
        correctAnswer: 1
      }
    ]
  }
};

// Level 3: Multiplication - Reino de la Construcción
export const level3Data: Level = {
  id: 3,
  name: "Reino de la Construcción",
  realm: "Construcción",
  operation: "multiplication",
  operationSpanish: "Multiplicación",
  icon: "🔨",
  color: "#059669",
  bgColor: "#ecfdf5",
  accentColor: "#d1fae5",
  problems: [
    { id: 1, question: "7 × 6 = ?", answer: 42, options: [40, 42, 45, 36], hint: "6 + 6 + 6 + 6 + 6 + 6 + 6" },
    { id: 2, question: "8 × 9 = ?", answer: 72, options: [68, 70, 72, 64], hint: "8 × 10 = 80, menos 8" },
    { id: 3, question: "12 × 7 = ?", answer: 84, options: [80, 82, 84, 78], hint: "12 × 7 = (10 × 7) + (2 × 7)" },
    { id: 4, question: "15 × 8 = ?", answer: 120, options: [115, 118, 120, 110], hint: "15 × 8 = (10 × 8) + (5 × 8)" },
    { id: 5, question: "23 × 4 = ?", answer: 92, options: [88, 90, 92, 86], hint: "23 × 4 = (20 × 4) + (3 × 4)" },
    { id: 6, question: "34 × 3 = ?", answer: 102, options: [98, 100, 102, 96], hint: "34 × 3 = (30 × 3) + (4 × 3)" },
    { id: 7, question: "45 × 6 = ?", answer: 270, options: [265, 268, 270, 260], hint: "45 × 6 = (40 × 6) + (5 × 6)" },
    { id: 8, question: "78 × 5 = ?", answer: 390, options: [385, 388, 390, 380], hint: "78 × 5 = 78 × 10 ÷ 2" },
    { id: 9, question: "56 × 7 = ?", answer: 392, options: [385, 388, 392, 378], hint: "56 × 7 = (50 × 7) + (6 × 7)" },
    { id: 10, question: "89 × 9 = ?", answer: 801, options: [795, 798, 801, 790], hint: "89 × 9 = 89 × 10 - 89" }
  ],
  knowledge: {
    title: "El Sistema Numérico Decimal",
    content: "Nuestro sistema decimal usa base 10 con dígitos del 0 al 9. Es un sistema posicional: el valor de cada dígito depende de su posición. Por ejemplo, en 532: 5 vale 500 (5×100), 3 vale 30 (3×10), 2 vale 2. Este sistema proviene de los dedos de nuestras manos. Los hindúes lo perfeccionaron en el siglo V y los árabes lo difundieron por Europa.",
    miniQuestions: [
      {
        question: "¿Cuántos dígitos tiene el sistema decimal?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 2
      },
      {
        question: "En el número 456, ¿qué valor tiene el 4?",
        options: ["4", "40", "400", "4000"],
        correctAnswer: 2
      }
    ]
  }
};

// Level 4: Division - Reino de la Distribución
export const level4Data: Level = {
  id: 4,
  name: "Reino de la Distribución",
  realm: "Distribución",
  operation: "division",
  operationSpanish: "División",
  icon: "⚖️",
  color: "#7c3aed",
  bgColor: "#f5f3ff",
  accentColor: "#ede9fe",
  problems: [
    { id: 1, question: "48 ÷ 6 = ?", answer: 8, options: [6, 7, 8, 9], hint: "6 × 8 = 48" },
    { id: 2, question: "63 ÷ 9 = ?", answer: 7, options: [6, 7, 8, 9], hint: "9 × 7 = 63" },
    { id: 3, question: "84 ÷ 7 = ?", answer: 12, options: [10, 11, 12, 13], hint: "7 × 12 = 84" },
    { id: 4, question: "96 ÷ 8 = ?", answer: 12, options: [10, 11, 12, 14], hint: "8 × 12 = 96" },
    { id: 5, question: "144 ÷ 12 = ?", answer: 12, options: [10, 11, 12, 13], hint: "12 × 12 = 144" },
    { id: 6, question: "156 ÷ 13 = ?", answer: 12, options: [10, 11, 12, 14], hint: "13 × 12 = 156" },
    { id: 7, question: "198 ÷ 11 = ?", answer: 18, options: [16, 17, 18, 19], hint: "11 × 18 = 198" },
    { id: 8, question: "224 ÷ 14 = ?", answer: 16, options: [14, 15, 16, 17], hint: "14 × 16 = 224" },
    { id: 9, question: "288 ÷ 12 = ?", answer: 24, options: [22, 23, 24, 25], hint: "12 × 24 = 288" },
    { id: 10, question: "384 ÷ 16 = ?", answer: 24, options: [22, 23, 24, 26], hint: "16 × 24 = 384" }
  ],
  knowledge: {
    title: "Comparación de Sistemas Numéricos",
    content: "Cada civilización desarrolló su propio sistema: Romano (no posicional, letras), Maya (vigésimal con cero), Decimal (posicional base 10), Babilónico (sexagesimal base 60). El sistema decimal que usamos hoy fue creado en India y распространился por el mundo árabe. Hoy usamos matemáticas de todos estos sistemas: horas (60), años (12 meses), dinero (decimal).",
    miniQuestions: [
      {
        question: "¿Qué sistema usaba base 60?",
        options: ["Romano", "Maya", "Babilónico", "Decimal"],
        correctAnswer: 2
      },
      {
        question: "¿Qué civilizaciones usaron el cero primero?",
        options: ["Romanos", "Griegos", "Mayas e Hindúes", "Egipcios"],
        correctAnswer: 2
      }
    ]
  }
};

export const levels: Level[] = [level1Data, level2Data, level3Data, level4Data];

// Boss Level Problems (Mixed operations)
export const bossProblems: Problem[] = [
  { id: 1, question: "25 + 17 = ?", answer: 42, options: [40, 42, 44, 38], hint: "25 + 17 = 25 + 15 + 2" },
  { id: 2, question: "93 - 48 = ?", answer: 45, options: [43, 45, 47, 41], hint: "93 - 48 = 93 - 50 + 2" },
  { id: 3, question: "8 × 7 = ?", answer: 56, options: [52, 54, 56, 58], hint: "8 × 7 = 8 × 5 + 8 × 2" },
  { id: 4, question: "72 ÷ 8 = ?", answer: 9, options: [7, 8, 9, 10], hint: "8 × 9 = 72" },
  { id: 5, question: "34 + 29 = ?", answer: 63, options: [60, 61, 63, 65], hint: "34 + 29 = 34 + 30 - 1" },
  { id: 6, question: "156 - 78 = ?", answer: 78, options: [76, 78, 80, 74], hint: "156 - 78 = 156 - 80 + 2" },
  { id: 7, question: "9 × 9 = ?", answer: 81, options: [78, 81, 84, 79], hint: "9 × 9 = 9 × 10 - 9" },
  { id: 8, question: "64 ÷ 8 = ?", answer: 8, options: [6, 7, 8, 9], hint: "8 × 8 = 64" },
  { id: 9, question: "47 + 38 = ?", answer: 85, options: [82, 83, 85, 87], hint: "47 + 38 = 47 + 40 - 2" },
  { id: 10, question: "100 - 56 = ?", answer: 44, options: [42, 44, 46, 40], hint: "100 - 56 = 100 - 50 - 6" },
  { id: 11, question: "12 × 6 = ?", answer: 72, options: [68, 70, 72, 66], hint: "12 × 6 = 10 × 6 + 2 × 6" },
  { id: 12, question: "96 ÷ 12 = ?", answer: 8, options: [6, 7, 8, 9], hint: "12 × 8 = 96" },
  { id: 13, question: "56 + 47 = ?", answer: 103, options: [100, 101, 103, 105], hint: "56 + 47 = 56 + 50 - 3" },
  { id: 14, question: "234 - 167 = ?", answer: 67, options: [65, 67, 69, 63], hint: "234 - 167 = 234 - 170 + 3" },
  { id: 15, question: "15 × 5 = ?", answer: 75, options: [70, 73, 75, 77], hint: "15 × 5 = 15 × 10 ÷ 2" },
  { id: 16, question: "108 ÷ 9 = ?", answer: 12, options: [10, 11, 12, 13], hint: "9 × 12 = 108" },
  { id: 17, question: "89 + 76 = ?", answer: 165, options: [160, 163, 165, 167], hint: "89 + 76 = 89 + 80 - 4" },
  { id: 18, question: "300 - 145 = ?", answer: 155, options: [150, 153, 155, 157], hint: "300 - 145 = 300 - 150 + 5" },
  { id: 19, question: "24 × 4 = ?", answer: 96, options: [92, 94, 96, 98], hint: "24 × 4 = 20 × 4 + 4 × 4" },
  { id: 20, question: "144 ÷ 12 = ?", answer: 12, options: [10, 11, 12, 14], hint: "12 × 12 = 144" }
];

// Abilities
export const abilities: Ability[] = [
  {
    id: "shield",
    name: "Escudo",
    description: "Ignora un error",
    icon: "🛡",
    cost: 50,
    maxUses: 3
  },
  {
    id: "recharge",
    name: "Vida",
    description: "Recupera 1 corazón",
    icon: "♥",
    cost: 80,
    maxUses: 2
  },
  {
    id: "multiplier",
    name: "Doble",
    description: "2x puntos por 3 preguntas",
    icon: "×2",
    cost: 40,
    maxUses: 5
  },
  {
    id: "extratime",
    name: "Tiempo",
    description: "+5 segundos",
    icon: "⏱",
    cost: 60,
    maxUses: 3
  }
];

// Achievements
export const achievements: Achievement[] = [
  {
    id: "first_level",
    name: "Primer Paso",
    description: "Completa tu primer reino",
    icon: "★",
    condition: "levels_completed",
    requirement: 1
  },
  {
    id: "perfect_level",
    name: "Perfección",
    description: "Completa un nivel sin errores",
    icon: "◆",
    condition: "perfect_level",
    requirement: 1
  },
  {
    id: "streak_5",
    name: "Racha de Fuego",
    description: "Consigue 5 respuestas correctas seguidas",
    icon: "🔥",
    condition: "streak",
    requirement: 5
  },
  {
    id: "streak_10",
    name: "Maestro Ardiente",
    description: "Consigue 10 respuestas correctas seguidas",
    icon: "⚡",
    condition: "streak",
    requirement: 10
  },
  {
    id: "boss_killer",
    name: "Conquistador",
    description: "Derrota al jefe final",
    icon: "👑",
    condition: "boss_completed",
    requirement: 1
  },
  {
    id: "all_knowledge",
    name: "Erudito",
    description: "Completa todas las Salas del Conocimiento",
    icon: "📚",
    condition: "knowledge_rooms",
    requirement: 4
  },
  {
    id: "speed_demon",
    name: "Velocista",
    description: "Completa el jefe en menos de 60 segundos",
    icon: "⚡",
    condition: "boss_time",
    requirement: 60
  },
  {
    id: "addition_master",
    name: "Maestro de la Energía",
    description: "Dominio completo de la adición",
    icon: "+",
    condition: "operation_mastery",
    requirement: 100
  },
  {
    id: "subtraction_master",
    name: "Maestro de la Defensa",
    description: "Dominio completo de la sustracción",
    icon: "−",
    condition: "operation_mastery",
    requirement: 100
  },
  {
    id: "multiplication_master",
    name: "Maestro de la Construcción",
    description: "Dominio completo de la multiplicación",
    icon: "×",
    condition: "operation_mastery",
    requirement: 100
  },
  {
    id: "division_master",
    name: "Maestro de la Distribución",
    description: "Dominio completo de la división",
    icon: "÷",
    condition: "operation_mastery",
    requirement: 100
  }
];

// Scoring
export const SCORING = {
  CORRECT_ANSWER: 100,
  STREAK_BONUS: 10,
  STREAK_MAX: 50,
  BOSS_TIME_BONUS: 5,
  BOSS_COMPLETE_BONUS: 1000,
  LIVES_BONUS: 200,
  PERFECT_LEVEL_BONUS: 500
};

// Operation info for display
export const operationInfo = {
  addition: { symbol: "+", name: "Adición", color: "#dc2626" },
  subtraction: { symbol: "−", name: "Sustracción", color: "#2563eb" },
  multiplication: { symbol: "×", name: "Multiplicación", color: "#059669" },
  division: { symbol: "÷", name: "División", color: "#7c3aed" }
};
