import { motion } from 'framer-motion';
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Browse Items', href: '#browse' },
        { name: 'Donate Items', href: '#donate' },
        { name: 'Community Guidelines', href: '#guidelines' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Safety Tips', href: '#safety' },
        { name: 'Report an Issue', href: '#report' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'Accessibility', href: '#accessibility' },
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-hero p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" fill="currentColor" />
                </div>
                <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  ShareFlow
                </span>
              </div>
              
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                Building stronger communities through the power of sharing. 
                Every item donated creates connections and reduces waste.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#facebook', label: 'Facebook' },
                  { icon: Twitter, href: '#twitter', label: 'Twitter' },
                  { icon: Instagram, href: '#instagram', label: 'Instagram' },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links sections - Desktop */}
            <div className="hidden md:grid md:grid-cols-3 lg:col-span-3 gap-8">
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: linkIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-secondary-foreground/70 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Links sections - Mobile (Accordion) */}
            <div className="md:hidden lg:col-span-3 space-y-4">
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  className="border border-secondary-foreground/10 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className="w-full p-4 text-left flex items-center justify-between"
                    onClick={() => toggleSection(section.title)}
                  >
                    <span className="font-semibold text-secondary-foreground">
                      {section.title}
                    </span>
                    <ChevronUp 
                      className={`h-4 w-4 transition-transform ${
                        openSection === section.title ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openSection === section.title && (
                    <motion.div
                      className="px-4 pb-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ul className="space-y-2">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <a
                              href={link.href}
                              className="text-secondary-foreground/70 hover:text-primary transition-colors"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <motion.div
            className="mt-12 pt-8 border-t border-secondary-foreground/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">support@shareflow.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">1-800-SHARE-IT</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">Available Nationwide</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary-foreground/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-secondary-foreground/60 text-sm">
                © 2024 ShareFlow. All rights reserved. Built with ❤️ for our community.
              </p>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-secondary-foreground/60 hover:text-primary"
              >
                <ChevronUp className="h-4 w-4 mr-1" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;