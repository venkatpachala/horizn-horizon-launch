import { motion } from "framer-motion";
import { Monitor, Palette, Zap, ArrowRight, CheckCircle, Clock, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "web-creatives",
    icon: Monitor,
    title: "Web Creatives",
    subtitle: "Stunning Digital Experiences",
    description: "Transform your vision into pixel-perfect, responsive websites that captivate your audience and drive conversions. We create digital experiences that not only look stunning but perform exceptionally.",
    gradient: "from-blue-500 to-cyan-400",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "Performance Optimization",
      "SEO Integration",
      "Content Management Systems",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "Accessibility Compliance"
    ],
    tools: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Figma"],
    timeline: "2-6 weeks",
    price: "Starting at $5,000"
  },
  {
    id: "brand-kits",
    icon: Palette,
    title: "Brand Kits",
    subtitle: "Complete Brand Identities",
    description: "Develop comprehensive brand identities that tell your story and resonate with your target market. From logos to complete style guides, we create cohesive brand experiences.",
    gradient: "from-purple-500 to-pink-400",
    features: [
      "Logo Design & Variations",
      "Color Palette & Typography",
      "Brand Guidelines",
      "Marketing Materials",
      "Business Card Design",
      "Letterhead & Stationery",
      "Social Media Templates",
      "Brand Application Examples"
    ],
    tools: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "Principle"],
    timeline: "1-3 weeks",
    price: "Starting at $2,500"
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation Workflows",
    subtitle: "Intelligent Process Automation",
    description: "Streamline your operations with intelligent automation solutions powered by AI. From simple task automation to complex workflow orchestration, we help you work smarter, not harder.",
    gradient: "from-orange-500 to-red-400",
    features: [
      "Process Analysis & Optimization",
      "Custom Workflow Development",
      "AI Integration & Setup",
      "API Integrations",
      "Data Processing Automation",
      "Email & Communication Automation",
      "CRM & Sales Automation",
      "24/7 Monitoring & Support"
    ],
    tools: ["n8n", "Zapier", "OpenAI API", "Python", "Node.js", "Make"],
    timeline: "1-4 weeks",
    price: "Starting at $3,000"
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and focus on what matters most"
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Deliver exceptional results that exceed expectations"
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-pink-500/10"></div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-8">
                Our
                <span className="gradient-text"> Services</span>
              </h1>
              <p className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions that blend creativity with technology to transform your business 
                and elevate your brand beyond the horizon.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-32">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-cols-2' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-primary font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Pricing & Timeline */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <Badge variant="secondary" className="glass border-white/20 px-4 py-2">
                        <Clock className="h-4 w-4 mr-2" />
                        {service.timeline}
                      </Badge>
                      <Badge variant="secondary" className="glass border-white/20 px-4 py-2">
                        {service.price}
                      </Badge>
                    </div>

                    {/* Tools */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="border-white/20">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="hero" size="lg" className="hero-glow">
                      Get Started
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>

                  {/* Features Card */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="glass border-white/10 p-2">
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground">
                          What's Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 gap-4">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="gradient-text">Horizn?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We don't just deliver projects – we build partnerships that drive long-term success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300 text-center h-full">
                    <CardContent className="p-8">
                      <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              className="glass rounded-2xl p-8 lg:p-12 text-center border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help elevate your brand beyond the horizon. 
                Book a free consultation to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="hero-glow">
                  Book Free Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button variant="glass" size="lg">
                  View Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}