import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const BurgerButton = ({action} : {action: (val: boolean) => void}) => {
    return (
        <button onClick={() => action(true)}><AdjustmentsHorizontalIcon className="text-zinc-400 hover:text-white absolute top-4 right-4 h-10 w-10 shrink-0"/></button>
    );
};

export default BurgerButton;