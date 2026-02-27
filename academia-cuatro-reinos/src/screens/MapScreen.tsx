import React from 'react';
import { useGame } from '../context/useGame';
import { levels } from '../data/gameData';
import { LevelCard } from '../components/GameComponents';

interface MapScreenProps {
  onLevelSelect: (levelId: number) => void;
  onBossSelect: () => void;
}

export const MapScreen: React.FC<MapScreenProps> = ({ onLevelSelect, onBossSelect }) => {
  const { state } = useGame();

  // Unlock boss when all 4 levels are completed (unlockedLevels includes 5)
  const bossUnlocked = state.unlockedLevels.includes(5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-800 p-4">
      {/* Header */}
      <div className="max-w-md mx-auto mb-6">
        <div className="bg-white/10 backdrop-blur rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{state.avatar}</span>
            <div>
              <div className="text-white font-bold">{state.playerName}</div>
              <div className="text-amber-400 text-sm">{state.score.toLocaleString()} pts</div>
            </div>
          </div>
          <div className="text-right text-white">
            <div className="text-xs">Nivel</div>
            <div className="font-bold">{Math.max(1, state.unlockedLevels.length)}</div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'serif' }}>
          🗺️ Mapa de los Reinos
        </h1>
        <p className="text-white/70 text-sm mt-1">Elige un reino para explorar</p>
      </div>

      {/* Level Cards */}
      <div className="max-w-md mx-auto space-y-4">
        {levels.map((level) => (
          <LevelCard
            key={level.id}
            level={level}
            unlocked={state.unlockedLevels.includes(level.id)}
            completed={state.unlockedLevels.includes(level.id + 1)}
            highScore={state.highScores[level.id]}
            onClick={() => onLevelSelect(level.id)}
          />
        ))}

        {/* Boss Card */}
        <button
          onClick={onBossSelect}
          disabled={!bossUnlocked}
          className={`
            w-full p-4 rounded-2xl border-4 transition-all duration-300
            ${bossUnlocked
              ? 'bg-gradient-to-r from-red-900 to-purple-900 hover:scale-105 shadow-lg cursor-pointer border-red-500'
              : 'bg-gray-800 cursor-not-allowed opacity-60 border-gray-600'
            }
          `}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-red-900/50">
              {bossUnlocked ? '👑' : '🔒'}
            </div>
            <div className="flex-1 text-left">
              <div className={`font-bold text-lg ${bossUnlocked ? 'text-red-400' : 'text-gray-500'}`}>
                Torre del Tiempo
              </div>
              <div className="text-sm text-gray-400">Jefe Final - 20 Preguntas</div>
              {bossUnlocked && (
                <div className="text-xs text-amber-400 mt-1">
                  ⏱️ 120 segundos
                </div>
              )}
            </div>
            {bossUnlocked && <span className="text-3xl">🎯</span>}
          </div>
        </button>
      </div>

      {/* Instructions */}
      <div className="max-w-md mx-auto mt-8 text-center text-white/60 text-xs">
        <p>Completa todos los reinos para desbloquear el jefe final</p>
      </div>
    </div>
  );
};
