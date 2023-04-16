import { Icon } from "../";
import { Platform } from "../..";

export type SidebarItemProps = {
    name: string;
    href: string;
    icon?: Icon;
    current: boolean;
    platform?: Platform;
};

export type SidebarProps = {
    items: SidebarItemProps[];
    channels: SidebarItemProps[];
    logo: string;
}