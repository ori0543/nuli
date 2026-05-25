import React from 'react';
import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-[80vh]">
      <section id="about" className="px-6 md:px-12 max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-sm font-medium tracking-widest text-muted-foreground hover:text-foreground transition-colors">
              <ArrowRight size={16} className="ml-2" />
              חזרה לעמוד הבית
            </Link>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeIn>
            <div className="hidden md:block relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" alt="Coffee pouring" className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000" />
            </div>
            {/* Mobile image fallback if needed? Oh wait, user removed it on mobile earlier via 'hidden md:block' */}
          </FadeIn>
          <FadeIn delay={0.2}>
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">הסיפור שלנו</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-8">
              יותר מבית קפה,<br />
              סגנון חיים.
            </h2>
            <div className="h-[1px] w-12 bg-muted-foreground/30 mb-8"></div>
            <p className="text-muted-foreground font-light leading-relaxed mb-6 text-lg">
              ב-Nuli אנחנו מאמינים שאסתטיקה וטעם הולכים יד ביד. המקום שלנו נוצר מתוך אהבה לפרטים הקטנים - החל מבחירת פולי הקפה שמגיעים מהחוות הטובות בעולם, ועד לפריט העיצוב המדויק שישלים לכם את הפינה בבית.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              כל פינה בחלל עוצבה כדי להעניק לכם רגע של שקט, השראה וחיבור. מוזמנים לקחת פסק זמן מהמרוץ.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
