"use client";
import { useQuery } from "@tanstack/react-query";
import { convexQuery } from "@convex-dev/react-query";

// Components
import { api } from "../../../../convex/_generated/api";

export const CategoryList = () => {
  const { data, isPending, error } = useQuery(
    convexQuery(api.listingCategories.list, {}),
  );

  return <nav>Categories</nav>;
};
