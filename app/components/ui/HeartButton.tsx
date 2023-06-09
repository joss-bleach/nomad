"use client";
import { FC } from "react";
import { Heart } from "lucide-react";

// Types
import { SafeUser } from "@/app/types";

// Hooks
import useFavourite from "@/hooks/useFavourite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: FC<HeartButtonProps> = ({ listingId, currentUser }) => {
  const { hasFavourited, toggleFavourite } = useFavourite({
    listingId,
    currentUser,
  });

  const heartColour = hasFavourited ? "#F47C68" : "#e5e5e5";
  return (
    <div
      onClick={toggleFavourite}
      className="relative cursor-pointer transition hover:opacity-80"
    >
      <Heart
        className="absolute -right-[2px] -top-[2px]"
        color="white"
        fill={heartColour}
      />
    </div>
  );
};

export default HeartButton;
