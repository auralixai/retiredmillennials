import { blueprints } from "@/data/blueprints";
import { 
  ArrowLeft, 
  Target, 
  Zap, 
  TrendingUp, 
  Hammer, 
  Wrench, 
  Clock, 
  CircleDollarSign,
  BarChart3,
  ChevronRight,
  BrainCircuit,
  Info
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blueprints.map((bp) => ({
    slug: bp.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blueprint = blueprints.find((b) => b.slug === slug);
  if (!blueprint) return {};

  return {
    title: `${blueprint.title} Blueprint | Retired Millennials`,
    description: blueprint.overview,
    openGraph: {
      title: blueprint.title,
      description: blueprint.overview,
      type: "article",
    },
  };
}

export default async function BlueprintPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blueprint = blueprints.find(b => b.slug === slug);

  if (!blueprint) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": blueprint.title,
    "description": blueprint.overview,
    "step": blueprint.steps.map((step, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "text": step
    })),
    "totalTime": blueprint.timeToFirstDollar,
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": blueprint.startupCost
    },
    "tool": blueprint.tools.map(tool => ({
      "@type": "HowToTool",
      "name": tool
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://retiredmillennials.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Library",
        "item": "https://retiredmillennials.com/library"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blueprint.title,
        "item": `https://retiredmillennials.com/library/${blueprint.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white pt-24 px-4 pb-12 selection:bg-[#FFD700]/30 selection:text-white relative overflow-x-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 left-1/4 w-[500px] h-[500px] bg-[#FFD700] rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] animate-pulse delay-700"></div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/library" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FFD700] mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Library
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-[10px] font-black tracking-widest uppercase mb-4">
              {blueprint.category} Blueprint
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 italic uppercase">{blueprint.title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed">{blueprint.overview}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center min-w-[200px] backdrop-blur-xl">
             <div className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">Difficulty</div>
             <div className="text-3xl font-black text-[#FFD700] tracking-tighter uppercase italic">{blueprint.difficulty}</div>
             <div className="mt-4 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#FFD700]" 
                  style={{ width: blueprint.difficulty === 'Beginner' ? '33%' : blueprint.difficulty === 'Intermediate' ? '66%' : '100%' }}
                ></div>
             </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
           <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-gray-500 text-[10px] font-black tracking-widest uppercase mb-2">Startup Cost</div>
              <div className="font-bold text-lg text-white flex items-center gap-2">
                <CircleDollarSign className="w-4 h-4 text-[#FFD700]" /> {blueprint.startupCost}
              </div>
           </div>
           <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-gray-500 text-[10px] font-black tracking-widest uppercase mb-2">Time to Profit</div>
              <div className="font-bold text-lg text-[#FFD700] flex items-center gap-2">
                <Clock className="w-4 h-4" /> {blueprint.timeToFirstDollar}
              </div>
           </div>
           <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-gray-500 text-[10px] font-black tracking-widest uppercase mb-2">Potential</div>
              <div className="font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" /> High Yield
              </div>
           </div>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-8">
              <section>
                 <h2 className="text-xl font-black mb-6 flex items-center gap-2 uppercase italic">
                   <Target className="text-[#FFD700] w-5 h-5" /> Execution Steps
                 </h2>
                 <ul className="space-y-4">
                    {blueprint.steps.map((step: string, i: number) => (
                      <li key={i} className="flex gap-4 items-start text-gray-400 text-sm leading-relaxed">
                         <div className="w-6 h-6 rounded-lg bg-[#FFD700]/10 flex-shrink-0 flex items-center justify-center text-[10px] font-black text-[#FFD700] border border-[#FFD700]/20">
                           {i+1}
                         </div>
                         {step}
                      </li>
                    ))}
                 </ul>
              </section>

              <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                 <h3 className="font-bold text-blue-500 flex items-center gap-2 text-sm mb-3">
                   <BrainCircuit className="w-4 h-4" /> The Solopreneur Edge
                 </h3>
                 <p className="text-xs text-gray-400 leading-relaxed italic">
                   The key to retiring early is not just making money—it&apos;s automating the making. This model is designed to be delegated once the first $1,000 in profit is hit.
                 </p>
              </div>
           </div>

           <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FFD700]/10 to-transparent border border-[#FFD700]/20 relative overflow-hidden group">
                 <div className="relative z-10">
                    <h3 className="text-xl font-black mb-4 uppercase italic">Required Toolkit</h3>
                    <ul className="space-y-3 mb-8">
                      {blueprint.tools.map((tool, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <Hammer className="w-4 h-4 text-[#FFD700]" /> {tool}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-4 bg-[#FFD700] text-black font-black rounded-xl hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all flex items-center justify-center gap-2 group">
                      Download Full Guide <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                 <h3 className="font-bold flex items-center gap-2 text-sm mb-4 text-gray-300">
                   <Info className="w-4 h-4 text-gray-500" /> pSEO Metadata
                 </h3>
                 <div className="flex flex-wrap gap-2">
                    {blueprint.pSEOKeywords.map((tag, i) => (
                      <span key={i} className="text-[9px] font-black text-gray-600 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">
                        #{tag.replace(/\s+/g, '')}
                      </span>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-12 border-t border-white/5 text-center">
           <h2 className="text-2xl font-black mb-4 uppercase italic tracking-tight">Ready to stop dreaming?</h2>
           <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
             Join our curated network for weekly blueprints, live Q&A with successful flippers, and the tools to automate your retirement.
           </p>
           <Link href="/#join" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-black transition-all text-sm uppercase tracking-widest">
             Join the Network
           </Link>
        </div>
      </div>
    </div>
  );
}
