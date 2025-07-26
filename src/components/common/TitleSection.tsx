import { PropsWithChildren } from "react";

export default function TitleSection({ 
  children
}: PropsWithChildren) {
  return (
    <h2 className="xl:text-3x lg:text-3xl md:text-2xl font-semibold text-foreground">
      {children}
    </h2>
  )
} 