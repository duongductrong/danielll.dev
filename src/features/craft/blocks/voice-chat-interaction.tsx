import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const slice = 5;
const users = [
  {
    name: "Charlotte Nova",
    avatar: "https://github.com/shadcn.png",
  },
  {
    name: "Liam Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emma Roberts",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Tyler Reed",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Jessica Lee",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "James Brown",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Julia Smith",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Peter Yang",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  },
];

const MotionAvatar = motion.create(Avatar);
const MotionAvatarImage = motion.create(AvatarImage);

function VoiceChatInteraction() {
  const [open, setOpen] = useState(false);
  const hiddenUserCount = users.length - slice;

  return (
    <motion.div layout>
      {!open && (
        <motion.div
          layoutId="vci-container"
          className={cn(
            "w-fit p-2 rounded-full border border-border",
            "flex items-center overflow-hidden",
            "flex -space-x-2 shadow-sm bg-background"
          )}
          role="button"
          onClick={() => setOpen(!open)}
        >
          {users.slice(0, slice).map((user) => (
            <MotionAvatar
              key={user.name}
              className="ring-2 ring-background border-2 border-background cursor-pointer"
              layoutId={`vci-avatar-${user.name}`}
            >
              <MotionAvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </MotionAvatar>
          ))}

          {hiddenUserCount > 0 && (
            <MotionAvatar layoutId={`vci-avatar-${hiddenUserCount}`}>
              <AvatarFallback>+{hiddenUserCount}</AvatarFallback>
            </MotionAvatar>
          )}
        </motion.div>
      )}

      {open && (
        <motion.section
          // layoutId="vci-container"
          className="w-[300px] min-h-[300px] rounded-2xl bg-background border border-border overflow-hidden"
        >
          <header className="relative text-center bg-secondary px-4 py-2 border-b border-border">
            <span className="text-muted-foreground font-medium">
              Voice Chat
            </span>

            <button type="button" onClick={() => setOpen(false)}>
              <XIcon className="size-4 absolute top-1/2 right-4 -translate-y-1/2 text-muted-foreground cursor-pointer" />
            </button>
          </header>
          <motion.article
            layoutId="vci-container"
            className="bg-background grid grid-cols-4 gap-4 px-4 py-6"
          >
            {users.map((user) => (
              <div
                key={user.name}
                className="flex justify-center flex-col items-center gap-2"
              >
                <MotionAvatar layoutId={`vci-avatar-${user.name}`}>
                  <MotionAvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </MotionAvatar>
                <motion.p layout className="text-xs text-center">
                  {user.name}
                </motion.p>
              </div>
            ))}
          </motion.article>
          <footer className="flex flex-col gap-2 px-4 pb-4 text-center">
            <Button>Join now</Button>
            <p className="text-xs text-muted-foreground">
              Mic will be muted initially
            </p>
          </footer>
        </motion.section>
      )}
    </motion.div>
  );
}

export default VoiceChatInteraction;
