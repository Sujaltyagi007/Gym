"use client";
import React from "react";
import { motion } from "motion/react";
import { Clock, Users, Flame, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

const categories = ["All", "Strength", "Cardio", "Yoga", "Dance"];

const classes = [
  {
    name: "Power HIIT",
    category: "Cardio",
    description:
      "High-intensity interval training to maximize calorie burn and boost metabolism.",
    duration: "45 min",
    intensity: "High",
    trainer: "Arjun K.",
    schedule: "Mon, Wed, Fri - 6:00 AM",
    spots: 12,
    image: "/assets/class-hiit.jpg",
  },
  {
    name: "Vinyasa Flow",
    category: "Yoga",
    description:
      "Dynamic yoga sequences linking breath with movement for strength and flexibility.",
    duration: "60 min",
    intensity: "Medium",
    trainer: "Neha R.",
    schedule: "Daily - 7:30 AM",
    spots: 15,
    image: "/assets/class-yoga.jpg",
  },
  {
    name: "Strength Foundations",
    category: "Strength",
    description:
      "Master the fundamental lifts with proper form and progressive overload.",
    duration: "50 min",
    intensity: "Medium",
    trainer: "Vikram S.",
    schedule: "Tue, Thu, Sat - 9:00 AM",
    spots: 8,
    image: "/assets/facility-weights.jpg",
  },
  {
    name: "Zumba Party",
    category: "Dance",
    description:
      "Dance your way to fitness with Latin-inspired moves and high-energy music.",
    duration: "45 min",
    intensity: "Medium",
    trainer: "Priya M.",
    schedule: "Mon, Wed, Fri - 7:00 PM",
    spots: 20,
    image: "/assets/class-hiit.jpg",
  },
  {
    name: "CrossFit WOD",
    category: "Strength",
    description:
      "Constantly varied functional movements performed at high intensity.",
    duration: "60 min",
    intensity: "High",
    trainer: "Arjun K.",
    schedule: "Daily - 5:30 PM",
    spots: 10,
    image: "/assets/facility-weights.jpg",
  },
  {
    name: "Yin Yoga",
    category: "Yoga",
    description:
      "Slow-paced yoga with deep stretches held for extended periods.",
    duration: "75 min",
    intensity: "Low",
    trainer: "Neha R.",
    schedule: "Tue, Thu - 8:00 PM",
    spots: 12,
    image: "/assets/class-yoga.jpg",
  },
];

const page = (props: Props) => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredClasses = classes.filter(
    (cls) => activeCategory === "All" || cls.category === activeCategory
  );

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
              Classes & Programs
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              FIND YOUR <span className="gradient-text">PERFECT FIT</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From high-intensity workouts to mindful yoga sessions, discover
              classes that match your goals and schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-y border-border bg-muted/30 sticky top-20 z-40 backdrop-blur-md">
        <div className="container px-4 mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            <Filter className="h-5 w-5 text-muted-foreground shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? "gradient-bg text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls, index) => (
              <motion.div
                key={cls.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold uppercase bg-primary/90 text-primary-foreground rounded-full">
                      {cls.category}
                    </span>
                  </div>
                  {cls.intensity === "High" && (
                    <div className="absolute top-4 right-4 p-2 bg-card/80 backdrop-blur-sm rounded-full">
                      <Flame className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{cls.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {cls.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{cls.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{cls.spots} spots</span>
                    </div>
                  </div>

                  <div className="text-sm text-primary mb-4">
                    {cls.schedule}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      with {cls.trainer}
                    </span>
                    <Button size="sm">Book Now</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Training CTA */}
      <section className="py-24 bg-muted/30" id="personal">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
              One-on-One Coaching
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              PERSONAL <span className="gradient-text">TRAINING</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get personalized attention and customized workouts tailored to
              your specific goals. Our certified trainers will guide you every
              step of the way.
            </p>
            <Button variant="hero" size="lg">
              Book a Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default page;
