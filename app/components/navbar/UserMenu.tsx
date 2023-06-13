"use client";
import { FC, useCallback, useState } from "react";
import { Menu } from "lucide-react";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

// Hooks
import useRegistrationModal from "@/hooks/useRegistrationModal";
import useLoginModal from "@/hooks/useLoginModal";
import useListHomeModal from "@/hooks/useListHomeModal";

// Components
import Avatar from "@/ui/Avatar";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }) => {
  const registrationModal = useRegistrationModal();
  const loginModal = useLoginModal();
  const listHomeModal = useListHomeModal();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenuOpen = useCallback(() => {
    setMenuOpen((value) => !value);
  }, []);

  const onListHome = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    listHomeModal.onOpen();
  }, [currentUser, loginModal, listHomeModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onListHome}
          className="hidden cursor-pointer rounded px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          List your home
        </div>
        <div
          onClick={toggleMenuOpen}
          className="flex cursor-pointer flex-row items-center gap-3 rounded border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <Menu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/trips/")}
                  label="My stays"
                />
                <MenuItem
                  onClick={() => router.push("/favourites/")}
                  label="My favourites"
                />
                <MenuItem
                  onClick={() => router.push("/reservations/")}
                  label="Reservations at my properties"
                />
                <MenuItem
                  onClick={() => router.push("/properties/")}
                  label="My listings"
                />
                <MenuItem
                  onClick={listHomeModal.onOpen}
                  label="List your property"
                />
                <hr />
                <MenuItem onClick={() => signOut()} label="Log Out" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registrationModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
