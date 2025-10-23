import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import AvatarGenerator from "@/components/AvatarGenerator";
import {
  Play,
  Pause,
  SkipForward,
  Heart,
  Share2,
  Users,
  Send,
  Smile,
  Volume2,
  List,
} from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import playlistKids from "@/assets/playlist-kids.jpg";
import playlistWomen from "@/assets/playlist-women.jpg";
import playlistFamily from "@/assets/playlist-family.jpg";
import playlistBedtime from "@/assets/playlist-bedtime.jpg";

const ListeningRoom = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [message, setMessage] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState("kids");

  const playlists = {
    kids: {
      name: "Kids' Classics",
      image: playlistKids,
      songs: ["Happy Together", "Sunshine Day", "Best Day Ever"],
    },
    women: {
      name: "Morning Energy",
      image: playlistWomen,
      songs: ["Peaceful Morning", "Rise & Shine", "New Day"],
    },
    family: {
      name: "Family Fun",
      image: playlistFamily,
      songs: ["Road Trip", "Together Time", "Family Dance"],
    },
    bedtime: {
      name: "Bedtime Stories",
      image: playlistBedtime,
      songs: ["Twinkle Star", "Sweet Dreams", "Lullaby"],
    },
  };

  const currentPlaylist = playlists[selectedPlaylist as keyof typeof playlists];

  const listeners = [
    { name: "Priya", color: "bg-primary", initial: "P" },
    { name: "Kavya", color: "bg-secondary", initial: "K" },
    { name: "Ananya", color: "bg-accent", initial: "A" },
    { name: "Riya", color: "bg-kids", initial: "R" },
  ];

  const messages = [
    { user: "Priya", message: "This song is amazing! 🎵", time: "2:15 PM" },
    { user: "Kavya", message: "My daughter loves this one!", time: "2:16 PM" },
    { user: "Ananya", message: "Can we play it again? 😊", time: "2:17 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-[120px] md:mt-[80px]">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Player Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Now Playing Card */}
            <Card className="p-6 shadow-card border-2 animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-kids animate-pulse" />
                  <span className="font-medium">Live Room</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{listeners.length} listening</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Album Art */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-float group">
                  <img
                    src={currentPlaylist.image}
                    alt="Now playing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-1">{currentPlaylist.songs[0]}</h3>
                    <p className="text-white/80 text-sm">{currentPlaylist.name}</p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{currentPlaylist.songs[0]}</h2>
                    <p className="text-muted-foreground mb-4">{currentPlaylist.name}</p>
                    
                    {/* Progress */}
                    <div className="space-y-2 mb-6">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-primary w-2/3 rounded-full animate-pulse-glow" />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>2:15</span>
                        <span>3:30</span>
                      </div>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full w-12 h-12"
                        onClick={() => setIsLiked(!isLiked)}
                      >
                        <Heart className={isLiked ? "fill-kids text-kids" : ""} />
                      </Button>
                      <Button
                        size="lg"
                        className="rounded-full w-16 h-16 bg-gradient-primary hover:opacity-90 shadow-float"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 fill-current" />
                        ) : (
                          <Play className="w-8 h-8 fill-current" />
                        )}
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full w-12 h-12"
                      >
                        <SkipForward />
                      </Button>
                    </div>

                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-muted-foreground" />
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-3/4 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Playlist Selector */}
            <Card className="p-6 shadow-card border-2 animate-fade-in">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <List className="w-5 h-5 text-primary" />
                Change Playlist
              </h3>
              <Select value={selectedPlaylist} onValueChange={setSelectedPlaylist}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select playlist" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kids">Kids' Classics</SelectItem>
                  <SelectItem value="women">Morning Energy</SelectItem>
                  <SelectItem value="family">Family Fun</SelectItem>
                  <SelectItem value="bedtime">Bedtime Stories</SelectItem>
                </SelectContent>
              </Select>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-2">Queue:</p>
                <div className="space-y-1">
                  {currentPlaylist.songs.map((song, index) => (
                    <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="text-xs">{index + 1}.</span>
                      <span>{song}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Listeners */}
            <Card className="p-6 shadow-card border-2 animate-fade-in">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                In This Room
              </h3>
              <div className="flex flex-wrap gap-3">
                {listeners.map((listener, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 pr-4 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <AvatarGenerator 
                      name={listener.name}
                      size="md"
                      variant="gradient"
                    />
                    <span className="font-medium">{listener.name}</span>
                  </div>
                ))}
                <Button variant="outline" className="rounded-full gap-2">
                  <Share2 className="w-4 h-4" />
                  Invite Friends
                </Button>
              </div>
            </Card>
          </div>

          {/* Chat Section */}
          <Card className="shadow-card border-2 flex flex-col h-[600px] animate-fade-in">
            <div className="p-4 border-b border-border">
              <h3 className="font-bold text-lg">Room Chat</h3>
              <p className="text-sm text-muted-foreground">Share your thoughts!</p>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className="animate-slide-up">
                    <div className="flex items-start gap-2">
                      <AvatarGenerator 
                        name={msg.user}
                        size="sm"
                        variant="colorful"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">{msg.user}</span>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <p className="text-sm bg-muted p-2 rounded-lg rounded-tl-none">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full shrink-0">
                  <Smile className="w-5 h-5" />
                </Button>
                <Input
                  placeholder="Send a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-full"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && message.trim()) {
                      setMessage("");
                    }
                  }}
                />
                <Button size="icon" className="rounded-full bg-gradient-primary shrink-0">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ListeningRoom;
