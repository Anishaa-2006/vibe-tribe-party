import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Music, Users, Clock, Settings, Share2 } from "lucide-react";
import PlaylistCard from "@/components/PlaylistCard";
import EditProfileDialog from "@/components/EditProfileDialog";
import AvatarGenerator from "@/components/AvatarGenerator";
import playlistWomen from "@/assets/playlist-women.jpg";
import playlistKids from "@/assets/playlist-kids.jpg";
import { useState } from "react";

const Profile = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [name, setName] = useState("Priya Sharma");
  const [bio, setBio] = useState("Mom of two, music lover, always looking for the perfect playlist 🎵");
  const [badgeText, setBadgeText] = useState("Music Enthusiast");

  const handleSaveProfile = (newName: string, newBio: string, newBadge: string) => {
    setName(newName);
    setBio(newBio);
    setBadgeText(newBadge);
  };
  const stats = [
    { icon: Music, label: "Songs Played", value: "1,234", color: "text-primary" },
    { icon: Clock, label: "Hours Listened", value: "156", color: "text-accent" },
    { icon: Users, label: "Rooms Joined", value: "89", color: "text-secondary" },
    { icon: Heart, label: "Favorites", value: "267", color: "text-kids" },
  ];


  const likedPlaylists = [
    {
      title: "Morning Energy",
      description: "Start your day right",
      image: playlistWomen,
      listeners: 9800,
      category: "women" as const,
    },
    {
      title: "Family Adventure",
      description: "Fun songs for family adventures",
      image: playlistKids,
      listeners: 20100,
      category: "family" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-[120px] md:mt-[80px]">
        {/* Profile Header */}
        <Card className="p-8 shadow-card border-2 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <AvatarGenerator 
              name={name}
              size="2xl"
              variant="gradient"
              className="shadow-2xl"
            />
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                <h1 className="text-3xl font-bold">{name}</h1>
                <Badge className="bg-kids text-kids-foreground w-fit mx-auto md:mx-0">
                  {badgeText}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">
                {bio}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Button 
                  size="sm" 
                  className="gap-2 bg-gradient-primary"
                  onClick={() => setIsEditOpen(true)}
                >
                  <Settings className="w-4 h-4" />
                  Edit Profile
                </Button>
                <Button size="sm" variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Profile
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-card transition-shadow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Liked Playlists */}
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-kids" />
            <h2 className="text-2xl font-bold">Favorite Playlists</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {likedPlaylists.map((playlist, index) => (
              <PlaylistCard key={index} {...playlist} />
            ))}
          </div>
        </div>
      </main>

      <EditProfileDialog
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        currentName={name}
        currentBio={bio}
        currentBadge={badgeText}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default Profile;
