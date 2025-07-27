"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Minus, Plus } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0 border-dashed md:px-8 md:py-6 p-4", className)}
      style={{
        borderBottomStyle: 'dashed',
        borderImageSource: `repeating-linear-gradient(to right, #E4E4E7 0, #E4E4E7 8px, transparent 8px, transparent calc(var(--dash-length, 8px) + var(--dash-gap, 4px)))`,
        borderImageSlice: 1,
      }}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-semibold text-foreground transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 group",
          "text-base md:text-lg",
          className
        )}
        {...props}
      >
        {children}
        <div className="relative">
          <Plus className="md:h-6 md:w-6 w-5 h-5 shrink-0 transition-opacity duration-200 group-data-[state=open]:opacity-0" />
          <Minus className="absolute inset-0 md:h-6 md:w-6 w-5 h-5 shrink-0 transition-opacity duration-200 opacity-0 group-data-[state=open]:opacity-100" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-muted-foreground md:text-base text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }

