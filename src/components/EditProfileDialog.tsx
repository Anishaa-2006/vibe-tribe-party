import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Camera } from "lucide-react";

interface EditProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentName: string;
  currentBio: string;
  currentBadge: string;
  onSave: (name: string, bio: string, badge: string) => void;
}

const EditProfileDialog = ({
  open,
  onOpenChange,
  currentName,
  currentBio,
  currentBadge,
  onSave,
}: EditProfileDialogProps) => {
  const [name, setName] = useState(currentName);
  const [bio, setBio] = useState(currentBio);
  const [badge, setBadge] = useState(currentBadge);

  const handleSave = () => {
    onSave(name, bio, badge);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Update your profile information and preferences
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <Avatar className="w-24 h-24 bg-gradient-primary">
                <AvatarFallback className="text-3xl font-bold text-white">
                  {name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 bg-gradient-primary"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Click to change avatar</p>
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          {/* Bio Field */}
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself..."
              rows={3}
            />
          </div>

          {/* Badge Field */}
          <div className="space-y-2">
            <Label htmlFor="badge">Badge</Label>
            <Input
              id="badge"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="e.g., Music Enthusiast"
            />
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-gradient-primary" onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
