"use client";
import { FC, useEffect } from "react";

// Components
import EmptyState from "@/components/EmptyState";

interface ErrorStateProps {
  error?: Error;
}

const ErrorState: FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return <EmptyState title="Oops..." subtitle="Something went wrong" />;
};

export default ErrorState;
