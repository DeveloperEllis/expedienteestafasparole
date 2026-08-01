import React from 'react';
import { X, Check, Copy, Terminal, ExternalLink } from 'lucide-react';

interface VercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelGuideModal: React.FC<VercelGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedCmd, setCopiedCmd] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyCli = () => {
    navigator.clipboard.writeText('npm run build');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <svg className="w-6 h-6 fill-current text-black dark:text-white" viewBox="0 0 512 512">
              <path d="M256 48L512 464H0L256 48Z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
              Guía de Despliegue en Vercel
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Esta página está 100% optimizada para Vercel
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
          <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-2">
            <div className="font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">1</span>
              <span>Subir a GitHub o Exportar</span>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 pl-7">
              Exporta los archivos de este proyecto desde el menú superior de AI Studio o súbelos a tu repositorio de GitHub.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-2">
            <div className="font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">2</span>
              <span>Importar en Vercel</span>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 pl-7">
              Entra a <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-red-500 underline">vercel.com</a>, haz clic en "Add New Project" y selecciona tu repositorio.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-2">
            <div className="font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-xs">3</span>
              <span>Configuración Automática</span>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 pl-7">
              Vercel detectará automáticamente <strong>Vite + React</strong>. La reescritura de rutas ya está configurada en <code className="text-red-500 font-mono">vercel.json</code>.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold text-xs transition-colors"
          >
            <span>Ir a Vercel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
