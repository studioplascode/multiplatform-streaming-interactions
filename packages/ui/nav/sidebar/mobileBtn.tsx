/* eslint-disable @next/next/no-img-element */
import {
    Bars3Icon,
  } from "@heroicons/react/24/outline";

const MobileSidebarButton = ({setSidebarOpen, profilePicture}: {setSidebarOpen: (value: boolean) => void, profilePicture: string}) => {
    return (
        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-zinc-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-zinc-400 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          Dashboard
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            className="h-8 w-8 rounded-full bg-zinc-800"
            src={profilePicture}
            alt=""
          />
        </a>
      </div>
    );
}

export default MobileSidebarButton;