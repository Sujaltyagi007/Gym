"use client";
import React from "react";
import { motion } from "motion/react";
import { Check, Star, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

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
    notIncluded: ["Group classes", "Personal training", "Sauna access"],
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
      "Sauna & steam access",
      "Guest passes (2/month)",
    ],
    notIncluded: ["Unlimited personal training"],
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
    notIncluded: [],
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I freeze my membership?",
    answer:
      "Yes! All memberships can be frozen for up to 3 months per year at no additional cost. Just give us 7 days notice before your freeze starts.",
  },
  {
    question: "Is there a joining fee?",
    answer:
      "We have a one-time enrollment fee of ₹999 for all new members. This includes your fitness assessment, personalized workout plan, and access card.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Monthly memberships can be cancelled with 30 days notice. Annual memberships can be cancelled with a small early termination fee after the first 3 months.",
  },
  {
    question: "Do you offer corporate plans?",
    answer:
      "Yes! We have special rates for companies with 10+ employees. Contact our corporate team for custom pricing and benefits.",
  },
  {
    question: "What if I want to upgrade my plan?",
    answer:
      "You can upgrade your plan at any time! The difference in price will be prorated for the current billing period.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees ever. Your membership includes everything listed. The only optional add-ons are personal training packages and premium supplements.",
  },
];

const page = (props: Props) => {
  return (
    <>
      {/* Hero Section */}
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
              Membership Plans
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              INVEST IN <span className="gradient-text">YOURSELF</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your goals. All memberships include
              access to our state-of-the-art facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={cn(
                  "relative rounded-2xl p-8 bg-card border transition-all duration-500 hover:scale-105",
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-border hover:border-primary/50"
                )}
              >
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
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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

      {/* Comparison Table */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              COMPARE <span className="gradient-text">PLANS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-4 text-left font-display text-lg">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center font-display text-lg">
                    Basic
                  </th>
                  <th className="py-4 px-4 text-center font-display text-lg gradient-text">
                    Pro
                  </th>
                  <th className="py-4 px-4 text-center font-display text-lg">
                    Elite
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Gym Access",
                    basic: true,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "24/7 Access",
                    basic: true,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "Group Classes",
                    basic: false,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "Personal Training",
                    basic: false,
                    pro: "2/month",
                    elite: "Unlimited",
                  },
                  {
                    feature: "Nutrition Plan",
                    basic: false,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "Sauna & Steam",
                    basic: false,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "Multi-Location",
                    basic: false,
                    pro: false,
                    elite: true,
                  },
                  {
                    feature: "Guest Passes",
                    basic: false,
                    pro: "2/month",
                    elite: "5/month",
                  },
                ].map((row, index) => (
                  <tr key={row.feature} className="border-b border-border">
                    <td className="py-4 px-4 text-muted-foreground">
                      {row.feature}
                    </td>
                    {["basic", "pro", "elite"].map((plan) => (
                      <td key={plan} className="py-4 px-4 text-center">
                        {typeof row[plan as keyof typeof row] === "boolean" ? (
                          row[plan as keyof typeof row] ? (
                            <Check className="h-5 w-5 text-primary mx-auto" />
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )
                        ) : (
                          <span className="text-primary font-medium">
                            {row[plan as keyof typeof row]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" id="faq">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
              FAQ
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              COMMON <span className="gradient-text">QUESTIONS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-left font-medium">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default page;
