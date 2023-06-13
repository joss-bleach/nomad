"use client";
import { useMemo } from "react";
import { SearchIcon } from "lucide-react";
import { differenceInCalendarDays } from "date-fns";

// Hooks
import useSearchModal from "@/hooks/useSearchModal";
import { useSearchParams } from "next/navigation";
import useCountries from "@/app/hooks/useCountries";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }
    return "Where?";
  }, [getByValue, locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInCalendarDays(end, start);
      if (diff === 0) {
        diff = 1;
      }
      return `${diff} days`;
    }
    return "When?";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} guests`;
    }
    return "Add guests";
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      aria-label="Open search"
      role="button"
      className="w-full cursor-pointer rounded border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold">{locationLabel}</div>
        <div className="hidden flex-1 border-x-[1px] px-6 text-center text-sm font-semibold sm:block">
          {durationLabel}
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">{guestLabel}</div>
          <div className="rounded bg-nomad-orange p-2 text-white">
            <SearchIcon className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
