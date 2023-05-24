import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FloatingButton, HiddenLabelInput } from "ui";

const CreateOverlay = () => {
  return (
    <>
    <div className="grid grid-cols-3 gap-4 h-full">
      <div className="bg-red-600 h-full col-span-2" >
        {/* <HiddenLabelInput id="a" type="range" name="a"/> */}
      </div>
      <div className="bg-white w-full h-[400px]" />
    </div>
      {/* <FloatingButton
        action={() => console.log("Clicked")}
        icon={CheckIcon}
        className="bottom-4 right-4"
      />
    <FloatingButton
        action={() => console.log("Clicked")}
        icon={XMarkIcon}
        className="bottom-4 right-20"
      /> */}
    </>
  );
};

export default CreateOverlay;
