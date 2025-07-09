import Link from "next/link";
import Image from "next/image";
import { dashboardMenuItems } from "@/data/dashboardMenuData";

export default function AppSidebarHeader() {
  return (
    <Link href={dashboardMenuItems[0].url} className="flex items-center ">
      <Image src="/logo2.png" width={62} height={62} alt="logo" />
      <Image src="/logotext.png" width={90} height={63} alt="logo" className="group-data-[collapsible=icon]:hidden" />
    </Link>
  );
}
