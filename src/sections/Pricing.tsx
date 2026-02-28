import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    description: 'For small businesses',
    price: '₹12,000',
    period: 'starting',
    features: [
      '4–5 page website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form integration',
      'Basic booking integration',
      '1 round of revisions',
    ],
    cta: 'Get Started',
    highlighted: false,
    color: 'border-steel-blue/30',
    badgeColor: 'bg-steel-blue/10 text-steel-blue',
  },
  {
    name: 'Growth',
    description: 'For growing businesses',
    price: '₹25,000',
    period: 'starting',
    features: [
      '8–12 pages',
      'Advanced booking system',
      'Basic admin panel',
      'Performance optimization',
      'SEO structure & metadata',
      '1 month support included',
      '3 rounds of revisions',
    ],
    cta: 'Choose Growth',
    highlighted: true,
    color: 'border-warm-amber/50',
    badgeColor: 'bg-warm-amber/20 text-warm-amber',
  },
  {
    name: 'Enterprise',
    description: 'For scaling businesses',
    price: 'Custom',
    period: 'quote',
    features: [
      'Custom architecture',
      'Dashboard & role-based access',
      'Payment integration',
      'Security-first development',
      'Performance tuning',
      '3 months support included',
      'Unlimited revisions',
    ],
    cta: 'Contact Us',
    highlighted: false,
    color: 'border-steel-blue/30',
    badgeColor: 'bg-steel-blue/10 text-steel-blue',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-steel-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-warm-amber/10 rounded-full blur-3xl" />
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
              Pricing
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Transparent Pricing for{' '}
              <span className="text-steel-blue">Every Stage</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Choose the plan that fits your business needs. All plans include
              our premium quality and dedicated support.
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative ${plan.highlighted ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-warm-amber text-deep-space rounded-full text-sm font-semibold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full bg-card rounded-3xl p-6 lg:p-8 border-2 ${plan.color} ${plan.highlighted ? 'shadow-card-hover' : 'shadow-card'
                    } transition-all duration-300 hover:shadow-card-hover overflow-hidden`}
                >
                  {/* Background Glow for Highlighted */}
                  {plan.highlighted && (
                    <div className="absolute inset-0 bg-gradient-to-b from-warm-amber/5 to-transparent pointer-events-none" />
                  )}

                  <div className="relative z-10">
                    {/* Plan Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${plan.badgeColor}`}>
                      {plan.name}
                    </div>

                    {/* Plan Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl lg:text-5xl font-bold text-foreground">
                          {plan.price}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {plan.period === 'starting' ? 'Starting price' : 'Custom quote'}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted ? 'bg-warm-amber/20' : 'bg-steel-blue/10'
                            }`}>
                            <Check className={`w-3 h-3 ${plan.highlighted ? 'text-warm-amber' : 'text-steel-blue'
                              }`} />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      onClick={scrollToBooking}
                      className={`w-full rounded-full py-6 text-base font-medium transition-all duration-300 group ${plan.highlighted
                          ? 'bg-warm-amber hover:bg-warm-amber/90 text-deep-space'
                          : 'bg-steel-blue hover:bg-arctic-slate text-white'
                        }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              All prices are in INR. Need a custom solution?{' '}
              <button
                onClick={scrollToBooking}
                className="text-steel-blue hover:text-arctic-slate font-medium underline underline-offset-4 transition-colors"
              >
                Let&apos;s talk
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
