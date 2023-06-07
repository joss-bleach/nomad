"use client";
import { Icon } from "lucide-react";
import { FC, MouseEvent } from "react";

interface ButtonProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: Icon;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full rounded transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 ${
        outline ? "bg-white" : "bg-nomad-orange"
      }
      ${outline ? "border-black" : "border-nomad-orange"}
      ${outline ? "text-black" : "text-white"}
      ${small ? "py-1" : "py-3"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-[2px]"}`}
    >
      {Icon && <Icon size="24" className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
