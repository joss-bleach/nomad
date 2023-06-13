"use client";
import { FC, useCallback, useMemo, useState } from "react";
import qs from "query-string";
import { formatISO } from "date-fns";
import dynamic from "next/dynamic";

// Types
import { Range } from "react-date-range";

// Hooks
import useSearchModal from "@/hooks/useSearchModal";
import { useRouter, useSearchParams } from "next/navigation";

// Components
import Modal from "@/ui/Modal";
import Heading from "@/ui/Heading";
import CountrySelect, { CountrySelectValue } from "@/ui/forms/CountrySelect";
import Calendar from "@/ui/forms/Calendar";
import Counter from "@/ui/forms/Counter";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFORMATION = 2,
}

interface SearchModalProps {}

const SearchModal: FC<SearchModalProps> = () => {
  const searchModal = useSearchModal();
  const router = useRouter();
  const params = useSearchParams();
  const [formStep, setFormStep] = useState<STEPS>(STEPS.LOCATION);
  const [location, setLocation] = useState<CountrySelectValue>();
  const [guestCount, setGuestCount] = useState<number>(1);
  const [roomCount, setRoomCount] = useState<number>(1);
  const [bathroomCount, setBathroomCount] = useState<number>(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const Map = useMemo(
    () =>
      dynamic(() => import("../map/Map"), {
        ssr: false,
      }),
    [location]
  );

  const onNextFormStep = useCallback(() => {
    setFormStep((value) => value + 1);
  }, []);

  const onPreviousFormStep = useCallback(() => {
    setFormStep((value) => value - 1);
  }, []);

  const handleOnSubmit = useCallback(async () => {
    if (formStep !== STEPS.INFORMATION) {
      return onNextFormStep();
    }

    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    setFormStep(STEPS.LOCATION);
    searchModal.onClose();
    router.push(url);
  }, [
    formStep,
    searchModal,
    location,
    router,
    guestCount,
    roomCount,
    bathroomCount,
    dateRange,
    onNextFormStep,
    params,
  ]);

  const actionLabel = useMemo(() => {
    if (formStep === STEPS.INFORMATION) {
      return "Search";
    }
    return "Next";
  }, [formStep]);

  const secondaryActionLabel = useMemo(() => {
    if (formStep === STEPS.LOCATION) {
      return undefined;
    }
    return "Back";
  }, [formStep]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where do you want to go?"
        subtitle="Choose your location."
      />
      <CountrySelect
        value={location}
        onChange={(value) => setLocation(value as CountrySelectValue)}
      />
      <hr />
      <Map center={location?.latlng} />
    </div>
  );

  if (formStep === STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you want to go?"
          subtitle="Choose your dates."
        />
        <Calendar
          value={dateRange}
          onChange={(value) => setDateRange(value.selection)}
        />
      </div>
    );
  }

  if (formStep === STEPS.INFORMATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="What are you looking for?"
          subtitle="Add any extra information you need."
        />
        <Counter
          title="Guests"
          subtitle="How many guests are coming?"
          value={guestCount}
          onChange={(value) => setGuestCount(value)}
        />
        <hr />
        <Counter
          title="Bedrooms"
          subtitle="How many bedrooms do you need?"
          value={roomCount}
          onChange={(value) => setRoomCount(value)}
        />
        <hr />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you need?"
          value={bathroomCount}
          onChange={(value) => setBathroomCount(value)}
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={handleOnSubmit}
      secondaryAction={
        formStep === STEPS.LOCATION ? undefined : onPreviousFormStep
      }
      secondaryActionLabel={secondaryActionLabel}
      title="Filters"
      actionLabel={actionLabel}
      body={bodyContent}
    />
  );
};

export default SearchModal;
