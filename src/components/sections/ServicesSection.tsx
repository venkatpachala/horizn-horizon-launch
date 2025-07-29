import { motion } from "framer-motion";
import { Palette, Package, Zap, ArrowRight, Monitor, Lightbulb, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Monitor,
    title: "Web Creatives",
    description: "Stunning, responsive websites that captivate your audience and drive conversions.",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "Performance Optimization",
      "SEO Integration"
    ],
    gradient: "from-blue-500 to-cyan-400",
    delay: 0.2
  },
  {
    icon: Palette,
    title: "Brand Kits",
    description: "Comprehensive brand identities that tell your story and resonate with your market.",
    features: [
      "Logo Design & Guidelines",
      "Color Palette & Typography",
      "Marketing Materials",
      "Brand Style Guide"
    ],
    gradient: "from-purple-500 to-pink-400",
    delay: 0.4
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    description: "Intelligent automation solutions that streamline operations and boost productivity.",
    features: [
      "Process Automation",
      "AI Integration",
      "Workflow Optimization",
      "24/7 Monitoring"
    ],
    gradient: "from-orange-500 to-red-400",
    delay: 0.6
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Everything you need to
            <span className="gradient-text"> dominate your market</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From stunning web experiences to comprehensive brand identities and intelligent automation workflows, 
            we provide end-to-end solutions that elevate your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300 h-full relative overflow-hidden">
                {/* Card gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardHeader className="relative">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-white/5 border border-white/10 group-hover:border-white/20"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business? Let's discuss your next project.
          </p>
          <Button variant="hero" size="lg" className="hero-glow">
            Start Your Project
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};