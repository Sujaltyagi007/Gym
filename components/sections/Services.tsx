"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Dumbbell, Users, Heart, Zap, Trophy, Clock } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build muscle and increase power with our premium free weights and resistance equipment.",
    image: "/assets/facility-weights.jpg",
    width: 800,
    height: 600,
  },
  {
    icon: Users,
    title: "Group Classes",
    description:
      "High-energy classes including HIIT, Zumba, and CrossFit led by certified instructors.",
    image: "/assets/class-hiit.jpg",
    width: 800,
    height: 600,
  },
  {
    icon: Heart,
    title: "Yoga & Wellness",
    description:
      "Find your zen with yoga, meditation, and holistic wellness programs.",
    image: "/assets/class-yoga.jpg",
    width: 800,
    height: 600,
  },
];

const features = [
  {
    icon: Zap,
    title: "24/7 Access",
    description: "Train anytime that fits your schedule",
  },
  {
    icon: Trophy,
    title: "Personal Training",
    description: "One-on-one expert coaching",
  },
  {
    icon: Clock,
    title: "Flexible Plans",
    description: "Monthly, quarterly, annual options",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            TRAIN YOUR WAY
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From high-intensity workouts to mindful yoga sessions, we have
            everything you need to achieve your fitness goals.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={service.width}
                  height={service.height}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 left-4 p-3 gradient-bg rounded-xl">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 gradient-bg scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid sm:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="p-3 gradient-bg rounded-lg shrink-0">
                <feature.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display text-xl mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
