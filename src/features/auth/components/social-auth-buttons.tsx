"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";

// Types
import { ProviderTypes } from "../types";

// Components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Loader2Icon } from "lucide-react";

interface SocialAuthButtonProps {
  isSubmitting: boolean;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
}

export const SocialAuthButtons = ({
  isSubmitting,
  setIsSubmitting,
}: SocialAuthButtonProps) => {
  const { signIn } = useAuthActions();

  const handleSocialAuthentication = (provider: ProviderTypes) => {
    setIsSubmitting(true);
    signIn(provider).finally(() => setIsSubmitting(false));
  };

  return (
    <div className="flex w-full flex-col items-center space-y-2 py-2">
      <Separator className="my-2" />
      <Button
        variant="outline"
        className="w-full"
        disabled={isSubmitting}
        onClick={() => void handleSocialAuthentication("google")}
      >
        {isSubmitting ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          "Sign in with Google"
        )}
      </Button>
    </div>
  );
};
