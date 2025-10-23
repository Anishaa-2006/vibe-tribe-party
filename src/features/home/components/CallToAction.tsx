import { Button } from '@/shared/components/ui/button';
import { Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="mt-16 mb-8 p-8 md:p-12 rounded-3xl bg-gradient-secondary text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Create Your First Room?
        </h2>
        <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
          Invite friends, pick a playlist, and listen together in perfect sync. It's like being in the same room!
        </p>
        <Button size="lg" className="gap-2 bg-primary hover:bg-primary-glow shadow-float text-lg px-8">
          <Sparkles className="w-5 h-5" />
          Create Your Room
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
