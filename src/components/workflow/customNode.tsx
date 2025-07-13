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
import { Handle, Position } from "@xyflow/react";
import { Progress } from "@/components/ui/progress";

export default function CustomNode() {
  return (
    <div className="relative">
      <Card className="w-[25rem] border-0 shadow-none">
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
        <CardContent className="px-0">
          <div className="flex flex-col gap-y-5">
            <div className="relative mx-4">
              <div className="mx-1">
                <Progress value={40} className=" h-2 mb-2" />
              </div>
              <Button className="cursor-pointer bg-black hover:bg-black/70 w-full ">
                Test
              </Button>
            </div>

            {/* Handles section - placed right after button */}
            <div className="relative flex justify-between items-center w-full px-1">
              {/* Left Handle with text */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Handle
                    type="target"
                    position={Position.Left}
                    id="left-handle"
                    style={{
                      position: "absolute",
                      left: "-11px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "14px",
                      height: "14px",
                      backgroundColor: "#3b82f6",
                      border: "2px solid #ffffff",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 uppercase">Input</span>
              </div>

              {/* Right Handle with text */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 uppercase">Image</span>
                <div className="relative">
                  <Handle
                    type="source"
                    position={Position.Right}
                    id="right-handle"
                    style={{
                      position: "absolute",
                      right: "-11px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "14px",
                      height: "14px",
                      backgroundColor: "#3b82f6",
                      border: "2px solid #ffffff",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="px-4">
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
          </div>
        </CardContent>
        <CardFooter className="pt-6 pb-4">
          <CardDescription>Output</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
