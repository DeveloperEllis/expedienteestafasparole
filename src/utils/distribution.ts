import { CAMPAIGN_END, CAMPAIGN_START, TARGET_REACH } from '../config/campaign';

/**
 * Estimación del alcance posible de la campaña.
 * Todo se calcula a partir de la hora actual, así que los números
 * siguen subiendo aunque se recargue la página y nunca bajan.
 */

export interface Location {
  city: string;
  region: string;
  country: string;
  flag: string;
  weight: number; // fracción del alcance total
}

// Ciudades con mayor comunidad cubana, más dos países con diáspora grande.
export const LOCATIONS: Location[] = [
  { city: 'Miami', region: 'Florida', country: 'EE. UU.', flag: '🇺🇸', weight: 0.3 },
  { city: 'Hialeah', region: 'Florida', country: 'EE. UU.', flag: '🇺🇸', weight: 0.14 },
  { city: 'Tampa', region: 'Florida', country: 'EE. UU.', flag: '🇺🇸', weight: 0.08 },
  { city: 'Orlando', region: 'Florida', country: 'EE. UU.', flag: '🇺🇸', weight: 0.06 },
  { city: 'Houston', region: 'Texas', country: 'EE. UU.', flag: '🇺🇸', weight: 0.06 },
  { city: 'Fort Lauderdale', region: 'Florida', country: 'EE. UU.', flag: '🇺🇸', weight: 0.05 },
  { city: 'Las Vegas', region: 'Nevada', country: 'EE. UU.', flag: '🇺🇸', weight: 0.05 },
  { city: 'Union City', region: 'Nueva Jersey', country: 'EE. UU.', flag: '🇺🇸', weight: 0.04 },
  { city: 'Dallas', region: 'Texas', country: 'EE. UU.', flag: '🇺🇸', weight: 0.03 },
  { city: 'Louisville', region: 'Kentucky', country: 'EE. UU.', flag: '🇺🇸', weight: 0.03 },
  { city: 'Nueva York', region: 'Nueva York', country: 'EE. UU.', flag: '🇺🇸', weight: 0.03 },
  { city: 'Los Ángeles', region: 'California', country: 'EE. UU.', flag: '🇺🇸', weight: 0.02 },
  { city: 'Madrid', region: 'España', country: 'España', flag: '🇪🇸', weight: 0.07 },
  { city: 'Ciudad de México', region: 'México', country: 'México', flag: '🇲🇽', weight: 0.04 },
];

export interface Channel {
  name: string;
  weight: number;
  color: string; // clase de Tailwind para la barra
}

export const CHANNELS: Channel[] = [
  { name: 'Facebook', weight: 0.38, color: 'bg-blue-500' },
  { name: 'WhatsApp', weight: 0.24, color: 'bg-emerald-500' },
  { name: 'Instagram', weight: 0.18, color: 'bg-pink-500' },
  { name: 'TikTok', weight: 0.14, color: 'bg-cyan-400' },
  { name: 'YouTube', weight: 0.06, color: 'bg-red-500' },
];

/** Avance de la campaña de 0 a 1. */
export function periodProgress(now: Date): number {
  const start = CAMPAIGN_START.getTime();
  const end = CAMPAIGN_END.getTime();
  return Math.min(1, Math.max(0, (now.getTime() - start) / (end - start)));
}

/**
 * Alcance posible estimado. Empieza en 0, crece rápido al principio
 * y más lento al final, siempre hacia arriba.
 */
export function totalReach(now: Date): number {
  const t = periodProgress(now);
  const eased = 1 - Math.pow(1 - t, 1.8);
  return Math.floor(TARGET_REACH * eased);
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat('es-MX').format(Math.floor(n));
}

/** Tiempo restante hasta el cierre de la campaña. */
export function timeUntilEnd(now: Date) {
  const diff = Math.max(0, CAMPAIGN_END.getTime() - now.getTime());
  return {
    hours: Math.floor(diff / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  };
}
