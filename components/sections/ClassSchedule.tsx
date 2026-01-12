"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Clock, Users, Flame } from "lucide-react";

const schedule = [
  {
    time: "06:00 AM",
    name: "Morning HIIT",
    trainer: "Arjun K.",
    duration: "45 min",
    spots: 8,
    intensity: "High",
  },
  {
    time: "07:30 AM",
    name: "Power Yoga",
    trainer: "Neha R.",
    duration: "60 min",
    spots: 12,
    intensity: "Medium",
  },
  {
    time: "09:00 AM",
    name: "Strength Basics",
    trainer: "Vikram S.",
    duration: "50 min",
    spots: 6,
    intensity: "Medium",
  },
  {
    time: "05:30 PM",
    name: "CrossFit WOD",
    trainer: "Arjun K.",
    duration: "60 min",
    spots: 10,
    intensity: "High",
  },
  {
    time: "07:00 PM",
    name: "Zumba Party",
    trainer: "Priya M.",
    duration: "45 min",
    spots: 15,
    intensity: "Medium",
  },
];

export function ClassSchedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className=" py-16 lg:py-24 relative overflow-hidden" ref={ref}>
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
            Today's Classes
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            CLASS <span className="gradient-text">SCHEDULE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our energizing group classes led by expert instructors. Book
            your spot now!
          </p>
        </motion.div>

        {/* Schedule Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-muted/50 border-b border-border text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <div>Time</div>
              <div>Class</div>
              <div className="hidden md:block">Trainer</div>
              <div className="hidden sm:block">Duration</div>
              <div className="text-right">Spots</div>
            </div>

            {/* Rows */}
            {schedule.map((cls, index) => (
              <motion.div
                key={`${cls.time}-${cls.name}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="grid grid-cols-3 lg:grid-cols-5 gap-4 p-4 items-center border-b border-border last:border-0 hover:bg-muted/30 transition-colors group cursor-pointer"
              >
                <div className="font-display text-lg">{cls.time}</div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cls.name}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground md:hidden">
                    <span>{cls.trainer}</span>
                  </div>
                </div>
                <div className="hidden md:block text-muted-foreground">
                  {cls.trainer}
                </div>
                <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{cls.duration}</span>
                </div>
                <div className="flex items-center justify-end gap-3">
                  {cls.intensity === "High" && (
                    <Flame className="h-4 w-4 text-primary" />
                  )}
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-primary font-semibold">
                      {cls.spots}
                    </span>
                    <span className="text-muted-foreground">left</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
