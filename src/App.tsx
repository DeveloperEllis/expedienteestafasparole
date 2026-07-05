import React, { useState } from 'react';
import { INITIAL_COUPLE_DOSSIER, TargetCoupleDossier } from './data';
import Header from './components/Header';
import TargetCoupleProfile from './components/TargetCoupleProfile';
import { Copy, Check, FileCheck, AlertOctagon, Printer } from 'lucide-react';

export default function App() {
  const dossier = INITIAL_COUPLE_DOSSIER;
  
  // Feedback copy email template states
  const [copiedComplaintText, setCopiedComplaintText] = useState(false);

  const copyToClipboard = (text: string, setCopied: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerPrint = () => {
    window.print();
  };

  // Compile complaint file content text for copy/paste
  const compileComplaintText = () => {
    return `=======================================================
INFORME DE DENUNCIA CIUDADANA - ESTAFA DE PAROLE HUMANITARIO
=======================================================
REPORTE REGISTRADO BAJO ARCHIVO EXP-2026-LY

DATOS DE LOS ACUSADOS:
-------------------------------------------------------
1. ACUSADA PRINCIPAL:
   Nombre: ${dossier.womanName}
   Identificación: ${dossier.womanId}

2. CO-CONSPIRADOR (ESPOSO / SOCIO):
   Nombre: ${dossier.husbandName}
   Identificación: ${dossier.husbandId}

TÁCTICA DE EVASIÓN PSICOLÓGICA (VICTIMIZACIÓN CON MENORES):
-------------------------------------------------------
Hijos Menores: ${dossier.childrenDetails}
Modus Operandi de Evasión:
${dossier.victimizationTactic}

DIRECCIONES DE ENTREGA FÍSICA Y OPERACIONES REPORTADAS:
-------------------------------------------------------
${dossier.deliveryAddresses.map((addr, i) => `${i + 1}. [${addr.label}] ${addr.address} (${addr.city}) - Detalle: ${addr.description}`).join('\n\n')}

RECIBOS DE PAGO Y TRANSFERENCIAS LOGRADAS (PRUEBAS ADJUNTAS):
-------------------------------------------------------
Total Documentado: Más de $${dossier.scamSumEstimated.toLocaleString()} USD de ${dossier.totalVictims} víctimas reportadas.

${dossier.receipts.map((rec, i) => `${i + 1}. [${rec.type}] ${rec.title} - Monto: $${rec.amount.toLocaleString()} USD (Fecha: ${rec.date})
   Cobrado por: ${rec.receiver}
   Detalle: ${rec.description}`).join('\n\n')}

=======================================================
INFORME EMITIDO CON FINES DE PRENSA E INVESTIGACIÓN.
DOCUMENTO APTO PARA SER SUMINISTRADO A USCIS, DHS Y LA POLICÍA LOCAL.
=======================================================`;
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-850 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      
      {/* Investigative Journalism Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="space-y-6">
          
          {/* Couple Profile Section */}
          <TargetCoupleProfile dossier={dossier} />

          {/* REPORT COMPILER & DOWNLOAD (PRINT COMPLAINT) */}
          <div className="bg-white border border-zinc-200 rounded-lg p-6 relative overflow-hidden shadow-xs">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] font-mono tracking-widest text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded font-bold uppercase">
                  HERRAMIENTA EXCLUSIVA DE DENUNCIA
                </span>
                <h3 className="text-lg font-black text-zinc-900 flex items-center gap-2 mt-1">
                  <FileCheck className="h-5 w-5 text-red-600 shrink-0" />
                  Generador de Ficha de Denuncia Oficial / PDF
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  El sistema ha compilado de forma automática toda la información verídica y documentada del expediente actual. Puedes imprimir este informe formateado o copiar el texto completo de la denuncia listo para radicar ante el Departamento de Seguridad Nacional (DHS) o la Oficina del Alguacil de Orange County (OCSO).
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 w-full lg:w-auto shrink-0">
                <button
                  onClick={() => copyToClipboard(compileComplaintText(), setCopiedComplaintText)}
                  className="flex-1 lg:flex-initial px-4 py-2.5 bg-white hover:bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-700 rounded flex items-center justify-center gap-2 transition-colors font-bold shadow-xs"
                >
                  {copiedComplaintText ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-600" />
                      <span className="text-emerald-600">¡Copiado al Portapapeles!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copiar Texto Completo</span>
                    </>
                  )}
                </button>
                <button
                  onClick={triggerPrint}
                  className="flex-1 lg:flex-initial px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-mono font-bold rounded flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Printer className="h-4 w-4" />
                  <span>Imprimir / Guardar en PDF</span>
                </button>
              </div>
            </div>

            {/* Live Report Preview Block */}
            <div className="mt-6 bg-zinc-50 border border-zinc-200 rounded p-4 max-h-[220px] overflow-y-auto font-mono text-[11px] text-zinc-700 space-y-2 select-all leading-relaxed">
              <div className="text-zinc-500 border-b border-zinc-200 pb-1.5 flex justify-between items-center text-[10px] font-bold">
                <span>VISTA PREVIA DEL INFORME EXPORTABLE (LISTO PARA COMPARTIR)</span>
                <span className="text-red-600">FORMATO LEGAL COMPATIBLE</span>
              </div>
              <pre className="whitespace-pre-wrap">{compileComplaintText()}</pre>
            </div>
          </div>

          {/* Legal Warning */}
          <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg flex gap-3 text-xs text-zinc-700">
            <AlertOctagon className="h-5 w-5 text-amber-600 shrink-0" />
            <div>
              <strong className="text-zinc-900 block font-bold mb-0.5">Nota de Reserva Legal:</strong>
              Toda la información recopilada en este expediente responde a declaraciones directas, evidencias tangibles (giros bancarios, recibos de Western Union) e identificaciones oficiales. El uso de esta información debe hacerse bajo absoluta reserva de fuente para salvaguardar la integridad de las víctimas afectadas.
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white py-8 text-xs text-zinc-500 mt-12 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold text-zinc-800">Expediente de Investigación: Caso Reinaldo-Yaksiel</p>
            <p className="mt-1">Iniciativa periodística para salvaguardar a las familias hispanas de estafas migratorias.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-[10px] font-bold">
            <span className="text-red-700 font-bold">• PROTECCIÓN DE DATOS ACTIVA</span>
            <span className="text-zinc-300">•</span>
            <span>POLÍTICA DE FUENTES EXCLUSIVAS</span>
            <span className="text-zinc-300">•</span>
            <span>PRODUCCIÓN FINAL</span>
          </div>
        </div>
      </footer>

      {/* PRINT-ONLY CSS AND VIEWPORT BLOCK */}
      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          header, footer, nav, button, input, textarea, select, form {
            display: none !important;
          }
          main {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .min-h-screen {
            min-height: auto !important;
            background-color: white !important;
            color: black !important;
          }
          /* Create a beautiful printable paper format */
          body::before {
            content: "REPORTE DE ESTAFA OFICIAL - PAROLE HUMANITARIO\\nARCHIVO EXP-2026-LY\\nEMITIDO POR PORTAL PERIODÍSTICO INDEPENDIENTE";
            display: block;
            text-align: center;
            font-family: monospace;
            font-size: 11px;
            font-weight: bold;
            border-bottom: 2px solid black;
            padding-bottom: 10px;
            margin-bottom: 20px;
          }
          pre {
            background: #f4f4f5 !important;
            color: black !important;
            border: 1px solid #ccc !important;
            padding: 15px !important;
            font-size: 11px !important;
            white-space: pre-wrap !important;
            overflow-x: visible !important;
          }
        }
      `}</style>

    </div>
  );
}
