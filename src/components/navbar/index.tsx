"use client";
import { useModal } from "@/providers/modal-provider";

// Components
import { Button } from "../ui/button";
import { UserMenuButton } from "./user-menu-button";

export const Navbar = () => {
  const { onOpen } = useModal();

  return (
    <header className="w-full px-20 flex items-center h-20 justify-between">
      <h1>Nomad</h1>
      <ul className="flex flex-row items-center space-x-2">
        <li>
          <Button variant="ghost">List your home</Button>
        </li>
        <li>
          <UserMenuButton />
        </li>
      </ul>
    </header>
  );
};
