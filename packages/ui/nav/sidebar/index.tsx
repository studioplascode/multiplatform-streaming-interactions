/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import classNames from "classnames";
import { SidebarProps } from "shared-types";
import MobileSidebarButton from "./mobileBtn";
import MobileSidebar from "./mobile";
import SidebarItem from "./item";
import { PlusSmallIcon } from "@heroicons/react/24/outline";

const Sidebar = (props: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MobileSidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
        items={props.items}
        channels={props.channels}
        logo={props.logo}
      />

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col overflow-y-auto bg-gray-900 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img className="h-8 w-auto" src={props.logo} alt="Your Company" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {props?.items.map((item) => (
                    <SidebarItem item={item} key={item.name} />
                  ))}
                </ul>
              </li>
              <li>
                <div className="relative w-full">
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your Channels
                  </div>
                  <a href="#" className="absolute top-0" style={{ right: 0 }}>
                    <PlusSmallIcon
                      className="h-6 w-6 shrink-0 text-gray-400 hover:text-white"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {props?.channels?.map((channel) => (
                    <SidebarItem item={channel} key={channel.name} />
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                >
                  <img
                    className="h-8 w-8 rounded-full bg-gray-800"
                    src={props.logo}
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">MPSI User Placeholder</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <MobileSidebarButton setSidebarOpen={setSidebarOpen} profilePicture={props.logo} />
    </>
  );
};

export default Sidebar;
