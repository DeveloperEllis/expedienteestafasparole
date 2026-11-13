import React, { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  Loader2,
  Megaphone,
  Users,
  Eye,
  Share2,
  MapPin,
  Globe2,
  Radio,
  Clock,
  FlaskConical,
} from 'lucide-react';
import { SUBJECT_NAME } from '../config/subject';
import {
  CHANNELS,
  LOCATIONS,
  Location,
  formatNumber,
  periodProgress,
  timeUntilEnd,
  totalReach,
} from '../utils/distribution';

interface FeedItem {
  id: number;
  location: Location;
  amount: number;
}

const pad = (n: number) => String(n).padStart(2, '0');

function pickLocation(): Location {
  // Elige una ciudad según su peso, para que el feed se parezca al reparto.
  let r = Math.random();
  for (const loc of LOCATIONS) {
    r -= loc.weight;
    if (r <= 0) return loc;
  }
  return LOCATIONS[0];
}

export const PhaseDistribution: React.FC = () => {
  // Reloj propio más rápido para que el contador se vea moviéndose.
  const [now, setNow] = useState(() => new Date());
  const [feed, setFeed] = useState<FeedItem[]>([]);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 250);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let counter = 0;
    const id = setInterval(() => {
      const location = pickLocation();
      const amount = Math.floor(15 + Math.random() * 40 * (1 + location.weight * 10));
      counter += 1;
      setFeed((prev) => [{ id: counter, location, amount }, ...prev].slice(0, 6));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const t = periodProgress(now);
  const reach = totalReach(now);
  const left = timeUntilEnd(now);

  const steps = useMemo(
    () => [
      {
        title: 'Toda la información subida',
        detail: 'Archivos verificados y almacenados en el servidor.',
        progress: 100,
      },
      {
        title: 'Cargando plan de distribución',
        detail: 'Segmentación por país, estado y ciudad.',
        progress: Math.min(99, 40 + 59 * t),
      },
      {
        title: 'Preparando campaña de redes sociales',
        detail: 'Piezas, anuncios y calendario de publicación.',
        progress: Math.min(95, 10 + 85 * t),
      },
    ],
    [t],
  );

  const countries = useMemo(() => {
    const map = new Map<string, { flag: string; weight: number }>();
    for (const loc of LOCATIONS) {
      const entry = map.get(loc.country) ?? { flag: loc.flag, weight: 0 };
      entry.weight += loc.weight;
      map.set(loc.country, entry);
    }
    return [...map.entries()].sort((a, b) => b[1].weight - a[1].weight);
  }, []);

  const stats = [
    { label: 'Personas alcanzadas', value: reach, icon: Users, color: 'text-emerald-400' },
    { label: 'Impresiones', value: reach * 2.6, icon: Eye, color: 'text-sky-400' },
    { label: 'Veces compartido', value: reach * 0.035, icon: Share2, color: 'text-pink-400' },
    { label: 'Ciudades activas', value: LOCATIONS.length, icon: MapPin, color: 'text-amber-400' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-8">
      {/* Encabezado */}
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-300">
          <FlaskConical className="w-3 h-3" />
          Maqueta · datos simulados
        </span>
        <span className="font-mono text-emerald-500 text-xs font-semibold tracking-[0.25em] uppercase flex items-center justify-center gap-2">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          Plan de distribución en curso
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-light italic leading-tight text-neutral-900 dark:text-white">
          {SUBJECT_NAME}
        </h1>
      </div>

      {/* Pasos */}
      <section className="timer-box w-full rounded-3xl p-5 sm:p-8 text-left space-y-5 shadow-2xl">
        {steps.map((step) => {
          const done = step.progress >= 100;
          return (
            <div key={step.title} className="space-y-2">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {done ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <Loader2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 animate-spin" />
                  )}
                  <div>
                    <p className="text-sm sm:text-base font-medium text-neutral-900 dark:text-white">
                      {step.title}
                      {!done && <span className="animate-pulse">…</span>}
                    </p>
                    <p className="text-xs text-neutral-500">{step.detail}</p>
                  </div>
                </div>
                <span
                  className={`font-mono text-sm font-bold ${done ? 'text-emerald-500' : 'text-amber-500'}`}
                >
                  {step.progress.toFixed(done ? 0 : 1)}%
                </span>
              </div>
              <div className="w-full h-2 bg-neutral-200 dark:bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    done
                      ? 'bg-emerald-500'
                      : 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500'
                  }`}
                  style={{ width: `${step.progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* Contador principal */}
      <section className="timer-box w-full rounded-3xl p-6 sm:p-10 border-emerald-500/30 bg-emerald-500/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400 flex items-center justify-center gap-2">
          <Megaphone className="w-4 h-4" />
          Alcance de distribución
        </p>
        <p className="mt-3 font-mono text-5xl sm:text-7xl font-bold text-neutral-900 dark:text-white tabular-nums">
          {formatNumber(reach)}
        </p>
        <p className="text-sm text-neutral-500 mt-1">personas</p>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400">
          <Clock className="w-3.5 h-3.5 text-amber-500" />
          Cierre de la campaña en
          <span className="text-amber-400 font-bold tabular-nums">
            {pad(left.hours)}:{pad(left.minutes)}:{pad(left.seconds)}
          </span>
        </div>
      </section>

      {/* Indicadores */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="timer-box rounded-2xl p-4 text-left">
            <Icon className={`w-4 h-4 ${color}`} />
            <p className="mt-2 font-mono text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tabular-nums">
              {formatNumber(value)}
            </p>
            <p className="text-[11px] text-neutral-500">{label}</p>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
        {/* Ciudades */}
        <section className="timer-box rounded-3xl p-5 space-y-3">
          <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            Alcance por ciudad
          </h3>
          <ul className="space-y-2.5">
            {LOCATIONS.map((loc) => (
              <li key={loc.city} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-800 dark:text-neutral-200">
                    {loc.flag} {loc.city}
                    <span className="text-neutral-500">, {loc.region}</span>
                  </span>
                  <span className="font-mono text-neutral-400 tabular-nums">
                    {formatNumber(reach * loc.weight)}
                  </span>
                </div>
                <div className="h-1.5 bg-neutral-200 dark:bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500/80 rounded-full"
                    style={{ width: `${(loc.weight / LOCATIONS[0].weight) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-4">
          {/* Países */}
          <section className="timer-box rounded-3xl p-5 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-sky-400" />
              Por país
            </h3>
            {countries.map(([country, { flag, weight }]) => (
              <div key={country} className="flex justify-between text-sm">
                <span className="text-neutral-800 dark:text-neutral-200">
                  {flag} {country}
                </span>
                <span className="font-mono text-neutral-400 tabular-nums">
                  {formatNumber(reach * weight)} · {(weight * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </section>

          {/* Redes */}
          <section className="timer-box rounded-3xl p-5 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-pink-400" />
              Por red social
            </h3>
            {CHANNELS.map((ch) => (
              <div key={ch.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-800 dark:text-neutral-200">{ch.name}</span>
                  <span className="font-mono text-neutral-400">{(ch.weight * 100).toFixed(0)}%</span>
                </div>
                <div className="h-1.5 bg-neutral-200 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className={`h-full ${ch.color} rounded-full`} style={{ width: `${ch.weight * 100}%` }} />
                </div>
              </div>
            ))}
          </section>

          {/* Actividad en vivo */}
          <section className="timer-box rounded-3xl p-5 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Actividad en vivo
            </h3>
            {feed.length === 0 ? (
              <p className="text-xs text-neutral-500">Esperando actividad…</p>
            ) : (
              <ul className="space-y-1.5">
                {feed.map((item) => (
                  <li key={item.id} className="flex justify-between text-xs font-mono">
                    <span className="text-neutral-300">
                      {item.location.flag} {item.location.city}
                    </span>
                    <span className="text-emerald-400">+{item.amount}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
