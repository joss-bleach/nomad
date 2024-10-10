"use client";
// Hooks
import { useModal } from "@/providers/modal-provider";

// Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const AuthModal = () => {
  const { type, isOpen, onOpen, onClose } = useModal();
  const modalIsOpen = isOpen && type === "auth";

  return (
    <Dialog open={modalIsOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Auth</DialogTitle>
        </DialogHeader>
        Test
      </DialogContent>
    </Dialog>
  );
};
