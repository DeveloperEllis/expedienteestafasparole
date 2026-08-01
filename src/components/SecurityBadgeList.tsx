import React from 'react';
import { Database, Lock, Server, FileText, CheckCircle } from 'lucide-react';
import { SecurityStatus } from '../types';

export const SecurityBadgeList: React.FC = () => {
  const statuses: SecurityStatus[] = [
    {
      id: '1',
      label: 'Expediente y Pruebas',
      status: 'ready',
      detail: 'Documentos, capturas y respaldos consolidados.',
    },
    {
      id: '2',
      label: 'Servidor de Distribución',
      status: 'active',
      detail: 'Monitoreo continuo activo para la liberación pública.',
    },
    {
      id: '3',
      label: 'Seguridad y Cifrado',
      status: 'ready',
      detail: 'Llaves de desencriptación programadas para la hora cero.',
    },
    {
      id: '4',
      label: 'Verificación de Integridad',
      status: 'ready',
      detail: 'Hashes SHA-256 validados sin alteraciones.',
    },
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case '1':
        return <FileText className="w-4 h-4 text-rose-500" />;
      case '2':
        return <Server className="w-4 h-4 text-amber-500" />;
      case '3':
        return <Lock className="w-4 h-4 text-blue-400" />;
      default:
        return <Database className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="w-full bg-white/80 dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100 dark:border-white/5">
        <div>
          <h2 className="text-xs font-mono font-bold text-neutral-900 dark:text-white uppercase tracking-[0.2em]">
            Estado del Sistema de Evidencias
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 font-sans">
            Parámetros de seguridad previos a la liberación pública
          </p>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono bg-emerald-500/10 px-3 py-1 rounded-full text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
          VERIFICADO
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {statuses.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/5 flex items-start gap-3.5 transition-all hover:border-neutral-300 dark:hover:border-white/10"
          >
            <div className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 shrink-0 shadow-sm">
              {getIcon(item.id)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200 truncate uppercase tracking-wider">
                  {item.label}
                </h3>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20 shrink-0 tracking-wider">
                  OK
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

