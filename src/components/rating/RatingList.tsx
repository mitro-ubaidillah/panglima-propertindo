import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import CardRating, { CardRatingProps } from "../card-rating";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";

export default function RatingList({ 
  data 
}: {data: CardRatingProps[]}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    })
  },[api])

  return (
    <div className="space-y-12">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          })
        ]}
        setApi={setApi}
        opts={{ 
          align: "start",
          loop: true
        }}
      >
        <CarouselContent>
            {data.map((item, key) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={key}>
                <CardRating {...item} />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-200  border-[#CDCDCD] rounded-full border", 
              index + 1 === current ? "bg-primary" : "bg-transparent",
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}