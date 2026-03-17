import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Code2, 
  ArrowRight,
  Target,
  Heart,
  Rocket
} from 'lucide-react';
import { SectionHeader } from '@/components/ui-custom';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Zap,
    title: 'Speed',
    description: 'We deliver projects in record time without compromising on quality.',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Count on us to meet deadlines and exceed expectations every time.',
  },
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Our code is maintainable, scalable, and follows best practices.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Pixel-perfect implementation of designs with attention to detail.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and it shows in every project we deliver.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Always exploring new technologies to deliver cutting-edge solutions.',
  },
];

const techStack = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Next.js',
  'Node.js',
  'Framer Motion',
  'Vite',
  'shadcn/ui',
];

export function About() {
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
        <div className="absolute top-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <SectionHeader
            badge="About Us"
            title="The Story Behind Uprigt"
            subtitle="We're on a mission to help agencies deliver exceptional web experiences without the overhead of hiring."
          />

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-24"
          >
            {/* Left: Content */}
            <div>
              <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-white mb-4 md:mb-6">
                Built for Agencies, by Developers Who Care
              </h3>
              <div className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
                <p>
                  Uprigt was born from a simple observation: agencies need reliable development partners 
                  who can deliver quality work fast, without the complexity of hiring full-time developers.
                </p>
                <p>
                  We understand the challenges agencies face—tight deadlines, demanding clients, and the 
                  constant pressure to deliver more with less. That's why we've built our entire operation 
                  around speed, quality, and seamless collaboration.
                </p>
                <p>
                  Our white-label approach means you get all the credit while we handle the heavy lifting. 
                  Your clients see your brand; you get the results.
                </p>
              </div>
              
              <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
                <Link to="/portfolio">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 text-sm md:text-base px-4 md:px-6 py-4 md:py-5"
                  >
                    View Our Work
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-glow group text-sm md:text-base px-4 md:px-6 py-4 md:py-5">
                    Work With Us
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {[
                { value: '7+', label: 'Projects Delivered' },
                { value: '48h', label: 'Avg. Delivery Time' },
                { value: '100%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-4 md:p-6 rounded-xl md:rounded-2xl glass text-center"
                >
                  <div className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-gradient mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <h3 className="font-display font-bold text-xl md:text-2xl text-white text-center mb-6 md:mb-10">
              Our Core Values
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="group p-4 md:p-6 rounded-xl md:rounded-2xl glass"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-3 md:mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors">
                    <value.icon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <h4 className="font-display font-semibold text-white mb-1 md:mb-2 text-sm md:text-base">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16">
              <div className="text-center mb-6 md:mb-10">
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-3 md:mb-4">
                  Our Tech Stack
                </h3>
                <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
                  We use modern, battle-tested technologies to build fast, scalable, and maintainable websites.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 md:px-6 py-2 md:py-3 rounded-full glass text-white text-sm md:text-base font-medium hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
              
              <div className="relative">
                <h3 className="font-display font-bold text-lg md:text-2xl lg:text-3xl text-white mb-3 md:mb-4">
                  Ready to partner with us?
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 max-w-lg mx-auto">
                  Let's discuss how Uprigt can help you deliver more projects, faster.
                </p>
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base shadow-glow group"
                  >
                    Get in Touch
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
