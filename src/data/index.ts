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
    title: 'Glow Salon & Spa',
    description: 'A luxury salon booking website with elegant design and seamless appointment scheduling.',
    image: '/images/project-salon.jpg',
    tags: ['React', 'Landing Page', 'Booking System'],
    category: 'landing',
    buildTime: '4 hours',
    result: 'Salon booking landing page with 40% conversion increase',
    link: '#',
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
    title: 'Luxury Estates',
    description: 'High-end real estate platform with property listings and virtual tours.',
    image: '/images/project-realestate.jpg',
    tags: ['React', 'Business Website', 'Maps API'],
    category: 'business',
    buildTime: '16 hours',
    result: 'Real estate platform generating $2M+ in listings',
    link: '#',
  },
  {
    id: '5',
    title: 'Pulse Fitness App',
    description: 'Fitness tracking landing page with workout plans and trainer profiles.',
    image: '/images/project-fitness.jpg',
    tags: ['React', 'Landing Page', 'Mobile-first'],
    category: 'landing',
    buildTime: '6 hours',
    result: 'Fitness app landing with 10K+ signups in first month',
    link: '#',
  },
  {
    id: '6',
    title: 'Ember & Vine',
    description: 'Upscale restaurant website with reservation system and menu showcase.',
    image: '/images/project-restaurant.jpg',
    tags: ['React', 'Business Website', 'Reservations'],
    category: 'business',
    buildTime: '10 hours',
    result: 'Fine dining website with 35% more reservations',
    link: '#',
  },
  {
    id: '7',
    title: 'Alex Chen Portfolio',
    description: 'Minimalist creative portfolio for a graphic designer with project gallery.',
    image: '/images/project-portfolio.jpg',
    tags: ['React', 'Portfolio', 'Animation'],
    category: 'landing',
    buildTime: '5 hours',
    result: 'Designer portfolio with award-winning UX',
    link: '#',
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
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'Growth Agency',
    content: 'Uprigt delivered our client\'s landing page in just 4 hours. The quality was exceptional, and our client was thrilled. They\'ve become our secret weapon for fast turnarounds.',
    avatar: '/images/avatar-sarah.jpg',
  },
  {
    id: '2',
    name: 'Michael Torres',
    role: 'Founder',
    company: 'Torres Digital',
    content: 'Working with Uprigt has transformed our agency. We can now take on 3x more projects without compromising quality. Their white-label service is seamless and professional.',
    avatar: '/images/avatar-michael.jpg',
  },
  {
    id: '3',
    name: 'Emily Chen',
    role: 'Creative Director',
    company: 'Studio Nine',
    content: 'The attention to detail and speed of delivery is unmatched. Uprigt understands modern design trends and implements them flawlessly. Highly recommended!',
    avatar: '/images/avatar-emily.jpg',
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
