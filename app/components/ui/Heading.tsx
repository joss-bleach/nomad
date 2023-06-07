import { FC } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  centre?: boolean;
}

const Heading: FC<HeadingProps> = ({ title, subtitle, centre }) => {
  return (
    <div className={`${centre ? "text-center" : "text-start"}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <h4 className="mt-2 font-light text-neutral-500">{subtitle}</h4>
    </div>
  );
};

export default Heading;
