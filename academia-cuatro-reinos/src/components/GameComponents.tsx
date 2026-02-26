import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  color = "#6366f1"
}) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs font-medium mb-1">
        <span style={{ color }}>Progreso</span>
        <span style={{ color }}>{current}/{total}</span>
      </div>
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  );
};

interface HeartsProps {
  lives: number;
  maxLives?: number;
}

export const Hearts: React.FC<HeartsProps> = ({ lives, maxLives = 3 }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxLives }).map((_, index) => (
        <span
          key={index}
          className={`text-2xl transition-all duration-300 ${
            index < lives ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
          }`}
        >
          ❤️
        </span>
      ))}
    </div>
  );
};

interface ManaBarProps {
  mana: number;
  maxMana?: number;
}

export const ManaBar: React.FC<ManaBarProps> = ({ mana, maxMana = 200 }) => {
  const percentage = Math.min((mana / maxMana) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-xs font-medium mb-1 text-purple-700">
        <span>Maná</span>
        <span>{mana}/{maxMana}</span>
      </div>
      <div className="w-full h-3 bg-purple-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: '#8b5cf6'
          }}
        />
      </div>
    </div>
  );
};

interface ScoreDisplayProps {
  score: number;
  streak?: number;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, streak = 0 }) => {
  return (
    <div className="text-right">
      <div className="text-lg font-bold text-amber-600">
        {score.toLocaleString()} pts
      </div>
      {streak > 0 && (
        <div className="text-xs text-orange-500">
          🔥 Racha: {streak}
        </div>
      )}
    </div>
  );
};

interface AbilityButtonProps {
  id: string;
  name: string;
  icon: string;
  cost: number;
  usesLeft: number;
  available: boolean;
  onClick: () => void;
}

export const AbilityButton: React.FC<AbilityButtonProps> = ({
  id,
  name,
  icon,
  cost,
  usesLeft,
  available,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      disabled={!available}
      className={`
        flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200
        ${available
          ? 'bg-white border-2 border-purple-300 hover:border-purple-500 hover:scale-105 shadow-md'
          : 'bg-gray-100 border-2 border-gray-200 opacity-50 cursor-not-allowed'
        }
      `}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-medium text-gray-700 mt-1">{name}</span>
      <span className="text-xs text-purple-600">{cost} 💎</span>
      <span className="text-xs text-gray-500">x{usesLeft}</span>
    </button>
  );
};

interface AnswerButtonProps {
  value: number;
  onClick: () => void;
  disabled?: boolean;
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
  value,
  onClick,
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full py-4 px-6 rounded-xl text-xl font-bold transition-all duration-200
        ${disabled
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-white border-2 border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 hover:scale-102 shadow-md'
        }
      `}
    >
      {value}
    </button>
  );
};

interface FeedbackProps {
  type: 'correct' | 'incorrect' | null;
  message?: string;
}

export const Feedback: React.FC<FeedbackProps> = ({ type, message }) => {
  if (!type) return null;

  return (
    <div
      className={`
        fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        px-8 py-4 rounded-2xl text-2xl font-bold animate-bounce
        ${type === 'correct'
          ? 'bg-green-100 border-4 border-green-500 text-green-700'
          : 'bg-red-100 border-4 border-red-500 text-red-700'
        }
      `}
    >
      {type === 'correct' ? '✅ ¡Correcto!' : `❌ ${message || '¡Incorrecto!'}`}
    </div>
  );
};

interface LevelCardProps {
  level: {
    id: number;
    name: string;
    realm: string;
    icon: string;
    color: string;
  };
  unlocked: boolean;
  completed: boolean;
  highScore?: number;
  onClick: () => void;
}

export const LevelCard: React.FC<LevelCardProps> = ({
  level,
  unlocked,
  completed,
  highScore,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      disabled={!unlocked}
      className={`
        w-full p-4 rounded-2xl border-4 transition-all duration-300
        ${unlocked
          ? 'bg-white hover:scale-105 shadow-lg cursor-pointer'
          : 'bg-gray-100 cursor-not-allowed opacity-60'
        }
      `}
      style={{ borderColor: unlocked ? level.color : '#d1d5db' }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
          style={{ backgroundColor: unlocked ? level.color + '20' : '#f3f4f6' }}
        >
          {unlocked ? level.icon : '🔒'}
        </div>
        <div className="flex-1 text-left">
          <div
            className="font-bold text-lg"
            style={{ color: unlocked ? level.color : '#9ca3af' }}
          >
            {level.name}
          </div>
          <div className="text-sm text-gray-500">{level.realm}</div>
          {completed && highScore !== undefined && (
            <div className="text-xs text-amber-600 mt-1">
              🏆 Mejor: {highScore} pts
            </div>
          )}
        </div>
        {completed && (
          <span className="text-2xl">⭐</span>
        )}
      </div>
    </button>
  );
};
