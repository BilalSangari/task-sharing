import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      location: 'Downtown',
      rating: 5,
      text: 'ShareFlow has completely changed how I think about unused items. I\'ve found amazing furniture and helped others in my community. The platform makes it so easy to connect with neighbors!',
      itemsShared: 12,
      itemsClaimed: 8,
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      location: 'Westside',
      rating: 5,
      text: 'As a new parent, I\'ve saved so much money on baby items through ShareFlow. The community is incredibly generous and supportive. It feels good to give back too!',
      itemsShared: 6,
      itemsClaimed: 15,
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      location: 'Eastside',
      rating: 5,
      text: 'I love the environmental impact of this platform. Instead of throwing things away, I can see them go to people who really need them. It\'s sustainable living made simple.',
      itemsShared: 20,
      itemsClaimed: 5,
    },
    {
      id: 4,
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      location: 'Northside',
      rating: 5,
      text: 'The quality of items and people on ShareFlow is outstanding. I\'ve made genuine friendships through sharing. It\'s more than just getting free stuff - it\'s community building.',
      itemsShared: 8,
      itemsClaimed: 12,
    },
  ];

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-subtle">
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
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who are making a difference in their neighborhoods 
            through the power of sharing.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-card rounded-2xl shadow-neumorphic p-8 lg:p-12"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {/* Quote icon */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                <div className="bg-primary/10 p-4 rounded-full">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
              </motion.div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial text */}
              <motion.blockquote
                className="text-lg lg:text-xl text-card-foreground text-center mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                "{testimonials[currentIndex].text}"
              </motion.blockquote>

              {/* User info */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-center sm:text-left">
                    <div className="font-semibold text-card-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-6 text-sm text-muted-foreground">
                  <div className="text-center">
                    <div className="font-semibold text-primary">
                      {testimonials[currentIndex].itemsShared}
                    </div>
                    <div>Items Shared</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-primary">
                      {testimonials[currentIndex].itemsClaimed}
                    </div>
                    <div>Items Claimed</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <Button
            variant="neumorphic"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 shadow-card hover:shadow-hover"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="neumorphic"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 shadow-card hover:shadow-hover"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;