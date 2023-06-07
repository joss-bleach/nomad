"use client";
import { Menu } from "lucide-react";

// Components
import Avatar from "@/ui/Avatar";

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden cursor-pointer rounded px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          List your home
        </div>
        <div
          onClick={() => {}}
          className="flex cursor-pointer flex-row items-center gap-3 rounded border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <Menu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
