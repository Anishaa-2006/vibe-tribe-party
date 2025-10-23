import React from 'react';
import { Avatar, AvatarFallback } from '@/shared/components/ui/avatar';
import { cn } from '@/shared/utils';

interface EnhancedAvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  showOnlineStatus?: boolean;
  isOnline?: boolean;
}

const EnhancedAvatar = ({ 
  name, 
  size = 'md', 
  className,
  showOnlineStatus = false,
  isOnline = false 
}: EnhancedAvatarProps) => {
  // Get first letter
  const initial = name.charAt(0).toUpperCase();
  
  // Generate consistent color based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-gradient-to-br from-pink-400 to-pink-600',
      'bg-gradient-to-br from-blue-400 to-blue-600', 
      'bg-gradient-to-br from-green-400 to-green-600',
      'bg-gradient-to-br from-purple-400 to-purple-600',
      'bg-gradient-to-br from-yellow-400 to-yellow-600',
      'bg-gradient-to-br from-red-400 to-red-600',
      'bg-gradient-to-br from-indigo-400 to-indigo-600',
      'bg-gradient-to-br from-teal-400 to-teal-600',
      'bg-gradient-to-br from-orange-400 to-orange-600',
      'bg-gradient-to-br from-cyan-400 to-cyan-600',
    ];
    
    // Use name hash to get consistent color
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-xl',
    xl: 'w-20 h-20 text-2xl',
    '2xl': 'w-32 h-32 text-5xl',
  };

  const avatarColor = getAvatarColor(name);

  return (
    <div className="relative">
      <Avatar className={cn(
        sizeClasses[size],
        'ring-2 ring-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105',
        className
      )}>
        <AvatarFallback 
          className={cn(
            avatarColor,
            'text-white font-bold shadow-inner'
          )}
        >
          {initial}
        </AvatarFallback>
      </Avatar>
      
      {/* Online status indicator */}
      {showOnlineStatus && (
        <div className={cn(
          'absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white',
          isOnline ? 'bg-green-500' : 'bg-gray-400'
        )} />
      )}
    </div>
  );
};

export default EnhancedAvatar;
