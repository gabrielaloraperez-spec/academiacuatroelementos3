import React from 'react';
import { useGame } from '../context/GameContext';
import { levels, achievements as allAchievements } from '../data/gameData';
import { LevelCard, AchievementBadge } from '../components/GameComponents';

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

      {/* Achievements Section */}
      {state.achievements.length > 0 && (
        <div className="max-w-md mx-auto mt-6">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <h3 className="text-white font-bold">Logros Desbloqueados</h3>
              <span className="text-white/60 text-sm">({state.achievements.length}/{allAchievements.length})</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allAchievements
                .filter(achievement => state.achievements.includes(achievement.id))
                .map(achievement => (
                  <AchievementBadge
                    key={achievement.id}
                    id={achievement.id}
                    name={achievement.name}
                    description={achievement.description}
                    icon={achievement.icon}
                    unlocked={true}
                  />
                ))
              }
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="max-w-md mx-auto mt-8 text-center text-white/60 text-xs">
        <p>Completa todos los reinos para desbloquear el jefe final</p>
      </div>
    </div>
  );
};
