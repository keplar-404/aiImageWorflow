import { Button } from "@/components/ui/button";
import Link from "next/link";
import { dashboardMenuItems } from "@/data/dashboardMenuData";


export default function page() {
  return (<div className="size-full flex items-center justify-center">

<Link href={"/workflow_alpha/id123"}>
<Button className="cursor-pointer">Create Your Workflow</Button>
</Link>


  </div>);
}
