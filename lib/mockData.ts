export type Upload = {
  id: string;
  title: string;
  description: string;
  type: 'photo' | 'video' | 'document';
  size: string;
  timestamp: string;
};

export const uploads: Upload[] = [
  {
    id: '1',
    title: 'Manila Flood Photo',
    description: 'Shared by Community',
    type: 'photo',
    size: '2.5 MB',
    timestamp: '1h ago',
  },
  {
    id: '2',
    title: 'Cebu Contract PDF',
    description: 'Public Tip',
    type: 'document',
    size: '1.8 MB',
    timestamp: '3h ago',
  },
  {
    id: '3',
    title: 'Quezon City Video',
    description: 'Verified by Users',
    type: 'video',
    size: '4.2 MB',
    timestamp: '1d ago',
  },
];

export type ChatMessage = {
  id: string;
  username: string;
  message: string;
  timestamp: string | Date;
  reported?: boolean;
};

export const chatMessages: ChatMessage[] = [
  {
    id: '1',
    username: 'PinoyFighter123',
    message: 'Let’s expose the truth! #Floodgate',
    timestamp: 'Just now',
  },
  {
    id: '2',
    username: 'JusticeSeekerPH',
    message: 'Join the rally at Luneta! #TrillionPesoMarch',
    timestamp: '5m ago',
  },
  {
    id: '3',
    username: 'AnonTipster',
    message: 'Check the latest evidence on the 3.3T scandal!',
    timestamp: '10m ago',
  },
];

export type CorruptionSite = {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  severity: number; // 1-10, for heatmap intensity
  description: string;
};

export const corruptionSites: CorruptionSite[] = [
  {
    id: '1',
    name: 'Manila Flood Control Project',
    location: { lat: 14.5896, lng: 120.9751 },
    severity: 8,
    description: 'Suspected overpricing in flood control funds.',
  },
  {
    id: '2',
    name: 'Cebu Infrastructure Contract',
    location: { lat: 10.3157, lng: 123.8854 },
    severity: 6,
    description: 'Unverified contractor payments.',
  },
  {
    id: '3',
    name: 'Davao Public Works',
    location: { lat: 7.1907, lng: 125.4553 },
    severity: 7,
    description: 'Alleged misuse of 3.3T funds.',
  },
];
