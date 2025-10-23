import { Heart, Baby, Home as HomeIcon } from 'lucide-react';
import { Playlist } from '@/types';
import playlistWomen from '@/assets/playlist-women.jpg';
import playlistKids from '@/assets/playlist-kids.jpg';
import playlistFamily from '@/assets/playlist-family.jpg';
import playlistBedtime from '@/assets/playlist-bedtime.jpg';

export const homeConstants = {
  icons: {
    Heart,
    Baby,
    HomeIcon,
  },
  
  womenPlaylists: [
    {
      id: '1',
      title: 'Empowered & Strong',
      description: 'Uplifting anthems for powerful women',
      image: playlistWomen,
      listeners: 12500,
      category: 'women' as const,
      songs: ['Rise Up', 'Stronger', 'Unstoppable'],
    },
    {
      id: '2',
      title: 'Calm & Centered',
      description: 'Mindfulness and relaxation for your day',
      image: playlistWomen,
      listeners: 8200,
      category: 'calm' as const,
      songs: ['Peaceful Morning', 'Meditation', 'Zen'],
    },
    {
      id: '3',
      title: 'Girls Night In',
      description: 'Fun vibes for quality time with friends',
      image: playlistWomen,
      listeners: 15300,
      category: 'women' as const,
      songs: ['Girls Night', 'Friends Forever', 'Together'],
    },
    {
      id: '4',
      title: 'Morning Energy',
      description: 'Start your day with positive vibes',
      image: playlistWomen,
      listeners: 9800,
      category: 'women' as const,
      songs: ['Good Morning', 'Energy Boost', 'New Day'],
    },
  ] as Playlist[],

  kidsPlaylists: [
    {
      id: '5',
      title: 'Dance Party!',
      description: 'Get moving with fun, energetic songs',
      image: playlistKids,
      listeners: 25400,
      category: 'kids' as const,
      songs: ['Happy Together', 'Sunshine Day', 'Best Day Ever'],
    },
    {
      id: '6',
      title: 'Bedtime Stories',
      description: 'Gentle songs for peaceful sleep',
      image: playlistBedtime,
      listeners: 18900,
      category: 'calm' as const,
      songs: ['Twinkle Little Star', 'Sweet Dreams', 'Lullaby'],
    },
    {
      id: '7',
      title: 'Learning Songs',
      description: 'Educational tunes that make learning fun',
      image: playlistKids,
      listeners: 14600,
      category: 'kids' as const,
      songs: ['ABC Song', 'Numbers', 'Colors'],
    },
    {
      id: '8',
      title: 'Sing Along!',
      description: 'Popular kids\' songs everyone knows',
      image: playlistKids,
      listeners: 31200,
      category: 'kids' as const,
      songs: ['Old MacDonald', 'Wheels on Bus', 'Itsy Bitsy Spider'],
    },
  ] as Playlist[],

  familyPlaylists: [
    {
      id: '9',
      title: 'Family Adventure',
      description: 'Fun songs for family adventures and outings',
      image: playlistKids, // Using kids image for family-friendly content
      listeners: 20100,
      category: 'family' as const,
      songs: ['Adventure Time', 'Family Fun', 'Together We Go'],
    },
    {
      id: '10',
      title: 'Kitchen Dance Party',
      description: 'Energetic tunes for cooking and dancing together',
      image: playlistKids, // Using kids image for family-friendly content
      listeners: 7800,
      category: 'family' as const,
      songs: ['Kitchen Dance', 'Cooking Beat', 'Family Groove'],
    },
    {
      id: '11',
      title: 'Cozy Family Time',
      description: 'Gentle songs for quiet family moments',
      image: playlistBedtime, // Using bedtime image for calm family time
      listeners: 11400,
      category: 'calm' as const,
      songs: ['Cozy Corner', 'Family Hug', 'Quiet Together'],
    },
  ] as Playlist[],
};
