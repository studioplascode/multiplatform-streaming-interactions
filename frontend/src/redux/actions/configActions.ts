import { action } from "../reduxTypes";

export const setId = (id: string) => {
    const obj: action = {
       type: "config/setId",
       payload: id,
    };
 
    return obj;
};