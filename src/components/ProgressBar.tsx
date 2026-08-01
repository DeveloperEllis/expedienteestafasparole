import React from 'react';
import { Calendar, Hourglass, ArrowRight } from 'lucide-react';
import { formatSpanishDate } from '../utils/dateUtils';

interface ProgressBarProps {
  progressPercentage: number;
  targetDate: Date;
  isCompleted: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progressPercentage,
  targetDate,
  isCompleted,
}) => {
  return (
    <div className="w-full bg-white/80 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
          <Hourglass className="w-4 h-4 text-rose-500 animate-spin-slow" />
          <span>PROGRESO HACIA EL VIERNES</span>
        </div>
        <div className="text-xs font-mono font-bold text-rose-500 dark:text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20 self-start sm:self-auto tracking-widest">
          {isCompleted ? '100% FINALIZADO' : `${progressPercentage.toFixed(1)}%`}
        </div>
      </div>

      {/* Bar container */}
      <div className="w-full h-2.5 bg-neutral-100 dark:bg-white/5 rounded-full overflow-hidden p-0.5 border border-neutral-200 dark:border-white/10">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${
            isCompleted
              ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
              : 'bg-gradient-to-r from-amber-500 via-rose-500 to-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.4)]'
          }`}
          style={{ width: `${Math.max(progressPercentage, 2)}%` }}
        />
      </div>

      {/* Date detail */}
      <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-white/5 flex flex-wrap items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 gap-2 font-mono">
        <div className="flex items-center gap-1.5 opacity-60 uppercase tracking-widest text-[11px]">
          <Calendar className="w-3.5 h-3.5 text-rose-500" />
          <span>FECHA LÍMITE DE LIBERACIÓN:</span>
        </div>
        <div className="font-medium text-neutral-800 dark:text-neutral-200 capitalize flex items-center gap-1.5 tracking-wider">
          <span>{formatSpanishDate(targetDate)}</span>
          <ArrowRight className="w-3.5 h-3.5 text-rose-500 hidden sm:inline" />
        </div>
      </div>
    </div>
  );
};

