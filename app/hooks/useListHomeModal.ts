import { create } from "zustand";

interface ListHomeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useListHomeModal = create<ListHomeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useListHomeModal;
