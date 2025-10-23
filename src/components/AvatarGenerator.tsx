import React from 'react';
import { Avatar, AvatarFallback } from '@/shared/components/ui/avatar';
import { cn } from '@/shared/utils';

interface AvatarGeneratorProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'default' | 'colorful' | 'gradient' | 'pattern';
  className?: string;
  showOnlineStatus?: boolean;
  isOnline?: boolean;
}

const AvatarGenerator = ({ 
  name, 
  size = 'md', 
  variant = 'gradient',
  className,
  showOnlineStatus = false,
  isOnline = false 
}: AvatarGeneratorProps) => {
  // Get first letter
  const initial = name.charAt(0).toUpperCase();
  
  // Generate consistent color scheme based on name
  const getColorScheme = (name: string) => {
    const schemes = [
      // Pink variations
      { bg: 'from-pink-400 to-pink-600', text: 'text-white', ring: 'ring-pink-200' },
      { bg: 'from-rose-400 to-rose-600', text: 'text-white', ring: 'ring-rose-200' },
      
      // Blue variations  
      { bg: 'from-blue-400 to-blue-600', text: 'text-white', ring: 'ring-blue-200' },
      { bg: 'from-sky-400 to-sky-600', text: 'text-white', ring: 'ring-sky-200' },
      { bg: 'from-indigo-400 to-indigo-600', text: 'text-white', ring: 'ring-indigo-200' },
      
      // Green variations
      { bg: 'from-green-400 to-green-600', text: 'text-white', ring: 'ring-green-200' },
      { bg: 'from-emerald-400 to-emerald-600', text: 'text-white', ring: 'ring-emerald-200' },
      { bg: 'from-teal-400 to-teal-600', text: 'text-white', ring: 'ring-teal-200' },
      
      // Purple variations
      { bg: 'from-purple-400 to-purple-600', text: 'text-white', ring: 'ring-purple-200' },
      { bg: 'from-violet-400 to-violet-600', text: 'text-white', ring: 'ring-violet-200' },
      
      // Orange variations
      { bg: 'from-orange-400 to-orange-600', text: 'text-white', ring: 'ring-orange-200' },
      { bg: 'from-amber-400 to-amber-600', text: 'text-white', ring: 'ring-amber-200' },
      
      // Red variations
      { bg: 'from-red-400 to-red-600', text: 'text-white', ring: 'ring-red-200' },
      { bg: 'from-pink-500 to-rose-500', text: 'text-white', ring: 'ring-pink-200' },
      
      // Special combinations
      { bg: 'from-cyan-400 to-blue-500', text: 'text-white', ring: 'ring-cyan-200' },
      { bg: 'from-yellow-400 to-orange-500', text: 'text-white', ring: 'ring-yellow-200' },
    ];
    
    // Use name hash to get consistent color
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return schemes[Math.abs(hash) % schemes.length];
  };

  // Size classes
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-xl',
    xl: 'w-20 h-20 text-2xl',
    '2xl': 'w-32 h-32 text-5xl',
  };

  const colorScheme = getColorScheme(name);

  // Different avatar styles
  const getAvatarStyle = () => {
    switch (variant) {
      case 'colorful':
        return `bg-gradient-to-br ${colorScheme.bg} ${colorScheme.text} ring-2 ${colorScheme.ring}`;
      case 'gradient':
        return `bg-gradient-to-br ${colorScheme.bg} ${colorScheme.text} ring-2 ${colorScheme.ring} shadow-lg`;
      case 'pattern':
        return `bg-gradient-to-br ${colorScheme.bg} ${colorScheme.text} ring-2 ${colorScheme.ring} shadow-lg hover:shadow-xl`;
      default:
        return `bg-gradient-to-br ${colorScheme.bg} ${colorScheme.text} ring-2 ${colorScheme.ring}`;
    }
  };

  return (
    <div className="relative group">
      <Avatar className={cn(
        sizeClasses[size],
        'transition-all duration-300 hover:scale-105 cursor-pointer',
        className
      )}>
        <AvatarFallback 
          className={cn(
            getAvatarStyle(),
            'font-bold shadow-inner select-none'
          )}
        >
          {initial}
        </AvatarFallback>
      </Avatar>
      
      {/* Online status indicator */}
      {showOnlineStatus && (
        <div className={cn(
          'absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white shadow-sm',
          isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
        )} />
      )}
      
      {/* Hover effect for larger avatars */}
      {size === 'lg' || size === 'xl' || size === '2xl' ? (
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      ) : null}
    </div>
  );
};

export default AvatarGenerator;
