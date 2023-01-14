import { widget } from "../../types";
import { action } from "../reduxTypes";

export const setId = (id: string) => {
    const obj: action = {
       type: "config/setId",
       payload: id,
    };
 
    return obj;
};

export const setWidget = (widget: widget) => {
    const obj: action = {
       type: "config/setWidget",
       payload: widget,
    };
 
    return obj;
};