import React from 'react';
import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Shop() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <section id="shop" className="px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-12 flex justify-start">
            <Link to="/" className="inline-flex items-center text-sm font-medium tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              <ArrowRight size={16} className="ml-2" />
              חזרה לעמוד הבית
            </Link>
          </div>
        </FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <FadeIn>
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">קולקציית Nuli</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">אסתטיקה לבית, וללב.</h2>
          </FadeIn>
          <FadeIn>
            <a href="#" className="border-b border-primary pb-1 text-primary hover:text-primary/70 transition-colors uppercase text-sm tracking-wider">לכל הקולקציה</a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop", name: "כלי קרמיקה פלומה", price: "₪120" },
              { img: "https://images.unsplash.com/photo-1602928321679-560bb453f190?q=80&w=600&auto=format&fit=crop", name: "נר ארומטי מרווה", price: "₪85" }
            ].map((product, i) => (
              <FadeIn delay={i * 0.1} key={i}>
                <div className="group cursor-pointer">
                  <div className="aspect-square bg-muted/50 w-full overflow-hidden mb-4 rounded-sm relative">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h4 className="font-serif text-lg text-foreground">{product.name}</h4>
                  <p className="text-muted-foreground font-light text-sm mt-1">{product.price}</p>
                </div>
              </FadeIn>
            ))}
        </div>
      </section>
    </div>
  );
}
