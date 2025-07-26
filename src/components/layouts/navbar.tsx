"use client"

import Logo from "@/assets/logo.png";
import Image from "next/image";
import { Menu, MenuDropdownItem, MenuItem } from "../menu";
import { Button } from "../ui/button";

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

export default function Navbar() {
  return (
    <nav className="bg-background px-30 py-[5px] flex justify-between items-center">
      <Image src={Logo} alt="Logo Panglima Propertindo" />
      <Menu>
        {
          MENU.map((item, key) => (
            item.hasSubMenu ?
            <MenuDropdownItem 
              key={key}
              submenu={item.submenu}
            >
              {item.label}
            </MenuDropdownItem>
            :
            <MenuItem url={item.url} key={key}>{item.label}</MenuItem>
          ))
        }
      </Menu>
      <div className="flex space-x-4">
        <Button variant="outline" color="secondary">Daftar</Button>
        <Button>Masuk</Button>
      </div>
    </nav>
  )
}