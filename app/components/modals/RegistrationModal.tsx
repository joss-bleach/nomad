"use client";
import { FC, useState, useCallback } from "react";
import axios from "axios";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// Hooks
import useRegistrationModal from "@/hooks/useRegistrationModal";

// Components
import Modal from "@/ui/Modal";
import Heading from "@/ui/Heading";

interface RegistrationModalProps {}

const RegistrationModal: FC<RegistrationModalProps> = () => {
  const registrationModal = useRegistrationModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("/api/register", data);
      registrationModal.onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Work from anywhere"
        subtitle="Create an account to rent or list a property."
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registrationModal.isOpen}
      title="Create an account"
      actionLabel="Continue"
      onClose={registrationModal.onClose}
      onSubmit={handleSubmit(handleOnSubmit)}
      body={bodyContent}
    />
  );
};

export default RegistrationModal;
