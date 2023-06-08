"use client";
import { FC } from "react";
import { type Icon } from "lucide-react";

interface CategoryInputProps {
  label: string;
  icon: Icon;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: FC<CategoryInputProps> = ({
  label,
  icon: Icon,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex cursor-pointer flex-col gap-3 rounded border-2 p-4 transition hover:border-black ${
        selected ? "border-black" : "border-neutral-200"
      }`}
    >
      <Icon size={30} />
      <h5 className="font-semibold">{label}</h5>
    </div>
  );
};

export default CategoryInput;
