"use client";
import { Layout } from "@/components/layout/Layout";
import { motion } from "motion/react";
import { Target, Heart, Users, Award, MapPin, Clock } from "lucide-react";

type Props = {};

const page = (props: Props) => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every program is designed with measurable outcomes in mind.",
    },
    {
      icon: Heart,
      title: "Community First",
      description: "We build supportive environments where everyone belongs.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Our trainers are the best in the industry, certified and passionate.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Premium equipment and facilities that exceed expectations.",
    },
  ];

  const stats = [
    { value: "15+", label: "Facilities" },
    { value: "1000+", label: "Active Members" },
    { value: "5+", label: "Years of Excellence" },
    { value: "10+", label: "Expert Trainers" },
  ];
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={"/assets/facility-weights.jpg"}
            alt="IronForge Gym Facility"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container px-4 mx-auto relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
              Our Story
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              FORGING <span className="gradient-text">CHAMPIONS</span> SINCE
              2010
            </h1>
            <p className=" text-md lg:text-xl text-muted-foreground">
              What started as a single gym in Mumbai has grown into India's most
              trusted fitness brand. We're not just building bodies – we're
              building confidence, community, and champions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              OUR <span className="gradient-text">VALUES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors text-center"
              >
                <div className="inline-flex p-4 gradient-bg rounded-xl mb-4">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/30" id="team">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
              Leadership
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              MEET THE <span className="gradient-text">TEAM</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Naveen Mann",
                role: "Founder & Head Coach",
                image: "/assets/trainer-1.jpg",
                bio: "Former national-level athlete with a vision to make premium fitness accessible to all.",
              },
              {
                name: "Neha Reddy",
                role: "Director of Wellness",
                image: "/assets/trainer-2.jpg",
                bio: "Certified yoga therapist bringing holistic wellness practices to modern fitness.",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-card border border-border"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-xl object-cover"
                />
                <div className="text-center sm:text-left">
                  <h3 className="font-display text-2xl mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full">
              Find Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Duliya Colony <span className="gradient-text">Alipur</span>
            </h2>
          </motion.div>

          <div className=" flex justify-center items-center rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.2663964249264!2d77.1297259!3d28.801134199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dab0006c64195%3A0x3b932e0e67098aab!2sDream%20Fitness%20gym!5e0!3m2!1sen!2sin!4v1768211417291!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
