import { blogPosts } from "@/data/blog";
import { 
  ArrowLeft, 
  Zap, 
  ChevronRight, 
  Palmtree,
  ArrowRight,
  Newspaper,
  Calendar,
  User
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Insights Journal | Retired Millennials Blog",
  description: "Fresh perspectives on wealth, freedom, and the millennial experience in the age of AI. Learn how to retire early and live free.",
  openGraph: {
    title: "The Insights Journal | Retired Millennials Blog",
    description: "Fresh perspectives on wealth, freedom, and the millennial experience in the age of AI. Learn how to retire early and live free.",
    url: "https://retiredmillennials.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
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
              <Newspaper className="w-3 h-3" /> The Insights Journal
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 italic uppercase leading-none">
              The <span className="text-[#FFD700]">Blog</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Fresh perspectives on wealth, freedom, and the millennial experience in the age of AI.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#FFD700]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="px-2 py-1 rounded bg-[#FFD700]/10 text-[#FFD700] text-[9px] font-black uppercase tracking-widest">
                    {post.category}
                  </div>
                  <Calendar className="w-4 h-4 text-gray-700 group-hover:text-[#FFD700] transition-colors" />
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-4 italic uppercase group-hover:text-[#FFD700] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3 text-gray-600" />
                  <span className="text-[10px] font-black tracking-widest text-gray-600 uppercase">
                    {post.author}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#FFD700] transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-32 p-12 rounded-[40px] bg-gradient-to-br from-[#FFD700]/20 via-transparent to-transparent border border-[#FFD700]/20 text-center relative overflow-hidden">
          <Palmtree className="w-64 h-64 text-[#FFD700]/5 absolute -bottom-20 -right-20 transform rotate-12" />
          <div className="relative z-10">
            <h2 className="text-4xl font-black tracking-tighter mb-6 italic uppercase">Ready for retirement?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Stay ahead of the curve. Our blog is just one part of the ecosystem. Join the private network for more.
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
