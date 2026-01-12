"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Lost 15kg in 6 months",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    quote:
      "IronForge completely transformed my life. The trainers are incredibly supportive and the community keeps me motivated every single day.",
    rating: 5,
    width: 200,
    height: 200,
  },
  {
    name: "Rahul Mehta",
    role: "Competitive Bodybuilder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    quote:
      "Best equipped gym I have ever trained in. The 24/7 access is a game-changer for my competition prep schedule.",
    rating: 5,
    width: 200,
    height: 200,
  },
  {
    name: "Ananya Patel",
    role: "Working Professional",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    quote:
      "The group classes are so energizing! I love the variety - from HIIT to yoga, there is something for every mood.",
    rating: 5,
    width: 200,
    height: 200,
  },
  {
    name: "Vikram Singh",
    role: "Marathon Runner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    quote:
      "The cardio equipment and indoor track are world-class. My marathon times have improved significantly since joining.",
    rating: 5,
    width: 200,
    height: 200,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative mx-auto px-4 ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
            Success Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            WHAT OUR <span className="gradient-text">MEMBERS SAY</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives at
            IronForge.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors h-full">
                    {/* Quote Icon */}
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-secondary fill-secondary"
                          />
                        )
                      )}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground/90 text-lg mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={testimonial.width}
                        height={testimonial.height}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-primary">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-card border-border hover:bg-primary hover:border-primary hover:text-primary-foreground" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-card border-border hover:bg-primary hover:border-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
