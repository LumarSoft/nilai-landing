"use client";
import { FramerComponent } from "../Framer/FramerComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";

export const Companys = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-3xl">
        Empresas con las que trabajamos
      </h1>
      <CarouselComponent />
    </div>
  );
};

const CarouselComponent = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
        viewport: { once: true, offset: 0.4 },
      },
    },
  };

  const itemAnimado = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <FramerComponent
        animationVariants={container}
        animationInitial="hidden"
        animationWhileInView="show"
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <CarouselContent className="-ml-4">
          {[1, 2, 3, 4, 5].map((x, i) => (
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/4" key={i}>
              <FramerComponent
                style="p-1"
                animationInitial={{ opacity: 0, y: 50 }}
                animationVariants={itemAnimado}
              >
                <div className="w-full h-40 bg-neutral-500">logo empresa</div>
              </FramerComponent>
            </CarouselItem>
          ))}
        </CarouselContent>
      </FramerComponent>

    </Carousel>
  );
};
