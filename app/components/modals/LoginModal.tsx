"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// Hooks
import useLoginModal from "@/hooks/useLoginModal";

// Components
import Modal from "@/ui/Modal";
import Heading from "@/ui/Heading";
import Input from "@/ui/forms/Input";
import Button from "@/ui/Button";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success("Welcome back.");
        router.refresh();
        loginModal.onClose();
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Welcome back"
        subtitle="Sign in below to rent or list a property."
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
          Don't have an account?
        </p>
        <p
          role="button"
          onClick={loginModal.onClose}
          className="mt-4 cursor-pointer text-center text-neutral-800 hover:underline"
        >
          Sign up
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Create an account"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(handleOnSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
