import React from 'react';
import { Level } from '../../data/gameData';
import { getKingdomTheme } from '../../theme/kingdomThemes';

interface KingdomCardProps {
  level: Level;
  unlocked: boolean;
  completed: boolean;
  highScore?: number;
  onSelect: () => void;
}

export const KingdomCard: React.FC<KingdomCardProps> = ({
  level,
  unlocked,
  completed,
  highScore,
  onSelect,
}) => {
  const theme = getKingdomTheme(level.operation);

  return (
    <button
      onClick={onSelect}
      disabled={!unlocked}
      className={`
        group relative w-full overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300
        ${theme.cardBorder}
        ${unlocked ? `bg-gradient-to-r ${theme.cardGradient} ${theme.cardGlow} hover:scale-[1.02]` : 'bg-slate-900/70 border-slate-700/80 opacity-55 cursor-not-allowed'}
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-xl text-3xl ${unlocked ? `${theme.iconBg} ${theme.hoverAnimation}` : 'bg-slate-700/60'}`}>
          {unlocked ? level.icon : '🔒'}
        </div>

        <div className="flex-1">
          <h3 className={`text-base font-bold ${unlocked ? theme.textPrimary : 'text-slate-300'}`}>
            {theme.kingdomName}
          </h3>
          <p className={`text-xs font-medium ${unlocked ? theme.textSecondary : 'text-slate-400'}`}>
            Elemento: {theme.elementName}
          </p>
          <p className={`text-xs mt-0.5 ${unlocked ? theme.textSecondary : 'text-slate-500'}`}>
            {level.operationSpanish}
          </p>

          {completed && highScore !== undefined && (
            <p className="mt-1 text-xs font-semibold text-amber-200">🏆 Mejor puntaje: {highScore}</p>
          )}
        </div>

        <div className={`text-2xl ${unlocked ? theme.textPrimary : 'text-slate-500'}`}>
          {completed ? '✅' : unlocked ? '⚔️' : '🔒'}
        </div>
      </div>
    </button>
  );
};
