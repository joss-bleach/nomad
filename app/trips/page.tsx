// Actions
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";

// Components
import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorised" subtitle="Please log in." />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations && reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No upcoming trips"
          subtitle="Why don't you book something?"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default TripsPage;
