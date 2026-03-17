import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-navy-300">
        {/* Gradient orbs - reduced opacity on mobile */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/15 md:bg-purple-500/20 rounded-full blur-[100px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/15 md:bg-blue-500/20 rounded-full blur-[100px] md:blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />
        
        {/* Grid pattern - hidden on small mobile */}
        <div 
          className="absolute inset-0 opacity-[0.02] md:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass mb-6 md:mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-300">Available for new projects</span>
              </motion.div>

              {/* Heading - Responsive text sizes */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.15] md:leading-tight mb-4 md:mb-6"
              >
                We build{' '}
                <span className="text-gradient">high-converting</span>{' '}
                websites for agencies in{' '}
                <span className="text-gradient">48 hours</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0"
              >
                Your white-label development partner. Fast, reliable, scalable.
              </motion.p>

              {/* CTAs - Stack on mobile, side by side on larger screens */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              >
                <Link to="/portfolio" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                  >
                    View Portfolio
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base"
                  >
                    <Play size={18} className="mr-2" />
                    Book a Call
                  </Button>
                </Link>
              </motion.div>

              {/* Trust indicators - Simplified on mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 md:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-xs md:text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-navy-300"
                      />
                    ))}
                  </div>
                  <span>7+ Projects</span>
                </div>
                <span className="hidden sm:inline text-gray-600">•</span>
                <span>100% Satisfaction</span>
              </motion.div>
            </div>

            {/* Right: Dashboard Image - Hidden on mobile, shown on lg+ */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateX: 15 }}
              animate={{ opacity: 1, x: 0, rotateX: 5 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
              style={{ perspective: '1000px' }}
            >
              <div className="relative" style={{ animation: 'float 6s ease-in-out infinite' }}>
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur-2xl transform scale-95" />
                
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden glass-strong shadow-2xl">
                  <img
                    src="/images/hero-dashboard.jpg"
                    alt="Uprigt Dashboard"
                    className="w-full h-auto"
                    loading="eager"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-300/50 to-transparent" />
                </div>

                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 glass-strong rounded-xl p-3 md:p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-gray-400">Conversion Rate</p>
                      <p className="text-base md:text-lg font-semibold text-white">+40.5%</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -top-2 md:-top-4 -right-2 md:-right-4 glass-strong rounded-xl p-2 md:p-3 shadow-xl"
                >
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-xs md:text-sm font-medium text-white">Live Project</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-navy-300 to-transparent pointer-events-none" />
    </section>
  );
}
