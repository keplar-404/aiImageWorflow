"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { navMenuItems } from "@/data/navMenu";

export default function MenuItem() {
  const pathname = usePathname();
  const isActive = (url: string) => pathname === url;

  return (
    <SidebarMenu>
      {navMenuItems.map((item) => (
        <SidebarMenuItem key={item.title} className="">
          <SidebarMenuButton
            asChild
            className={
              isActive(item.url)
                ? "bg-primary text-white hover:bg-primary/90 hover:text-white"
                : "hover:bg-accent/85"
            }
          >
            <Link href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
