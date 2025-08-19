import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Floating icons */}
          <motion.div
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[Heart, Users, Sparkles].map((Icon, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Icon className="h-8 w-8 text-white" />
              </motion.div>
            ))}
          </motion.div>

          {/* Main heading */}
          <motion.h2
            className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Be Part of the Change.{' '}
            <span className="relative">
              Donate Today.
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-white/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Your unused items could be someone's perfect find. Join our community of givers 
            and make a positive impact on both the environment and your neighbors' lives.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { label: 'Items Finding New Homes', value: '150+', suffix: '/month' },
              { label: 'Waste Diverted', value: '2.3', suffix: ' tons' },
              { label: 'Community Members', value: '5,000+', suffix: '' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                  <span className="text-xl">{stat.suffix}</span>
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <Button
              variant="cta"
              size="xl"
              className="group relative overflow-hidden bg-white text-primary hover:bg-white/90"
            >
              <span className="relative z-10 flex items-center">
                Start Donating
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </Button>

            <Button
              variant="outline"
              size="xl"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70 text-sm mb-4">
              Trusted by thousands of community members
            </p>
            <div className="flex justify-center items-center space-x-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 bg-white/20 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;