import { useState } from "react";
import { HiddenLabelInput, Slideover, FloatingButton } from "ui";
import { AdjustmentsHorizontalIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

//TODO: Make adjust width to sliderover so both can be interacted with
const Chat = () => {
  const [slideoverOpen, setSlideoverOpen] = useState(false);

  return (
    <>
      <div className="h-full relative">
        <div className="flex w-full content-center justify-evenly absolute bottom-0 left-0">
          <div className="w-[90%]">
            <HiddenLabelInput
              type="text"
              id="chatMessageInput"
              name="chatMessageInput"
              placeholder="Start Typing"
            />
          </div>
          <button>
            <PaperAirplaneIcon className=" text-zinc-400 hover:text-white h-8 w-8 shrink-0" />
          </button>
        </div>
      </div>
      <FloatingButton action={() => setSlideoverOpen(true)} icon={AdjustmentsHorizontalIcon} className="top-4 right-4"/>
      <Slideover open={slideoverOpen} setOpen={setSlideoverOpen} />
    </>
  );
};

export default Chat;
