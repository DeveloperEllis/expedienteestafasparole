import { TimeLeft, AppPhase, RoadmapStep } from '../types';

/**
 * Returns the target Friday date at 23:59:59 based on a reference date.
 */
export function getUpcomingFriday(now: Date = new Date()): Date {
  const target = new Date(now);
  const currentDay = target.getDay(); // 0 = Sun, 1 = Mon, ..., 5 = Fri, 6 = Sat

  let daysUntilFriday = 5 - currentDay;
  if (daysUntilFriday < 0) {
    daysUntilFriday += 7;
  }

  target.setDate(target.getDate() + daysUntilFriday);
  target.setHours(23, 59, 59, 999);
  return target;
}

/**
 * Determines current phase based on date:
 * - 'countdown': Before Friday 23:59:59
 * - 'saturday_loading': All day Saturday (Saturday 00:00:00 to 23:59:59)
 * - 'sunday_roadmap': Sunday 00:00:00 onwards
 */
export function getAppPhase(now: Date, targetFriday: Date): AppPhase {
  const nowMs = now.getTime();
  const fridayMs = targetFriday.getTime();
  const saturdayEndMs = fridayMs + 24 * 60 * 60 * 1000;

  if (nowMs < fridayMs) {
    return 'countdown';
  } else if (nowMs >= fridayMs && nowMs < saturdayEndMs) {
    return 'saturday_loading';
  } else {
    return 'sunday_roadmap';
  }
}

/**
 * Saturday loading progress (0% to 100% across 24 hours of Saturday)
 */
export function getSaturdayProgress(now: Date, targetFriday: Date): number {
  const startMs = targetFriday.getTime();
  const endMs = startMs + 24 * 60 * 60 * 1000;
  const nowMs = now.getTime();

  if (nowMs <= startMs) return 0;
  if (nowMs >= endMs) return 100;

  const progress = ((nowMs - startMs) / (endMs - startMs)) * 100;
  return Math.min(Math.max(progress, 0), 100);
}

/**
 * Saturday remaining time calculation
 */
export function getSaturdayTimeLeft(now: Date, targetFriday: Date): TimeLeft {
  const saturdayEndMs = targetFriday.getTime() + 24 * 60 * 60 * 1000;
  return calculateTimeLeft(new Date(saturdayEndMs), now);
}

/**
 * Calculates remaining time until target date.
 */
export function calculateTimeLeft(targetDate: Date, startDate: Date = new Date()): TimeLeft {
  const now = startDate.getTime();
  const target = targetDate.getTime();
  const diff = target - now;

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMs: 0,
      isCompleted: true,
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    totalMs: diff,
    isCompleted: false,
  };
}

/**
 * Format target date into human readable Spanish date
 */
export function formatSpanishDate(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);
}

/**
 * Default Roadmap Steps defined by user request
 */
export function getRoadmapSteps(now: Date, targetFriday: Date): {
  steps: RoadmapStep[];
  overallProgress: number;
  activeStepIndex: number;
  currentDayName: string;
} {
  const saturdayEndMs = targetFriday.getTime() + 24 * 60 * 60 * 1000;
  const msSinceSunday = Math.max(0, now.getTime() - saturdayEndMs);
  const daysSinceSunday = msSinceSunday / (24 * 60 * 60 * 1000);

  let currentDayName = 'Domingo';
  if (daysSinceSunday >= 4) currentDayName = 'Jueves';
  else if (daysSinceSunday >= 3) currentDayName = 'Miércoles';
  else if (daysSinceSunday >= 2) currentDayName = 'Martes';
  else if (daysSinceSunday >= 1) currentDayName = 'Lunes';

  // Determine status of each step strictly based on days
  const steps: RoadmapStep[] = [
    {
      id: 1,
      title: 'Página subida a internet (hosting+dominio) pero aún no pública',
      description: 'Infraestructura desplegada en servidor con acceso restringido previo a la activación.',
      targetDay: 'Domingo',
      status: daysSinceSunday >= 1 ? 'completed' : 'in_progress',
    },
    {
      id: 2,
      title: 'Preparar campaña publicitaria en redes sociales',
      description: 'Diseño de piezas, anuncios segmentados e indexación masiva para difusión.',
      targetDay: 'Lunes',
      status: daysSinceSunday >= 2 ? 'completed' : daysSinceSunday >= 1 ? 'in_progress' : 'pending',
    },
    {
      id: 3,
      title: 'Hacer reportaje final',
      description: 'Compilación periodística y digital con las evidencias recaudadas organizadas por módulos.',
      targetDay: 'Martes',
      status: daysSinceSunday >= 3 ? 'completed' : daysSinceSunday >= 2 ? 'in_progress' : 'pending',
    },
    {
      id: 4,
      title: 'Publicación de todo el contenido con campaña activa para divulgación en EEUU',
      description: 'Liberación total abierta y despliegue del flujo publicitario orientado a audiencias clave en EEUU.',
      targetDay: 'Jueves',
      status: daysSinceSunday >= 4 ? 'completed' : daysSinceSunday >= 3 ? 'in_progress' : 'pending',
    },
  ];

  let activeStepIndex = 0;
  if (daysSinceSunday >= 3) activeStepIndex = 3;
  else if (daysSinceSunday >= 2) activeStepIndex = 2;
  else if (daysSinceSunday >= 1) activeStepIndex = 1;
  else activeStepIndex = 0;

  // Overall progress score percentage
  let overallProgress = 25;
  if (daysSinceSunday >= 4) overallProgress = 100;
  else if (daysSinceSunday >= 3) overallProgress = 80;
  else if (daysSinceSunday >= 2) overallProgress = 60;
  else if (daysSinceSunday >= 1) overallProgress = 40;

  return { steps, overallProgress, activeStepIndex, currentDayName };
}
