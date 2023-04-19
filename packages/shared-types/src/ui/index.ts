export * from "./nav";
export * from "./input";
export * from "./cards";

export type Icon = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
    title?: string;
    titleId?: string;
  } & React.RefAttributes<SVGSVGElement> &
    JSX.Element
>;
