import { motion } from 'framer-motion';
import { ClipboardList, Code2, RefreshCw, Rocket } from 'lucide-react';
import { SectionHeader } from '@/components/ui-custom';

const steps = [
  {
    id: 1,
    icon: ClipboardList,
    title: 'Requirement',
    description: 'Share your project brief, references, and specific requirements. We\'ll analyze and confirm the scope within hours.',
  },
  {
    id: 2,
    icon: Code2,
    title: 'Design & Build',
    description: 'Our team designs and develops your website with pixel-perfect precision, clean code, and modern best practices.',
  },
  {
    id: 3,
    icon: RefreshCw,
    title: 'Revisions',
    description: 'Review the work and request changes. We offer unlimited revisions until you\'re 100% satisfied with the result.',
  },
  {
    id: 4,
    icon: Rocket,
    title: 'Delivery',
    description: 'Receive your fully functional website with all assets, documentation, and our ongoing support guarantee.',
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-300">
        <div className="absolute top-1/2 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Our Process"
            title="How We Work"
            subtitle="A streamlined 4-step process designed for speed and quality."
          />

          {/* Process Steps - Desktop */}
          <div className="hidden lg:block relative">
            {/* Connection line */}
            <div className="absolute top-24 left-[12.5%] right-[12.5%] h-0.5">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Step number and icon */}
                  <div className="flex flex-col items-center text-center">
                    {/* Icon container */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl glass flex items-center justify-center mb-4 lg:mb-6 group cursor-default"
                    >
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-display font-bold text-xs lg:text-sm">{step.id}</span>
                      </div>
                      
                      <step.icon className="w-6 h-6 lg:w-8 lg:h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-xl lg:rounded-2xl shadow-glow opacity-0 group-hover:opacity-50 transition-opacity" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-display font-semibold text-lg lg:text-xl text-white mb-2 lg:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs lg:text-sm leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline - Mobile/Tablet View */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/30 to-purple-500/0" />
              
              <div className="space-y-6 md:space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative flex items-start gap-4 md:gap-6 pl-1"
                  >
                    {/* Icon with step number */}
                    <div className="relative flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl glass flex items-center justify-center z-10">
                      <step.icon className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-display font-bold text-[10px] md:text-xs">{step.id}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="font-display font-semibold text-base md:text-lg text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
