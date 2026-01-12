"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    price: "1,199",
    period: "/month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to gym floor",
      "Locker room access",
      "Fitness assessment",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "1,999",
    period: "/month",
    description: "For serious athletes who want more",
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "2 personal training sessions/month",
      "Nutrition consultation",
      "Guest passes (2/month)",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "2,999",
    period: "/month",
    description: "The ultimate premium experience",
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Priority class booking",
      "Monthly body composition analysis",
      "Exclusive member events",
      "Towel service",
      "Multi-location access",
    ],
    popular: false,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
            Membership Plans
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            INVEST IN <span className="gradient-text">YOURSELF</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your goals. All memberships include access
            to our state-of-the-art facilities.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={cn(
                "relative rounded-2xl p-8 bg-card border transition-all duration-500 hover:scale-105",
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg rounded-full flex items-center gap-1">
                  <Star
                    className="h-4 w-4 text-primary-foreground"
                    fill="currentColor"
                  />
                  <span className="text-sm font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground">₹</span>
                  <span
                    className={cn(
                      "font-display text-5xl",
                      plan.popular ? "gradient-text" : ""
                    )}
                  >
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "p-1 rounded-full mt-0.5",
                        plan.popular ? "gradient-bg" : "bg-primary/20"
                      )}
                    >
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>No hidden fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span>Freeze option available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
