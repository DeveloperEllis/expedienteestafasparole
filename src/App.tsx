import React, { useState, useEffect, useMemo } from 'react';
import {
  getDailyProgress,
  getDailyTimeLeft,
} from './utils/dateUtils';
import { PhaseSaturdayLoading } from './components/PhaseSaturdayLoading';
import { Share2, Check, Sun, Moon, Clock, ShieldCheck } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  // Real clock state
  const [realNow, setRealNow] = useState<Date>(() => new Date());

  // Timer interval
  useEffect(() => {
    const interval = setInterval(() => {
      setRealNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Real-time daily calculations (progress advances continuously throughout the day)
  const dailyProgress = useMemo(() => {
    return getDailyProgress(realNow);
  }, [realNow]);

  const dailyTimeLeft = useMemo(() => {
    return getDailyTimeLeft(realNow);
  }, [realNow]);

  // Share link handler
  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? 'bg-[#050505] bg-mesh text-neutral-100' : 'bg-neutral-50 text-neutral-900'
      } font-sans flex flex-col justify-between p-4 sm:p-6 md:p-10 selection:bg-rose-600 selection:text-white`}
    >
      {/* Top minimal bar */}
      <header className="w-full max-w-4xl mx-auto flex items-center justify-between text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          <span>SISTEMA DE PUBLICACIÓN</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-200/60 dark:bg-white/5 hover:bg-neutral-300 dark:hover:bg-white/10 text-neutral-800 dark:text-neutral-200 transition-all border border-neutral-300 dark:border-white/10 cursor-pointer"
            title="Copiar enlace"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copiado</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartir</span>
              </>
            )}
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 sm:p-2 rounded-lg bg-neutral-200/60 dark:bg-white/5 hover:bg-neutral-300 dark:hover:bg-white/10 text-neutral-800 dark:text-neutral-200 transition-all border border-neutral-300 dark:border-white/10 cursor-pointer"
            title="Cambiar tema"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
          </button>
        </div>
      </header>

      {/* Main Container rendering the publication loading view */}
      <main className="max-w-3xl mx-auto w-full my-auto py-4 sm:py-8 flex flex-col items-center">
        <PhaseSaturdayLoading
          progress={dailyProgress}
          timeLeft={dailyTimeLeft}
        />
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-4 pt-6 text-center text-xs font-mono text-neutral-500">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-white/10 to-transparent" />
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 opacity-60 text-[11px] tracking-wider uppercase">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            Sincronización en Tiempo Real
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            Servidor Activo
          </span>
        </div>
      </footer>
    </div>
  );
}
