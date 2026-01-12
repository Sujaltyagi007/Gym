"use client";
import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type Props = {};

const locations = [
  {
    city: "Mumbai",
    address: "42, Linking Road, Bandra West",
    phone: "+91 22 4567 8901",
    hours: "24/7 Access",
  },
  {
    city: "Delhi NCR",
    address: "15, Connaught Place, New Delhi",
    phone: "+91 11 4567 8902",
    hours: "24/7 Access",
  },
  {
    city: "Bangalore",
    address: "88, Indiranagar, 100 Feet Road",
    phone: "+91 80 4567 8903",
    hours: "24/7 Access",
  },
];

const page = (props: Props) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 mb:pt-32 mb:pb-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
              Get In Touch
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              LET'S <span className="gradient-text">CONNECT</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help you start your fitness journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-6 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border"
            >
              <h2 className="font-display text-2xl sm:text-3xl mb-6">
                SEND US A MESSAGE
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      className="bg-muted border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                      className="bg-muted border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 99999 99999"
                    className="bg-muted border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your fitness goals..."
                    rows={4}
                    required
                    className="bg-muted border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl sm:text-3xl mb-6">
                  CONTACT INFO
                </h2>

                <div className="space-y-4">
                  <a
                    href="tel:+919999999999"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="p-3 gradient-bg rounded-lg shrink-0">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Call Us
                      </div>
                      <div className="font-medium">+91 95559 99934</div>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@ironforge.fit"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="p-3 gradient-bg rounded-lg shrink-0">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Email Us
                      </div>
                      <div className="font-medium">fit@dreamfitness.fit</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="p-3 gradient-bg rounded-lg shrink-0">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Hours</div>
                      <div className="font-medium">24/7 Access for Members</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive Map */}
              <div className="rounded-2xl overflow-hidden border border-border bg-muted">
                <div className="relative w-full h-56 sm:h-64 lg:h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.2663964249264!2d77.1297259!3d28.801134199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dab0006c64195%3A0x3b932e0e67098aab!2sDream%20Fitness%20gym!5e0!3m2!1sen!2sin!4v1768211417291!5m2!1sen!2sin"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
