// Global type definitions for the application

export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  bio?: string;
  badge?: string;
  status: 'online' | 'offline';
  currentSong?: string;
  mutualFriends?: number;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  image: string;
  listeners: number;
  category: 'women' | 'kids' | 'family' | 'calm';
  songs: string[];
  isLiked?: boolean;
}

export interface Room {
  id: string;
  name: string;
  host: User;
  listeners: User[];
  currentSong: string;
  playlist: Playlist;
  category: 'women' | 'kids' | 'family' | 'bedtime';
  isLive: boolean;
  createdAt: Date;
}

export interface Message {
  id: string;
  user: User;
  message: string;
  timestamp: string;
  type?: 'text' | 'emoji' | 'system';
}

export interface UserStats {
  songsPlayed: number;
  hoursListened: number;
  roomsJoined: number;
  favorites: number;
}

export interface CategoryColors {
  women: string;
  kids: string;
  family: string;
  calm: string;
  bedtime: string;
}

export type NavigationItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  path: string;
};

export type Theme = 'light' | 'dark';

export interface AppState {
  user: User | null;
  currentRoom: Room | null;
  theme: Theme;
  isPlaying: boolean;
  volume: number;
}
