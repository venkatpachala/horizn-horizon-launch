import { motion } from "framer-motion";
import { MessageSquare, Calendar, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Get instant responses",
    action: "Chat with us",
    href: "https://wa.me/1234567890",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: Calendar,
    title: "Book a Call",
    description: "Schedule a consultation",
    action: "Choose time",
    href: "#",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message",
    action: "hello@horizn.agency",
    href: "mailto:hello@horizn.agency",
    gradient: "from-purple-500 to-pink-400"
  }
];

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Get in Touch</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ready to start your
            <span className="gradient-text"> next project?</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Let's discuss how we can help elevate your brand beyond the horizon. 
            Choose your preferred way to connect with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h3>
              <p className="text-muted-foreground mb-8">
                We're here to help bring your vision to life. Reach out through any of these channels 
                and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {method.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                        <div className="text-sm text-primary font-medium">
                          {method.action}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              className="pt-8 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">hello@horizn.agency</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="glass border-white/20 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="glass border-white/20 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="glass border-white/20 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Service Interested
                    </label>
                    <Select>
                      <SelectTrigger className="glass border-white/20 focus:border-primary">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="glass border-white/20">
                        <SelectItem value="web-creatives">Web Creatives</SelectItem>
                        <SelectItem value="brand-kits">Brand Kits</SelectItem>
                        <SelectItem value="automation">Automation Workflows</SelectItem>
                        <SelectItem value="all">All Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      className="glass border-white/20 focus:border-primary min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full hero-glow">
                    Send Message
                    <Send className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};