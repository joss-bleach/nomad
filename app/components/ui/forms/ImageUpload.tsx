"use client";
import { FC, useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { ImagePlus } from "lucide-react";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleOnUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );
  return (
    <CldUploadWidget
      onUpload={handleOnUpload}
      uploadPreset="ydtsecaw"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            aria-label="Upload a photo of your property"
            className="relative flex cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed border-neutral-300 p-20 text-neutral-600 transition hover:opacity-70"
          >
            <ImagePlus size={50} />
            <p className="text-lg font-semibold">Click to upload a photo</p>
            {value && (
              <div className="absolute inset-0 h-full w-full">
                <Image
                  alt="upload"
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
