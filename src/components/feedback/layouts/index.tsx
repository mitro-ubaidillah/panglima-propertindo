import QueryProvider from "@/components/providers/QueryProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";
import Navbar from "./navbar";
import AppSidebar from "./sidebar";

export default function Layout({
  children
}: PropsWithChildren) {
  return (
    <QueryProvider>
      <div className="flex bg-[#f5f5f5] h-screen">
        <SidebarProvider>
          <AppSidebar />
          <div className="flex flex-col w-screen">
            <Navbar />
            <main className="flex-1 flex flex-col p-4 gap-5">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </div>
    </QueryProvider>
  )
}