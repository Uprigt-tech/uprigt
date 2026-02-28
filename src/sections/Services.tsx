import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe,
  LayoutDashboard,
  CalendarDays,
  Settings,
  TrendingUp,
  ShieldCheck,
  //ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Business Website Development',
    description: 'Modern, responsive websites that convert visitors into customers. Built with clean code and SEO best practices.',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-600',
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Web Applications',
    description: 'Tailored web apps designed to solve your unique business challenges with intuitive user experiences.',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-600',
  },
  {
    icon: CalendarDays,
    title: 'Booking & Automation Systems',
    description: 'Streamline appointments, payments, and notifications with integrated automation workflows.',
    color: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-green-600',
  },
  {
    icon: Settings,
    title: 'Admin Dashboards & Internal Tools',
    description: 'Powerful dashboards that give you complete control over your data, users, and operations.',
    color: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-orange-600',
  },
  {
    icon: TrendingUp,
    title: 'Performance Optimization',
    description: 'Lightning-fast load times and optimized performance that improves SEO and user satisfaction.',
    color: 'from-red-500/20 to-rose-500/20',
    iconColor: 'text-red-600',
  },
  {
    icon: ShieldCheck,
    title: 'Website Security & Infrastructure',
    description: 'Enterprise-grade security, regular backups, and robust infrastructure you can rely on.',
    color: 'from-teal-500/20 to-cyan-500/20',
    iconColor: 'text-teal-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-steel-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glacier-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-steel-blue/10 text-steel-blue text-sm font-medium mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Everything You Need to{' '}
              <span className="text-steel-blue">Succeed Online</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              From concept to launch, we provide end-to-end digital solutions
              tailored to your business goals.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative h-full bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-subtle hover:shadow-card transition-all duration-300 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-steel-blue/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-steel-blue transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-steel-blue font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {/*<span className="text-sm">Learn more</span>*/}
                      {/*<ArrowRight className="w-4 h-4" />*/}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
