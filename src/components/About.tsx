import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">About Sohada</h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
            Bringing entertainment to life through <span className="text-white font-medium">viral shorts</span> and engaging family content. 
            As the face of <span className="text-neon-blue font-bold glow-text">LooPs Family</span>, 
            I focus on high-energy, creative storytelling that resonates with millions globally.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 glass rounded-2xl">
              <div className="text-3xl font-bold text-neon-blue mb-1">Shorts</div>
              <div className="text-xs uppercase tracking-widest text-white/40">Primary Content</div>
            </div>
            <div className="p-6 glass rounded-2xl">
              <div className="text-3xl font-bold text-neon-purple mb-1">Viral</div>
              <div className="text-xs uppercase tracking-widest text-white/40">Content Style</div>
            </div>
            <div className="p-6 glass rounded-2xl col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-white mb-1">Global</div>
              <div className="text-xs uppercase tracking-widest text-white/40">Audience Reach</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
