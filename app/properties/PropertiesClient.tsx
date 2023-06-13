"use client";
import { FC, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

// Types
import { SafeListing, SafeUser } from "../types";

// Components
import Container from "@/ui/Container";
import Heading from "@/ui/Heading";
import ListingCard from "@/ui/listings/ListingCard";

interface ListingsClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const ListingsClient: FC<ListingsClientProps> = ({ listings, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string>("");

  const onCancel = useCallback(
    async (id: string) => {
      setDeletingId(id);
      try {
        await axios.delete(`/api/listings/${id}`);
        toast.success("Property removed.");
        router.refresh();
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message);
        } else {
          toast.error("Could not remove property.");
        }
      } finally {
        setDeletingId("");
      }
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Your properties"
        subtitle="View and manage your listed properties."
      />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ListingsClient;
