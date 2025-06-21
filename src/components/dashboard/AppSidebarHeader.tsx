import Link from "next/link";
import logotext from "../../../public/logotext.png";
import logo2 from "../../../public/logo2.png";
import Image from "next/image";
import { navMenuItems } from "@/data/navMenu";

export default function AppSidebarHeader() {
  return (
    <Link href={navMenuItems[0].url} className="flex items-center ">
      <Image src={logo2} width={62} height={62} alt="logo" />
      <Image src={logotext} width={90} height={63} alt="logo" className="group-data-[collapsible=icon]:hidden" />
    </Link>
  );
}
