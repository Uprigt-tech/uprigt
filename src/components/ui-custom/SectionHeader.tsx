import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  badge?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  align = 'center',
  badge 
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`${alignClasses[align]} mb-8 md:mb-12 lg:mb-16`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full glass text-purple-400 text-xs md:text-sm font-medium mb-3 md:mb-4"
        >
          {badge}
        </motion.span>
      )}
      
      <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
