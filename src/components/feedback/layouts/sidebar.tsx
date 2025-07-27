"use client"

import LogoMobile from "@/assets/logo-mobile.png";
import Logo from "@/assets/logo.png";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { MessagesSquare } from "lucide-react";
import Image from "next/image";

export default function AppSidebar() {
  const { open } = useSidebar();
  return(
    <Sidebar collapsible="icon">
      <SidebarHeader 
        className={cn(
          "border-b py-[5.1px]",
          open ? "px-5" : "px-1"
        )}
      >
        <Image src={Logo} alt="Logo Panglima Propertindo" className={open ? "block" : "hidden"} />
        <Image src={LogoMobile} alt="Logo Panglima Propertindo" className={open ? "hidden" : "block w-full"} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive>
              <a href="/feedback">
                <MessagesSquare />
                <span>Feedback</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}