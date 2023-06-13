// Actions
import getCurrentUser from "@/actions/getCurrentUser";
import getFavouriteListings from "@/actions/getFavouriteListings";

// Components
import EmptyState from "@/components/EmptyState";
import ClientOnly from "@/components/ClientOnly";
import FavouriteListingsClient from "./FavouriteListingsClient";

const FavouritesPage = async () => {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favourites"
          subtitle="You have no favourite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavouriteListingsClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavouritesPage;
