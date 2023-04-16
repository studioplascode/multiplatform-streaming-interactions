import { Sidebar } from "ui";
import { Platform } from "shared-types";

import logo from "../assets/logo_v1_transparent_lowres.png";
import {
  HomeIcon,
  ChatBubbleLeftIcon,
  CpuChipIcon,
  CogIcon
} from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";

export {default as Dashboard} from "./dashboard";
export {default as Page404} from "./404";

const sideBarItems = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Chat", href: "#", icon: ChatBubbleLeftIcon, current: false },
  { name: "Overlays", href: "#", icon: CpuChipIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];
const channels = [
  { name: "YouTube-Channel Placeholder", href: "#", platform: Platform.YOUTUBE, current: false },
  { name: "Twitch-Channel Placeholder", href: "#", platform: Platform.TWITCH, current: false },
];


const Root = () => {
  return (
    <>
      <Sidebar items={sideBarItems} channels={channels} logo={logo} />

      <div>
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Root;