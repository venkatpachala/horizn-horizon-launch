import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: "SC",
    content: "Horizn transformed our entire digital presence. The automation workflows they built saved us 20+ hours per week, and our new website increased conversions by 300%.",
    rating: 5,
    delay: 0.2
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, GrowthLab",
    avatar: "MR",
    content: "The brand kit Horizn created perfectly captured our vision. Every piece, from the logo to the color palette, tells our story beautifully. Exceptional creative work!",
    rating: 5,
    delay: 0.4
  },
  {
    name: "Emma Thompson",
    role: "Marketing Director, InnovateCorp",
    avatar: "ET",
    content: "Working with Horizn was a game-changer. Their attention to detail and ability to blend creativity with functionality is unmatched. Highly recommend!",
    rating: 5,
    delay: 0.6
  },
  {
    name: "David Park",
    role: "CTO, DataSync",
    avatar: "DP",
    content: "The automation solutions Horizn built are incredible. They integrated seamlessly with our existing systems and the AI workflows have revolutionized our operations.",
    rating: 5,
    delay: 0.8
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What our
            <span className="gradient-text"> clients say</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about their experience working with Horizn.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonial.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass border-white/10 hover:border-white/20 transition-all duration-300 h-full group relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="p-6 relative">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-primary/60 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-6 text-sm lg:text-base">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-white/20">
                      <AvatarImage src={`/api/placeholder/40/40`} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-pink-500 text-white text-sm font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "4.9/5", label: "Average Rating" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "100%", label: "Project Success Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-2xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};