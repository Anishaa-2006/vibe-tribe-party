import { Button } from '@/shared/components/ui/button';
import { Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-music.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden mt-[72px] md:mt-[64px]">
      <div className="absolute inset-0 bg-gradient-hero" />
      <img
        src={heroImage}
        alt="Music together"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Discover Music, Together
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join your friends and family in magical listening rooms. Share the moment, feel the music, create memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90 shadow-float text-lg px-8">
              <Sparkles className="w-5 h-5" />
              Start Listening
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2 hover:border-primary">
              Browse Playlists
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
