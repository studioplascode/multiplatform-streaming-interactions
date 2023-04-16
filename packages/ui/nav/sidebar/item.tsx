import { faYoutube, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { Platform, SidebarItemProps } from "shared-types";

const SidebarItem = ({ item }: { item: SidebarItemProps }) => {
  let icon;

  switch (item.platform) {
    case Platform.YOUTUBE:
      icon = <FontAwesomeIcon icon={faYoutube} className="h-6 w-6 shrink-0"/>
      break;
    case Platform.TWITCH:
      icon = <FontAwesomeIcon icon={faTwitch} className="h-6 w-6 shrink-0"/>
      break;
    default:
      //@ts-ignore
      icon = <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />;
  }

  return (
    <li key={item.name}>
      <a
        href={item.href}
        className={classNames(
          item.current
            ? "bg-gray-800 text-white"
            : "text-gray-400 hover:text-white hover:bg-gray-800",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
        )}
      >
        {icon}
        {item.name}
      </a>
    </li>
  );
};

export default SidebarItem;
