// Profile picture utility functions

export interface ProfilePicture {
  name: string;
  filename: string;
  fallbackInitial: string;
}

// Profile picture mappings
export const profilePictures: Record<string, ProfilePicture> = {
  'Priya Sharma': {
    name: 'Priya Sharma',
    filename: 'priya-sharma.jpg',
    fallbackInitial: 'P'
  },
  'Kavya Reddy': {
    name: 'Kavya Reddy',
    filename: 'kavya-reddy.jpg',
    fallbackInitial: 'K'
  },
  'Ananya Singh': {
    name: 'Ananya Singh',
    filename: 'ananya-singh.jpg',
    fallbackInitial: 'A'
  },
  'Riya Gupta': {
    name: 'Riya Gupta',
    filename: 'riya-gupta.jpg',
    fallbackInitial: 'R'
  },
  'Sneha Kumar': {
    name: 'Sneha Kumar',
    filename: 'sneha-kumar.jpg',
    fallbackInitial: 'S'
  },
  'Ojasvi Joshi': {
    name: 'Ojasvi Joshi',
    filename: 'ojasvi-joshi.jpg',
    fallbackInitial: 'O'
  },
  'Aadhya Verma': {
    name: 'Aadhya Verma',
    filename: 'aadhya-verma.jpg',
    fallbackInitial: 'A'
  },
  'Ishita Agarwal': {
    name: 'Ishita Agarwal',
    filename: 'ishita-agarwal.jpg',
    fallbackInitial: 'I'
  },
  'Meera Nair': {
    name: 'Meera Nair',
    filename: 'meera-nair.jpg',
    fallbackInitial: 'M'
  },
  // Short names for listening room and rooms
  'Priya': {
    name: 'Priya',
    filename: 'priya-sharma.jpg',
    fallbackInitial: 'P'
  },
  'Kavya': {
    name: 'Kavya',
    filename: 'kavya-reddy.jpg',
    fallbackInitial: 'K'
  },
  'Ananya': {
    name: 'Ananya',
    filename: 'ananya-singh.jpg',
    fallbackInitial: 'A'
  },
  'Riya': {
    name: 'Riya',
    filename: 'riya-gupta.jpg',
    fallbackInitial: 'R'
  }
};

// Get profile picture path
export const getProfilePicturePath = (name: string): string => {
  const profile = profilePictures[name];
  if (!profile) {
    return '';
  }
  return `/src/assets/profile-pictures/${profile.filename}`;
};

// Get fallback initial
export const getProfileInitial = (name: string): string => {
  const profile = profilePictures[name];
  return profile ? profile.fallbackInitial : name.charAt(0).toUpperCase();
};

// Check if profile picture exists
export const hasProfilePicture = (name: string): boolean => {
  return name in profilePictures;
};
