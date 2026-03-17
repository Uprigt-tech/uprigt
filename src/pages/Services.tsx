import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Building2, 
  Users, 
  Check, 
  ArrowRight, 
  Clock, 
  Sparkles,
  Shield,
  TrendingUp
} from 'lucide-react';
import { SectionHeader } from '@/components/ui-custom';
import { Button } from '@/components/ui/button';
import { services } from '@/data';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Building2,
  Users,
};

const additionalFeatures = [
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most projects delivered within 48 hours',
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Pixel-perfect designs with clean code',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Best practices for security and performance',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimized',
    description: 'Built to rank and convert visitors',
  },
];

export function Services() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-32 pb-16 md:pb-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy-300">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <SectionHeader
            badge="What We Offer"
            title="Our Services"
            subtitle="From landing pages to white-label partnerships, we provide comprehensive web development solutions tailored to your needs."
          />

          {/* Services Detail Cards */}
          <div className="space-y-4 md:space-y-8 mb-16 md:mb-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Zap;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="relative p-5 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl glass overflow-hidden">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative grid md:grid-cols-2 gap-5 md:gap-8 items-center">
                      {/* Left: Content */}
                      <div>
                        <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 md:mb-6 shadow-glow">
                          <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                        </div>
                        
                        <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-white mb-3 md:mb-4">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">
                          {service.fullDescription}
                        </p>
                        
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                          <span className="text-xs md:text-sm text-gray-500">Starting from:</span>
                          <span className="font-display font-bold text-lg md:text-xl text-purple-400">
                            {service.priceRange}
                          </span>
                        </div>
                        
                        <Link to="/contact">
                          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-5 md:px-6 py-4 md:py-5 text-sm md:text-base shadow-glow group/btn">
                            Get Started
                            <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                      
                      {/* Right: Features */}
                      <div className="glass rounded-xl md:rounded-2xl p-4 md:p-6 mt-4 md:mt-0">
                        <h4 className="font-display font-semibold text-white mb-3 md:mb-4 text-sm md:text-base">
                          What's Included
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 md:gap-3">
                              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-purple-400" />
                              </div>
                              <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <h3 className="font-display font-bold text-xl md:text-2xl text-white text-center mb-6 md:mb-10">
              Why Choose Uprigt
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="p-4 md:p-6 rounded-xl md:rounded-2xl glass text-center"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <h4 className="font-display font-semibold text-white mb-1 md:mb-2 text-sm md:text-base">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
              
              <div className="relative">
                <h3 className="font-display font-bold text-lg md:text-2xl lg:text-3xl text-white mb-3 md:mb-4">
                  Not sure which service you need?
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 max-w-lg mx-auto">
                  Let's discuss your project and find the perfect solution for your requirements.
                </p>
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base shadow-glow group"
                  >
                    Book a Free Consultation
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
