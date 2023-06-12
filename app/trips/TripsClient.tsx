"use client";
import { FC, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

// Types
import { SafeReservation, SafeUser } from "../types";

// Components
import Container from "@/ui/Container";
import Heading from "@/ui/Heading";
import ListingCard from "@/ui/listings/ListingCard";

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient: FC<TripsClientProps> = ({ reservations, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string>("");

  const onCancel = useCallback(
    async (id: string) => {
      setDeletingId(id);
      try {
        await axios.delete(`/api/reservations/${id}`);
        toast.success("Reservation cancelled.");
        router.refresh();
      } catch (err) {
        if (err instanceof Error) {
          toast.error(err.message);
        } else {
          toast.error("Could not cancel reservation.");
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
        title="Your trips"
        subtitle="View and manage your upcoming trips."
      />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {reservations.map((reservation) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default TripsClient;
