import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, UserPlus, Search, Music } from "lucide-react";
import AvatarGenerator from "@/components/AvatarGenerator";
import { useState } from "react";

const Friends = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const friends = [
    {
      name: "Kavya Reddy",
      initial: "K",
      color: "bg-secondary",
      status: "online",
      currentSong: "Dancing in the Moonlight",
      mutualFriends: 12,
    },
    {
      name: "Ananya Singh",
      initial: "A",
      color: "bg-accent",
      status: "online",
      currentSong: "Sunshine Day",
      mutualFriends: 8,
    },
    {
      name: "Riya Gupta",
      initial: "R",
      color: "bg-kids",
      status: "offline",
      currentSong: null,
      mutualFriends: 15,
    },
    {
      name: "Sneha Kumar",
      initial: "S",
      color: "bg-primary",
      status: "online",
      currentSong: "Happy Together",
      mutualFriends: 10,
    },
    {
      name: "Ojasvi Joshi",
      initial: "O",
      color: "bg-women",
      status: "offline",
      currentSong: null,
      mutualFriends: 6,
    },
    {
      name: "Aadhya Verma",
      initial: "A",
      color: "bg-family",
      status: "online",
      currentSong: "Best Day Ever",
      mutualFriends: 9,
    },
  ];

  const suggestions = [
    {
      name: "Ishita Agarwal",
      initial: "I",
      color: "bg-accent",
      mutualFriends: 5,
    },
    {
      name: "Meera Nair",
      initial: "M",
      color: "bg-secondary",
      mutualFriends: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-[120px] md:mt-[80px]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Friends
          </h1>
          <p className="text-muted-foreground">
            Connect with your music buddies and see what they're listening to
          </p>
        </div>

        {/* Search */}
        <Card className="p-4 mb-6 shadow-card border-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </Card>

        {/* Friends List */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">My Friends ({friends.length})</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {friends.map((friend, index) => (
              <Card
                key={index}
                className="p-6 shadow-card border-2 hover:shadow-float transition-shadow animate-fade-in"
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <AvatarGenerator 
                      name={friend.name}
                      size="lg"
                      variant="gradient"
                      showOnlineStatus={true}
                      isOnline={friend.status === 'online'}
                    />
                    <div
                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                        friend.status === "online" ? "bg-green-500" : "bg-muted"
                      }`}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{friend.name}</h3>
                      {friend.status === "online" && (
                        <Badge variant="outline" className="text-xs">
                          Online
                        </Badge>
                      )}
                    </div>
                    
                    {friend.currentSong ? (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Music className="w-4 h-4" />
                        <span>Listening to "{friend.currentSong}"</span>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground mb-2">Not listening</p>
                    )}
                    
                    <p className="text-xs text-muted-foreground">
                      {friend.mutualFriends} mutual friends
                    </p>
                  </div>
                  
                  <Button size="sm" variant="outline">
                    View Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Friend Suggestions */}
        <div>
          <h2 className="text-2xl font-bold mb-4">People You May Know</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {suggestions.map((person, index) => (
              <Card
                key={index}
                className="p-6 shadow-card border-2 hover:shadow-float transition-shadow animate-fade-in"
              >
                <div className="flex items-center gap-4">
                  <AvatarGenerator 
                    name={person.name}
                    size="lg"
                    variant="colorful"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{person.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {person.mutualFriends} mutual friends
                    </p>
                  </div>
                  
                  <Button size="sm" className="gap-2 bg-gradient-primary">
                    <UserPlus className="w-4 h-4" />
                    Add
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Friends;
