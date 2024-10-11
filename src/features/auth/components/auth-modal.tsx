"use client";
import { useState } from "react";

// Hooks
import { useModal } from "@/providers/modal-provider";

// Types
import { SignInFlow } from "../types";

// Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";
import { SocialAuthButtons } from "./social-auth-buttons";

export const AuthModal = () => {
  const { type, isOpen, onOpen, onClose, modalData } = useModal();

  if (!modalData?.flow) {
    return null;
  }

  const [authFlow, setAuthFlow] = useState<SignInFlow>(modalData?.flow);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const modalIsOpen = isOpen && type === "auth";
  console.log(modalData?.flow);
  return (
    <Dialog open={modalIsOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign in or sign up</DialogTitle>
        </DialogHeader>
        <div>
          {authFlow === "signIn" ? (
            <SignInForm isSubmitting={isSubmitting} />
          ) : (
            <SignUpForm isSubmitting={isSubmitting} />
          )}
          <SocialAuthButtons
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
          />
          {authFlow === "signIn" ? (
            <p className="text-xs text-foreground">
              Don&apos;t have an account?{" "}
              <span
                className="cursor-pointer font-medium text-primary"
                role="link"
                tabIndex={0}
                aria-label="Click here to sign up."
                onClick={() => setAuthFlow("signUp")}
              >
                Click here
              </span>{" "}
              to create one.
            </p>
          ) : (
            <p className="text-xs text-foreground">
              Already have an account?{" "}
              <span
                className="cursor-pointer font-medium text-primary"
                role="link"
                tabIndex={0}
                aria-label="Click here to sign in."
                onClick={() => setAuthFlow("signIn")}
              >
                Click here
              </span>{" "}
              to log in.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
