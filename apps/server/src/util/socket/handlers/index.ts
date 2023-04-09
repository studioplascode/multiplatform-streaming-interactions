import { handlerStoreValue } from "shared-types";

export * from "./twitch";

// TODO: this seems very unnecessary and like a suboptimal solution
export const handlerStore = new Map<string, handlerStoreValue>();