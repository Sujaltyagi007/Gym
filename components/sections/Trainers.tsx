"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Instagram, Award } from "lucide-react";

const trainers = [
  {
    name: "Naveen Mann",
    specialty: "Strength & Conditioning",
    experience: "12+ years",
    certifications: ["NASM-CPT", "CrossFit L2", "Sports Nutrition"],
    image: "/assets/trainer-1.jpg",
    instagram: "#",
  },
  {
    name: "Neha Reddy",
    specialty: "Yoga & Mobility",
    experience: "8+ years",
    certifications: ["RYT-500", "Prenatal Yoga", "Meditation"],
    image: "/assets/trainer-2.jpg",
    instagram: "#",
  },
];

export function Trainers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="container relative mx-auto px-4 ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
            Expert Coaches
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            MEET YOUR <span className="gradient-text">TRAINERS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our certified fitness professionals are dedicated to helping you
            achieve your goals with personalized guidance.
          </p>
        </motion.div>

        {/* Trainer Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent" />

                {/* Social Link */}
                <a
                  href={trainer.instagram}
                  className="absolute top-4 right-4 p-3 bg-card/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl mb-1">{trainer.name}</h3>
                <p className="text-primary font-medium mb-3">
                  {trainer.specialty}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Award className="h-4 w-4 text-primary" />
                  <span>{trainer.experience} Experience</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
