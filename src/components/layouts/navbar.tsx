"use client"

import Logo from "@/assets/logo.png";
import { ChevronDown, Menu as MenuIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Menu, MenuDropdownItem, MenuItem } from "../menu";
import { Button } from "../ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

const MENU: {
  label: string;
  url: string;
  hasSubMenu?: boolean;
  submenu?: {
    label: string;
    url: string;
  }[]
}[] = [
  {
    label: "Beranda",
    url: "#",
  },
  {
    label: "Project",
    url: "#",
    hasSubMenu: true,
    submenu: [
      {
        label: "Perumahan Halal Elfida",
        url: "#project"
      },
      {
        label: "Salima Memorial Park - Sambutan",
        url: "#project"
      },
      {
        label: "Pesona Elfida",
        url: "#project"
      },
      {
        label: "Royal Gorden Panglima",
        url: "#project"
      },
      {
        label: "Mulia Park Regency",
        url: "#project"
      },
    ]
  },
  {
    label: "Tentang Kami",
    url: "#"
  },
  {
    label: "Pertanyaan Umum",
    url: "#"
  },
  {
    label: "Cara Booking",
    url: "#"
  }
]

// Mobile Menu Item Component
function MobileMenuItem({ 
  item, 
  onItemClick 
}: { 
  item: typeof MENU[0];
  onItemClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (item.hasSubMenu && item.submenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 text-left hover:bg-muted rounded-md">
          <span className="font-medium">{item.label}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="ml-4 space-y-1">
          {item.submenu.map((subItem, index) => (
            <a
              key={index}
              href={subItem.url}
              className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={onItemClick}
            >
              {subItem.label}
            </a>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <a
      href={item.url}
      className="block py-3 px-4 font-medium hover:bg-muted rounded-md transition-colors"
      onClick={onItemClick}
    >
      {item.label}
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background xl:px-30 lg:px-14 md:px-10 px-4 py-[5px] flex justify-between items-center">
      {/* Logo */}
      <Image src={Logo} alt="Logo Panglima Propertindo" className="md:w-[100px] lg:w-[136px]" />
      
      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <Menu>
          {MENU.map((item, key) => (
            item.hasSubMenu ?
            <MenuDropdownItem 
              key={key}
              submenu={item.submenu}
            >
              {item.label}
            </MenuDropdownItem>
            :
            <MenuItem url={item.url} key={key}>{item.label}</MenuItem>
          ))}
        </Menu>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex space-x-4">
        <Button variant="outline">Daftar</Button>
        <Button>Masuk</Button>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 px-0">
            <SheetHeader className="px-6 pb-4">
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            
            {/* Mobile Menu Items */}
            <div className="px-2 space-y-1">
              {MENU.map((item, key) => (
                <MobileMenuItem 
                  key={key} 
                  item={item} 
                  onItemClick={() => setIsOpen(false)}
                />
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="absolute bottom-6 left-6 right-6 space-y-3">
              <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                Daftar
              </Button>
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Masuk
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}