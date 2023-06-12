"use client";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";

// Types
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { Range } from "react-date-range";

// Hooks
import useLoginModal from "@/hooks/useLoginModal";

// Components
import { categories } from "@/components/navbar/Categories";
import Container from "@/ui/Container";
import ListingHeading from "@/ui/listings/ListingHeading";
import ListingInfo from "@/ui/listings/ListingInfo";
import ListingReservation from "@/ui/listings/ListingReservation";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: FC<ListingClientProps> = ({
  reservations = [],
  listing,
  currentUser,
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    reservations.forEach((reservation: SafeReservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });
      dates = [...dates, ...range];
    });
    return dates;
  }, [reservations]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateReservation = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    setIsLoading(true);
    try {
      await axios.post("/api/reservations", {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing?.id,
      });
      toast.success("Reservation made succesfully.");
      setDateRange(initialDateRange);
      router.push("/trips");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
      toast.error("Reservation could not be made.");
    } finally {
      setIsLoading(false);
    }
  }, [totalPrice, dateRange, listing?.id, router, currentUser, loginModal]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const numberOfDays = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );
      if (numberOfDays && listing.price) {
        setTotalPrice(numberOfDays * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

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
          <div className="order-first mb-10 md:order-last md:col-span-3">
            <ListingReservation
              price={listing.price}
              totalPrice={totalPrice}
              onChangeDate={(value: Range) => setDateRange(value)}
              dateRange={dateRange}
              onSubmit={onCreateReservation}
              disabled={isLoading}
              disabledDates={disabledDates}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
