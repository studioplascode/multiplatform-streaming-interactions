import { InputProps } from "shared-types";

const HiddenLabelInput = (props: InputProps) => {
  return (
    <div>
      <label htmlFor={props.id} className="sr-only">
        {props.label}
      </label>
      <input
        type={props.type || "text"}
        name={props.name}
        id={props.id}
        className="block w-full rounded-md border-0 py-1.5 px-4 bg-zinc-700 text-white shadow-sm ring-0 ring-inset placeholder:text-zinc-400 focus:ring-1 ring-white focus:outline-none sm:text-sm sm:leading-6"
        placeholder={props.placeholder || ""}
      />
    </div>
  );
};

export default HiddenLabelInput;
