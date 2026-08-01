import React from 'react';

interface CountdownCardProps {
  value: number;
  label: string;
  sublabel?: string;
  isUrgent?: boolean;
}

export const CountdownCard: React.FC<CountdownCardProps> = ({
  value,
  label,
  sublabel,
  isUrgent = false,
}) => {
  const formattedValue = value < 10 ? `0${value}` : `${value}`;

  return (
    <div className="flex flex-col items-center group w-full">
      <div
        className={`w-full aspect-[4/3] sm:aspect-square flex flex-col items-center justify-center rounded-2xl border transition-all duration-300 shadow-2xl relative overflow-hidden backdrop-blur-md ${
          isUrgent
            ? 'bg-rose-950/20 dark:bg-rose-950/30 border-rose-500/40 text-rose-500 shadow-rose-950/20'
            : 'bg-white/80 dark:bg-white/[0.02] border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white shadow-black/40'
        }`}
      >
        {/* Subtle top reflection */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 dark:from-white/5 to-transparent pointer-events-none" />

        {/* Number value with glow */}
        <span
          className={`text-4xl sm:text-6xl md:text-7xl font-extralight font-mono tracking-tight leading-none select-none transition-transform duration-300 group-hover:scale-105 ${
            isUrgent ? 'glow-rose text-rose-500' : 'glow-rose text-white'
          }`}
        >
          {formattedValue}
        </span>

        {sublabel && (
          <span className="text-[10px] sm:text-xs text-neutral-400 dark:text-neutral-500 mt-2 uppercase tracking-[0.2em] font-mono opacity-50">
            {sublabel}
          </span>
        )}
      </div>

      {/* Main Label under card */}
      <span className="mt-2.5 text-[11px] sm:text-xs font-mono font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
        {label}
      </span>
    </div>
  );
};

