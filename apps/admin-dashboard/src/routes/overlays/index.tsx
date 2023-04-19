import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { FloatingButton, LogoDescriptionCard } from "ui";

export { default as CreateOverlay } from "./create";
export { default as EditOverlay } from "./edit";

const statuses = {
  Paid: "text-green-600 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-500 bg-gray-50 ring-gray-200",
  Overdue: "text-red-600 bg-red-50 ring-red-600/10",
};
const clients = [
  {
    id: 1,
    name: "Tuple",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "SavvyCal",
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "Paid",
    },
  },
  {
    id: 3,
    name: "Reform",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      amount: "$7,600.00",
      status: "Paid",
    },
  },
];

const Overlays = () => {
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
      >
        {clients.map((client) => (
          <LogoDescriptionCard
            logo={client.imageUrl}
            title={client.name}
            properties={[{ label: "Test Label", value: "With cool value" }]}
            key={client.id}
          />
        ))}
      </ul>

      <FloatingButton
        href="./create"
        icon={PlusIcon}
        className="bottom-4 right-4"
      />
    </>
  );
};

export default Overlays;
