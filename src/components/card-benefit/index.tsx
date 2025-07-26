import { XCircle } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";

export interface CardBenefitProps {
  icon: StaticImageData;
  title: string;
  description: string;
  alt: string;
}

export default function CardBenefit({
  icon,
  title,
  description,
  alt
}: CardBenefitProps) {
  return (
    <Card className="bg-primary border-none">
      <CardHeader className="flex items-center gap-2">
        <div className="bg-background rounded-lg p-2 lg:h-[48xp] lg:w-[48px] md:w-[36px] md:h-[36px] relative">
          <Image src={icon} alt={alt} />
          <XCircle className="text-destructive absolute right-[-8px] bottom-[-8px] lg:w-[24px] md:w-[18px]" fill="white" />
        </div>
        <h3 className="font-semibold text-primary-foreground lg:text-xl md:text-sm">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-primary-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}