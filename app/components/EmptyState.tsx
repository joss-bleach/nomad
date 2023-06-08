"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";

// Components
import Heading from "@/ui/Heading";
import Button from "./ui/Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: FC<EmptyStateProps> = ({
  title = "No matches",
  subtitle = "Try changing the search filters",
  showReset,
}) => {
  const router = useRouter();
  return (
    <section className="flex h-[60vh] flex-col items-center justify-center gap-2">
      <Heading title={title} subtitle={subtitle} centre />
      <div className="mt-4 w-48">
        {showReset && (
          <Button
            outline
            label="Remove search filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </section>
  );
};

export default EmptyState;
