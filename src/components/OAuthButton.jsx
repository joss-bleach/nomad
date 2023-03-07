import { FaGoogle } from "react-icons/fa";

const OAuthButton = () => {
  return (
    <button className="mt-6 flex h-[58px] w-full items-center justify-center rounded border border-neutral-400 text-neutral-400">
      <FaGoogle className="mr-3" />
      Continue with Google
    </button>
  );
};

export default OAuthButton;
