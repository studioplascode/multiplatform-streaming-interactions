import { useState } from "react";
import { HiddenLabelInput, Slideover } from "ui";
import { BurgerButton } from "ui/nav/slideover";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

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
      <BurgerButton action={setSlideoverOpen} />
      <Slideover open={slideoverOpen} setOpen={setSlideoverOpen} />
    </>
  );
};

export default Chat;
