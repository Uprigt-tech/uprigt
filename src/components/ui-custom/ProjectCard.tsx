import { motion } from 'framer-motion';
import { ExternalLink, Clock } from 'lucide-react';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-xl md:rounded-2xl glass block ${
        featured ? 'col-span-1' : ''
      }`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-300 via-navy-300/50 to-transparent opacity-60" />
        
        {/* Build time badge */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 flex items-center gap-1 md:gap-1.5 px-2 py-1 md:px-3 md:py-1.5 rounded-full glass">
          <Clock size={12} className="text-purple-400" />
          <span className="text-[10px] md:text-xs font-medium text-white">{project.buildTime}</span>
        </div>

        {/* Hover overlay - hidden on touch devices */}
        <div className="absolute inset-0 bg-purple-500/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
            <ExternalLink size={20} className="text-navy-300" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
          {project.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-purple-500/10 text-purple-300 border-0 text-[10px] md:text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-1.5 md:mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-xs md:text-sm line-clamp-2 mb-3 md:mb-4">
          {project.description}
        </p>
        
        {project.result && (
          <div className="pt-3 md:pt-4 border-t border-white/5">
            <p className="text-[10px] md:text-xs text-gray-500">
              <span className="text-purple-400 font-medium">Result:</span> {project.result}
            </p>
          </div>
        )}
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-xl md:rounded-2xl shadow-glow" />
      </div>
    </motion.a>
  );
}
