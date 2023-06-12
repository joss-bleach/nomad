"use client";
import { FC } from "react";
import dynamic from "next/dynamic";

// Types
import { SafeUser } from "@/app/types";
import { Icon } from "lucide-react";

// Hooks
import useCountries from "@/hooks/useCountries";

// Components
import Avatar from "@/ui/Avatar";
import ListingCategory from "@/ui/listings/ListingCategory";
const Map = dynamic(() => import("../../map/Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: Icon;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo: FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <section className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-xl font-semibold">Hosted by {user?.name}</h3>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4">
          <h4 className="font-light text-neutral-500">
            {guestCount} guest{guestCount > 1 && "s"}
          </h4>
          <h4 className="font-light text-neutral-500">
            {roomCount} bedroom{roomCount > 1 && "s"}
          </h4>
          <h4 className="font-light text-neutral-500">
            {bathroomCount} bathroom{bathroomCount > 1 && "s"}
          </h4>
        </div>
        <hr />
        {category && (
          <ListingCategory
            icon={category.icon}
            label={category.label}
            description={category.description}
          />
        )}
        <hr />
        <p className="text-lg font-light text-neutral-500">{description}</p>
        <hr />
        <Map center={coordinates} />
      </div>
    </section>
  );
};

export default ListingInfo;
