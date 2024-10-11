"use client";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { useAuthActions } from "@convex-dev/auth/react";

// Hooks
import { useModal } from "@/providers/modal-provider";

// Convex
import { useQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../../convex/_generated/api";

// Components
import { MenuIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export const UserMenuButton = () => {
  return (
    <>
      <AuthLoading>
        <UserButtonSkeleton />
      </AuthLoading>
      <Authenticated>
        <UserButtonWithUser />
      </Authenticated>
      <Unauthenticated>
        <UserButtonWithoutUser />
      </Unauthenticated>
    </>
  );
};

const UserButtonWithUser = () => {
  const { onOpen } = useModal();
  const { signOut } = useAuthActions();

  const { data, isPending, error } = useQuery(
    convexQuery(api.user.currentUser, {}),
  );

  if (isPending) {
    return <UserButtonSkeleton />;
  }

  if (error) {
    return null;
  }

  if (data) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full border-gray-300">
            <MenuIcon className="mr-2 h-5 w-5" />

            <Avatar className="h-7 w-7">
              <AvatarFallback>{data.name?.charAt(0)}</AvatarFallback>
              <AvatarImage src={data.image} alt={data.name} />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer px-4 py-2 font-medium">
              Trips
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer px-4 py-2 font-medium">
              Favourites
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer px-4 py-2 font-medium">
              Listings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer px-4 py-2">
              List your home
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer px-4 py-2"
              role="button"
              aria-label="Sign out"
              onClick={() => void signOut()}
            >
              Sign out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

const UserButtonWithoutUser = () => {
  const { onOpen } = useModal();
  const { signOut } = useAuthActions();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full border-gray-300">
          <MenuIcon className="mr-2 h-5 w-5" />

          <div className="flex size-7 items-center justify-center rounded-full bg-muted">
            <UserIcon className="size-4 text-muted-foreground" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48 space-y-2">
        <DropdownMenuItem
          className="cursor-pointer px-4 py-2"
          role="button"
          aria-label="Sign up"
          onClick={() => void onOpen("auth", { flow: "signUp" })}
        >
          Sign up
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer px-4 py-2"
          role="button"
          aria-label="Sign up"
          onClick={() => void onOpen("auth", { flow: "signIn" })}
        >
          Sign in
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const UserButtonSkeleton = () => {
  return (
    <Skeleton className="h-10 w-20 rounded-full">
      <div className="flex items-center justify-between px-3">
        <Skeleton className="h-5 w-5 rounded" />
        <Skeleton className="h-7 w-7 rounded-full" />
      </div>
    </Skeleton>
  );
};
