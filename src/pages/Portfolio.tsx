import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import { SectionHeader, ProjectCard } from '@/components/ui-custom';
import { Button } from '@/components/ui/button';
import { projects } from '@/data';
// Project type is used implicitly through the projects data

type FilterCategory = 'all' | 'landing' | 'business' | 'dashboard' | 'ecommerce';

const filters: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'landing', label: 'Landing' },
  { value: 'business', label: 'Business' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'ecommerce', label: 'E-commerce' },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[400px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <SectionHeader
            badge="Our Work"
            title="Portfolio"
            subtitle="Explore our collection of 7+ live projects. Each one crafted with precision and delivered with care."
          />

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12"
          >
            <div className="flex items-center gap-1.5 md:gap-2 mr-2 md:mr-4 text-gray-400">
              <Filter size={16} className="md:w-[18px] md:h-[18px]" />
              <span className="text-xs md:text-sm">Filter:</span>
            </div>
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-glow'
                    : 'border-white/20 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 md:py-20"
            >
              <p className="text-gray-400 text-base md:text-lg">No projects found in this category.</p>
              <Button
                variant="outline"
                className="mt-4 border-white/20 text-white hover:bg-white/10 text-sm md:text-base"
                onClick={() => setActiveFilter('all')}
              >
                View All Projects
              </Button>
            </motion.div>
          )}

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 md:mt-20 text-center"
          >
            <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16">
              <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-white mb-3 md:mb-4">
                Have a project in mind?
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 max-w-lg mx-auto">
                Let's discuss how we can help you deliver exceptional results for your clients.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-sm md:text-base shadow-glow group"
              >
                Start a Project
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
