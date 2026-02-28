import React, { useMemo, useState, useEffect } from 'react';
import { level1Data, level2Data, level3Data, Problem } from '../data/gameData';

interface DomainChallengeScreenProps {
  onComplete: () => void;
}

const TOTAL_TIME_SECONDS = 150;

const shuffle = <T,>(items: T[]): T[] => {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
};

export const DomainChallengeScreen: React.FC<DomainChallengeScreenProps> = ({ onComplete }) => {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_SECONDS);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const mixedProblems = useMemo(() => {
    const source: Problem[] = [
      ...level1Data.problems,
      ...level2Data.problems,
      ...level3Data.problems,
    ];

    return shuffle(
      source.map((problem, index) => ({
        ...problem,
        id: index + 1,
      })),
    );
  }, []);

  const currentProblem = mixedProblems[currentProblemIndex];
  const progress = ((TOTAL_TIME_SECONDS - timeLeft) / TOTAL_TIME_SECONDS) * 100;

  useEffect(() => {
    if (!started || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (answer: number) => {
    if (!started || !currentProblem || feedback !== null || timeLeft <= 0) return;

    const isCorrect = answer === currentProblem.answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setTimeout(() => {
      setFeedback(null);
      setCurrentProblemIndex((prev) => (prev + 1) % mixedProblems.length);
    }, 500);
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-sky-900 to-indigo-950 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="text-6xl mb-4">🌀</div>
          <h1 className="text-3xl font-bold text-indigo-700 mb-4">Reto de Dominio</h1>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            Bienvenido al reto de dominio{`\n`}Ya que te dominado los 3 niveles de este reino, ahora tendrás que demostrar tus habilidades contra reloj.{`\n\n`}En el nivel distribuya aleatoriamente ejercicios de los 3 niveles de dificultad con una barra de tiempo de 2 min 30 seg.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="mt-6 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl"
          >
            Iniciar reto
          </button>
        </div>
      </div>
    );
  }

  if (timeLeft <= 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-sky-900 to-indigo-950 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-3xl font-bold text-indigo-700 mb-3">¡Reto completado!</h2>
          <p className="text-gray-700 mb-2">Respuestas correctas: <strong>{correctAnswers}</strong></p>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            Felicitaciones, maestro de la suma, has dominado el primer elemento, Aire; ahora se abrirán las puertas de la sala del conocimiento.
          </p>
          <button
            onClick={onComplete}
            className="mt-6 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl"
          >
            Ir a la sala del conocimiento
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-sky-900 to-indigo-950 p-4">
      <div className="max-w-2xl mx-auto pt-4">
        <div className="bg-white/10 border border-white/20 rounded-2xl p-4 mb-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-lg">Reto de Dominio</h2>
            <span className="font-mono text-xl">⏳ {formatTime(timeLeft)}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div className="h-full bg-amber-400 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
          <p className="text-sm text-gray-500 mb-2">Ejercicio aleatorio #{currentProblemIndex + 1}</p>
          <div className="text-5xl font-bold text-gray-800 mb-8">{currentProblem?.question}</div>

          <div className="grid grid-cols-2 gap-4">
            {currentProblem?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={feedback !== null}
                className="py-4 rounded-xl text-xl font-bold bg-indigo-100 hover:bg-indigo-200 disabled:opacity-70"
              >
                {option}
              </button>
            ))}
          </div>

          {feedback && (
            <div className={`mt-4 font-bold ${feedback === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
              {feedback === 'correct' ? '¡Correcto!' : `Incorrecto. Era ${currentProblem?.answer}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
