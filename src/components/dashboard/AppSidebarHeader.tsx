import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function AppSidebarHeader() {
  return (
    <Link href={`/org/orgid/workflows_alpha`} className="flex items-center ">
      <Image src={logo} width={150} height={100} alt="logo" />
    </Link>
  );
}
