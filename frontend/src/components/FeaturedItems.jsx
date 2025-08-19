import { useState, useRef } from 'react';
import { motion, useMotionValue, useDragControls } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ItemCard from './ItemCard';

const FeaturedItems = () => {
  const { toast } = useToast();
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const dragControls = useDragControls();

  // Mock data for featured items
  const [items, setItems] = useState([
    {
      id: '1',
      title: 'Vintage Leather Armchair',
      description: 'Beautiful brown leather chair in excellent condition. Perfect for reading corner.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      location: 'Downtown',
      postedTime: '2 hours ago',
      category: 'Furniture',
      likes: 12,
      comments: 3,
    },
    {
      id: '2',
      title: 'Kids\' Bicycle Set',
      description: 'Red bicycle with training wheels and helmet. Great for ages 5-8.',
      image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=400&h=300&fit=crop',
      location: 'Westside',
      postedTime: '4 hours ago',
      category: 'Sports',
      likes: 8,
      comments: 5,
    },
    {
      id: '3',
      title: 'Kitchen Appliance Bundle',
      description: 'Mixer, toaster, and coffee maker. All working perfectly, just upgraded.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      location: 'Eastside',
      postedTime: '6 hours ago',
      category: 'Electronics',
      likes: 15,
      comments: 2,
    },
    {
      id: '4',
      title: 'Garden Tools Collection',
      description: 'Complete set of gardening tools including shovel, rake, and watering can.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
      location: 'Northside',
      postedTime: '1 day ago',
      category: 'Garden',
      likes: 6,
      comments: 1,
    },
    {
      id: '5',
      title: 'Books Collection',
      description: 'Over 50 books including novels, textbooks, and children\'s books.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      location: 'Central',
      postedTime: '1 day ago',
      category: 'Books',
      likes: 20,
      comments: 7,
    },
    {
      id: '6',
      title: 'Art Supplies Kit',
      description: 'Complete art set with paints, brushes, canvas, and easel.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      location: 'Arts District',
      postedTime: '2 days ago',
      category: 'Art',
      likes: 14,
      comments: 4,
    },
  ]);

  const handleLike = (id) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, likes: item.likes + 1 }
        : item
    ));
    toast({
      title: "Item liked!",
      description: "Thanks for showing your appreciation.",
    });
  };

  const handleComment = (id) => {
    toast({
      title: "Comments feature",
      description: "This would open a comment modal in the full app.",
    });
  };

  const handleClaim = (id) => {
    const item = items.find(item => item.id === id);
    toast({
      title: "Item claimed!",
      description: `You've claimed "${item?.title}". The owner will be notified.`,
    });
  };

  const scrollToItem = (direction) => {
    const container = constraintsRef.current;
    if (!container) return;

    const scrollAmount = 320; // Card width + gap
    const currentScroll = container.scrollLeft;
    const newScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;

    container.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section id="browse" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Items
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing items shared by our community. From furniture to books, 
            find what you need or give what others might treasure.
          </p>
        </motion.div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            <Button
              variant="neumorphic"
              size="icon"
              onClick={() => scrollToItem('left')}
              className="shadow-card hover:shadow-hover"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="neumorphic"
              size="icon"
              onClick={() => scrollToItem('right')}
              className="shadow-card hover:shadow-hover"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            View All Items
          </Button>
        </div>

        {/* Items carousel */}
        <div className="relative">
          <motion.div
            ref={constraintsRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex-none w-80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ItemCard
                  {...item}
                  onLike={handleLike}
                  onComment={handleComment}
                  onClaim={handleClaim}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile view all button */}
        <div className="flex justify-center mt-8 sm:hidden">
          <Button variant="outline" className="w-full">
            View All Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
