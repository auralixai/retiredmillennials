"use client";

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
    <div className="min-h-screen bg-[#0A0B0D] text-white selection:bg-[#FFD700]/30 selection:text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0B0D]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#FFD700] to-[#FFA500] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.2)]">
              <Palmtree className="w-5 h-5 text-black" />
            </div>
            <span className="font-black tracking-tighter text-xl uppercase italic">Retired Millennials</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase text-gray-400">
            <a href="#vision" className="hover:text-[#FFD700] transition-colors">Vision</a>
            <a href="#network" className="hover:text-[#FFD700] transition-colors">Network</a>
            <a href="#join" className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-[#FFD700] transition-all">Join Club</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-[#FFD700] rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFD700] text-[10px] font-black tracking-widest uppercase mb-8">
            <Zap className="w-3 h-3 animate-bounce" /> The New Standard of Living
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] italic uppercase">
            Why wait for <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Sixty?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Retired Millennial isn&apos;t about checking out. It&apos;s about checking <span className="text-white font-bold italic underline decoration-[#FFD700]">in</span> to the life you actually want to live, right now.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#join" className="group relative px-8 py-4 bg-[#FFD700] text-black font-black text-lg rounded-2xl hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all flex items-center gap-3">
              Join the Movement <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4 text-gray-500 font-bold tracking-widest text-xs uppercase">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#FFD700]" /> Curated Network</span>
              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-blue-500" /> Global Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Grid */}
      <section id="vision" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8">
              Free yourself from the <span className="text-[#FFD700]">Rat Race</span>.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              The game was rigged by previous generations. We&apos;re building our own rules. Whether you keep your day job or scale your own AI-powered business empire, being a retired millennial is about total autonomy.
            </p>
            <div className="space-y-6">
              {[
                { icon: TrendingUp, title: "Wealth Automation", desc: "Build systems that pay for your lifestyle." },
                { icon: Compass, title: "Location Freedom", desc: "Work from anywhere, live everywhere." },
                { icon: Users, title: "Comrade & Support", desc: "A network of people who refuse to settle." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FFD700]/50 transition-colors">
                    <item.icon className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-3xl border border-white/10 p-2 transform rotate-3 hover:rotate-0 transition-transform duration-700 overflow-hidden">
               <div className="w-full h-full rounded-2xl bg-[#0A0B0D] relative flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-[#FFD700]/5 animate-pulse"></div>
                  <Palmtree className="w-40 h-40 text-white/5 absolute -bottom-10 -right-10" />
                  <div className="relative text-center">
                    <div className="text-6xl font-black text-[#FFD700] mb-4 tracking-tighter italic">2026</div>
                    <div className="text-xs font-black tracking-[0.3em] text-gray-500 uppercase">Est. Movement</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section id="network" className="bg-white/[0.02] py-32 border-y border-white/5 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-12 text-center">
            Our Curated <span className="text-[#FFD700]">Network</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#0A0B0D] border border-white/5 text-left">
              <Instagram className="w-10 h-10 text-pink-500 mb-6" />
              <h3 className="font-bold text-xl mb-4 italic">On the Screen</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">Daily insights and community showcases on our official handles.</p>
              <a href="https://instagram.com/dvnnytorres" target="_blank" className="text-xs font-bold text-[#FFD700] uppercase tracking-widest hover:underline flex items-center gap-2">
                Follow Danny <ChevronRight className="w-3 h-3" />
              </a>
            </div>
            <div className="p-8 rounded-3xl bg-[#0A0B0D] border border-white/5 text-left">
              <Mail className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="font-bold text-xl mb-4 italic">Off the Grid</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">Private gatherings and digital-nomad resources for verified members.</p>
              <a href="mailto:auralixai@agentmail.to" className="text-xs font-bold text-[#FFD700] uppercase tracking-widest hover:underline flex items-center gap-2">
                Inquire <ChevronRight className="w-3 h-3" />
              </a>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FFD700]/10 to-transparent border border-[#FFD700]/20 text-left">
              <Users className="w-10 h-10 text-[#FFD700] mb-6" />
              <h3 className="font-bold text-xl mb-4 italic">Virtual Hub</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">Coming soon: Our exclusive community platform for retired millennials.</p>
              <div className="text-[10px] font-black tracking-widest text-[#FFD700] uppercase">In Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="join" className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-5xl font-black tracking-tighter italic uppercase mb-8">
          Join the <span className="text-[#FFD700]">Club</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto font-medium">
          Whether you are already living the retired millennial life or would like to know how to do so, our community is here to provide support, resources, and comrade.
        </p>

        <form 
          className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Welcome to the movement. We'll be in touch.");
          }}
        >
          <input 
            type="email" 
            placeholder="Your Email Address"
            required
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FFD700] transition-colors"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-[#FFD700] transition-all">
            Join Waitlist
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center gap-2">
          <Palmtree className="w-6 h-6 text-[#FFD700]" />
          <span className="font-black tracking-tighter uppercase italic">Retired Millennials</span>
        </div>
        <div className="text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase text-center md:text-right">
          © 2026 Retired Millennials. All Rights Reserved. Built with Auralix AI.
        </div>
      </footer>
    </div>
  );
}
