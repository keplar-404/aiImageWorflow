import { Workflow, PlugZap, icons } from "lucide-react";

export const dashboardMenuItems: navMenuTypes[] = [
  {
    title: "Workflows",
    url: "/dashboard/workflows",
    icon: Workflow,
  },
  {
    title: "Intigration",
    url: "/dashboard/app_integration",
    icon: PlugZap,
  },
];

export type navMenuTypes = {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
