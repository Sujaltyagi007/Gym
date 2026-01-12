import Link from "next/link";
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about#team" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
  ],
  programs: [
    { name: "Group Classes", path: "/classes" },
    { name: "Personal Training", path: "/classes#personal" },
    { name: "Yoga & Wellness", path: "/classes#yoga" },
    { name: "Corporate Plans", path: "/pricing#corporate" },
  ],
  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "FAQs", path: "/pricing#faq" },
    { name: "Membership", path: "/pricing" },
    { name: "Locations", path: "/contact#locations" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container py-12 mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-3xl mb-2">
                GET <span className="gradient-text">FIT UPDATES</span>
              </h3>
              <p className="text-muted-foreground">
                Subscribe for exclusive offers, workout tips, and new class
                announcements.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-muted border-border min-w-70"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-16 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 flex lg:block flex-col items-center md:text-start text-center col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="font-display text-2xl tracking-wider">
                Dream<span className="text-primary">Fitness</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transform your body and mind with our state-of-the-art facilities,
              expert trainers, and supportive community. Your fitness journey
              starts here.
            </p>
            <div className="space-y-3 flex md:block items-center flex-col ">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 95559 99934</span>
              </a>
              <a
                href="mailto:hello@ironforge.fit"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>fit@dreamfitness.fit</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Duliya Colony, Alipur Delhi 110036</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className=" flex justify-between w-full lg:col-span-3 col-span-1  ">
            <div>
              <h4 className="font-display text-xl mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl mb-6">Programs</h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container py-6 mx-auto ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Dream Fitness. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
