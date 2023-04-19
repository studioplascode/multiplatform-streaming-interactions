/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { LogoDescrpitionCardProps } from "shared-types";

const LogoDescriptionCard = ({
  logo,
  title,
  key,
  properties,
  actions,
}: LogoDescrpitionCardProps) => {
  return (
    <>
      <li
        key={key}
        className="overflow-hidden rounded-xl border-2 border-zinc-700 bg-zinc-800"
      >
        <div className="flex items-center gap-x-4 border-b border-zinc-900/5 bg-zinc-700 p-6">
          <img
            src={logo || ""}
            alt={title}
            className="h-12 w-12 flex-none rounded-lg bg-zinc-700 object-cover ring-1 ring-zinc-900/10"
          />
          <div className="text-sm font-medium leading-6 text-white">
            {title}
          </div>
          {actions ? (
            <Menu as="div" className="relative ml-auto">
              <Menu.Button className="-m-2.5 block p-2.5 text-zinc-400 hover:text-white">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-zinc-900 py-2 shadow-lg ring-1 ring-zinc-900/5 focus:outline-none">
                  {actions.map((action) => (
                    <Menu.Item key={title + action.label}>
                      {({ active }) => (
                        <a
                          href={action.link}
                          className={classNames(
                            active ? "bg-zinc-800" : "",
                            "block px-3 py-1 text-sm leading-6 text-white"
                          )}
                        >
                          {action.label}
                          <span className="sr-only">, {title}</span>
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            ""
          )}
        </div>
        <dl className="-my-3 divide-y divide-zinc-100 px-6 py-4 text-sm leading-6">
          {properties.map((property) => (
            <div
              className="flex justify-between gap-x-4 py-3"
              key={title + property.label}
            >
              <dt className="text-zinc-400">{property.label}</dt>
              <dd className="text-white">{property.value}</dd>
              {property.badge}
            </div>
          ))}
        </dl>
      </li>
    </>
  );
};

export default LogoDescriptionCard;
