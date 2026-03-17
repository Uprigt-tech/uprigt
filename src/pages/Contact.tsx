import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';
import { SectionHeader } from '@/components/ui-custom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
        <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <SectionHeader
            badge="Get in Touch"
            title="Contact Us"
            subtitle="Have a project in mind? Let's discuss how we can help you deliver exceptional results."
          />

          <div className="grid lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-4 md:space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-3 md:space-y-4">
                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display font-semibold text-white mb-0.5 md:mb-1 text-sm md:text-base">Email</h4>
                      <a 
                        href="mailto:hello@uprigt.com" 
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm md:text-base truncate block"
                      >
                        hello@uprigt.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white mb-0.5 md:mb-1 text-sm md:text-base">Phone</h4>
                      <a 
                        href="tel:+919876543210" 
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm md:text-base"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white mb-0.5 md:mb-1 text-sm md:text-base">Location</h4>
                      <p className="text-gray-400 text-sm md:text-base">
                        Mumbai, India<br />
                        <span className="text-xs md:text-sm">Serving clients worldwide</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-4 md:p-6 rounded-xl md:rounded-2xl glass bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-white mb-0.5 md:mb-1 text-sm md:text-base">
                      Prefer WhatsApp?
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-3">
                      Chat with us directly for quick responses
                    </p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="w-full mt-3 md:mt-4 bg-green-600 hover:bg-green-500 text-white text-sm md:text-base py-4 md:py-5"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400" />
                <span>We typically respond within 2 hours</span>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="p-5 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl glass">
                <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-4 md:mb-6">
                  Send us a message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 md:py-12"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                    </div>
                    <h4 className="font-display font-semibold text-lg md:text-xl text-white mb-1 md:mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base">
                      We'll get back to you within 2 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="name" className="text-gray-300 text-sm md:text-base">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20 text-sm md:text-base py-4 md:py-5"
                        />
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        <Label htmlFor="email" className="text-gray-300 text-sm md:text-base">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20 text-sm md:text-base py-4 md:py-5"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 md:space-y-2">
                      <Label htmlFor="message" className="text-gray-300 text-sm md:text-base">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500/20 resize-none text-sm md:text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-5 md:py-6 text-sm md:text-base shadow-glow group"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>

                    <p className="text-center text-gray-500 text-xs md:text-sm">
                      By sending this message, you agree to our{' '}
                      <a href="#" className="text-purple-400 hover:underline">Privacy Policy</a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
