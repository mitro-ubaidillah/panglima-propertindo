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
        <div className="bg-background rounded-lg p-2 h-[48xp] w-[48px] relative">
          <Image src={icon} alt={alt} width={32} height={32} />
          <XCircle className="text-destructive absolute right-[-8px] bottom-[-8px]" size={24} fill="white" />
        </div>
        <h3 className="font-semibold text-primary-foreground text-xl">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-primary-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}