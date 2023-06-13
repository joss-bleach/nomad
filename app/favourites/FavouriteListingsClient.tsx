import { FC } from "react";

// Types
import { SafeListing, SafeUser } from "../types";

// Container
import Container from "@/ui/Container";
import Heading from "@/ui/Heading";
import ListingCard from "@/ui/listings/ListingCard";

interface FavouriteListingsClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavouriteListingsClient: FC<FavouriteListingsClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favourite listings" subtitle="Your favourite listings." />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavouriteListingsClient;
