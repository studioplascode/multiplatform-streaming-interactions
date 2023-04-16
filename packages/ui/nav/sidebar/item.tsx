import { faYoutube, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { Platform, SidebarItemProps } from "shared-types";

const SidebarItem = ({ item }: { item: SidebarItemProps }) => {
  const loc = useLocation();
  let isCurrent;
  let icon;

  switch (item.platform) {
    case Platform.YOUTUBE:
      icon = <FontAwesomeIcon icon={faYoutube} className="h-6 w-6 shrink-0"/>
      isCurrent = loc.pathname.startsWith("/youtube/"+item.href);
      break;
    case Platform.TWITCH:
      icon = <FontAwesomeIcon icon={faTwitch} className="h-6 w-6 shrink-0"/>
      isCurrent = loc.pathname.startsWith("/twitch/"+item.href);
      break;
    default:
      //@ts-ignore
      icon = <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />;
      isCurrent = loc.pathname.startsWith("/"+item.href);
  }

  return (
    <li key={item.name}>
      <Link
        to={item.href}
        className={classNames(
          isCurrent
            ? "bg-zinc-800 text-white"
            : "text-zinc-400 hover:text-white hover:bg-zinc-800",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
        )}
      >
        {icon}
        {item.name}
      </Link>
    </li>
  );
};

export default SidebarItem;
