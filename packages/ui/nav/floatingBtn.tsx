import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FloatingButtonProps } from "shared-types";

const FloatingButton = ({
  className,
  href,
  action,
  icon,
  style,
}: FloatingButtonProps) => {
  const Icon = { icon: icon };

  return (
    <div
      className={
        "bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-lg absolute h-10 w-10 cursor-pointer " + className
      }
      style={style}
    >
      {href ? (
        <Link to={href}>
          {/* @ts-ignore */}
          <Icon.icon className="shrink-0" />
        </Link>
      ) : (
        <button className="h-full w-full p-1" onClick={() => action!()}>
          {/* @ts-ignore */}
          <Icon.icon className="shrink-0" />
        </button>
      )}
    </div>
  );
};

export default FloatingButton;
