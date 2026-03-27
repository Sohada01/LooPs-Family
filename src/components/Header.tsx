import { motion } from "motion/react";
import { Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Videos", href: "#videos" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img 
            src="https://i.ibb.co.com/DPvBVvpx/channels4-profile.jpg" 
            alt="Sohada Logo" 
            className="w-10 h-10 rounded-full border border-neon-blue/50"
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-bold text-xl tracking-tighter glow-text">
            SOHADA
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00f2ff]" />
            </motion.a>
          ))}
          <motion.a
            href="https://www.youtube.com/@Loops-family/shorts"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-sm font-bold"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            Subscribe
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass border-t border-white/5 overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://www.youtube.com/@Loops-family/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-bold text-neon-blue"
            >
              <Youtube className="w-5 h-5" />
              Subscribe
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
