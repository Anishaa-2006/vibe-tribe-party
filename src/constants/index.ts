// Application constants

export const APP_CONFIG = {
  name: 'MelodyCircle',
  description: 'Listen Music Together',
  version: '1.0.0',
  author: 'MelodyCircle Team',
} as const;

export const ROUTES = {
  HOME: '/',
  ROOMS: '/rooms',
  LISTENING_ROOM: '/listening-room',
  FRIENDS: '/friends',
  PROFILE: '/profile',
} as const;

export const CATEGORY_COLORS = {
  women: 'bg-primary',
  kids: 'bg-kids',
  family: 'bg-secondary',
  calm: 'bg-calm',
  bedtime: 'bg-accent',
} as const;

export const CATEGORY_GRADIENTS = {
  women: 'from-primary to-primary-glow',
  kids: 'from-kids to-secondary',
  family: 'from-secondary to-kids',
  calm: 'from-calm to-accent',
} as const;

export const ANIMATION_DELAYS = {
  fadeIn: 0.1,
  scaleIn: 0.2,
  slideUp: 0.15,
} as const;

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

export const MUSIC_CONTROLS = {
  MIN_VOLUME: 0,
  MAX_VOLUME: 100,
  DEFAULT_VOLUME: 75,
} as const;

export const CHAT_CONFIG = {
  MAX_MESSAGE_LENGTH: 500,
  TYPING_INDICATOR_DELAY: 1000,
} as const;
