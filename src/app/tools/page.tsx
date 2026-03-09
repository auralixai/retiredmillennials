import { tools } from "@/data/tools";
import { 
  ArrowLeft, 
  Target, 
  Zap, 
  TrendingUp, 
  Wrench, 
  ExternalLink, 
  ChevronRight,
  ShieldCheck,
  Hammer
} from "lucide-react";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white pt-24 px-4 pb-12 selection:bg-[#FFD700]/30 selection:text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FFD700] mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFD700] text-[10px] font-black tracking-widest uppercase mb-4">
              <Wrench className="w-3 h-3" /> The Resource Stack
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 italic uppercase leading-none">
              The <span className="text-[#FFD700]">Toolkit</span>
            </h1>
            <p className="text-gray-400 text-lg">
              The exact software and services used by top retired millennials to automate, source, and scale. No fluff—just the stack that works.
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {tools.map((tool, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#FFD700]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="px-2 py-1 rounded bg-[#FFD700]/10 text-[#FFD700] text-[9px] font-black uppercase tracking-widest">
                    {tool.category}
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-700 group-hover:text-[#FFD700] transition-colors" />
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-4 italic uppercase group-hover:text-[#FFD700] transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">
                  {tool.description}
                </p>
              </div>
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                  <span className="text-gray-600">Best For</span>
                  <span className="text-white">{tool.bestFor}</span>
                </div>
                <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                  <span className="text-gray-600">Price</span>
                  <span className="text-[#FFD700]">{tool.price}</span>
                </div>
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white/5 border border-white/10 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-black transition-all group"
                >
                  Access Tool <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="p-12 rounded-[40px] bg-gradient-to-br from-blue-500/20 via-transparent to-transparent border border-blue-500/20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black tracking-tighter mb-6 italic uppercase">Missing a Tool?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Our network constantly vets new software for automation and arbitrage. Join the waitlist for the latest updates to our curated stack.
            </p>
            <Link href="/#join" className="inline-flex px-10 py-5 bg-white text-black font-black text-lg rounded-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all">
              Join the Network
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
