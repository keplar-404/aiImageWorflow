import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";


import AppSidebarHeader from "./AppSidebarHeader";
import MenuItem from "./MenuItem";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="group-data-[side=left]:border-0">
      <SidebarHeader className="bg-accent">
        <AppSidebarHeader />
      </SidebarHeader>
      <SidebarContent className="bg-accent">
        <SidebarGroup>
          <SidebarGroupLabel>Platfrom</SidebarGroupLabel>
          <SidebarGroupContent>
            <MenuItem />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
