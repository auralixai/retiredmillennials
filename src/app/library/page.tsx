import { blueprints, dictionary } from "@/data/blueprints";
import { 
  ArrowLeft, 
  Target, 
  Zap, 
  TrendingUp, 
  BookOpen, 
  ChevronRight, 
  Palmtree,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opportunity Library | Retired Millennials Resources",
  description: "Highly actionable, low-friction business models designed for the modern millennial. Blueprints for wealth automation and location freedom.",
  openGraph: {
    title: "Opportunity Library | Retired Millennials Resources",
    description: "Highly actionable, low-friction business models designed for the modern millennial. Blueprints for wealth automation and location freedom.",
    url: "https://retiredmillennials.com/library",
    type: "website",
  },
};

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white pt-24 px-4 pb-12 selection:bg-[#FFD700]/30 selection:text-white font-sans relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-[#FFD700] rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FFD700] mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFD700] text-[10px] font-black tracking-widest uppercase mb-4">
              <BookOpen className="w-3 h-3" /> The Opportunity Library
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 italic uppercase leading-none">
              The <span className="text-[#FFD700]">Blueprints</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Highly actionable, low-friction business models designed for the modern millennial. No fluff, just the math and the steps to execute.
            </p>
          </div>
          <a href="#dictionary" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-2">
             Jump to Dictionary <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Blueprints Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {blueprints.map((bp) => (
            <Link 
              key={bp.slug} 
              href={`/library/${bp.slug}`}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#FFD700]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="px-2 py-1 rounded bg-[#FFD700]/10 text-[#FFD700] text-[9px] font-black uppercase tracking-widest">
                    {bp.category}
                  </div>
                  <TrendingUp className="w-4 h-4 text-gray-700 group-hover:text-[#FFD700] transition-colors" />
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-4 italic uppercase group-hover:text-[#FFD700] transition-colors">
                  {bp.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 line-clamp-3">
                  {bp.overview}
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-[10px] font-black tracking-widest text-gray-600 uppercase">
                  {bp.difficulty}
                </span>
                <ArrowRight className="w-4 h-4 text-[#FFD700] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Dictionary Section */}
        <div id="dictionary" className="pt-24 border-t border-white/5">
          <h2 className="text-3xl font-black tracking-tighter mb-12 italic uppercase text-center">
            The Flipping <span className="text-[#FFD700]">Dictionary</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {dictionary.map((item, i) => (
              <div key={i} className="group border-l-2 border-white/5 hover:border-[#FFD700] pl-6 transition-colors">
                <h4 className="font-black text-xl mb-3 uppercase italic tracking-tight">
                  {item.term}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.definition}
                </p>
                {item.secondary && (
                  <div className="mt-4 inline-flex text-[9px] font-black bg-white/5 px-2 py-0.5 rounded uppercase tracking-widest text-gray-600">
                    Category: {item.secondary}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 p-12 rounded-[40px] bg-gradient-to-br from-[#FFD700]/20 via-transparent to-transparent border border-[#FFD700]/20 text-center relative overflow-hidden">
          <Palmtree className="w-64 h-64 text-[#FFD700]/5 absolute -bottom-20 -right-20 transform rotate-12" />
          <div className="relative z-10">
            <h2 className="text-4xl font-black tracking-tighter mb-6 italic uppercase">Ready for retirement?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              The blueprints are just the beginning. Join the private network for automated tools, verified manifests, and the community of retired millennials.
            </p>
            <Link href="/#join" className="inline-flex px-10 py-5 bg-[#FFD700] text-black font-black text-lg rounded-2xl hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all">
              Join the Network
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
