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
  timestamp: string;
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
