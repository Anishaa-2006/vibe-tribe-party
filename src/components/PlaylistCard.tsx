import { Play, Heart, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
  listeners: number;
  category: "women" | "kids" | "family" | "calm";
}

const PlaylistCard = ({ title, description, image, listeners, category }: PlaylistCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const categoryColors = {
    women: "from-primary to-primary-glow",
    kids: "from-kids to-secondary",
    family: "from-secondary to-kids",
    calm: "from-calm to-accent",
  };

  return (
    <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-card cursor-pointer">
      <div className="relative aspect-square overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity",
          categoryColors[category]
        )} />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <Button
              size="lg"
              className="rounded-full w-14 h-14 bg-primary hover:bg-primary-glow shadow-float animate-scale-in"
            >
              <Play className="w-6 h-6 fill-current" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="rounded-full w-10 h-10 bg-background/20 backdrop-blur-sm hover:bg-background/40"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
            >
              <Heart className={cn("w-5 h-5", isLiked && "fill-kids text-kids")} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{listeners.toLocaleString()} listening</span>
        </div>
      </div>
    </Card>
  );
};

export default PlaylistCard;
