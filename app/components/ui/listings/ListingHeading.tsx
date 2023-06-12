"use client";
import { FC } from "react";
import Image from "next/image";

// Types
import { SafeUser } from "@/app/types";

// Hooks
import useCountries from "@/app/hooks/useCountries";

// Components
import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadingProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHeading: FC<ListingHeadingProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.label}, ${location?.region}`}
      />
      <div className="relative h-[60vh] w-full overflow-hidden rounded">
        <Image
          alt={title}
          src={imageSrc}
          fill
          className="w-full object-cover"
        />
        <div className="absolute right-5 top-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHeading;
