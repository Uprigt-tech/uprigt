import { motion } from 'framer-motion';
import {
  Hero,
  ProofSection,
  ServicesSection,
  FeaturedWork,
  ProcessSection,
  TestimonialsSection,
  FinalCTA,
} from '@/sections';

export function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ProofSection />
      <ServicesSection />
      <FeaturedWork />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTA />
    </motion.main>
  );
}
