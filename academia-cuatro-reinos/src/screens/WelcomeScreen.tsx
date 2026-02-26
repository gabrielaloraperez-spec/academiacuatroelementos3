import React, { useState } from 'react';
import { useGame } from '../context/GameContext';

const AVATARS = ["🧙", "🧝", "🧛", "🧚", "🦸", "🦹", "🧑‍🚀", "🐉"];

export const WelcomeScreen: React.FC = () => {
  const { setPlayerInfo, state } = useGame();
  const [name, setName] = useState(state.playerName);
  const [selectedAvatar, setSelectedAvatar] = useState(state.avatar);

  const handleStart = () => {
    if (name.trim()) {
      setPlayerInfo(name.trim(), selectedAvatar);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'serif' }}>
            La Academia de los
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400" style={{ fontFamily: 'serif' }}>
            Cuatro Reinos
          </h1>
          <div className="text-6xl mt-4">🏰</div>
        </div>

        {/* Welcome Card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
            ⚔️ ¡Bienvenido, Aprendiz! ⚔️
          </h2>

          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ¿Cómo te llamas?
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Escribe tu nombre..."
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-indigo-500 focus:outline-none text-lg"
              maxLength={20}
            />
          </div>

          {/* Avatar Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Elige tu avatar
            </label>
            <div className="grid grid-cols-4 gap-3">
              {AVATARS.map((avatar) => (
                <button
                  key={avatar}
                  onClick={() => setSelectedAvatar(avatar)}
                  className={`
                    text-4xl p-3 rounded-xl transition-all duration-200
                    ${selectedAvatar === avatar
                      ? 'bg-indigo-100 border-4 border-indigo-500 scale-110'
                      : 'bg-gray-50 border-2 border-gray-200 hover:border-indigo-300'
                    }
                  `}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <button
            onClick={handleStart}
            disabled={!name.trim()}
            className={`
              w-full py-4 rounded-xl text-xl font-bold text-white transition-all duration-300
              ${name.trim()
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:scale-105 shadow-lg'
                : 'bg-gray-300 cursor-not-allowed'
              }
            `}
          >
            🎮 ¡Comenzar Aventura!
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center text-white/80 text-sm">
          <p>Aprende matemáticas mientras exploras los reinos</p>
          <p className="mt-2">⚡➕➖✖️➗</p>
        </div>
      </div>
    </div>
  );
};
