import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Palmtree, 
  Calendar, 
  User, 
  Share2,
  Tag
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Retired Millennials`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Retired Millennials",
      "logo": {
        "@type": "ImageObject",
        "url": "https://retiredmillennials.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://retiredmillennials.com/blog/${post.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-white text-black pt-24 px-4 pb-12 selection:bg-[#C5A059]/30 selection:text-black font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#C5A059] mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="px-2 py-1 rounded bg-[#C5A059]/10 text-[#C5A059] text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
              <Tag className="w-3 h-3" /> {post.category}
            </div>
            <div className="w-1 h-1 rounded-full bg-black/10"></div>
            <div className="flex items-center gap-1.5 text-gray-500 text-[10px] font-black uppercase tracking-widest">
              <Calendar className="w-3 h-3" /> {post.date}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-8  leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-black/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#FFA500] flex items-center justify-center">
                <User className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Written by</div>
                <div className="font-bold text-sm italic">{post.author}</div>
              </div>
            </div>
            <button className="p-3 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 transition-colors">
              <Share2 className="w-5 h-5 text-[#C5A059]" />
            </button>
          </div>
        </header>

        {/* Content */}
        <article 
          className="prose prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:tracking-tighter prose-p:text-gray-600 font-light prose-p:leading-relaxed prose-a:text-[#C5A059] prose-strong:text-black prose-blockquote:border-[#C5A059] prose-blockquote:bg-black/5 prose-blockquote:py-1"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer CTA */}
        <div className="mt-32 p-10 rounded-3xl bg-white shadow-sm hover:shadow-2xl border border-black/5 text-center relative overflow-hidden">
          <Palmtree className="w-40 h-40 text-[#C5A059]/5 absolute -bottom-10 -right-10 transform rotate-12" />
          <h2 className="text-2xl font-serif font-bold tracking-tight mb-4 ">Get the Blueprints</h2>
          <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto">
            Enjoyed this? Our freedom library contains actionable business models for the modern millennial.
          </p>
          <Link href="/library" className="inline-flex px-8 py-3 bg-[#C5A059] text-black font-black uppercase tracking-widest text-sm rounded-xl hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] transition-all">
            View Library
          </Link>
        </div>
      </div>
    </div>
  );
}
