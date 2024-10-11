"use client";
import { useQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "../../../../convex/_generated/api";

// Components
import {
  CategoryListItem,
  CategoryListItemSkeleton,
} from "./category-list-item";

export const CategoryList = () => {
  const { data, isPending, error } = useQuery(
    convexQuery(api.listingCategories.list, {}),
  );

  if (error) {
    return null;
  }

  if (data === null || data?.length === 0) {
    return null;
  }

  if (data) {
    return (
      <nav className="border-1 relative flex h-20 w-full items-center justify-center border-t border-border px-20">
        <ul className="no-scrollbar flex flex-row items-center overflow-x-auto">
          {data.map((category) => (
            <CategoryListItem category={category} key={category._id} />
          ))}
        </ul>
        <div className="pointer-events-none absolute right-20 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent opacity-50"></div>
      </nav>
    );
  }

  if (isPending) {
    return (
      <nav className="border-1 relative flex h-20 w-full items-center justify-center border-t border-border px-20">
        <ul className="no-scrollbar flex flex-row items-center overflow-x-auto">
          {[...Array(30)].map((_, index) => (
            <CategoryListItemSkeleton key={index} />
          ))}
        </ul>
        <div className="pointer-events-none absolute right-20 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent opacity-50"></div>
      </nav>
    );
  }
};
