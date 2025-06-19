
import logo from "../../../public/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { navMenuItems } from "@/data/navMenu";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href={`/dashboard/user`} className="flex items-center ">
          <Image src={logo} width={150} height={100} alt="logo" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platfrom</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} >
                      <item.icons />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
