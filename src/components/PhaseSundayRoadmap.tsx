import React from 'react';
import { RoadmapStep } from '../types';
import { CheckCircle2, Clock, Globe, Megaphone, FileText, Send, ArrowRight } from 'lucide-react';

interface PhaseSundayRoadmapProps {
  steps: RoadmapStep[];
  overallProgress: number;
  activeStepIndex: number;
  currentDayName: string;
}

export const PhaseSundayRoadmap: React.FC<PhaseSundayRoadmapProps> = ({
  steps,
  overallProgress,
  activeStepIndex,
  currentDayName,
}) => {
  const getStepIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Globe className="w-5 h-5 text-rose-500" />;
      case 2:
        return <Megaphone className="w-5 h-5 text-amber-500" />;
      case 3:
        return <FileText className="w-5 h-5 text-blue-400" />;
      case 4:
        return <Send className="w-5 h-5 text-emerald-400" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-8 animate-in fade-in duration-500">
      {/* Header Title */}
      <div className="space-y-2">
        <span className="font-mono text-emerald-500 text-xs font-semibold tracking-[0.25em] uppercase flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          CRONOGRAMA ACTIVO — DÍA DE HOY: {currentDayName.toUpperCase()}
        </span>
        <h1 className="serif text-3xl sm:text-5xl font-light italic leading-tight text-neutral-900 dark:text-white">
          Ludin Imirsis Reinaldo Pelaez
        </h1>
      </div>

      {/* Main Roadmap Container */}
      <div className="timer-box p-6 sm:p-10 rounded-3xl border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.02] max-w-2xl w-full shadow-2xl backdrop-blur-xl text-left space-y-8">
        
        {/* Overall Progress Bar */}
        <div className="space-y-2 pb-6 border-b border-neutral-200 dark:border-white/5">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
              Avance del Cronograma
            </span>
            <span className="font-bold text-emerald-500 font-mono">
              {overallProgress.toFixed(0)}% Completado
            </span>
          </div>

          <div className="w-full h-3 bg-neutral-200 dark:bg-white/5 rounded-full overflow-hidden p-0.5 border border-neutral-300 dark:border-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-1000 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {/* Timeline Items List */}
        <div className="space-y-6 relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-neutral-200 dark:bg-white/10 -z-0 hidden sm:block" />

          {steps.map((step, index) => {
            const isCurrent = index === activeStepIndex;
            const isDone = step.status === 'completed';

            return (
              <div
                key={step.id}
                className={`relative z-10 p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                  isCurrent
                    ? 'bg-rose-500/10 border-rose-500/40 shadow-lg shadow-rose-950/20'
                    : isDone
                    ? 'bg-emerald-500/5 border-emerald-500/30'
                    : 'bg-neutral-50 dark:bg-white/[0.02] border-neutral-200 dark:border-white/5 opacity-70'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-2xl border shrink-0 ${
                      isDone
                        ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                        : isCurrent
                        ? 'bg-rose-500/20 border-rose-500/40 text-rose-500 animate-pulse'
                        : 'bg-neutral-100 dark:bg-white/5 border-neutral-200 dark:border-white/10 text-neutral-400'
                    }`}
                  >
                    {getStepIcon(step.id)}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
                        Punto {step.id} • {step.targetDay}
                      </span>

                      {/* Status Pill */}
                      {isDone ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          COMPLETADO
                        </span>
                      ) : isCurrent ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 animate-pulse">
                          <Clock className="w-3 h-3" />
                          EN PROCESO
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-neutral-200 dark:bg-white/5 text-neutral-500 border border-neutral-300 dark:border-white/10">
                          PENDIENTE
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed pt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info box */}
        <div className="pt-4 border-t border-neutral-200 dark:border-white/5 text-xs font-mono text-neutral-500 flex items-center justify-between">
          <span>Actualización diaria automática</span>
          <span className="flex items-center gap-1 text-rose-500 font-bold">
            Divulgación EEUU <ArrowRight className="w-3 h-3 inline" />
          </span>
        </div>
      </div>
    </div>
  );
};
