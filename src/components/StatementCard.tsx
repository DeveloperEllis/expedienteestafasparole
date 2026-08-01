import React from 'react';
import { FileLock2, AlertOctagon, CheckCircle2 } from 'lucide-react';

interface StatementCardProps {
  isCompleted: boolean;
}

export const StatementCard: React.FC<StatementCardProps> = ({ isCompleted }) => {
  return (
    <div className="w-full bg-white/80 dark:bg-zinc-950/80 border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all relative overflow-hidden backdrop-blur-xl">
      {/* Top subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-600 to-transparent" />

      {/* Eyebrow & Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-neutral-100 dark:border-white/5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
          <FileLock2 className="w-3.5 h-3.5 text-rose-500" />
          <span>EXPEDIENTE DE PUBLICACIÓN DIGITAL</span>
        </div>

        <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-2 tracking-widest">
          <span className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-emerald-500' : 'bg-rose-500 animate-pulse'}`}></span>
          <span>ESTADO: {isCompleted ? 'FINALIZADO' : 'CONTEO_ACTIVO'}</span>
        </div>
      </div>

      {/* Subject Header with Cormorant Garamond Serif typography */}
      <div className="text-center sm:text-left space-y-2 mb-8">
        <h2 className="mono text-rose-600 dark:text-rose-500 text-xs font-semibold tracking-[0.3em] uppercase">
          Public Release Schedule
        </h2>
        <h1 className="serif text-4xl sm:text-6xl md:text-7xl font-light italic leading-tight tracking-tight text-neutral-900 dark:text-white drop-shadow-sm">
          Ludin Imirsis Reinaldo Pelaez
        </h1>
      </div>

      {/* Quote statement box */}
      <div className="timer-box p-6 sm:p-8 rounded-2xl border-neutral-200 dark:border-white/10 bg-neutral-50/80 dark:bg-white/[0.02] relative">
        <div className="flex items-start gap-4">
          <AlertOctagon className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-neutral-800 dark:text-zinc-300 font-sans italic">
              “Toda la información recaudada con pruebas será pública cuando este contador finalice.”
            </p>
            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 pt-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 inline shrink-0" />
              <span>Desencriptación y liberación automatizada programada a la hora cero.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

