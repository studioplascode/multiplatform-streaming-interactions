import { CardProps } from "shared-types";

export { default as LogoDescriptionCard } from "./logoDescription";

const Card = ({ title, key, children }: CardProps) => {
  return (
    <>
      <div
        key={key}
        className="overflow-hidden rounded-xl border-2 border-zinc-700 bg-zinc-800"
      >
        {children}
      </div>
    </>
  );
};

export default Card;
