"use client";
import {
  useEffect,
  createContext,
  useState,
  useCallback,
  useContext,
} from "react";
import { SignInFlow } from "@/features/auth/types";

export type ModalType = "auth" | null;

interface ModalData {
  flow?: SignInFlow;
}

interface ModalContextType {
  type: ModalType;
  isOpen: boolean;
  modalData?: ModalData;
  onOpen: (type: Exclude<ModalType, null>, modalData?: ModalData) => void;
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
  const [modalData, setModalData] = useState<ModalData | {}>({});
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const onOpen = useCallback(
    (newType: Exclude<ModalType, null>, data: ModalData = {}) => {
      setType(newType);
      setModalData(data);
      setIsOpen(true);
    },
    [],
  );

  const onClose = useCallback(() => {
    setType(null);
    setModalData({});
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ModalContext.Provider value={{ type, isOpen, onOpen, onClose, modalData }}>
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
