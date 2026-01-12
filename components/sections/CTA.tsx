"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import Link from "next/link";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-background" />

      {/* Animated Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container relative mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 gradient-bg rounded-full">
            <Flame className="h-5 w-5 text-primary-foreground" />
            <span className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">
              Limited Time Offer
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            READY TO START YOUR
            <span className="block gradient-text">TRANSFORMATION?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join today and get your first month at 50% off. Plus, receive a free
            fitness assessment and personalized workout plan worth ₹2,999.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="glow" size="xl">
              Claim Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/pricing" className=" cursor-pointer" >
              <Button variant="heroOutline" size="xl" className=" cursor-pointer" >
                View All Plans
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
