// API service layer for data fetching and management

import { User, Playlist, Room, Message } from '@/types';

// Mock data - in a real app, these would be API calls
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Kavya Reddy',
    status: 'online',
    currentSong: 'Dancing in the Moonlight',
    mutualFriends: 12,
  },
  {
    id: '2',
    name: 'Ananya Singh',
    status: 'online',
    currentSong: 'Sunshine Day',
    mutualFriends: 8,
  },
  {
    id: '3',
    name: 'Riya Gupta',
    status: 'offline',
    mutualFriends: 15,
  },
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    title: 'Empowered & Strong',
    description: 'Uplifting anthems for powerful women',
    image: '/src/assets/playlist-women.jpg',
    listeners: 12500,
    category: 'women',
    songs: ['Rise Up', 'Stronger', 'Unstoppable'],
  },
  {
    id: '2',
    title: 'Dance Party!',
    description: 'Get moving with fun, energetic songs',
    image: '/src/assets/playlist-kids.jpg',
    listeners: 25400,
    category: 'kids',
    songs: ['Happy Together', 'Sunshine Day', 'Best Day Ever'],
  },
];

export const mockRooms: Room[] = [
  {
    id: '1',
    name: 'Kids Dance Party',
    host: mockUsers[0],
    listeners: mockUsers,
    currentSong: 'Happy Together',
    playlist: mockPlaylists[1],
    category: 'kids',
    isLive: true,
    createdAt: new Date(),
  },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    user: mockUsers[0],
    message: 'This song is amazing! 🎵',
    timestamp: '2:15 PM',
  },
  {
    id: '2',
    user: mockUsers[1],
    message: 'My daughter loves this one!',
    timestamp: '2:16 PM',
  },
];

// API service functions
export const apiService = {
  // User operations
  getUsers: async (): Promise<User[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockUsers;
  },

  getUser: async (id: string): Promise<User | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockUsers.find(user => user.id === id) || null;
  },

  // Playlist operations
  getPlaylists: async (category?: string): Promise<Playlist[]> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    if (category) {
      return mockPlaylists.filter(playlist => playlist.category === category);
    }
    return mockPlaylists;
  },

  getPlaylist: async (id: string): Promise<Playlist | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockPlaylists.find(playlist => playlist.id === id) || null;
  },

  // Room operations
  getRooms: async (): Promise<Room[]> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return mockRooms;
  },

  getRoom: async (id: string): Promise<Room | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockRooms.find(room => room.id === id) || null;
  },

  createRoom: async (roomData: Partial<Room>): Promise<Room> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const newRoom: Room = {
      id: Date.now().toString(),
      name: roomData.name || 'New Room',
      host: roomData.host || mockUsers[0],
      listeners: roomData.listeners || [],
      currentSong: roomData.currentSong || 'Loading...',
      playlist: roomData.playlist || mockPlaylists[0],
      category: roomData.category || 'family',
      isLive: true,
      createdAt: new Date(),
    };
    mockRooms.push(newRoom);
    return newRoom;
  },

  // Message operations
  getMessages: async (roomId: string): Promise<Message[]> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockMessages;
  },

  sendMessage: async (roomId: string, message: string, user: User): Promise<Message> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newMessage: Message = {
      id: Date.now().toString(),
      user,
      message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    mockMessages.push(newMessage);
    return newMessage;
  },
};
