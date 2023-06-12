// Actions
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";

// Components
import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorised" subtitle="Please log in." />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({ authorId: currentUser.id });
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No reservations"
          subtitle="Nobody has reserved at your properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ReservationsPage;
