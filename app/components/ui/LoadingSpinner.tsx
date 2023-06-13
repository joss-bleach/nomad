"use client";
import { Loader } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <Loader size={40} className="animate-spin text-nomad-orange" />
    </div>
  );
};

export default LoadingSpinner;
