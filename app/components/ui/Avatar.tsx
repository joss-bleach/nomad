"useclient";
import { FC } from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded"
      height="30"
      width="30"
      src={src || "/images/placeholder-avatar.webp"}
      alt="Avatar"
    />
  );
};

export default Avatar;
