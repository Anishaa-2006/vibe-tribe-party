// Centralized state management
import { create } from 'zustand';
import { User, Room, Playlist, Message } from '@/types';

interface AppState {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Room state
  currentRoom: Room | null;
  setCurrentRoom: (room: Room | null) => void;
  
  // Music state
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  
  // UI state
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  
  // Chat state
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
  
  // Playlist state
  likedPlaylists: string[];
  toggleLike: (playlistId: string) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  // User state
  user: null,
  setUser: (user) => set({ user }),
  
  // Room state
  currentRoom: null,
  setCurrentRoom: (room) => set({ currentRoom: room }),
  
  // Music state
  isPlaying: false,
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  volume: 75,
  setVolume: (volume) => set({ volume: Math.max(0, Math.min(100, volume)) }),
  
  // UI state
  theme: 'light',
  setTheme: (theme) => set({ theme }),
  
  // Chat state
  messages: [],
  addMessage: (message) => set((state) => ({ 
    messages: [...state.messages, message] 
  })),
  clearMessages: () => set({ messages: [] }),
  
  // Playlist state
  likedPlaylists: [],
  toggleLike: (playlistId) => set((state) => ({
    likedPlaylists: state.likedPlaylists.includes(playlistId)
      ? state.likedPlaylists.filter(id => id !== playlistId)
      : [...state.likedPlaylists, playlistId]
  })),
}));
