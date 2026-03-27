import { motion } from "motion/react";
import { Youtube, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-pulse delay-700" />
        
        {/* Particle Overlay (CSS only) */}
        <div className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-8"
        >
          <div className="absolute inset-0 bg-neon-blue/30 rounded-full blur-2xl animate-pulse-glow" />
          <img 
            src="https://i.ibb.co.com/DPvBVvpx/channels4-profile.jpg" 
            alt="Sohada" 
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/10 relative z-10 shadow-[0_0_50px_rgba(0,242,255,0.3)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter mb-4">
            <span className="glow-text">SOHADA</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium mb-10 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-neon-purple" />
            LooPs Family – Shorts Creator
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://www.youtube.com/@Loops-family/shorts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neon-button flex items-center gap-2"
          >
            <Youtube className="w-5 h-5" />
            Subscribe Now
          </a>
          <a 
            href="#videos" 
            className="px-8 py-3 rounded-full font-bold border border-white/10 hover:bg-white/5 transition-all"
          >
            View Latest Shorts
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 md:right-20 w-12 h-12 glass rounded-xl rotate-12 flex items-center justify-center"
      >
        <div className="w-6 h-6 bg-neon-blue/40 rounded-full blur-sm" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-10 md:left-20 w-16 h-16 glass rounded-full -rotate-12 flex items-center justify-center"
      >
        <div className="w-8 h-8 bg-neon-purple/40 rounded-full blur-sm" />
      </motion.div>
    </section>
  );
}
