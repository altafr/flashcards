import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface FlashCardProps {
  front: string;
  back: string;
  topic: string;
}

export const FlashCard = ({ front, back, topic }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="perspective-1000 w-full max-w-xl mx-auto h-[400px] cursor-pointer">
      <AnimatePresence mode="wait">
        <motion.div
          key={isFlipped ? "back" : "front"}
          initial={{ rotateY: isFlipped ? -180 : 0, opacity: 0 }}
          animate={{ rotateY: isFlipped ? 0 : 0, opacity: 1 }}
          exit={{ rotateY: isFlipped ? 0 : -180, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={handleFlip}
          className="w-full h-full"
        >
          <Card className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-800 shadow-lg">
            <div className="absolute top-4 left-4">
              <span className="text-xs text-muted-foreground">{topic}</span>
            </div>
            <div className="text-xl font-medium">
              {isFlipped ? back : front}
            </div>
            <div className="absolute bottom-4 text-sm text-muted-foreground">
              Click to flip
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
