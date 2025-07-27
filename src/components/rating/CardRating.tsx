import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";

export interface CardRatingProps {
  name: string;
  rating: number;
  comment: string;
  photo: string;
}

export default function CardRating({
  name,
  rating,
  comment,
  photo
}: CardRatingProps) {
  const getFirstLetter = (name: string) => {
    const names = name.split(" ");
    
    if (names.length === 1) {
      return `${name.substring(0, 1)}${name.substring(name.length - 1, 1)}`;
    }

    let initial = "";

    for (let i = 0; i < names.length; i++) {
      initial += names[i].substring(0, 1);
    }

    return initial;
  }

  return (
    <Card className="background-white rounded-lg h-full w-full">
      <div className="px-6 space-y-6">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={photo} alt={`${name} photo`} />
            <AvatarFallback>{getFirstLetter(name)}</AvatarFallback> 
          </Avatar>

          <span className="text-foreground md:text-lg text-sm font-semibold">{name}</span>
        </div>

        <div className="flex gap-2">
          {Array.from({ length: rating > 5 ? 5 : rating }).map((_, index) => (
            <Star key={index} fill="#FA9500" className="text-secondary md:size-4 size-3"  />
          ))}
        </div>
        
        <p className="text-muted-foreground text-xs md:text-sm">{comment}</p>
      </div>
    </Card>
  )
}