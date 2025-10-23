// Main entry point for the application
// Re-export commonly used modules for easier imports

// Types
export * from './types';

// Constants
export * from './constants';

// Services
export * from './services/api';

// Store
export { useAppStore } from './store';

// Shared utilities
export * from './shared/utils';
export * from './shared/hooks';

// Shared components
export * from './shared/components';

// Layouts
export { default as AppLayout } from './layouts/AppLayout';
export { default as Navigation } from './layouts/Navigation';
