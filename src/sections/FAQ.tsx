import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How long does development take?',
    answer: 'Project timelines vary based on complexity. A typical business website takes 2-4 weeks, while custom web applications can take 6-12 weeks. During our initial consultation, we\'ll provide a detailed timeline tailored to your specific project requirements.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Absolutely! All our plans include support periods ranging from 1-3 months. We also offer ongoing maintenance packages that include regular updates, security patches, performance monitoring, and priority support for any issues that arise.',
  },
  {
    question: 'Can you upgrade my existing website?',
    answer: 'Yes, we specialize in both new builds and website upgrades. Whether you need a complete redesign, performance optimization, or new features added to your existing site, we can help modernize your digital presence while preserving what works.',
  },
  {
    question: 'Do you provide hosting assistance?',
    answer: 'We provide full hosting guidance and setup assistance. While we don\'t host websites directly, we help you choose the right hosting provider, configure your server environment, and ensure optimal performance and security settings.',
  },
  {
    question: 'How secure are the systems you build?',
    answer: 'Security is our top priority. We implement industry best practices including HTTPS/SSL, secure authentication, input validation, protection against SQL injection and XSS attacks, regular security audits, and automated backup systems. All code follows OWASP guidelines.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-steel-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-glacier-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-steel-blue/10 text-steel-blue text-sm font-medium mb-4"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Frequently Asked{' '}
              <span className="text-steel-blue">Questions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Got questions? We&apos;ve got answers. If you don&apos;t find what 
              you&apos;re looking for, feel free to reach out.
            </motion.p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-2xl border border-border/50 shadow-subtle overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-steel-blue/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-steel-blue" />
                    </div>
                    <span className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 lg:px-6 pb-5 lg:pb-6 pl-[4.5rem] lg:pl-[5rem]">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-steel-blue hover:text-arctic-slate font-medium transition-colors"
            >
              Get in touch with us
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
