import React from 'react';
import { TargetCoupleDossier } from '../data';
import { ShieldAlert, MapPin, DollarSign, AlertTriangle, UserX, Baby, Home, Eye } from 'lucide-react';

interface TargetCoupleProfileProps {
  dossier: TargetCoupleDossier;
}

// Robust static asset resolution using Vite's native URL constructor
const idLudinImg = new URL('../images/id ludin.jpeg', import.meta.url).href;
const familyHusbandImg = new URL('../images/family_husband.jpeg', import.meta.url).href;
const domicilio1Img = new URL('../images/Domicilio1.jpeg', import.meta.url).href;
const domicilio2Img = new URL('../images/Domicilio2.jpeg', import.meta.url).href;

export default function TargetCoupleProfile({ dossier }: TargetCoupleProfileProps) {
  return (
    <div className="space-y-6">
      
      {/* Report & Upcoming Publication Alert Ribbon */}
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-5 flex flex-col md:flex-row items-start gap-4 shadow-xs">
        <div className="bg-red-600 text-white p-3 rounded-md shrink-0">
          <Eye className="h-6 w-6 animate-pulse" />
        </div>
        <div className="space-y-1">
          <span className="text-[10px] font-mono tracking-widest text-red-700 font-bold uppercase block">
            AVISO EDITORIAL IMPORTANTE
          </span>
          <h3 className="text-sm font-bold text-zinc-900">
            Reportaje de Investigación Próximo a Publicarse
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Se está documentando activamente con las familias afectadas y los datos proporcionados un reportaje exhaustivo que será puesto a la luz pública en los próximos días. Este expediente sirve como recopilación pública de evidencias para alertar a la comunidad hispana en tiempo real.
          </p>
        </div>
      </div>

      {/* Main Sindicados Profile Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Principal Accused - Ludin Imirsis */}
        <div className="bg-white border border-zinc-200 rounded-lg p-5 flex flex-col justify-between shadow-xs">
          <div>
            <span className="text-[9px] font-mono tracking-wider text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded font-bold uppercase">
              Sindicada Principal
            </span>
            <h3 className="text-lg font-black text-zinc-900 mt-2 tracking-tight">{dossier.womanName}</h3>
            <p className="text-[10px] font-mono text-zinc-500 mt-1 bg-zinc-50 border border-zinc-150 px-2 py-0.5 rounded inline-block">
              {dossier.womanId}
            </p>

            {/* REAL ID Photo Display */}
            <div className="my-4 space-y-2">
              <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider font-bold">
                Prueba Documental: Identificación Oficial
              </span>
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50 relative group">
                <img 
                  src={idLudinImg} 
                  alt="Identificación de Ludin Imirsis Reinaldo" 
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white/95 text-zinc-700 text-[8px] text-center py-1.5 font-mono uppercase tracking-widest border-t border-zinc-200 font-bold">
                  ID ORIGINAL DE FLORIDA ADQUIRIDO
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed bg-zinc-50 p-3 rounded border border-zinc-100 font-sans">
              Ludin Imirsis es la titular de la cuenta bancaria de Bank of America y del ID oficial de Florida donde se recibieron y cobraron los fondos directos de Parole. Ofrecía contratos ficticios de reembolso inmediato para ganarse la confianza de las víctimas.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-100 text-[9px] font-mono text-red-600 flex justify-between items-center font-bold">
            <span>REGISTRO OFICIAL VERIFICADO</span>
            <span className="bg-red-50 text-red-700 px-1.5 py-0.5 rounded uppercase text-[8px]">EXPEDIENTE</span>
          </div>
        </div>

        {/* Card 2: Cómplice - Yaksiel (Marido) */}
        <div className="bg-white border border-zinc-200 rounded-lg p-5 flex flex-col justify-between shadow-xs">
          <div>
            <span className="text-[9px] font-mono tracking-wider text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded font-bold uppercase">
              Cónyuge y Co-conspirador
            </span>
            <h3 className="text-lg font-black text-zinc-900 mt-2 tracking-tight">{dossier.husbandName}</h3>
            <p className="text-[10px] font-mono text-zinc-500 mt-1 bg-zinc-50 border border-zinc-150 px-2 py-0.5 rounded inline-block">
              {dossier.husbandId}
            </p>

            {/* REAL Photo of the Husband/Family */}
            <div className="my-4 space-y-2">
              <span className="text-[9px] font-mono text-zinc-500 block uppercase tracking-wider font-bold">
                Registro Fotográfico Vinculado
              </span>
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 bg-zinc-50 relative group">
                <img 
                  src={familyHusbandImg} 
                  alt="Fotografía de Yaksiel (Cónyuge)" 
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white/95 text-zinc-700 text-[8px] text-center py-1.5 font-mono uppercase tracking-widest border-t border-zinc-200 font-bold">
                  REGISTRO FOTOGRÁFICO DE LA PAREJA
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed bg-zinc-50 p-3 rounded border border-zinc-100 font-sans">
              Es el cónyuge de Ludin Imirsis. Participa de manera directa en el esquema de captación de dinero, encargándose de interferir en llamadas con las víctimas, ampararse bajo múltiples excusas domésticas y ocultar los fondos cobrados.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-100 text-[9px] font-mono text-amber-600 flex justify-between items-center font-bold">
            <span>VÍNCULO MATRIMONIAL VERIFICADO</span>
            <span className="bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded uppercase text-[8px]">RECAUDADOR</span>
          </div>
        </div>

        {/* Card 3: Victimization & Children Shield Tactic */}
        <div className="bg-white border border-zinc-200 rounded-lg p-5 flex flex-col justify-between shadow-xs md:col-span-2 lg:col-span-1">
          <div>
            <div className="flex items-center gap-1.5 text-red-600">
              <Baby className="h-4.5 w-4.5 shrink-0" />
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold">
                Táctica de Evasión Psicológica
              </span>
            </div>
            <h3 className="text-lg font-black text-zinc-900 mt-2 leading-snug">
              Victimización y Uso de Menores
            </h3>

            <div className="my-4 bg-red-50/40 border border-red-100 p-4 rounded-lg space-y-3 font-mono text-[11px] text-zinc-700 leading-relaxed">
              <div className="border-b border-red-100 pb-1.5 mb-1 text-[9px] text-red-500 uppercase font-bold">
                Modus Operandi de Evasión:
              </div>
              <p className="font-sans text-xs text-zinc-600">
                {dossier.victimizationTactic}
              </p>
              <div className="pt-2 border-t border-red-100 text-[10px] text-red-700 font-bold">
                • Víctima filial: 3 hijos (dos niños y una niña) cuyos rostros se encuentran plenamente resguardados por la prensa independiente.
              </div>
            </div>

            <p className="text-xs text-zinc-500 italic bg-zinc-50 p-3 rounded border border-zinc-100">
              "Cada vez que se les exige devolver el dinero, mandan audios de llantos, afirman que sus hijos están hospitalizados o que carecen de comida, a pesar de haber recibido miles de dólares en efectivo."
            </p>
          </div>

          <div className="mt-4 bg-zinc-50 border border-zinc-200 p-2.5 rounded text-[10px] font-mono text-zinc-500 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-500" />
            <span>Patrón recurrente reportado en Orlando, FL.</span>
          </div>
        </div>

      </div>

      {/* Evidencia de Domicilios Reales (Addresses and facade images) */}
      <div className="bg-white border border-zinc-200 rounded-lg p-5 sm:p-6 space-y-6 shadow-xs">
        <div className="border-b border-zinc-200 pb-3 flex items-center gap-2">
          <Home className="h-5.5 w-5.5 text-red-600" />
          <h4 className="text-sm sm:text-base font-mono font-bold text-zinc-900 uppercase tracking-wider">
            Evidencia de Domicilios Operativos y Residenciales
          </h4>
        </div>

        <p className="text-xs text-zinc-600 leading-relaxed max-w-4xl font-sans">
          Las víctimas han documentado físicamente los dos domicilios que la pareja utiliza en Orlando, Florida, tanto para registrar sus identificaciones oficiales como para recibir correspondencia y efectuar cobros. A continuación se detallan las fachadas de las propiedades y sus ubicaciones exactas:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          
          {/* House 1 */}
          <div className="bg-zinc-50/50 border border-zinc-200 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[9px] font-mono text-red-600 uppercase tracking-widest block font-bold">
                Ubicación 1: Dirección de Registro ID (Fleet Cir)
              </span>
              <h5 className="text-sm font-bold text-zinc-900 mt-1">2231 Fleet Cir, Orlando, FL 32817</h5>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Esta propiedad corresponde al domicilio oficial que Ludin Imirsis Reinaldo registró ante el Departamento de Motores y Vehículos de Florida (DMV) para su ID oficial.
              </p>
            </div>

            <div className="aspect-[16/10] rounded-lg overflow-hidden border border-zinc-200 bg-white relative group">
              <img 
                src={domicilio1Img} 
                alt="Fachada del domicilio 2231 Fleet Cir, Orlando" 
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white/95 text-zinc-700 text-[8px] text-center py-2 font-mono uppercase tracking-widest border-t border-zinc-200 font-bold">
                REGISTRO FOTOGRÁFICO REAL: FLEET CIR
              </div>
            </div>
          </div>

          {/* House 2 */}
          <div className="bg-zinc-50/50 border border-zinc-200 rounded-lg p-4 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[9px] font-mono text-amber-600 uppercase tracking-widest block font-bold">
                Ubicación 2: Domicilio de Transferencias (Claret Ct)
              </span>
              <h5 className="text-sm font-bold text-zinc-900 mt-1">117 Claret Ct, Orlando, FL 32807</h5>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Residencia vinculada directamente a las transferencias bancarias de Bank of America enviadas por las víctimas y reportada como base operativa de transacciones.
              </p>
            </div>

            <div className="aspect-[16/10] rounded-lg overflow-hidden border border-zinc-200 bg-white relative group">
              <img 
                src={domicilio2Img} 
                alt="Fachada del domicilio 117 Claret Ct, Orlando" 
                className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white/95 text-zinc-700 text-[8px] text-center py-2 font-mono uppercase tracking-widest border-t border-zinc-200 font-bold">
                REGISTRO FOTOGRÁFICO REAL: CLARET CT
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Grid: Cash Delivery Details & Registered Receipts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* PHYSICAL DELIVERY POINTS */}
        <div className="bg-white border border-zinc-200 rounded-lg p-5 space-y-4 shadow-xs">
          <div className="border-b border-zinc-200 pb-3 flex items-center justify-between">
            <h4 className="text-sm font-mono font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-red-600 animate-pulse" />
              Direcciones del Caso y Cobros
            </h4>
            <span className="text-[10px] font-mono text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-150">
              {dossier.deliveryAddresses.length} Puntos de Operación
            </span>
          </div>

          <div className="space-y-3">
            {dossier.deliveryAddresses.map((addr) => (
              <div
                key={addr.id}
                className="bg-zinc-50/50 p-4 rounded border border-zinc-200 flex flex-col justify-between gap-1.5 hover:border-zinc-300 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-red-700 uppercase tracking-wider">
                    {addr.label}
                  </span>
                  <p className="text-xs text-zinc-900 font-mono bg-white px-2.5 py-1.5 rounded border border-zinc-200 mt-1 select-all font-bold">
                    {addr.address}
                  </p>
                  <p className="text-[11px] text-zinc-600 leading-normal mt-2">
                    {addr.description}
                  </p>
                </div>
                <span className="text-[9px] font-mono text-zinc-400 self-end mt-1">
                  Orlando, Florida
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LOGGED PAYMENT RECEIPTS */}
        <div className="bg-white border border-zinc-200 rounded-lg p-5 space-y-4 shadow-xs">
          <div className="border-b border-zinc-200 pb-3 flex items-center justify-between">
            <h4 className="text-sm font-mono font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-1.5">
              <DollarSign className="h-4 w-4 text-emerald-600" />
              Transferencias y Fondos Recibidos
            </h4>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-150 font-bold">
              Fraude Estimado: +${dossier.scamSumEstimated.toLocaleString()} USD
            </span>
          </div>

          <div className="space-y-3">
            {dossier.receipts.map((rec) => (
              <div
                key={rec.id}
                className="bg-zinc-50/50 p-4 rounded border border-zinc-200 flex flex-col justify-between gap-1.5 hover:border-zinc-300 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-xs font-bold text-zinc-900 font-sans">{rec.title}</h5>
                    <span className="text-sm font-mono font-bold text-emerald-600">
                      ${rec.amount.toLocaleString()} USD
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-400 block mt-0.5">
                    Fecha: {rec.date} • Destinataria: {rec.receiver}
                  </span>
                  <p className="text-[11px] text-zinc-600 leading-relaxed mt-2 bg-white p-2.5 rounded border border-zinc-150">
                    "{rec.description}"
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-zinc-200 flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white text-zinc-500 border border-zinc-200">
                    {rec.type}
                  </span>
                  <span className="text-[9px] font-mono text-red-600 font-bold uppercase">
                    ESTATUS: RETENIDO SIN REEMBOLSO
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
