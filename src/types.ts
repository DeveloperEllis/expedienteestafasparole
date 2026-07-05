export interface EvidenceItem {
  id: string;
  title: string;
  type: 'chat' | 'receipt' | 'letter' | 'audio' | 'id_fake';
  description: string;
  date: string;
  previewText?: string;
  imageUrl?: string;
}

export interface Scammer {
  id: string;
  name: string;
  aliases: string[];
  photoUrl: string;
  description: string;
  scamMethods: string[];
  victimsCount: number;
  scammedAmount: number;
  status: 'Bajo Investigación' | 'Denunciado ante Autoridades' | 'Prófugo' | 'Arrestado/Procesado';
  region: string;
  evidence: EvidenceItem[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'official_announcement' | 'scam_wave' | 'legal_action';
  source?: string;
}

export interface UserTip {
  id: string;
  scammerName: string;
  description: string;
  evidenceFiles: { name: string; size: string; type: string }[];
  reporterContact?: string;
  date: string;
  anonymousCode: string;
}

export interface RedFlagCheckResult {
  riskScore: number; // 0 to 100
  level: 'Bajo' | 'Medio' | 'Alto' | 'Crítico';
  reasons: string[];
  advice: string[];
}
