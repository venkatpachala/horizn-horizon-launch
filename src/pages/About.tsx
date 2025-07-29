import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Zap, Heart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We blend AI precision with human creativity to deliver pixel-perfect results.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying ahead of the curve with cutting-edge technologies and creative solutions.",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Every project is crafted with care, dedication, and unwavering attention to detail.",
    gradient: "from-orange-500 to-red-400"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building lasting partnerships through transparent communication and shared success.",
    gradient: "from-green-500 to-emerald-400"
  }
];

const timeline = [
  {
    year: "2023",
    title: "The Vision",
    description: "Horizn was founded with a vision to bridge the gap between AI automation and creative excellence."
  },
  {
    year: "2024",
    title: "Rapid Growth",
    description: "Delivered 100+ successful projects, helping businesses across industries transform their digital presence."
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Pioneered advanced automation workflows that revolutionize how businesses operate."
  },
  {
    year: "Future",
    title: "Beyond the Horizon",
    description: "Continuing to push boundaries and explore new frontiers in web development and AI automation."
  }
];

export default function About() {
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
                About
                <span className="gradient-text"> Horizn</span>
              </h1>
              <p className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
                We're a creative agency that blends AI precision with creative magic to deliver 
                exceptional digital experiences that elevate brands beyond the horizon.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Our <span className="gradient-text">Vision</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Horizn, we envision a future where technology and creativity seamlessly merge 
                  to create extraordinary digital experiences. We believe that every brand has a 
                  unique story to tell, and we're here to help you tell it in the most compelling way possible.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through our innovative approach to web development, brand design, and automation workflows, 
                  we help businesses not just reach their goals, but surpass them entirely.
                </p>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="glass rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <Eye className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "To empower businesses with cutting-edge digital solutions that blend AI precision 
                    with human creativity, helping them achieve unprecedented growth and success in the digital landscape."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-2xl text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                These core values guide everything we do and shape how we work with our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300 h-full group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                From inception to innovation, here's how we've grown and evolved.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-pink-500"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative flex items-start gap-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center relative z-10">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="glass rounded-xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl font-bold gradient-text">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}