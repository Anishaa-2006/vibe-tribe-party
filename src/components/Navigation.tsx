import { Home, Radio, Users, User, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import mascot from "@/assets/mascot.png";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Radio, label: "Rooms", path: "/rooms" },
    { icon: Users, label: "Friends", path: "/friends" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={mascot} 
              alt="MelodyCircle mascot" 
              className="w-10 h-10 transition-transform group-hover:scale-110 group-hover:rotate-6"
            />
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                MelodyCircle
              </h1>
              <p className="text-xs text-muted-foreground">Listen together, smile forever</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "gap-2 transition-all",
                    location.pathname === item.path && "shadow-soft"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <Button size="sm" className="gap-2 bg-gradient-primary hover:opacity-90 transition-opacity">
            <Sparkles className="w-4 h-4" />
            Create Room
          </Button>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden flex justify-around mt-3 pt-3 border-t border-border">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={location.pathname === item.path ? "default" : "ghost"}
                size="sm"
                className={cn(
                  "flex-col h-auto py-2 gap-1",
                  location.pathname === item.path && "shadow-soft"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
