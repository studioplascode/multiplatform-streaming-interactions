import { Icon } from "..";

export * from "./sidebar";
export * from "./slideover";

export type FloatingButtonProps = {
  icon: Icon;
  action?: Function;
  href?: string;
  style?: React.CSSProperties;
  className?: string;
};
