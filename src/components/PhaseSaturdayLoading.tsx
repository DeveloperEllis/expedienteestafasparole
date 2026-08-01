import React from 'react';
import { TimeLeft } from '../types';
import { Loader2, Server, Clock, AlertCircle } from 'lucide-react';

interface PhaseSaturdayLoadingProps {
  progress: number; // 0 to 100
  timeLeft: TimeLeft;
}

export const PhaseSaturdayLoading: React.FC<PhaseSaturdayLoadingProps> = ({
  progress,
  timeLeft,
}) => {
  const formattedHours = String(timeLeft.hours).padStart(2, '0');
  const formattedMinutes = String(timeLeft.minutes).padStart(2, '0');
  const formattedSeconds = String(timeLeft.seconds).padStart(2, '0');

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-8 sm:space-y-10 animate-in fade-in duration-500">
      {/* Subject Name header */}
      <div className="space-y-2">
        <span className="font-mono text-amber-500 text-xs font-semibold tracking-[0.25em] uppercase flex items-center justify-center gap-2">
          <Server className="w-3.5 h-3.5 animate-pulse" />
          SÁBADO — FASE DE PREPARACIÓN
        </span>
        <h1 className="serif text-3xl sm:text-5xl font-light italic leading-tight text-neutral-900 dark:text-white">
          Ludin Imirsis Reinaldo Pelaez
        </h1>
      </div>

      {/* Main Announcement Box */}
      <div className="timer-box p-8 sm:p-12 rounded-3xl border-amber-500/30 bg-amber-500/5 max-w-2xl w-full shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-6">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 animate-pulse" />

        <div className="flex flex-col items-center space-y-3">
          <div className="p-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 animate-spin-slow">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-900 dark:text-white">
            Página próxima a publicarse
          </h2>
          <p className="font-mono text-sm sm:text-base text-amber-600 dark:text-amber-400 font-medium tracking-wide">
            Cargando contenido...
          </p>
        </div>

        {/* Dynamic Loading Progress Bar */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between items-center text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span>Sincronización de Servidores</span>
            <span className="font-bold text-amber-500">{progress.toFixed(1)}%</span>
          </div>

          <div className="w-full h-4 bg-neutral-200 dark:bg-white/5 rounded-full overflow-hidden p-0.5 border border-neutral-300 dark:border-white/10 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 transition-all duration-1000 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
              style={{ width: `${Math.max(progress, 3)}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[11px] font-mono text-neutral-500 pt-1">
            <span>Inicio Sábado 00:00</span>
            <span className="flex items-center gap-1 text-neutral-400">
              <Clock className="w-3 h-3 text-amber-500 inline" />
              Tiempo para Domingo: {formattedHours}:{formattedMinutes}:{formattedSeconds}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-amber-500/10 text-left flex items-start gap-3 text-xs text-neutral-600 dark:text-neutral-400 font-sans">
          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <p>
            El paquete de archivos y evidencias de <strong>Ludin Imirsis Reinaldo Pelaez</strong> se encuentra en proceso de carga y verificación técnica en el servidor. La publicación de la estructura iniciará al finalizar este ciclo.
          </p>
        </div>
      </div>
    </div>
  );
};
