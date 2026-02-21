import { ArrowDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import heroImage from '@/assets/Myimage.png';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Image with Multiple Blend Layers */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Main Image Layer - Full Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
          }}
        ></div>
        
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-slate-900/50"></div>
        
        {/* Animated Gradient Overlay - Very Subtle */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </motion.div>

      {/* Animated Blur Orbs */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl mb-6"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            scale: { type: "spring", bounce: 0.5, duration: 1 }
          }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, I'm{" "}
          </motion.span>
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 inline-block"
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ 
              opacity: 1, 
              rotateX: 0,
              backgroundPosition: ["0% center", "200% center", "0% center"]
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5, 
              type: "spring",
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            style={{ 
              display: "inline-block",
              background: "linear-gradient(90deg, #a855f7, #ec4899, #a855f7)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Tamilvalavan S
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Full-Stack Developer & Web Designer
        </motion.p>
        <motion.p 
          className="text-lg text-gray-400 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          I craft beautiful digital experiences with clean code and thoughtful design
        </motion.p>
        
        <motion.div 
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-transform"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-900 transition-colors transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
      
      <motion.button 
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        aria-label="Scroll to projects"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowDown className="w-8 h-8 text-white/60" />
      </motion.button>
    </section>
  );
}