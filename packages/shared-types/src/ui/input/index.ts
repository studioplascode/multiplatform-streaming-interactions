import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
    type?: HTMLInputTypeAttribute;
    label?: string;
    placeholder?: string;
    id: string;
    name: string;
};