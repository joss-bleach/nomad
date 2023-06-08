"use client";
import { FC, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { type Icon } from "lucide-react";
import qs from "query-string";

interface CategoryBoxProps {
  label: string;
  description?: string;
  icon: Icon;
  selected?: boolean;
}

const CategoryBox: FC<CategoryBoxProps> = ({
  label,
  description,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleOnClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleOnClick}
      className={`flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 p-3 transition hover:border-b-neutral-500 hover:text-neutral-800 ${
        selected ? "text-neutral 800" : "text-neutral-500"
      }
      ${selected ? "border-b-neutral-800" : "border-transparent"}`}
    >
      <Icon size={26} />
      <h4 className="text-sm font-medium">{label}</h4>
    </div>
  );
};

export default CategoryBox;
