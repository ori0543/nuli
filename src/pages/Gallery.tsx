import React from 'react';
import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Gallery() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <section id="gallery" className="px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-12 flex justify-start">
            <Link to="/" className="inline-flex items-center text-sm font-medium tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              <ArrowRight size={16} className="ml-2" />
              חזרה לעמוד הבית
            </Link>
          </div>
          <div className="text-center mb-16">
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">היישר מהמקום</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">הגלריה שלנו</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop"
          ].map((src, i) => (
            <FadeIn delay={i * 0.1} key={i}>
              <div className="relative aspect-square overflow-hidden group">
                <img src={src} alt={`Gallery image ${i + 1}`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/20 transition-colors duration-500"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
