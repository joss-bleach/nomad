"use client";
import { FC } from "react";
import {
  Grape,
  Palmtree,
  PowerOff,
  Sailboat,
  Waves,
  ConciergeBell,
  Brush,
} from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

// Components
import CategoryBox from "@/ui/CategoryBox";

export const categories = [
  {
    label: "Beach",
    icon: Waves,
    description: "This property is close to the beach.",
  },
  {
    label: "Luxury",
    icon: ConciergeBell,
    description: "This property is a luxury property.",
  },
  {
    label: "Creative space",
    icon: Brush,
    description: "This property is a creative space.",
  },
  {
    label: "Off grid",
    icon: PowerOff,
    description: "This property is remote.",
  },
  {
    label: "Tropical",
    icon: Palmtree,
    description: "This property is in a tropical location.",
  },
  {
    label: "Boats",
    icon: Sailboat,
    description: "This property is a boat.",
  },
  {
    label: "Camping",
    icon: Sailboat,
    description: "This property is in a camping location.",
  },
  {
    label: "Vineyards",
    icon: Grape,
    description: "This property is on a vineyard.",
  },
];

// Components
import Container from "@/ui/Container";

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = () => {
  const params = useSearchParams();
  const urlCategory = params?.get("category");
  const pathname = usePathname();
  const isIndexPage = pathname === "/";

  if (!isIndexPage) {
    return null;
  }
  return (
    <Container>
      <div className="flex flex-row items-center justify-between overflow-x-auto pt-4">
        {categories.map((category) => (
          <CategoryBox
            key={category.label}
            label={category.label}
            icon={category.icon}
            selected={urlCategory === category.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
