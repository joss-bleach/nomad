// Components
import { Button } from "../ui/button";
import { UserMenuButton } from "./user-menu-button";

export const Navbar = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between px-20">
      <h1>Nomad</h1>
      <ul className="flex flex-row items-center space-x-4">
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
