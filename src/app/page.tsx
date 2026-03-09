"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Zap, 
  Palmtree, 
  Compass, 
  Users, 
  ChevronRight, 
  Instagram, 
  Mail,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Globe
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#C5A059]/30 selection:text-black font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#C5A059] to-[#E2C07D] rounded-lg flex items-center justify-center shadow-[0_4px_15px_rgba(197,160,89,0.3)]">
              <Palmtree className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif font-black tracking-tight text-xl uppercase text-black">Retired Millennials</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
            <a href="#vision" className="hover:text-[#C5A059] transition-colors">Vision</a>
            <Link href="/library" className="hover:text-[#C5A059] transition-colors">Library</Link>
            <Link href="/blog" className="hover:text-[#C5A059] transition-colors">Blog</Link>
            <a href="#join" className="px-6 py-2.5 bg-black text-[#C5A059] rounded-full hover:bg-[#C5A059] hover:text-white transition-all">Join Club</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-[#C5A059] rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[#E2C07D] rounded-full blur-[150px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[#C5A059] text-[9px] font-black tracking-[0.2em] uppercase mb-8">
            <Zap className="w-3 h-3 animate-bounce" /> The New Standard of Living
          </div>
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-8 leading-tight text-black">
            Retired, <span className="text-[#C5A059] italic">not old.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-tight">
            Retired Millennial isn&apos;t about checking out. It&apos;s about checking <span className="text-black font-serif italic underline decoration-[#C5A059] underline-offset-8">in</span> to the life you actually want to live, right now.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="#join" className="group relative px-10 py-5 bg-black text-[#C5A059] font-black uppercase tracking-widest text-xs rounded-full hover:bg-[#C5A059] hover:text-white hover:shadow-[0_20px_40px_rgba(197,160,89,0.3)] transition-all flex items-center gap-3">
              Join the Movement <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-6 text-gray-400 font-black tracking-[0.2em] text-[9px] uppercase">
              <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> Curated Network</span>
              <span className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-black" /> Global Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Grid */}
      <section id="vision" className="max-w-7xl mx-auto px-6 py-40 border-t border-black/5">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-serif font-bold tracking-tight mb-8 text-black leading-tight">
              Free yourself from the <span className="text-[#C5A059] italic">Rat Race</span>.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 font-light">
              The game was rigged by previous generations. We&apos;re building our own rules. Whether you keep your day job or scale your own AI-powered business empire, being a retired millennial is about total autonomy.
            </p>
            <div className="space-y-8">
              {[
                { icon: TrendingUp, title: "Wealth Automation", desc: "Build systems that pay for your lifestyle." },
                { icon: Compass, title: "Location Freedom", desc: "Work from anywhere, live everywhere." },
                { icon: Users, title: "Comrade & Support", desc: "A network of people who refuse to settle." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-black/5 border border-black/10 flex items-center justify-center group-hover:border-[#C5A059]/50 transition-colors shrink-0 shadow-sm">
                    <item.icon className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xl mb-1 text-black">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-black/5 to-transparent rounded-[40px] border border-black/10 p-3 transform rotate-2 hover:rotate-0 transition-transform duration-1000 overflow-hidden shadow-2xl">
               <div className="w-full h-full rounded-[32px] bg-white relative flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-[#C5A059]/5 animate-pulse"></div>
                  <Palmtree className="w-60 h-60 text-black/[0.02] absolute -bottom-20 -right-20" />
                  <div className="relative text-center">
                    <div className="text-8xl font-serif font-bold text-[#C5A059] mb-4 tracking-tighter italic">2026</div>
                    <div className="text-[10px] font-black tracking-[0.5em] text-gray-400 uppercase">Est. Movement</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="max-w-7xl mx-auto px-6 py-40 border-t border-black/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <h2 className="text-5xl font-serif font-bold tracking-tight mb-6 text-black">
              Featured <span className="text-[#C5A059] italic">Blueprints</span>
            </h2>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              High-margin, low-friction business models curated for our network. No fluff, just pure execution strategies for the modern age.
            </p>
          </div>
          <Link href="/library" className="flex items-center gap-3 text-[10px] font-black tracking-[0.2em] uppercase text-black hover:text-[#C5A059] transition-colors group">
            All Strategies <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
           {[
             { title: "Amazon to eBay Book Flip", slug: "book-arbitrage-automation", category: "Arbitrage" },
             { title: "White-Label SaaS Agency", slug: "micro-saas-white-label", category: "Automation" },
             { title: "Costco Pallet Extraction", slug: "pallet-auction-extraction", category: "Liquidation" }
           ].map((item, i) => (
             <Link key={i} href={`/library/${item.slug}`} className="group p-10 rounded-[40px] bg-white border border-black/5 hover:border-[#C5A059]/30 transition-all shadow-sm hover:shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-[8px] font-black uppercase tracking-[0.2em] text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 rounded-full border border-[#C5A059]/20">
                    {item.category}
                  </div>
                  <Zap className="w-4 h-4 text-gray-300 group-hover:text-[#C5A059] transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-6 text-black group-hover:text-[#C5A059] transition-colors leading-snug">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 group-hover:text-black transition-colors">
                  Access Blueprint <ChevronRight className="w-4 h-4" />
                </div>
             </Link>
           ))}
        </div>
      </section>

      {/* Network Section */}
      <section id="network" className="bg-black/[0.01] py-40 border-y border-black/5 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif font-bold tracking-tight mb-20 text-center text-black">
            The Curated <span className="text-[#C5A059] italic">Network</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-10 rounded-[40px] bg-white border border-black/5 text-left shadow-xl hover:shadow-2xl transition-all">
              <Instagram className="w-10 h-10 text-black mb-8" />
              <h3 className="font-serif font-bold text-2xl mb-4 text-black italic">On the Screen</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 font-light">Daily insights and community showcases on our official handles.</p>
              <a href="https://instagram.com/dvnnytorres" target="_blank" className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em] hover:text-black transition-colors flex items-center gap-2">
                Follow Danny <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="p-10 rounded-[40px] bg-white border border-black/5 text-left shadow-xl hover:shadow-2xl transition-all">
              <Mail className="w-10 h-10 text-black mb-8" />
              <h3 className="font-serif font-bold text-2xl mb-4 text-black italic">Off the Grid</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 font-light">Private gatherings and digital-nomad resources for verified members.</p>
              <a href="mailto:auralixai@agentmail.to" className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em] hover:text-black transition-colors flex items-center gap-2">
                Inquire <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="p-10 rounded-[40px] bg-gradient-to-br from-black to-[#333] border border-black text-left shadow-xl hover:shadow-2xl transition-all">
              <Users className="w-10 h-10 text-[#C5A059] mb-8" />
              <h3 className="font-serif font-bold text-2xl mb-4 text-white italic">Virtual Hub</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-8 font-light">Coming soon: Our exclusive community platform for retired millennials.</p>
              <div className="text-[9px] font-black tracking-[0.3em] text-[#C5A059] uppercase">In Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="join" className="max-w-4xl mx-auto px-6 py-40 text-center">
        <h2 className="text-6xl font-serif font-bold tracking-tight mb-8 text-black">
          Join the <span className="text-[#C5A059] italic">Inner Circle</span>
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl mx-auto font-light text-lg">
          Whether you are already living the retired millennial life or would like to know how to do so, our community is here to provide the support and comrade required for the journey.
        </p>

        <form 
          className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Welcome to the movement. We'll be in touch.");
          }}
        >
          <input 
            type="email" 
            placeholder="Your Private Email"
            required
            className="flex-1 bg-black/5 border border-black/10 rounded-full px-8 py-5 focus:outline-none focus:border-[#C5A059] transition-colors text-black font-light"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="px-10 py-5 bg-black text-[#C5A059] font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-[#C5A059] hover:text-white transition-all shadow-2xl">
            Apply Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-24 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex items-center gap-3">
          <Palmtree className="w-7 h-7 text-[#C5A059]" />
          <span className="font-serif font-bold tracking-tight text-xl uppercase text-black">Retired Millennials</span>
        </div>
        <div className="text-[9px] font-black tracking-[0.5em] text-gray-300 uppercase text-center md:text-right">
          © 2026 Retired Millennials. Curated by Auralix AI.
        </div>
      </footer>
    </div>
  );
}
