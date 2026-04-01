"use client";

import { motion } from "framer-motion";

export default function BackgroundOrnaments() {
  return (
    <>
      {/* Floating hearts */}
      <motion.div
        className="absolute left-10 top-20 text-4xl opacity-20"
        animate={{ 
          y: [0, -30, 0], 
          x: [0, 20, 0],
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0
        }}
      >
        ❤️
      </motion.div>

      <motion.div
        className="absolute right-20 top-40 text-3xl opacity-15"
        animate={{ 
          y: [0, -40, 0], 
          x: [0, -25, 0],
          rotate: [0, -20, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        💕
      </motion.div>

      <motion.div
        className="absolute left-1/4 top-60 text-2xl opacity-10"
        animate={{ 
          y: [0, -25, 0], 
          x: [0, 15, 0],
          rotate: [0, 25, -25, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        🌹
      </motion.div>

      {/* Sparkles */}
      <motion.div
        className="absolute right-1/3 top-32 text-xl opacity-25"
        animate={{ 
          scale: [1, 0, 1],
          rotate: [0, 360],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear",
          delay: 0.5
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-80 text-lg opacity-20"
        animate={{ 
          scale: [1, 0, 1],
          rotate: [0, -360],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "linear",
          delay: 1.5
        }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute right-16 bottom-40 text-2xl opacity-15"
        animate={{ 
          scale: [1, 0, 1],
          rotate: [0, 360],
          opacity: [0.2, 0.7, 0.2]
        }}
        transition={{ 
          duration: 3.5, 
          repeat: Infinity, 
          ease: "linear",
          delay: 2.5
        }}
      >
        💫
      </motion.div>

      {/* Decorative circles */}
      <motion.div
        className="absolute left-20 bottom-20 h-32 w-32 rounded-full bg-gradient-to-br from-[#e7c181]/10 to-[#c8a882]/5 blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0
        }}
      />

      <motion.div
        className="absolute right-32 bottom-32 h-24 w-24 rounded-full bg-gradient-to-br from-[#9b2d45]/10 to-[#7b2d40]/5 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -20, 0],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute left-1/3 top-1/2 h-40 w-40 rounded-full bg-gradient-to-br from-[#e7c181]/8 to-[#c8a882]/3 blur-2xl"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Floating petals */}
      <motion.div
        className="absolute right-1/4 top-1/3 text-2xl opacity-20"
        animate={{ 
          y: [0, -100, 0],
          x: [0, 50, -50, 0],
          rotate: [0, 360],
          scale: [1, 0.8, 1.2, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      >
        🌸
      </motion.div>

      <motion.div
        className="absolute left-16 top-1/2 text-xl opacity-15"
        animate={{ 
          y: [0, -80, 0],
          x: [0, -30, 30, 0],
          rotate: [0, -360],
          scale: [1, 1.3, 0.7, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 4
        }}
      >
        🌺
      </motion.div>

      {/* Additional romantic elements */}
      <motion.div
        className="absolute right-20 top-1/4 text-lg opacity-25"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 15, -15, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3.5
        }}
      >
        💖
      </motion.div>

      <motion.div
        className="absolute left-1/4 bottom-1/3 text-xl opacity-20"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.5, 0.15],
          rotate: [0, -20, 20, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2.5
        }}
      >
        💝
      </motion.div>

      {/* Subtle light rays */}
      <motion.div
        className="absolute top-0 left-1/2 h-96 w-1 bg-gradient-to-b from-[#e7c181]/20 to-transparent"
        animate={{ 
          scaleY: [0, 1, 0],
          opacity: [0, 0.3, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/3 h-64 w-1 bg-gradient-to-t from-[#9b2d45]/15 to-transparent"
        animate={{ 
          scaleY: [0, 1, 0],
          opacity: [0, 0.2, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
      />
    </>
  );
}
