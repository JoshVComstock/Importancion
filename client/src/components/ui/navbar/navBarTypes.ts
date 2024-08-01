import { ROUTES } from "@/types/enums/Routes";

export interface ButtonNavProps {
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    important?: boolean;
  }
  
  export interface NavItem {
    path: ROUTES;
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children?: NavItem[];
  }