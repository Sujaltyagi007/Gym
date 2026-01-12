import { ClassSchedule } from "@/components/sections/ClassSchedule";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Trainers } from "@/components/sections/Trainers";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Hero />
      <Services />
      <ClassSchedule />
      <Pricing />
      <Trainers />
      <Testimonials />
      <CTA />
    </>
  );
};

export default page;
