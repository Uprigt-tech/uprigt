import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const businessTypes = [
  'Startup',
  'Small Business',
  'Enterprise',
  'Non-profit',
  'Personal Project',
  'Other',
];

const projectTypes = [
  'Business Website',
  'Web Application',
  'E-commerce',
  'Booking System',
  'Dashboard/Admin Panel',
  'Website Redesign',
  'Maintenance & Support',
  'Other',
];

export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    projectType: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="booking"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-steel-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glacier-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
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
              Get Started
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Let&apos;s Build Something{' '}
              <span className="text-steel-blue">Amazing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Tell us about your project and we&apos;ll get back to you within
              24 hours with a detailed proposal.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-steel-blue/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-steel-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a
                        href="mailto:uprigt.tech@gmail.com"
                        className="text-foreground hover:text-steel-blue transition-colors"
                      >
                        uprigt.tech@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-steel-blue/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-steel-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a
                        href="tel:+919629862425"
                        className="text-foreground hover:text-steel-blue transition-colors"
                      >
                        +91 9629862425
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-steel-blue/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-steel-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground">
                        Remote-first / Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="bg-warm-amber/10 rounded-2xl p-6 border border-warm-amber/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-warm-amber/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-warm-amber" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fast Response</p>
                    <p className="text-sm text-muted-foreground">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-card">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="rounded-xl border-border/50 focus:border-steel-blue focus:ring-steel-blue/20"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your email address"
                          className="rounded-xl border-border/50 focus:border-steel-blue focus:ring-steel-blue/20"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Business Type */}
                      <div className="space-y-2">
                        <Label htmlFor="businessType" className="text-foreground">
                          Business Type
                        </Label>
                        <Select
                          value={formData.businessType}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}
                        >
                          <SelectTrigger className="rounded-xl border-border/50 focus:border-steel-blue focus:ring-steel-blue/20">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Project Type */}
                      <div className="space-y-2">
                        <Label htmlFor="projectType" className="text-foreground">
                          Project Type
                        </Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}
                        >
                          <SelectTrigger className="rounded-xl border-border/50 focus:border-steel-blue focus:ring-steel-blue/20">
                            <SelectValue placeholder="Select project" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-foreground">
                        Project Description <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={5}
                        className="rounded-xl border-border/50 focus:border-steel-blue focus:ring-steel-blue/20 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-steel-blue hover:bg-arctic-slate text-white rounded-xl py-6 text-base font-medium transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
