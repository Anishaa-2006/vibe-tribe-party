import Navigation from "@/components/Navigation";
import PlaylistCard from "@/components/PlaylistCard";
import CategorySection from "@/components/CategorySection";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Baby, Home as HomeIcon, Moon } from "lucide-react";
import heroImage from "@/assets/hero-music.jpg";
import playlistWomen from "@/assets/playlist-women.jpg";
import playlistKids from "@/assets/playlist-kids.jpg";
import playlistFamily from "@/assets/playlist-family.jpg";
import playlistBedtime from "@/assets/playlist-bedtime.jpg";

const Home = () => {
  const womenPlaylists = [
    {
      title: "Empowered & Strong",
      description: "Uplifting anthems for powerful women",
      image: playlistWomen,
      listeners: 12500,
      category: "women" as const,
    },
    {
      title: "Calm & Centered",
      description: "Mindfulness and relaxation for your day",
      image: playlistWomen,
      listeners: 8200,
      category: "calm" as const,
    },
    {
      title: "Girls Night In",
      description: "Fun vibes for quality time with friends",
      image: playlistWomen,
      listeners: 15300,
      category: "women" as const,
    },
    {
      title: "Morning Energy",
      description: "Start your day with positive vibes",
      image: playlistWomen,
      listeners: 9800,
      category: "women" as const,
    },
  ];

  const kidsPlaylists = [
    {
      title: "Dance Party!",
      description: "Get moving with fun, energetic songs",
      image: playlistKids,
      listeners: 25400,
      category: "kids" as const,
    },
    {
      title: "Bedtime Stories",
      description: "Gentle songs for peaceful sleep",
      image: playlistBedtime,
      listeners: 18900,
      category: "calm" as const,
    },
    {
      title: "Learning Songs",
      description: "Educational tunes that make learning fun",
      image: playlistKids,
      listeners: 14600,
      category: "kids" as const,
    },
    {
      title: "Sing Along!",
      description: "Popular kids' songs everyone knows",
      image: playlistKids,
      listeners: 31200,
      category: "kids" as const,
    },
  ];

  const familyPlaylists = [
    {
      title: "Family Road Trip",
      description: "Songs everyone in the car will love",
      image: playlistFamily,
      listeners: 20100,
      category: "family" as const,
    },
    {
      title: "Cooking Together",
      description: "Cheerful tunes for kitchen time",
      image: playlistFamily,
      listeners: 7800,
      category: "family" as const,
    },
    {
      title: "Sunday Mornings",
      description: "Peaceful start to a family day",
      image: playlistFamily,
      listeners: 11400,
      category: "calm" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
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

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <CategorySection
          title="For You, Mom"
          subtitle="Curated with care for women who deserve the best"
          icon={<Heart className="w-6 h-6 text-primary-foreground" />}
        >
          {womenPlaylists.map((playlist, index) => (
            <PlaylistCard key={index} {...playlist} />
          ))}
        </CategorySection>

        <CategorySection
          title="Kids' Corner"
          subtitle="Fun, safe, and educational music for little ones"
          icon={<Baby className="w-6 h-6 text-primary-foreground" />}
        >
          {kidsPlaylists.map((playlist, index) => (
            <PlaylistCard key={index} {...playlist} />
          ))}
        </CategorySection>

        <CategorySection
          title="Family Time"
          subtitle="Music that brings everyone together"
          icon={<HomeIcon className="w-6 h-6 text-primary-foreground" />}
        >
          {familyPlaylists.map((playlist, index) => (
            <PlaylistCard key={index} {...playlist} />
          ))}
        </CategorySection>

        {/* Call to Action */}
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
      </main>
    </div>
  );
};

export default Home;
