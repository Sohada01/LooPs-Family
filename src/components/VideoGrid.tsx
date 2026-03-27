import { motion } from "motion/react";
import { Play } from "lucide-react";

const SHORTS = [
  { id: 1, title: "Viral Loop 01", thumbnail: "https://picsum.photos/seed/loop1/400/700" },
  { id: 2, title: "Family Fun Moments", thumbnail: "https://picsum.photos/seed/loop2/400/700" },
  { id: 3, title: "Epic Shorts Edit", thumbnail: "https://picsum.photos/seed/loop3/400/700" },
  { id: 4, title: "LooPs Family Vibe", thumbnail: "https://picsum.photos/seed/loop4/400/700" },
  { id: 5, title: "Trending Challenge", thumbnail: "https://picsum.photos/seed/loop5/400/700" },
  { id: 6, title: "Behind the Scenes", thumbnail: "https://picsum.photos/seed/loop6/400/700" },
];

export default function VideoGrid() {
  return (
    <section id="videos" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">Latest Shorts</h2>
          <div className="h-1 w-20 bg-neon-blue rounded-full shadow-[0_0_10px_#00f2ff]" />
        </div>
        <a 
          href="https://www.youtube.com/@Loops-family/shorts" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-bold text-white/50 hover:text-neon-blue transition-colors"
        >
          View All on YouTube →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SHORTS.map((short, i) => (
          <motion.div
            key={short.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden glass border-white/5"
          >
            <img 
              src={short.thumbnail} 
              alt={short.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-lg font-bold mb-2">{short.title}</h3>
              <div className="flex items-center gap-2 text-xs font-medium text-white/70">
                <Play className="w-3 h-3 fill-white" />
                Watch Now
              </div>
            </div>

            {/* Play Button Center */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center border-neon-blue/50">
                <Play className="w-8 h-8 fill-white text-white ml-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
