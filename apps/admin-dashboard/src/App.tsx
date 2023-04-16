import { Platform } from "shared-types";
import "./App.css";

import logo from "./assets/logo_v1_transparent_lowres.png";
import {
  HomeIcon,
  ChatBubbleLeftIcon,
  CpuChipIcon,
  CogIcon
} from "@heroicons/react/24/outline";
import { Sidebar } from "ui";

const sideBarItems = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Chat", href: "#", icon: ChatBubbleLeftIcon, current: false },
  { name: "Overlays", href: "#", icon: CpuChipIcon, current: false },
  { name: "Settings", href: "#", icon: CogIcon, current: false },
];
const channels = [
  { name: "I'm Aron", href: "#", platform: Platform.YOUTUBE, current: false },
  { name: "ImAron85", href: "#", platform: Platform.TWITCH, current: false },
];

const App = () => {
  return (
    <>
      <Sidebar items={sideBarItems} channels={channels} logo={logo} />

      <div>
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  );
};

export default App;
