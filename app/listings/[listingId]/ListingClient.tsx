"use client";
import { FC, useMemo } from "react";

// Types
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";

// Components
import { categories } from "@/app/components/navbar/Categories";
import Container from "@/ui/Container";
import ListingHeading from "@/ui/listings/ListingHeading";
import ListingInfo from "@/ui/listings/ListingInfo";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: FC<ListingClientProps> = ({
  reservations,
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((category) => category.label === listing.category);
  }, [listing.category]);
  return (
    <Container>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col gap-6">
          <ListingHeading
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-7 md:gap-10">
          <ListingInfo
            user={listing.user}
            category={category}
            description={listing.description}
            roomCount={listing.roomCount}
            guestCount={listing.guestCount}
            bathroomCount={listing.bathroomCount}
            locationValue={listing.locationValue}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
