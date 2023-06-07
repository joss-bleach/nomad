"useclient";
import { FC } from "react";
import Image from "next/image";

interface AvatarProps {}

const Avatar: FC<AvatarProps> = () => {
  return (
    <Image
      className="rounded"
      height="30"
      width="30"
      src="/images/placeholder-avatar.webp"
      alt="Avatar"
    />
  );
};

export default Avatar;
