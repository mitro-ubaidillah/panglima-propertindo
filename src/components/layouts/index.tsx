import { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#F6F7FA]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}