import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { X } from "lucide-react";
import { Textarea } from "../ui/textarea";

export default function CustomNode() {
  return (
    <Card className="w-[25rem]">
      <CardHeader className="px-4">
        <CardDescription className="flex gap-x-3">
          <Image src={"/gpt.svg"} width={16} height={16} alt="gpt" />
          <p className="[word-spacing:0.01rem]"> GPT Image</p>
        </CardDescription>

        <CardAction>
          <div className=" cursor-pointer hover:bg-gray-300 p-[4px] rounded-sm">
            <X size={16} />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex flex-col gap-y-5">
          <Button className="cursor-pointer bg-black hover:bg-black/70">
            Test
          </Button>

          <div className="flex flex-col gap-y-1.5">
            <Label className="text-sm">Title</Label>
            <Input placeholder="Enter title" className="mb-4" />
          </div>

          <div className="flex flex-col gap-y-1.5">
            <Label className="text-sm">Description</Label>
            <Textarea
              placeholder="Enter description"
              className="mb-4 [&::-webkit-resizer]:opacity-0"
            />
          </div>

          <div className="flex flex-col gap-y-1.5">
            <Label className="text-sm">API Key</Label>
            <Input placeholder="43Kk4..." type="password" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-6 pb-4">
        <CardDescription>Output</CardDescription>
      </CardFooter>
    </Card>
  );
}
