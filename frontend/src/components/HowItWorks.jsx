import { motion } from 'framer-motion';
import { Upload, CheckCircle, UserCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Post Your Item',
      description: 'Upload photos and details of items you no longer need. Our simple form makes it quick and easy.',
      color: 'from-primary to-primary-glow',
    },
    {
      icon: CheckCircle,
      title: 'Get Verified',
      description: 'Our community moderators review your listing to ensure quality and authenticity.',
      color: 'from-secondary to-accent',
    },
    {
      icon: UserCheck,
      title: 'Someone Claims It',
      description: 'Connect with people in your area who need what you\'re offering. Arrange pickup and make someone happy!',
      color: 'from-accent to-primary',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing your unused items has never been easier. Follow these simple steps 
            to join our community of generous givers.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent transform -translate-y-1/2 z-0" />
              )}

              <div className="relative z-10">
                {/* Icon container */}
                <motion.div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${step.color} shadow-card group-hover:shadow-hover mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <step.icon className="h-10 w-10 text-white" />
                </motion.div>

                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-2xl shadow-neumorphic p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Ready to start sharing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of community members who are making a difference, 
              one shared item at a time.
            </p>
            <motion.button
              className="bg-gradient-hero text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-card hover:shadow-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;