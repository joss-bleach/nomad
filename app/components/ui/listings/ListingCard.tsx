"use client";
import { Listing, Reservation } from "@prisma/client";
import { FC, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import Image from "next/image";

// Types
import { SafeListing, SafeUser } from "@/app/types";

// Hooks
import useCountries from "@/app/hooks/useCountries";

// Components
import HeartButton from "@/ui/HeartButton";
import Button from "@/ui/Button";

interface ListingCardProps {
  data: SafeListing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price + "/ night";
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} — ${format(end, "PP")}`;
  }, [reservation]);

  const location = getByValue(data.locationValue);

  return (
    <div
      className="group col-span-1 cursor-pointer"
      onClick={() => router.push(`/listings/${data.id}`)}
    >
      <div className="flex w-full flex-col gap-2">
        <div className="relative aspect-square w-full overflow-hidden rounded">
          <Image
            alt={data.title}
            src={data.imageSrc}
            fill
            className="group h-full w-full object-cover transition hover:scale-110"
          />
          <div className="absolute right-3 top-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <h4 className="text-lg font-semibold">
          {location?.label}{" "}
          <span className="text-sm font-light">{location?.region}</span>
        </h4>
        <h5 className="font-light text-neutral-500">
          {reservationDate || data.category}
        </h5>
        <div className="flex flex-row items-center gap-1">
          <p className="font-semibold">£{price}</p>
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
