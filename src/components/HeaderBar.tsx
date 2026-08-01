import React, { useState, useEffect } from 'react';
import { Clock, ShieldAlert, Share2, Check, Sun, Moon, Lock } from 'lucide-react';

interface HeaderBarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onShare: () => void;
  copied: boolean;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  darkMode,
  onToggleTheme,
  onShare,
  copied,
}) => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateLocalClock = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateLocalClock();
    const interval = setInterval(updateLocalClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-white/10 dark:border-white/10 bg-white/70 dark:bg-[#050505]/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left Protocol Info */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
          </div>
          <div className="flex flex-col font-mono text-[11px] leading-tight">
            <span className="font-semibold text-rose-500 dark:text-rose-400 tracking-[0.15em] uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              CONTEO REGRESIVO ACTIVO
            </span>
            <span className="opacity-50 text-[10px] hidden sm:inline-block tracking-widest text-neutral-500 dark:text-neutral-400">
              PROTOCOL: AES-256 | NODE: 481.00.PZ
            </span>
          </div>
        </div>

        {/* Center Live Clock */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 dark:bg-white/[0.03] text-xs font-mono text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-white/10 shadow-inner">
          <Clock className="w-3.5 h-3.5 text-rose-500" />
          <span className="tracking-widest">{timeStr}</span>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-neutral-800 dark:text-neutral-200 transition-all border border-neutral-300 dark:border-white/10 active:scale-95 cursor-pointer shadow-sm"
            title="Copiar enlace de la página"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copiado</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 opacity-70" />
                <span>Compartir</span>
              </>
            )}
          </button>

          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] text-neutral-800 dark:text-neutral-200 transition-all border border-neutral-300 dark:border-white/10 active:scale-95 cursor-pointer"
            title={darkMode ? 'Modo Claro' : 'Modo Oscuro'}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
          </button>
        </div>
      </div>
    </header>
  );
};

