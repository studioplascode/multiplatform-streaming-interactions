/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import { PlusSmallIcon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Fragment } from "react";
import { SidebarProps } from "shared-types";
import SidebarItem from "./item";

const MobileSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  items,
  channels,
  logo,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
} & SidebarProps) => {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img className="h-8 w-auto" src={logo} alt="Your Company" />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {items?.map((item) => (
                          <SidebarItem item={item} key={item.name} />
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="relative w-full">
                        <div className="text-xs font-semibold leading-6 text-gray-400">
                          Your Channels
                        </div>
                        <a
                          href="#"
                          className="absolute top-0"
                          style={{ right: 0 }}
                        >
                          <PlusSmallIcon
                            className="h-6 w-6 shrink-0 text-gray-400 hover:text-white"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {channels?.map((channel) => (
                          <SidebarItem item={channel} key={channel.name} />
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSidebar;
