/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import classNames from "classnames";
import { SidebarProps } from "shared-types";
import MobileSidebarButton from "./mobileBtn";
import MobileSidebar from "./mobile";
import SidebarItem from "./item";

const Sidebar = (props: SidebarProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MobileSidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} items={props.items} channels={props.channels} logo={props.logo}/>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col overflow-y-auto bg-gray-900 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src={props.logo}
              alt="Your Company"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {props?.items.map((item) => (
                    <SidebarItem item={item} key={item.name}/>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">
                  Your Channels
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {props?.channels?.map((channel) => (
                    <SidebarItem item={channel} key={channel.name}/>
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
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cook</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <MobileSidebarButton setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default Sidebar;