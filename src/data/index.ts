import type { Project, Service, Testimonial, ProcessStep, NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Luxe Salon & Spa',
    description: 'Premium men’s grooming website with modern UI and booking-focused design.',
    image: '/images/luxe-salon.png',
    tags: ['React', 'Landing Page', 'Booking System'],
    category: 'landing',
    buildTime: '4 hours',
    result: 'High-converting landing page built for client bookings and franchise inquiries',
    link: 'https://luxe-mens-salon.vercel.app/',
  },
  {
    id: '2',
    title: 'Analytics Pro Dashboard',
    description: 'Enterprise-grade SaaS analytics platform with real-time data visualization.',
    image: '/images/project-saas.jpg',
    tags: ['React', 'Dashboard', 'Data Viz'],
    category: 'dashboard',
    buildTime: '12 hours',
    result: 'Business intelligence dashboard for 500+ users',
    link: '#',
  },
  {
    id: '3',
    title: 'Velocity Sole Store',
    description: 'Modern e-commerce product page with advanced filtering and cart functionality.',
    image: '/images/project-ecommerce.jpg',
    tags: ['React', 'E-commerce', 'Stripe'],
    category: 'business',
    buildTime: '8 hours',
    result: 'Premium sneaker store with 25% higher cart conversion',
    link: '#',
  },
  {
    id: '4',
    title: 'FinWise AI',
    description: 'Clean SaaS landing page for a financial tracking platform with structured UI.',
    image: '/images/finwise.png',
    tags: ['React', 'Business Website', 'Maps API'],
    category: 'business',
    buildTime: '16 hours',
    result: 'Modern product showcase designed for clarity and user engagement',
    link: 'https://finwise-ai-app.vercel.app/',
  },
  {
    id: '5',
    title: 'AFC Fitness',
    description: 'Gym website with powerful visuals and high-impact landing experience.',
    image: '/images/afc.png',
    tags: ['React', 'Landing Page', 'Mobile-first'],
    category: 'landing',
    buildTime: '6 hours',
    result: 'Conversion-driven layout designed to increase trial bookings',
    link: 'https://afc-fitness-01.vercel.app/',
  },
  {
    id: '6',
    title: 'DigiPulse Agency',
    description: 'Digital marketing agency website with bold design and strong call-to-actions.',
    image: '/images/digi-pluse.png',
    tags: ['React', 'Business Website', 'Reservations'],
    category: 'business',
    buildTime: '10 hours',
    result: 'Lead-generation focused website built for service-based businesses',
    link: 'https://digi-pulse.vercel.app/',
  },
  {
    id: '7',
    title: 'vipin Portfolio',
    description: 'Personal portfolio website with smooth animations and clean UI structure.',
    image: '/images/portfolio.png',
    tags: ['React', 'Portfolio', 'Animation'],
    category: 'landing',
    buildTime: '5 hours',
    result: 'Modern personal branding site with responsive design',
    link: 'https://vipinfolio.vercel.app/',
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Landing Pages',
    shortDescription: 'Fast, conversion-focused landing pages that drive results.',
    fullDescription: 'We create high-converting landing pages designed to capture leads and drive sales. Every page is optimized for performance, mobile-responsive, and built with modern best practices.',
    features: [
      '48-hour delivery',
      'Conversion-optimized design',
      'A/B testing ready',
      'Mobile-first approach',
      'SEO fundamentals included',
      'Analytics integration',
    ],
    priceRange: '₹3,000 – ₹7,000',
    icon: 'Zap',
  },
  {
    id: '2',
    title: 'Business Websites',
    shortDescription: 'Multi-page websites with modern design and powerful features.',
    fullDescription: 'Complete business websites that establish your online presence. From small business sites to complex multi-page experiences, we deliver professional solutions tailored to your needs.',
    features: [
      'Multi-page architecture',
      'CMS integration optional',
      'Admin dashboard available',
      'Contact forms & maps',
      'Blog functionality',
      'Speed optimized',
    ],
    priceRange: '₹8,000 – ₹20,000',
    icon: 'Building2',
  },
  {
    id: '3',
    title: 'White-label Development',
    shortDescription: 'Built for agencies, invisible to your clients.',
    fullDescription: 'Partner with us to deliver premium web development under your brand. We stay completely invisible while you take all the credit. Perfect for agencies looking to scale without hiring.',
    features: [
      '100% white-label delivery',
      'Your branding only',
      'Scalable team capacity',
      'Consistent quality',
      'Fast turnaround',
      'Direct communication',
    ],
    priceRange: 'Custom Pricing',
    icon: 'Users',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'vishnu',
    role: 'Marketing Director',
    company: 'DigiPulse Agency',
    content: 'Uprigt handled our client website flawlessly. The delivery was fast, the design was clean, and everything was built exactly as required. It helped us deliver projects quicker without increasing our workload.',
    avatar: '/images/A1.jpeg',
  },
  {
    id: '2',
    name: 'Balaji',
    role: 'Manager',
    company: 'AFC Fitness',
    content: 'We needed a bold and high-converting website, and Uprigt delivered exactly that. The layout, visuals, and overall flow feel premium and are aligned with our brand perfectly.',
    avatar: '/images/A2.jpeg',
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Creative Director',
    company: 'FinWise AI',
    content: 'The website was built with great attention to detail and a strong focus on user experience. Uprigt understood the product vision clearly and delivered a clean, modern interface that fits perfectly with our platform.',
    avatar: '/images/A3.jpeg',
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Requirement',
    description: 'Share your project brief, references, and specific requirements. We\'ll analyze and confirm the scope.',
    icon: 'ClipboardList',
  },
  {
    id: 2,
    title: 'Design & Build',
    description: 'Our team designs and develops your website with pixel-perfect precision and clean code.',
    icon: 'Code2',
  },
  {
    id: 3,
    title: 'Revisions',
    description: 'Review the work and request changes. We offer unlimited revisions until you\'re 100% satisfied.',
    icon: 'RefreshCw',
  },
  {
    id: 4,
    title: 'Delivery',
    description: 'Receive your fully functional website with all assets, documentation, and ongoing support.',
    icon: 'Rocket',
  },
];

export const stats = [
  { value: '7+', label: 'Live Projects Delivered' },
  { value: '48h', label: 'Average Delivery Time' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

export const featuredProjects = projects.slice(0, 3);
