import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
];

const footerLinks = {
  Services: [
    { name: "Web Creatives", href: "/services#web-creatives" },
    { name: "Brand Kits", href: "/services#brand-kits" },
    { name: "Automation Workflows", href: "/services#automation" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative mt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          className="border-t border-white/10 pt-16 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center gap-3">
                <img 
                  className="h-10 w-auto" 
                  src="/lovable-uploads/50568571-e1b1-4f06-85bc-755a63323b43.png" 
                  alt="Horizn"
                />
                <span className="text-2xl font-bold gradient-text">horizn</span>
              </div>
              <p className="text-sm leading-6 text-muted-foreground max-w-md">
                Elevating brands beyond the horizon with cutting-edge web creatives, 
                comprehensive brand kits, and intelligent automation workflows.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold leading-6 text-foreground">
                    {category}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {links.map((item) => (
                      <li key={item.name}>
                        <motion.a
                          href={item.href}
                          className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-200"
                          whileHover={{ x: 5 }}
                        >
                          {item.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          className="border-t border-white/10 pt-8 pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="xl:col-span-1">
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Get the latest insights on web design, branding, and automation.
              </p>
            </div>
            <div className="mt-6 xl:col-span-2 xl:mt-0">
              <form className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto glass border-white/20"
                />
                <Button variant="hero" type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Contact info and copyright */}
        <motion.div
          className="border-t border-white/10 pt-8 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="xl:col-span-2">
              <div className="md:grid md:grid-cols-3 md:gap-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  hello@horizn.agency
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </div>
              </div>
            </div>
            <div className="mt-4 xl:mt-0">
              <p className="text-xs leading-5 text-muted-foreground text-right">
                &copy; 2024 Horizn Agency. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};