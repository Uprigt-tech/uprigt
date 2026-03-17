import { motion } from 'framer-motion';
import { CheckCircle, Clock, Zap, Shield } from 'lucide-react';
import { stats } from '@/data';

const proofItems = [
  {
    icon: CheckCircle,
    title: '7+ Live Projects',
    description: 'Successfully delivered and running',
  },
  {
    icon: Clock,
    title: '48-hour Delivery',
    description: 'From brief to live website',
  },
  {
    icon: Zap,
    title: 'Modern UI/UX',
    description: 'Performance-focused design',
  },
  {
    icon: Shield,
    title: 'Trusted by Agencies',
    description: 'White-label partnerships',
  },
];

export function ProofSection() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-300">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-300 via-purple-500/5 to-navy-300" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gradient mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Proof Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {proofItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative p-4 md:p-6 rounded-xl md:rounded-2xl glass hover:bg-white/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-3 md:mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-base md:text-lg text-white mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  {item.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl shadow-glow opacity-50" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
