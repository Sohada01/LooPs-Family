import { Youtube, Instagram, Twitter, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/40 hover:text-red-500 transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="#" className="text-white/40 hover:text-pink-500 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-white/40 hover:text-blue-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-sm text-white/40 mb-2">
            Created by <span className="text-white font-bold">Sohada</span>
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/20">
            LooPs Family © 2026
          </p>
        </div>

        <div className="flex items-center gap-1 text-[10px] text-white/10 uppercase tracking-widest">
          Made with <Heart className="w-2 h-2 fill-current" /> for the community
        </div>
      </div>
    </footer>
  );
}
