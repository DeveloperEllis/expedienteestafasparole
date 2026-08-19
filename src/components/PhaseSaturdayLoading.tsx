import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { PauseCircle, Server, UploadCloud, FileText, CheckCircle2, HardDrive, AlertTriangle } from 'lucide-react';

interface PhaseSaturdayLoadingProps {
  progress?: number;
  timeLeft?: TimeLeft;
}

const UPLOADING_FILES = [
  'expediente_ludin_pelaez_2026.pdf',
  'actas_verificacion_oficial.zip',
  'sincronizacion_base_datos.sql',
  'evidencias_adjuntas_servidor.enc',
  'registros_sincronizados.dat',
  'respaldo_archivos_servidor.tar.gz'
];

export const PhaseSaturdayLoading: React.FC<PhaseSaturdayLoadingProps> = ({
  progress = 96,
}) => {
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  // Display value fixed at 96% as requested
  const displayProgress = 98;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFileIndex((prev) => (prev + 1) % UPLOADING_FILES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-8 sm:space-y-10 animate-in fade-in duration-500">
      {/* Subject Name header */}
      <div className="space-y-2">
        <span className="font-mono text-amber-500 text-xs font-semibold tracking-[0.25em] uppercase flex items-center justify-center gap-2">
          <Server className="w-3.5 h-3.5" />
          FASE DE PREPARACIÓN DE SERVIDORES
        </span>
        <h1 className="serif text-3xl sm:text-5xl font-light italic leading-tight text-neutral-900 dark:text-white">
          Ludin Imirsis Reinaldo Pelaez
        </h1>
      </div>

      {/* Main Announcement Box */}
      <div className="timer-box p-6 sm:p-10 rounded-3xl border-amber-500/30 bg-amber-500/5 max-w-2xl w-full shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-6">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

        <div className="flex flex-col items-center space-y-3">
          <div className="p-4 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500">
            <PauseCircle className="w-8 h-8 animate-pulse text-amber-500" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-neutral-900 dark:text-white">
            Página próxima a publicarse
          </h2>
          <p className="font-mono text-sm sm:text-base text-amber-600 dark:text-amber-400 font-medium tracking-wide flex items-center justify-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500 inline" />
            Subida de contenido pausada
          </p>
        </div>

        {/* Loading Progress Bar - Paused at 96% */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between items-center text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span>Sincronización de Servidores</span>
            <span className="font-bold text-amber-500">{displayProgress.toFixed(1)}%</span>
          </div>

          <div className="w-full h-4 bg-neutral-200 dark:bg-white/5 rounded-full overflow-hidden p-0.5 border border-amber-500/30 dark:border-amber-500/30 shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all duration-500"
              style={{ width: `${displayProgress}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[11px] font-mono text-neutral-500 pt-1">
            <span className="text-amber-500 font-semibold flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Subida de contenido pausada (98%)
            </span>
          </div>
        </div>

        {/* Animated File Upload Visualization (Paused state) */}
        <div className="pt-2">
          <div className="bg-neutral-900/80 dark:bg-black/60 rounded-2xl p-5 border border-amber-500/20 text-left space-y-4 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <UploadCloud className="w-4 h-4 text-amber-500" />
                <span>TRANSFERENCIA DE ARCHIVOS AL SERVIDOR</span>
              </div>
              <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/40 font-semibold">
                PAUSADA
              </span>
            </div>

            {/* Server Drop Zone */}
            <div className="relative h-28 bg-black/40 rounded-xl border border-dashed border-amber-500/30 flex flex-col items-center justify-center overflow-hidden p-3">
              {/* Server Destination Target */}
              <div className="flex items-center gap-2 text-amber-400/90 z-10 mb-2">
                <HardDrive className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-mono font-medium">Servidor Principal Cloud</span>
              </div>

              {/* Uploading Item Card - Paused State */}
              <div className="w-full max-w-sm bg-neutral-800/90 border border-amber-500/40 rounded-lg p-2.5 flex items-center justify-between shadow-lg z-10">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="p-1.5 rounded-md bg-amber-500/20 text-amber-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-mono text-neutral-200 truncate">
                      {UPLOADING_FILES[activeFileIndex]}
                    </p>
                    <p className="text-[10px] text-amber-400/90 font-mono">
                      Carga en espera en el servidor
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-12 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[96%] rounded-full" />
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                Subida de datos y evidencias
              </span>
              <span className="text-amber-400 font-semibold">
                Proceso pausado en 98%
              </span>
            </div>
          </div>
        </div>

        <div className="pt-2 text-left flex items-start gap-3 text-xs text-neutral-600 dark:text-neutral-400 font-sans">
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
            El paquete de archivos y evidencias de <strong>Ludin Imirsis Reinaldo Pelaez</strong> se encuentra pausado al 96% de su verificación técnica en el servidor.
          </p>
        </div>
      </div>
    </div>
  );
};


