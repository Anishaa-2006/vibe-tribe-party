import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import AvatarGenerator from "@/components/AvatarGenerator";
import { Plus, Users, Music, Search, Radio } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const activeRooms = [
    {
      name: "Kids Dance Party",
      host: "Kavya",
      hostInitial: "K",
      listeners: 12,
      currentSong: "Happy Together",
      category: "kids",
      isLive: true,
    },
    {
      name: "Women's Chill Lounge",
      host: "Priya",
      hostInitial: "P",
      listeners: 8,
      currentSong: "Peaceful Morning",
      category: "women",
      isLive: true,
    },
    {
      name: "Family Adventure Mix",
      host: "Ananya",
      hostInitial: "A",
      listeners: 15,
      currentSong: "Sunshine Day",
      category: "family",
      isLive: true,
    },
    {
      name: "Bedtime Stories & Songs",
      host: "Riya",
      hostInitial: "R",
      listeners: 6,
      currentSong: "Twinkle Little Star",
      category: "bedtime",
      isLive: true,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      kids: "bg-kids",
      women: "bg-women",
      family: "bg-family",
      bedtime: "bg-bedtime",
    };
    return colors[category as keyof typeof colors] || "bg-primary";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-[120px] md:mt-[80px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Radio className="w-8 h-8 text-primary" />
              Listening Rooms
            </h1>
            <p className="text-muted-foreground">
              Join a room or create your own music session
            </p>
          </div>
          <Button className="gap-2 bg-gradient-primary w-fit" size="lg">
            <Plus className="w-5 h-5" />
            Create Room
          </Button>
        </div>

        {/* Search */}
        <Card className="p-4 mb-6 shadow-card border-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search rooms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </Card>

        {/* Active Rooms */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            Active Rooms ({activeRooms.length})
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {activeRooms.map((room, index) => (
              <Card
                key={index}
                className="p-6 shadow-card border-2 hover:shadow-float transition-all cursor-pointer animate-fade-in group"
                onClick={() => navigate("/listening-room")}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {room.name}
                      </h3>
                      {room.isLive && (
                        <Badge className="bg-green-500 text-white">
                          LIVE
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <AvatarGenerator 
                        name={room.host}
                        size="sm"
                        variant="gradient"
                      />
                      <span className="text-sm text-muted-foreground">
                        Hosted by {room.host}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{room.listeners}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg mb-4">
                  <Music className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Now: {room.currentSong}</span>
                </div>

                <Button className="w-full bg-gradient-primary" size="sm">
                  Join Room
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rooms;
