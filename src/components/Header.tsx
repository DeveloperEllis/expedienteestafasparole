import { AlertTriangle, ShieldAlert } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white text-zinc-900 shadow-xs">
      {/* Top Banner: Warning context - High visibility red and white */}
      <div className="bg-red-700 px-4 py-2 text-center text-[11px] sm:text-xs font-mono font-bold text-white flex items-center justify-center gap-2">
        <AlertTriangle className="h-4 w-4 animate-pulse shrink-0" />
        <span>ARCHIVO DE INVESTIGACIÓN ALERTA: EXPEDIENTE DE FRAUDE EN EL PAROLE HUMANITARIO</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          {/* Logo & Branding */}
          <div className="flex items-start gap-3">
            <div className="bg-red-50 p-2.5 rounded border border-red-200 text-red-600 shrink-0">
              <ShieldAlert className="h-8 w-8" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono tracking-wider text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded font-bold uppercase">
                  CASO EN CURSO • EXP-2026-LY
                </span>
                <span className="text-[10px] font-mono text-zinc-400">Actualizado Hoy</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-sans font-black tracking-tight text-zinc-900 mt-1">
                Expediente Reinaldo-Yaksiel
              </h1>
              <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-normal">
                Investigación periodística e independiente sobre cobros de patrocinio ilegal en Orlando, FL.
              </p>
            </div>
          </div>

          {/* Metadata counters */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono bg-zinc-50 border border-zinc-200 p-3 rounded divide-x divide-zinc-200 self-start lg:self-center w-full lg:w-auto">
            <div className="flex-1 lg:flex-initial pr-3 text-center min-w-[80px]">
              <span className="block text-zinc-400 uppercase text-[9px]">Objetivos</span>
              <span className="text-sm font-black text-red-700">1 Pareja</span>
            </div>
            <div className="flex-1 lg:flex-initial px-3 text-center min-w-[100px]">
              <span className="block text-zinc-400 uppercase text-[9px]">Afectados</span>
              <span className="text-sm font-black text-amber-600">5+ Familias</span>
            </div>
            <div className="flex-1 lg:flex-initial pl-3 text-center min-w-[120px]">
              <span className="block text-zinc-400 uppercase text-[9px]">Total Estimado</span>
              <span className="text-sm font-black text-zinc-800">+$30,000 USD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
