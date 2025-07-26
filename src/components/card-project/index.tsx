import { ArrowUpRight, MapPin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export interface CardProjectProps {
  image: StaticImageData;
  title: string;
  address: string;
  type: string[];
  alt?: string;
}

export default function CardProject({
  image,
  title,
  address,
  type,
  alt
}: CardProjectProps) {
  return (
    <Card className="border-none bg-background w-full">
      <CardContent className="space-y-4">
        <Image src={image} alt={alt ?? `Gambar ${title}`} className="max-w-[500px] w-full" />
        
        <h3 className="xl:text-xl lg:text-xl text-foreground font-semibold">{title}</h3>
        
        <div className="flex items-center gap-2">
          <MapPin className="text-secondary" size={24} />
          <div className="lg:w-[90%] xl:w-[90%] w-[80%] space-y-1">
            <p className="text-sm text-secondary-foreground text-ellipsis overflow-hidden whitespace-nowrap">
              {address}
            </p>
            <div className="border-b w-fit text-secondary text-sm border-secondary flex items-center gap-2">
              Lihat di Map
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Tipe Unit</p>
          <UnitTypeBadge type={type} />
        </div>
      </CardContent>
    </Card>
  )
}

function UnitTypeBadge ({ 
  type 
}: { type?: string[] }) {
  const total = type?.length || 0;

  const visible = total > 3 ? type?.slice(0, 3) : type;

  return (
    <div className="flex gap-2 flex-wrap">
      {
        visible?.map((item) => (
          <Badge variant="secondary" key={item}>
            {item}
          </Badge>
        ))
      }
      {
        total > 3 &&
        <Badge variant="secondary">+{total - 3}</Badge>
      }
    </div>
  )
}