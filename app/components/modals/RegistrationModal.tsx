"use client";
import { useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

// Hooks
import useRegistrationModal from "@/hooks/useRegistrationModal";
import useLoginModal from "@/hooks/useLoginModal";

// Components
import Modal from "@/ui/Modal";
import Heading from "@/ui/Heading";
import Input from "@/ui/forms/Input";
import Button from "@/ui/Button";

const RegistrationModal = () => {
  const registrationModal = useRegistrationModal();
  const loginModal = useLoginModal();
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

  const toggleModal = useCallback(() => {
    registrationModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registrationModal]);

  const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("/api/register", data);
      registrationModal.onClose();
      loginModal.onOpen();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Could not sign up.");
      }
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
      <Input
        id="email"
        type="email"
        label="Email Address"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        type="text"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FaGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with GitHub"
        icon={FaGithub}
        onClick={() => signIn("github")}
      />
      <div className="flex flex-row items-center justify-center gap-2">
        <p className="mt-4 text-center font-light text-neutral-500">
          Already have an account?
        </p>
        <p
          role="button"
          onClick={toggleModal}
          className="mt-4 cursor-pointer text-center text-neutral-800 hover:underline"
        >
          Log in
        </p>
      </div>
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
      footer={footerContent}
    />
  );
};

export default RegistrationModal;
