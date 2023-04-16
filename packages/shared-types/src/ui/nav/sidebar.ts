import { Icon } from "../";

export type SidebarItemProps = {
    name: string;
    href: string;
    icon: Icon;
    current: boolean;
};

export type SidebarProps = {
    items: SidebarItemProps[];
    channels: SidebarItemProps[];
    logo: string;
}