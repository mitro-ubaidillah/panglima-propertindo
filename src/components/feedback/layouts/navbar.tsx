import { SidebarTrigger } from "@/components/ui/sidebar";
import { CircleUser } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white px-5 py-[26px] flex justify-between items-center">
      <SidebarTrigger />
      <div className="text-secondary flex gap-2 items-center">
        <CircleUser size={16} />
        <span className="font-medium text-sm">Nama User</span>
      </div>
    </div>
  )
}