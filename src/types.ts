export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isCompleted: boolean;
}

export type AppPhase = 'saturday_loading' | 'sunday_roadmap';

export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  targetDay: string;
  status: 'completed' | 'in_progress' | 'pending';
}

export interface SecurityStatus {
  id: string;
  label: string;
  status: 'active' | 'ready' | 'pending';
  detail: string;
}
