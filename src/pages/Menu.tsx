import React from 'react';
import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Menu() {
  return (
    <div className="pt-32 pb-32 bg-muted/30 min-h-screen">
      <section id="menu" className="px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-12 flex justify-start">
            <Link to="/" className="inline-flex items-center text-sm font-medium tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              <ArrowRight size={16} className="ml-2" />
              חזרה לעמוד הבית
            </Link>
          </div>
          <div className="text-center mb-20">
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">התפריט שלנו</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">קפה, מאפים ומה שביניהם</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { title: "קפה מקומי", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop", desc: "תערובות ייחודיות וקפה מושלם" },
            { title: "מאפי בוקר", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop", desc: "קרואסונים ועוגיות עבודת יד" },
            { title: "קינוחי בוטיק", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop", desc: "טארטים, מקרונים ועוגות מיוחדות" }
          ].map((item, i) => (
            <FadeIn delay={i * 0.15} key={i}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-sm">
                  <img src={item.img} alt={item.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white border border-white/50 px-6 py-2 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">לגילוי</span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-light">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
