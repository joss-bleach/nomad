"use client";
import { useModal } from "@/providers/modal-provider";
import { Button } from "./ui/button";

export const Navbar = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <Button onClick={() => onOpen("auth")}>Open</Button>
    </div>
  );
};
