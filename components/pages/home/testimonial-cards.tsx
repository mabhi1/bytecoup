"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function TestimonialCards({
  items,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
}) {
  const [mousePoniter, setMousePointer] = useState("cursor-grab");

  return (
    <Carousel className="w-full" opts={{ align: "start", loop: true }}>
      <CarouselPrevious className="bg-white/60 dark:bg-black/60" />
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem
            key={item.quote}
            className={cn("md:basis-1/2 lg:basis-1/3", mousePoniter)}
            onMouseDown={() => setMousePointer("cursor-grabbing")}
            onMouseUp={() => setMousePointer("cursor-grab")}
          >
            <div className="h-full bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-700 dark:to-blue-900 rounded-2xl border border-b-0 border-blue-100 dark:border-blue-700 px-4 py-3">
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-sm leading-[1.6] text-black dark:text-white font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-3 md:mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className=" text-sm leading-[1.6] text-muted-foreground font-normal">{item.name}</span>
                    <span className=" text-sm leading-[1.6] text-muted-foreground font-normal">{item.title}</span>
                  </span>
                </div>
              </blockquote>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="bg-white/60 dark:bg-black/60" />
    </Carousel>
  );
}
