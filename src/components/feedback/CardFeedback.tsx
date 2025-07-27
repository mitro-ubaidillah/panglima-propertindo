import ExampleImage from "@/assets/feedback.png";
import { formatDate } from "@/lib/date";
import { FeedbackResponse } from "@/types/feedback";
import { CalendarDays, Check, ImageIcon, LayoutGrid, LayoutList, LucideProps, MessageSquare, MessageSquareDashed, RefreshCw, Star } from "lucide-react";
import Image from "next/image";
import { ComponentType, createElement, PropsWithChildren } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function CardFeedback ({ 
  category,
  created_at,
  id,
  keluhan,
  status,
  sub_category,
  unit
}: FeedbackResponse) {

  const subcategories = sub_category.trim().split(",");
  const visibleSubcategories = subcategories.length > 2 ? subcategories.slice(0, 2) : subcategories;

  return (
    <Card id={id.toString()}>
      <CardContent className="space-y-4">
        <div className="relative w-fit">
          <Image src={ExampleImage} alt="example image" />
          <div className="flex gap-[6px] bg-background rounded-lg p-2 absolute bottom-5 right-5 items-center">
            <ImageIcon size={16} className="text-foreground" />
            <span className="text-sm font-semibold text-foreground">+2</span>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-foreground font-bold">{id}</p>
            <Badge variant="default" className="text-xs">
              {unit}
            </Badge>
          </div>
          {
            status === "resolved" ?
            <Badge variant="default" className="text-xs">
              <Check />
              Selesai
            </Badge>
            :
            <Badge variant="outline" className="text-xs">
              <RefreshCw />
              Belum Selesai
            </Badge>
          }
        </div>
        <span className="flex gap-2 items-center text-secondary-foreground text-sm">
          <CalendarDays className="text-[#71717A]" size={14} />
          {formatDate(created_at)}
        </span>
        <CategorySection title="Kategori" icon={LayoutGrid}>
          <p className="text-foreground font-medium text-sm">{category}</p>
        </CategorySection>
        <CategorySection title="Sub Kategori" icon={LayoutList}>
          <div className="flex gap-2">
            {
              visibleSubcategories.map((item) => (
                <Badge variant="transparent" key={item} className="text-xs">{item}</Badge>
              ))
            }
            {
              subcategories.length > 2 && 
              <Badge variant="transparent" className="text-xs">+{subcategories.length - 2}</Badge>
            }
          </div>
        </CategorySection>
        <div className="bg-muted/50 border-border rounded-sm p-4 space-y-2 h-[100px]">
          <div className="flex gap-2 items-center">
            <MessageSquareDashed size={12} className="text-[#71717A]" />
            <span className="text-muted-foreground text-sm">Keluhan</span>
          </div>
          <p className="text-foreground text-sm line-clamp-2">
            {keluhan}
          </p>
        </div>
        <div className="border border-secondary p-4 rounded-md space-y-2 h-[110px]">
          <div className="flex gap-2 items-center">
            <Star size={12} className="text-[#71717A]" />
            <span className="text-muted-foreground text-sm">Rating</span>
          </div>
          {
            status === "in_progress" ? "-" :
            status === "waiting" ?
            <div className="w-full">
              <Button className="w-full">
                <MessageSquare />
                Beri Rating & Ulasan
              </Button>
            </div>
            :
            <div className="flex justify-between">
              <Rating 
                name="CSA"
                star={5}
              />
              <Rating 
                name="Kontruksi"
                star={5}
              />
            </div>
          }
        </div>
      </CardContent>
    </Card>
  )
}

interface CategorySectionProps extends PropsWithChildren {
  title: string;
  icon: ComponentType<LucideProps>;
}

function CategorySection({ 
  title,
  icon,
  children 
}: CategorySectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[#71717A] text-sm flex gap-2 items-center">
        {createElement(icon, {
          size: 16,
          className: "text-[#71717A]"
        })}
        {title}
      </span>
      {children}
    </div>
  )
}

interface RatingProps {
  star: number;
  name: string;
}

function Rating({
  star,
  name
}: RatingProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm text-foreground">{name}</p>
      <div className="flex gap-[1px]">
        {
          Array.from({ length: star }).map((_, index) => (
            <Star key={index} className="text-[#FA9500]" fill="#FA9500" size={16} />
          ))
        }
      </div>
    </div>
  )
}