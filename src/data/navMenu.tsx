import { Workflow, PlugZap, icons } from "lucide-react";
import { title } from "process";

export const navMenuItems: navMenuTypes[] = [
  {
    title: "Workflows",
    url: "/dashboard/user/workflows",
    icons: Workflow,
  },
  {
    title: "Intigration",
    url: "/dashboard/user/integration",
    icons: PlugZap,
  },
];

export type navMenuTypes = {
    title: string;
    url: string;
    icons: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
