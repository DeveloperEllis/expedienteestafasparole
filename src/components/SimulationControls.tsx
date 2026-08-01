import React from 'react';
import { Eye, Play, Sparkles } from 'lucide-react';

export type SimulationMode =
  | 'realtime'
  | 'phase_friday'
  | 'phase_saturday'
  | 'phase_sunday_p1'
  | 'phase_monday_p2'
  | 'phase_tuesday_p3'
  | 'phase_thursday_p4';

interface SimulationControlsProps {
  currentMode: SimulationMode;
  onSelectMode: (mode: SimulationMode) => void;
}

export const SimulationControls: React.FC<SimulationControlsProps> = ({
  currentMode,
  onSelectMode,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto mb-6 p-2.5 rounded-2xl bg-neutral-100 dark:bg-white/[0.03] border border-neutral-300 dark:border-white/10 shadow-lg backdrop-blur-md">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-neutral-200 dark:border-white/5 mb-2 text-[11px] font-mono text-neutral-500">
        <span className="flex items-center gap-1.5 font-bold text-rose-500 uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          Simulador de Fases y Progreso Diario
        </span>
        <span className="hidden sm:inline">Selecciona un día para probar la vista previa</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-1.5">
        <button
          onClick={() => onSelectMode('realtime')}
          className={`px-2 py-2 rounded-xl text-xs font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer border ${
            currentMode === 'realtime'
              ? 'bg-rose-600 text-white border-rose-500 shadow-md font-bold'
              : 'bg-white/50 dark:bg-white/[0.02] text-neutral-700 dark:text-neutral-300 border-transparent hover:bg-neutral-200 dark:hover:bg-white/5'
          }`}
        >
          <span className="flex items-center gap-1 text-[11px]">
            <Play className="w-3 h-3" /> Real
          </span>
          <span className="text-[9px] opacity-70">Automático</span>
        </button>

        <button
          onClick={() => onSelectMode('phase_friday')}
          className={`px-2 py-2 rounded-xl text-xs font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer border ${
            currentMode === 'phase_friday'
              ? 'bg-rose-600 text-white border-rose-500 shadow-md font-bold'
              : 'bg-white/50 dark:bg-white/[0.02] text-neutral-700 dark:text-neutral-300 border-transparent hover:bg-neutral-200 dark:hover:bg-white/5'
          }`}
        >
          <span className="flex items-center gap-1 text-[11px]">
            <Eye className="w-3 h-3" /> Viernes
          </span>
          <span className="text-[9px] opacity-70">Contador</span>
        </button>

        <button
          onClick={() => onSelectMode('phase_saturday')}
          className={`px-2 py-2 rounded-xl text-xs font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer border ${
            currentMode === 'phase_saturday'
              ? 'bg-rose-600 text-white border-rose-500 shadow-md font-bold'
              : 'bg-white/50 dark:bg-white/[0.02] text-neutral-700 dark:text-neutral-300 border-transparent hover:bg-neutral-200 dark:hover:bg-white/5'
          }`}
        >
          <span className="flex items-center gap-1 text-[11px]">
            <Eye className="w-3 h-3" /> Sábado
          </span>
          <span className="text-[9px] opacity-70">Cargando</span>
        </button>

        <button
          onClick={() => onSelectMode('phase_sunday_p1')}
          className={`px-2 py-2 rounded-xl text-xs font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer border ${
            currentMode === 'phase_sunday_p1'
              ? 'bg-rose-600 text-white border-rose-500 shadow-md font-bold'
              : 'bg-white/50 dark:bg-white/[0.02] text-neutral-700 dark:text-neutral-300 border-transparent hover:bg-neutral-200 dark:hover:bg-white/5'
          }`}
        >
          <span className="flex items-center gap-1 text-[11px]">
            <Eye className="w-3 h-3" /> Domingo
          </span>
          <span className="text-[9px] opacity-70">Punto 1</span>
        </button>

        <button
          onClick={() => onSelectMode('phase_monday_p2')}
          className={`px-2 py-2 rounded-xl text-xs font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer border ${
            currentMode === 'phase_monday_p2'
              ? 'bg-rose-600 text-white border-rose-500 shadow-md font-bold'
              : 'bg-white/50 dark:bg-white/[0.02] text-neutral-700 dark:text-neutral-300 border-transparent hover:bg-neutral-200 dark:hover:bg-white/5'
          }`}
        >
          <span className="flex items-center gap-1 text-[11px]">
            <Eye className="w-3 h-3" /> Lunes
          </span>
          <span className="text-[9px] opacity-70">Punto 2</span>
        </button>

        <button
          onClick={() => onSelectMode('phase_tuesday_p3')}
          className={`px-2 py-2 rounded-xl text-xs font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer border ${
            currentMode === 'phase_tuesday_p3'
              ? 'bg-rose-600 text-white border-rose-500 shadow-md font-bold'
              : 'bg-white/50 dark:bg-white/[0.02] text-neutral-700 dark:text-neutral-300 border-transparent hover:bg-neutral-200 dark:hover:bg-white/5'
          }`}
        >
          <span className="flex items-center gap-1 text-[11px]">
            <Eye className="w-3 h-3" /> Martes
          </span>
          <span className="text-[9px] opacity-70">Punto 3</span>
        </button>

        <button
          onClick={() => onSelectMode('phase_thursday_p4')}
          className={`px-2 py-2 rounded-xl text-xs font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer border ${
            currentMode === 'phase_thursday_p4'
              ? 'bg-rose-600 text-white border-rose-500 shadow-md font-bold'
              : 'bg-white/50 dark:bg-white/[0.02] text-neutral-700 dark:text-neutral-300 border-transparent hover:bg-neutral-200 dark:hover:bg-white/5'
          }`}
        >
          <span className="flex items-center gap-1 text-[11px]">
            <Eye className="w-3 h-3" /> Jueves
          </span>
          <span className="text-[9px] opacity-70">Punto 4</span>
        </button>
      </div>
    </div>
  );
};
