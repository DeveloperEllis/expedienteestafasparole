import React from 'react';
import { ExternalLink, ShieldCheck, Globe2 } from 'lucide-react';

interface InfoFooterProps {
  onOpenVercelInfo: () => void;
}

export const InfoFooter: React.FC<InfoFooterProps> = ({ onOpenVercelInfo }) => {
  return (
    <footer className="w-full mt-12 pb-10 text-neutral-500 dark:text-neutral-400 text-xs font-mono">
      {/* Gradient divider line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 dark:via-white/20 to-transparent mb-8" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-6">
        {/* Monospace uppercase metadata pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] opacity-60 text-center">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-500 inline" />
            Evidence Hash: 8F4E2...
          </span>
          <span className="hidden sm:inline text-neutral-600 dark:text-neutral-700">•</span>
          <span>Automated Trigger: Enabled</span>
          <span className="hidden sm:inline text-neutral-600 dark:text-neutral-700">•</span>
          <span>Encrypted Cloud Storage</span>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <button
            onClick={onOpenVercelInfo}
            className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer underline decoration-dotted text-rose-500 dark:text-rose-400"
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>Despliegue Vercel Listo</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

