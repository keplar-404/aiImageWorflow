import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { dashboardMenuItems } from "@/data/dashboardMenuData";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button>
        <Link href={dashboardMenuItems[0].url}>Go to the dahsboard</Link>
      </Button>
    </div>
  );
}
