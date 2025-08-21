import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ItemCard = ({
  id,
  title,
  description,
  image,
  location,
  postedTime,
  category,
  likes,
  comments,
  onLike,
  onComment,
  onClaim
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(id);
  };

  return (
    <motion.div
      className="bg-card rounded-xl shadow-neumorphic hover:shadow-hover transition-all duration-300 overflow-hidden group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      layout
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
          {category}
        </Badge>

        {/* Like button */}
        <motion.button
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors ${
            isLiked 
              ? 'bg-red-500/90 text-white' 
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
          onClick={handleLike}
          whileTap={{ scale: 0.9 }}
          animate={{ scale: isLiked ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Heart 
            className="h-4 w-4" 
            fill={isLiked ? 'currentColor' : 'none'}
          />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-card-foreground text-lg mb-1 line-clamp-1">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
        </div>

        {/* Location and time */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{postedTime}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-4">
            {/* Likes */}
            <button 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              onClick={handleLike}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              <span className="text-sm">{likes + (isLiked ? 1 : 0)}</span>
            </button>

            {/* Comments */}
            <button 
              className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => onComment(id)}
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">{comments}</span>
            </button>
          </div>

          {/* Claim button */}
          <Button
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => onClaim(id)}
          >
            Claim
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemCard;