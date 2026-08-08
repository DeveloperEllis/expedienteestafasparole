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
 * - 'saturday_loading': Before Sunday 00:00:00 (Saturday loading phase)
 * - 'sunday_roadmap': Sunday 00:00:00 onwards (Daily roadmap progress)
 */
export function getAppPhase(now: Date, targetFriday: Date): AppPhase {
  const nowMs = now.getTime();
  const fridayMs = targetFriday.getTime();
  const saturdayEndMs = fridayMs + 24 * 60 * 60 * 1000;

  if (nowMs < saturdayEndMs) {
    return 'saturday_loading';
  } else {
    return 'sunday_roadmap';
  }
}

/**
 * Saturday loading progress (0% to 100% across 24 hours of Saturday)
 */
export function getDailyProgress(now: Date = new Date()): number {
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ms = now.getMilliseconds();
  const currentSeconds = hours * 3600 + minutes * 60 + seconds + ms / 1000;
  const totalSecondsInDay = 86400;
  return Math.min(Math.max((currentSeconds / totalSecondsInDay) * 100, 0), 100);
}

export function getDailyTimeLeft(now: Date = new Date()): TimeLeft {
  const hours = 23 - now.getHours();
  const minutes = 59 - now.getMinutes();
  const seconds = 59 - now.getSeconds();
  return {
    days: 0,
    hours: Math.max(0, hours),
    minutes: Math.max(0, minutes),
    seconds: Math.max(0, seconds),
    totalMs: (hours * 3600 + minutes * 60 + seconds) * 1000,
    isCompleted: false,
  };
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
