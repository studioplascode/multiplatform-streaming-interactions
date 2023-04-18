import { Sidebar } from "ui";
import { Platform } from "shared-types";

import logo from "../assets/logo_v1_transparent_lowres.png";
import {
  HomeIcon,
  ChatBubbleLeftIcon,
  CpuChipIcon,
  CogIcon,
  RectangleStackIcon
} from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";

export {default as Dashboard} from "./dashboard";
export {default as Page404} from "./404";
export {default as Chat} from "./chat";

const sideBarItems = [
  { name: "Dashboard", href: "dashboard", icon: HomeIcon },
  { name: "Chat", href: "chat", icon: ChatBubbleLeftIcon },
  { name: "Overlays", href: "overlays", icon: RectangleStackIcon },
  { name: "Settings", href: "settings", icon: CogIcon },
];
const channels = [
  { name: "YouTube-Channel Placeholder", href: "#", platform: Platform.YOUTUBE },
  { name: "Twitch-Channel Placeholder", href: "#", platform: Platform.TWITCH },
];


const Root = () => {
  return (
    <>
      <Sidebar items={sideBarItems} channels={channels} logo={logo} />

      <div className="h-full">
        <main className="py-10 lg:pl-72 bg-zinc-950 h-full">
          <div className="px-4 sm:px-6 lg:px-8 h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Root;