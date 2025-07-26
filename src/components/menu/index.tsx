import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface MenuProps {
  children: ReactNode
}

function Menu({ 
  children
}: MenuProps) {
  return(
    <ul className="flex gap-4 items-center">
      {children}
    </ul>
  )
}

interface MenuItemProps {
  children: ReactNode;
  url: string;
}

function MenuItem({
  children,
  url
}: MenuItemProps) {
  return (
    <li className="text-sm font-medium text-foreground py-2 px-3 cursor-pointer">
      <Link href={url}>
        {children}
      </Link>
    </li>
  )
}

interface MenuDropdownItemProps {
  children: ReactNode;
  submenu?: {
    label: string;
    url: string
  }[]
}

function MenuDropdownItem({
  children,
  submenu
}: MenuDropdownItemProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();

      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      })
    }
  },[isOpen]);

  const dropdown = isOpen && submenu && submenu.length >= 1 ? (
    <ul 
      className={cn(
        "bg-background rounded-lg border border-gray-100 p-1",
        "min-w-[100px] max-w-[250px] w-full",
      )}
      style={{ 
        position: "fixed",
        top: position.top,
        left: position.left
      }}
    >
      {
        submenu.map((item, key) => (
          <li key={key}>
            <Link href={item.url} className="block hover:bg-gray-100 px-4 py-1 w-full h-full text-foreground rounded-md text-sm">
              {item.label}
            </Link>
          </li>
        ))
      }
    </ul>
  ) : null;

  return (
    <li
      ref={triggerRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="text-sm font-medium text-foreground flex gap-2 items-center py-2 px-3 group cursor-pointer relative"
    >
      {children}
      <ChevronDownIcon size={14} className="group-hover:rotate-180 transition-transform duration-200 ease-in-out" />
      {dropdown && createPortal(dropdown, document.body)}
    </li>
  )
}

export { Menu, MenuDropdownItem, MenuItem };

