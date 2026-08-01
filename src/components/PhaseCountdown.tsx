import React from 'react';
import { TimeLeft } from '../types';
import { AlertOctagon } from 'lucide-react';

interface PhaseCountdownProps {
  timeLeft: TimeLeft;
}

export const PhaseCountdown: React.FC<PhaseCountdownProps> = ({ timeLeft }) => {
  const formattedDays = String(timeLeft.days).padStart(2, '0');
  const formattedHours = String(timeLeft.hours).padStart(2, '0');
  const formattedMinutes = String(timeLeft.minutes).padStart(2, '0');
  const formattedSeconds = String(timeLeft.seconds).padStart(2, '0');

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-8 sm:space-y-12">
      {/* Name Title */}
      <div className="space-y-3">
        <span className="font-mono text-rose-500 text-xs font-semibold tracking-[0.3em] uppercase">
          Publicación Programada
        </span>
        <h1 className="serif text-4xl sm:text-6xl md:text-7xl font-light italic leading-tight tracking-tight text-neutral-900 dark:text-white drop-shadow-sm">
          Ludin Imirsis Reinaldo Pelaez
        </h1>
      </div>

      {/* Big Countdown Display */}
      <div className="w-full py-4 sm:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
          {/* Days */}
          <div className="timer-box p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center border-neutral-200 dark:border-white/10 shadow-xl">
            <span className="text-4xl sm:text-6xl md:text-7xl font-extralight font-mono glow-rose text-rose-500 dark:text-white">
              {formattedDays}
            </span>
            <span className="text-[10px] sm:text-xs font-mono opacity-50 mt-2 uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
              Días
            </span>
          </div>

          {/* Hours */}
          <div className="timer-box p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center border-neutral-200 dark:border-white/10 shadow-xl">
            <span className="text-4xl sm:text-6xl md:text-7xl font-extralight font-mono glow-rose text-rose-500 dark:text-white">
              {formattedHours}
            </span>
            <span className="text-[10px] sm:text-xs font-mono opacity-50 mt-2 uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
              Horas
            </span>
          </div>

          {/* Minutes */}
          <div className="timer-box p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center border-neutral-200 dark:border-white/10 shadow-xl">
            <span className="text-4xl sm:text-6xl md:text-7xl font-extralight font-mono glow-rose text-rose-500 dark:text-white">
              {formattedMinutes}
            </span>
            <span className="text-[10px] sm:text-xs font-mono opacity-50 mt-2 uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
              Minutos
            </span>
          </div>

          {/* Seconds */}
          <div className="timer-box p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center border-neutral-200 dark:border-white/10 shadow-xl">
            <span className="text-4xl sm:text-6xl md:text-7xl font-extralight font-mono glow-rose text-rose-500 dark:text-white">
              {formattedSeconds}
            </span>
            <span className="text-[10px] sm:text-xs font-mono opacity-50 mt-2 uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
              Segundos
            </span>
          </div>
        </div>
      </div>

      {/* Information Statement */}
      <div className="timer-box p-6 sm:p-8 rounded-2xl border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] max-w-2xl w-full shadow-2xl backdrop-blur-md">
        <div className="flex items-start gap-4 text-left">
          <AlertOctagon className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-neutral-800 dark:text-zinc-300 font-sans italic">
            “Toda la información recaudada con pruebas será pública cuando este contador finalice.”
          </p>
        </div>
      </div>
    </div>
  );
};
