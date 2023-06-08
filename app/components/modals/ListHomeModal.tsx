"use client";
import { FC, useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

// Hooks
import useListHomeModal from "@/hooks/useListHomeModal";

// Components
import Modal from "@/ui/Modal";
import Heading from "@/ui/Heading";
import CategoryInput from "@/ui/forms/CategoryInput";
import { categories } from "@/components/navbar/Categories";
import CountrySelect from "@/ui/forms/CountrySelect";

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
  const [formStep, setFormStep] = useState<STEPS>(STEPS.CATEGORY);

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
      </div>
    );
  }

  const listHomeModal = useListHomeModal();
  return (
    <Modal
      isOpen={listHomeModal.isOpen}
      onClose={listHomeModal.onClose}
      onSubmit={onNextStep}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={onPreviousStep}
      title="List your property"
      body={bodyContent}
    />
  );
};

export default ListHomeModal;
