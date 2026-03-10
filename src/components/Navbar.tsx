import Link from "next/link";
import { Palmtree } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#C5A059] to-[#E2C07D] rounded-lg flex items-center justify-center shadow-[0_4px_15px_rgba(197,160,89,0.3)]">
              <Palmtree className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif font-black tracking-tight text-xl uppercase text-black">Retired Millennials</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
          <Link href="/#vision" className="hover:text-[#C5A059] transition-colors">Vision</Link>
          <Link href="/library" className="hover:text-[#C5A059] transition-colors">Library</Link>
          <Link href="/blog" className="hover:text-[#C5A059] transition-colors">Blog</Link>
          <Link href="/#join" className="px-6 py-2.5 bg-black text-[#C5A059] rounded-full hover:bg-[#C5A059] hover:text-white transition-all">Join Club</Link>
        </div>
      </div>
    </nav>
  );
}
