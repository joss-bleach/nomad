import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

// Types
import { SafeUser } from "@/app/types";

// Hooks
import useLoginModal from "@/hooks/useLoginModal";

interface IUseFavourite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavourite = ({ listingId, currentUser }: IUseFavourite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavourited = useMemo(() => {
    const list = currentUser?.favouriteIds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavourite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation;

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavourited) {
          request = () => axios.delete(`/api/favourites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favourites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Updated your favourites");
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message);
        } else {
          toast.error("Could not update favourites");
        }
      }
    },
    [currentUser, hasFavourited, listingId, router, loginModal]
  );
  return {
    hasFavourited,
    toggleFavourite,
  };
};

export default useFavourite;
