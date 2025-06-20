import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";


import AppSidebarHeader from "./AppSidebarHeader";
import MenuItem from "./MenuItem";

export function AppSidebar() {
  return (
    <Sidebar  className="">
      <SidebarHeader className="bg-accent ">
        <AppSidebarHeader />
      </SidebarHeader>
      <SidebarContent className="bg-accent ">
        <SidebarGroup className="">
          <SidebarGroupLabel>Platfrom</SidebarGroupLabel>
          <SidebarGroupContent>
            <MenuItem />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
