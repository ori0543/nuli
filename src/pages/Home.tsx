import React from 'react';
import { HeroSection } from '@/components/ui/hero-section-2';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '@/components/ui/fade-in';

export default function Home() {
  const mobileHeroImages = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop",
    "https://res.cloudinary.com/dqsxisjlg/image/upload/v1778009324/671705475_18081370883127246_7735498385437412939_n_zdp4nh.jpg",
    "https://res.cloudinary.com/dqsxisjlg/image/upload/v1778015883/670868673_18081370874127246_8114825477137473885_n_hs9okt.jpg"
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop"
  ];

  const [currentMobileImage, setCurrentMobileImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileImage((prev) => (prev + 1) % mobileHeroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div id="home">
        {/* Mobile View */}
        <div className="md:hidden pt-28 pb-12 px-6 flex flex-col items-center">
          <h1 className="text-[28px] font-serif text-primary mb-2 text-center">נוּלי | בית קפה ומתנות</h1>
          <p className="text-xs font-medium tracking-widest text-[#4e3a33] mb-8 w-full text-center pb-2">
            כשר KOSHER
          </p>
          
          <div className="w-[100vw] -mx-6 mb-8 relative h-56 overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={currentMobileImage}
                src={mobileHeroImages[currentMobileImage]} 
                alt="Cafe Image" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-full h-full object-cover" 
              />
            </AnimatePresence>
            
            {/* Arrow icons for slider vibe */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 text-white/90 drop-shadow-md z-10 pointer-events-none">
              <button 
                onClick={() => setCurrentMobileImage((prev) => (prev - 1 + mobileHeroImages.length) % mobileHeroImages.length)}
                className="pointer-events-auto hover:text-white transition-all active:scale-95"
              >
                <ChevronRight size={38} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => setCurrentMobileImage((prev) => (prev + 1) % mobileHeroImages.length)}
                className="pointer-events-auto hover:text-white transition-all active:scale-95"
              >
                <ChevronLeft size={38} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="w-[100vw] -mx-6 bg-[#4e3a33] text-[#fcfaf8] py-3 mb-8 shadow-sm">
            <h2 className="text-[20px] font-serif tracking-wide text-center">הסיפור שלנו | אודות המקום</h2>
          </div>

          <div className="flex flex-col gap-6 text-[15px] text-foreground/90 font-light px-2 leading-[1.8] text-center">
            <p>
              לאחר שירות משמעותי בקבע, החלטנו לפתוח את נוּלי, וידענו שהסיפור של החמ״ל יהיה הלב של החנות שלנו.
            </p>
            <p>
              יצרנו מרחב נעים, רגוע וצבעוני ובתוכו אנו שוזרות את הגעגוע והליך הריפוי האישי והלאומי.
              אנו זוכות לספר עליהן לכל שואל ובכך להפיץ את סיפורן ולהזכיר את האור שהיו.
            </p>
            <p className="font-serif italic font-medium text-[#4e3a33] mt-2">
              ״כל עוד מישהו זוכר אותי- אני חי״
            </p>
          </div>
        </div>

        {/* Desktop View */}
        <HeroSection
          title={
            <>
              בית קפה <br />
              <span className="text-primary italic">ומתנות</span>
            </>
          }
          subtitle={
            <div className="flex flex-col gap-4 text-base md:text-lg">
              <p>
                לאחר שירות משמעותי בקבע, החלטנו לפתוח את נוּלי, וידענו שהסיפור של החמ״ל יהיה הלב של החנות שלנו.
              </p>
              <p>
                יצרנו מרחב נעים, רגוע וצבעוני ובתוכו אנו שוזרות את הגעגוע והליך הריפוי האישי והלאומי.
                אנו זוכות לספר עליהן לכל שואל ובכך להפיץ את סיפורן ולהזכיר את האור שהיו.
              </p>
              <p className="font-serif italic text-primary/80 mt-2">
                ״כל עוד מישהו זוכר אותי- אני חי״
              </p>
            </div>
          }
          callToAction={{
            text: "גלו את התפריט",
            href: "/menu", // changed to point to /menu route
          }}
          backgroundImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop"
          contactInfo={{
              phone: "055-988-9239",
              address: "חזקיהו המלך 24, ירושלים, 9364408",
          }}
          className="hidden md:flex min-h-[90vh]"
        />
      </div>

      {/* --- EXPERIENCE / VIBE --- */}
      <section className="relative py-32 overflow-hidden h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed w-full h-full"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1559925393-8bc0425e7082?q=80&w=2000&auto=format&fit=crop)` }}
        />
        <div className="relative z-20 max-w-4xl mx-auto text-center px-6 text-white">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-serif font-light mb-8">רגעים של השראה</h2>
            <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
              החלל שלנו מתוכנן לעטוף אתכם בשקט עיצובי. מקום להתנתק מהחוץ, לשבת עם ספר טוב או חברים קרובים, ולתת ליופי המינימליסטי לדבר.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/about" className="border border-white text-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                קראו עוד עלינו
              </Link>
              <Link to="/menu" className="bg-white text-black px-8 py-3 text-sm tracking-widest hover:bg-white/90 transition-colors duration-300">
                צפייה בתפריט המלא
              </Link>
              <Link to="/shop" className="bg-white text-black px-8 py-3 text-sm tracking-widest hover:bg-white/90 transition-colors duration-300">
                חנות המתנות
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- SCROLLING GALLERY --- */}
      <section className="py-2 overflow-hidden bg-background flex flex-col" style={{ direction: 'ltr' }}>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex w-max"
        >
          {/* Group 1 */}
          <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
            {galleryImages.map((src, i) => (
              <div key={`g1-${i}`} className="relative w-[200px] md:w-[300px] aspect-square flex-shrink-0 overflow-hidden">
                <img src={src} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="Gallery preview" />
              </div>
            ))}
          </div>
          {/* Group 2 */}
          <div className="flex gap-4 md:gap-8 pr-4 md:pr-8">
            {galleryImages.map((src, i) => (
              <div key={`g2-${i}`} className="relative w-[200px] md:w-[300px] aspect-square flex-shrink-0 overflow-hidden">
                <img src={src} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt="Gallery preview" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
