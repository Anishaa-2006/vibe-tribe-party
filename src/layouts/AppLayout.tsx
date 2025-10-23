import { ReactNode } from 'react';
import Navigation from './Navigation';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mt-[120px] md:mt-[80px]">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
