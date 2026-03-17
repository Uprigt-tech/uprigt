import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeader } from '@/components/ui-custom';
import { testimonials } from '@/data';

export function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-300">
        <div className="absolute top-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Testimonials"
            title="What Clients Say"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
          />

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="group relative"
              >
                <div className="relative h-full p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl glass overflow-hidden">
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Quote className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5 md:mb-8 relative z-10 pr-8">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-purple-500/30 flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display font-semibold text-sm md:text-base text-white truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm truncate">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
