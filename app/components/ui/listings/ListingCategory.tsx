"use client";
import { FC } from "react";

// Types
import { Icon } from "lucide-react";

interface ListingCategoryProps {
  icon: Icon;
  label: string;
  description: string;
}

const ListingCategory: FC<ListingCategoryProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} className="text-neutral-600" />
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold">{label}</h5>
          <p className="font-light text-neutral-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ListingCategory;
