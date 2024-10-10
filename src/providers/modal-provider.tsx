"use client";
import {
  useEffect,
  createContext,
  useState,
  useCallback,
  useContext,
} from "react";

export type ModalType = "auth" | null;

interface ModalContextType {
  type: ModalType;
  isOpen: boolean;
  onOpen: (type: Exclude<ModalType, null>) => void;
  onClose: () => void;
}

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Modals
import { AuthModal } from "@/features/auth/components/auth-modal";

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [type, setType] = useState<ModalType>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const onOpen = useCallback((newType: Exclude<ModalType, null>) => {
    setType(newType);
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setType(null);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ModalContext.Provider value={{ type, isOpen, onOpen, onClose }}>
      {isMounted ? (
        <>
          <AuthModal />
        </>
      ) : null}
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("Used outside of ModalProvider");
  }
  return context;
};
