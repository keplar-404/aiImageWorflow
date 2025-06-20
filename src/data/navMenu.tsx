import { Workflow, PlugZap, icons } from "lucide-react";

export const navMenuItems: navMenuTypes[] = [
  {
    title: "Workflows",
    url: "/org/orgid/workflows_alpha",
    icon: Workflow,
  },
  {
    title: "Intigration",
    url: "/org/orgid/app_integration",
    icon: PlugZap,
  },
];

export type navMenuTypes = {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
