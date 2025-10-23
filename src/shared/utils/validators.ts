// Validation utility functions

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

export const isValidMessage = (message: string): boolean => {
  return message.trim().length > 0 && message.trim().length <= 500;
};

export const isValidRoomName = (name: string): boolean => {
  return name.trim().length >= 3 && name.trim().length <= 50;
};

export const isValidBio = (bio: string): boolean => {
  return bio.length <= 200;
};

export const validateUserInput = (input: {
  name?: string;
  email?: string;
  bio?: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (input.name && !isValidName(input.name)) {
    errors.push('Name must be between 2 and 50 characters');
  }
  
  if (input.email && !isValidEmail(input.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (input.bio && !isValidBio(input.bio)) {
    errors.push('Bio must be 200 characters or less');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};
