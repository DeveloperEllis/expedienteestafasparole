import { Scammer, TimelineEvent } from './types';

// Let's declare custom interfaces to hold detailed data for our target couple
export interface TargetCoupleDossier {
  womanName: string;
  womanId: string;
  womanPhotoUrl: string;
  husbandName: string;
  husbandId: string;
  husbandPhotoUrl: string;
  childrenDetails: string;
  victimizationTactic: string;
  scamSumEstimated: number;
  totalVictims: number;
  deliveryAddresses: {
    id: string;
    label: string;
    address: string;
    description: string;
    city: string;
  }[];
  receipts: {
    id: string;
    title: string;
    amount: number;
    date: string;
    type: 'Efectivo' | 'Zelle' | 'Transferencia';
    receiver: string;
    description: string;
  }[];
}

export const INITIAL_COUPLE_DOSSIER: TargetCoupleDossier = {
  womanName: "Ludin Imirsis Reinaldo Pelaez",
  womanId: "ID Florida: R543-529-93-837-0 • DOB: 17/09/1993",
  womanPhotoUrl: "silueta_femenina",
  husbandName: "Yaksiel",
  husbandId: "Cónyuge y Cómplice Operativo",
  husbandPhotoUrl: "silueta_masculina",
  childrenDetails: "Hijos menores de edad utilizados como pretexto para victimización.",
  victimizationTactic: "Cuando las víctimas exigen la devolución del dinero tras el fracaso del proceso de Parole, la pareja utiliza excusas de 'problemas personales graves' u hospitalizaciones y enfermedades de sus hijos para dar lástima, manipular emocionalmente y evitar realizar cualquier reembolso. Llevan más de 2 años reteniendo miles de dólares prometidos bajo contrato de devolución instantánea.",
  scamSumEstimated: 30000,
  totalVictims: 5,
  deliveryAddresses: [
    {
      id: 'addr-1',
      label: 'Domicilio Registrado en ID (Fleet Cir)',
      address: '2231 Fleet Cir, Orlando, FL 32817',
      description: 'Dirección oficial que figura en la tarjeta de identificación de Florida de Ludin Imirsis. Utilizada para registrar correspondencia y coordinar envíos.',
      city: 'Orlando, Florida'
    },
    {
      id: 'addr-2',
      label: 'Domicilio Alternativo de Operaciones (Claret Ct)',
      address: '117 Claret Ct, Orlando, FL 32807',
      description: 'Residencia vinculada a las transferencias bancarias directas y envíos de giros. Reportada como la dirección de cobros y alojamiento temporal.',
      city: 'Orlando, Florida'
    }
  ],
  receipts: [
    {
      id: 'rec-1',
      title: 'Giro Western Union - Envío desde España',
      amount: 2000,
      date: '2024-12-20',
      type: 'Transferencia',
      receiver: 'Ludin Imirsis Reinaldo Pelaez',
      description: 'MTCN: 114-204-7139. Transacción de 2,144.21 EUR cobrada en efectivo ($2,000 USD) en Publix Super Markets (Rio Pinar Plaza, 409 S Chickasaw Trail, Orlando).'
    },
    {
      id: 'rec-2',
      title: 'Transferencia Bancaria Directa (Wire)',
      amount: 2900,
      date: '2025-01-21',
      type: 'Transferencia',
      receiver: 'Ludin Reinaldo (Bank of America)',
      description: 'Giro bancario enviado desde Mountain America Credit Union hacia Bank of America. Dirección del beneficiario registrada: 117 Claret Ct, Orlando, FL 32807.'
    }
  ]
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 't-01',
    date: 'Mediados de 2024',
    title: 'Captación y Promesas de Parole Humanitario',
    description: 'La pareja ofrece cupos y patrocinio legal rápido de Parole Humanitario a varias familias de inmigrantes, garantizando la devolución íntegra e inmediata si el trámite no avanza.',
    category: 'scam_wave',
    source: 'Mensajes de WhatsApp y redes'
  },
  {
    id: 't-02',
    date: 'Diciembre 2024',
    title: 'Recepción de Fondos (Giro Western Union)',
    description: 'Ludin Imirsis recibe giro de $2,000 USD enviado desde España mediante Correos y Telégrafos. Los fondos son cobrados en efectivo en el Publix de Rio Pinar Plaza.',
    category: 'scam_wave',
    source: 'Recibo WU MTCN: 114-204-7139'
  },
  {
    id: 't-03',
    date: 'Enero 2025',
    title: 'Transferencia de $2,900 USD (Wire Transfer)',
    description: 'Se realiza un envío adicional de $2,900 USD directo a la cuenta de Bank of America de Ludin Reinaldo con dirección en 117 Claret Ct para avanzar con el supuesto patrocinio de parole.',
    category: 'scam_wave',
    source: 'Comprobante Mountain America Credit Union'
  },
  {
    id: 't-04',
    date: '2025 - Presente',
    title: 'Evasión Total, Excusa de Hijos y Falta de Devolución',
    description: 'El trámite de parole no prosperó. A más de 2 años de los primeros tratos, la pareja se niega a devolver el dinero. Ante la insistencia de las víctimas, usan excusas de desgracias personales y usan fotos/audios de sus hijos para evadir la presión legal.',
    category: 'legal_action',
    source: 'Reporte de las víctimas'
  }
];

export const COMMON_RED_FLAGS = [
  {
    title: 'Garantía falsa de reembolso inmediato',
    description: 'Prometen devolver el dinero al instante si las cosas no proceden, pero una vez que reciben el dinero cortan la comunicación fluida y retienen los fondos permanentemente.'
  },
  {
    title: 'Victimización a través de menores de edad',
    description: 'Apelar constantemente a enfermedades de los hijos, problemas médicos infantiles o desgracias familiares extremas cada vez que se les exige una cuenta de cobro o devolución.'
  },
  {
    title: 'Múltiples direcciones de residencia reportadas',
    description: 'Uso indistinto de múltiples domicilios (2231 Fleet Cir y 117 Claret Ct) en identificaciones y cuentas bancarias, dificultando la ubicación legal y el envío de notificaciones de reclamo.'
  }
];

export const OFFICIAL_REPORTING_LINKS = [
  {
    name: 'USCIS - Reporte de Estafas de Inmigración',
    url: 'https://www.uscis.gov/es/scams',
    description: 'Portal oficial del gobierno de EE.UU. para reportar fraudes cometidos por falsos patrocinadores o gestores sin licencia.'
  },
  {
    name: 'Orange County Sheriff\'s Office (Orlando, FL)',
    url: 'https://www.ocso.com/',
    description: 'Oficina del Alguacil del Condado de Orange para reportar estafas financieras, robos y actividades ilícitas dentro de Orlando, Florida.'
  },
  {
    name: 'Federal Trade Commission (FTC)',
    url: 'https://reportefraude.ftc.gov/',
    description: 'La comisión de comercio de EE.UU. recibe denuncias de fraude financiero y estafas telefónicas o en línea.'
  }
];
