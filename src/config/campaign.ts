// Fechas de la campaña. El contador empieza en 0 en CAMPAIGN_START
// y llega a TARGET_REACH en CAMPAIGN_END. Cambia estas fechas para una campaña nueva.
// Horas en UTC: 21:55Z = 4:55 p. m. en Miami; 04:59:59Z = 11:59:59 p. m. del día anterior en Miami.
export const CAMPAIGN_START = new Date('2026-11-13T21:55:00Z');
export const CAMPAIGN_END = new Date('2026-11-15T04:59:59Z');

// Alcance máximo posible según el presupuesto destinado.
export const TARGET_REACH = 180_000;
