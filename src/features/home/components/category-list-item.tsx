import { useQueryState } from "nuqs";
import { usePathname } from "next/navigation";
import { Doc } from "../../../../convex/_generated/dataModel";
import { getIcon } from "./icons";

import { cn } from "@/lib/utils";

// Types
interface CategoryListItemProps {
  category: Doc<"listingCategories">;
}

// Components
import { Skeleton } from "@/components/ui/skeleton";

export const CategoryListItem = ({ category }: CategoryListItemProps) => {
  const [categoryState, setCategoryState] = useQueryState("category");
  const pathname = usePathname();

  const handleSetCategory = () => {
    if (pathname === "/") {
      if (categoryState === category.icon) {
        setCategoryState(null);
      } else {
        setCategoryState(category.icon);
      }
    } else {
      setCategoryState(null);
    }
  };

  const isActive = categoryState === category.icon;

  return (
    <li
      role="button"
      aria-label={`View ${category.name} properties.`}
      className="group relative flex h-20 cursor-pointer flex-col items-center justify-center text-xs font-semibold"
      onClick={handleSetCategory}
    >
      <div className="flex w-24 flex-col items-center justify-center">
        {getIcon(category.icon, isActive ? "active" : "default")}
        <span
          className={cn(
            "mt-1",
            isActive ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {category.name}
        </span>
        <span
          className={cn(
            "absolute bottom-0 left-0 hidden h-0.5 w-full",
            isActive
              ? "block bg-foreground"
              : "transform bg-muted transition duration-200 ease-out group-hover:block",
          )}
        />
      </div>
    </li>
  );
};

export const CategoryListItemSkeleton = () => {
  return (
    <li className="group relative flex h-20 flex-col items-center justify-center text-xs font-semibold">
      <div className="flex w-24 flex-col items-center justify-center">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="mt-1 h-3 w-16" />
      </div>
    </li>
  );
};
