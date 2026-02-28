import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Zap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animated background shapes
  const floatingShapes = [
    { size: 300, x: '10%', y: '20%', delay: 0, duration: 8 },
    { size: 200, x: '80%', y: '60%', delay: 1, duration: 10 },
    { size: 150, x: '60%', y: '10%', delay: 2, duration: 7 },
    { size: 250, x: '30%', y: '70%', delay: 0.5, duration: 9 },
    { size: 180, x: '85%', y: '30%', delay: 1.5, duration: 11 },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-steel-blue/10 to-glacier-blue/20"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              filter: 'blur(60px)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isInView ? 0.6 : 0,
              scale: isInView ? 1 : 0.8,
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: shape.delay },
              scale: { duration: 1, delay: shape.delay },
              x: { duration: shape.duration, repeat: Infinity, ease: "easeInOut" },
              y: { duration: shape.duration, repeat: Infinity, ease: "easeInOut", delay: shape.duration * 0.3 },
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Main Content */}
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 mb-8"
            >
              <Shield className="w-4 h-4 text-steel-blue" />
              <span className="text-sm font-medium text-muted-foreground">
                Uprigt / Secure Digital Solutions
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1] tracking-tight mb-8 w-full"
            >
              Building Digital{' '}
              <span className="relative inline-block">
                <span className="text-steel-blue">Systems</span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <motion.path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-warm-amber"
                  />
                </motion.svg>
              </span>
              <br className="hidden sm:block" />
              {' '}Securing Digital{' '}
              <span className="text-arctic-slate">Futures</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed px-4 sm:px-0"
            >
              Uprigt delivers modern websites, scalable applications, and secure
              digital solutions for growing businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4 sm:px-0"
            >
              <Button
                onClick={() => scrollToSection('#booking')}
                size="lg"
                className="bg-steel-blue hover:bg-arctic-slate text-white rounded-full px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg font-medium transition-all duration-300 shadow-card hover:shadow-card-hover group"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#services')}
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg font-medium border-2 border-steel-blue/30 hover:border-steel-blue hover:bg-steel-blue/5 transition-all duration-300"
              >
                View Services
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            >
              {[
                { icon: Shield, label: 'Secure' },
                { icon: Zap, label: 'Fast' },
                { icon: Code, label: 'Modern' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-steel-blue" />
                  <span className="text-sm sm:text-base font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#services')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
