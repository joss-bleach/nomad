"use client";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";

// Assets
import placeholder from "./avatar-placeholder.jpg";

// Hooks
import { useModal } from "@/providers/modal-provider";

// Components
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export const UserMenuButton = () => {
  const { onOpen } = useModal();
  return (
    <>
      <AuthLoading>
        <Skeleton className="h-10 w-20 rounded-full">
          <div className="flex items-center justify-between px-3">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-7 w-7 rounded-full" />
          </div>
        </Skeleton>
      </AuthLoading>
      <Authenticated>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full border-gray-300">
              <Menu className="h-5 w-5 mr-2" />

              <Avatar className="h-7 w-7">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Authenticated>
      <Unauthenticated>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full border-gray-300">
              <Menu className="h-5 w-5 mr-2" />

              <Avatar className="h-7 w-7">
                <AvatarImage src="./avatar-placeholder.jpg" alt="Placeholder" />
                <AvatarFallback>PH</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem
              role="button"
              aria-label="Sign up"
              onClick={() => void onOpen("auth")}
            >
              Sign up
            </DropdownMenuItem>
            <DropdownMenuItem
              role="button"
              aria-label="Sign up"
              onClick={() => void onOpen("auth")}
            >
              Sign in
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Unauthenticated>
    </>
  );
};
