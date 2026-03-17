import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Building2, Users, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui-custom';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'landing',
    icon: Zap,
    title: 'Landing Pages',
    description: 'Fast, conversion-focused landing pages designed to capture leads and drive sales.',
    features: ['48-hour delivery', 'A/B testing ready', 'Mobile-first'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'business',
    icon: Building2,
    title: 'Business Websites',
    description: 'Multi-page websites with modern design and powerful features for your brand.',
    features: ['CMS integration', 'Admin dashboard', 'SEO optimized'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'whitelabel',
    icon: Users,
    title: 'White-label Development',
    description: 'Built for agencies, invisible to your clients. Scale without hiring.',
    features: ['100% white-label', 'Your branding only', 'Scalable team'],
    color: 'from-blue-500 to-cyan-500',
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-300">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[400px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Our Services"
            title="What We Do"
            subtitle="From landing pages to full-scale business websites, we deliver premium solutions that drive results."
          />

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative h-full p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl glass overflow-hidden transition-all duration-500 hover:bg-white/[0.05]">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-11 h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-5 lg:mb-6 shadow-lg`}>
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-white mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-5 lg:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 md:space-y-2 mb-5 md:mb-6 lg:mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to="/services">
                    <Button
                      variant="ghost"
                      className="group/btn text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0 h-auto text-sm md:text-base"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl shadow-glow opacity-30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
