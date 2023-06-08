"use client";
import { FC, useMemo, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/navigation";

// Hooks
import useListHomeModal from "@/hooks/useListHomeModal";

// Components
import Modal from "@/ui/Modal";
import Heading from "@/ui/Heading";
import CategoryInput from "@/ui/forms/CategoryInput";
import Counter from "@/ui/forms/Counter";
import ImageUpload from "@/ui/forms/ImageUpload";
import Input from "@/ui/forms/Input";
import { categories } from "@/components/navbar/Categories";
import CountrySelect from "@/ui/forms/CountrySelect";
import { toast } from "react-hot-toast";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFORMATION = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

interface ListHomeModalProps {}

const ListHomeModal: FC<ListHomeModalProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formStep, setFormStep] = useState<STEPS>(STEPS.CATEGORY);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const imageSrc = watch("imageSrc");

  const Map = useMemo(
    () =>
      dynamic(() => import("../map/Map"), {
        ssr: false,
      }),
    [location]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onPreviousStep = () => {
    if (formStep === 0) {
      return undefined;
    }
    setFormStep((value) => value - 1);
  };

  const onNextStep = () => {
    if (formStep === 5) {
      return undefined;
    }
    setFormStep((value) => value + 1);
  };

  const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (formStep !== STEPS.PRICE) {
      return onNextStep();
    }
    setIsLoading(true);
    try {
      await axios.post("/api/listings", data);
      toast.success("Listing created successfully.");
      router.refresh();
      reset();
      setFormStep(STEPS.CATEGORY);
      listHomeModal.onClose();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const actionLabel = useMemo(() => {
    if (formStep === STEPS.PRICE) {
      return "Add listing";
    }
    return "Next";
  }, [formStep]);

  const secondaryActionLabel = useMemo(() => {
    if (formStep === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [formStep]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your property?"
        subtitle="Choose a category"
      />
      <div className="grid max-h-[50vh] grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2">
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (formStep === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your property located?"
          subtitle="Choose your location"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  if (formStep === STEPS.INFORMATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some information about the property"
          subtitle="What ameneties do you have?"
        />
        <Counter
          title="Guests"
          subtitle="How many can you accomodate?"
          value={guestCount}
          onChange={(value) => setCustomValue("guestCount", value)}
        />
        <hr />
        <Counter
          title="Bedrooms"
          subtitle="How many bedrooms do you have?"
          value={roomCount}
          onChange={(value) => setCustomValue("roomCount", value)}
        />
        <hr />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
          value={bathroomCount}
          onChange={(value) => setCustomValue("bathroomCount", value)}
        />
      </div>
    );
  }

  if (formStep === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Property images"
          subtitle="Show guests what your property looks like"
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
    );
  }

  if (formStep === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Property description"
          subtitle="Write a brief description of your property."
        />
        <Input
          id="title"
          label="Title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (formStep === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Choose your price"
          subtitle="How much do you charge per night?"
        />
        <Input
          formatPrice
          id="price"
          label="Price"
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  const listHomeModal = useListHomeModal();
  return (
    <Modal
      isOpen={listHomeModal.isOpen}
      onClose={listHomeModal.onClose}
      onSubmit={handleSubmit(handleOnSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={onPreviousStep}
      title="List your property"
      body={bodyContent}
    />
  );
};

export default ListHomeModal;
