import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MapPin, Phone, Menu, X } from 'lucide-react';

export function Layout() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "בית" },
    { to: "/about", label: "אודות" },
    { to: "/menu", label: "תפריט" },
    { to: "/shop", label: "חנות מתנות" },
    { to: "/gallery", label: "גלריה" },
  ];

  // Determine if the current page should have a dark navbar at the top or transparent
  // For home page, it stays transparent. For other pages we might want it always sticky/colored.
  const isHomePage = location.pathname === "/";
  const navbarBg = (!isHomePage || isScrolled || isMobileMenuOpen) 
    ? 'bg-background/95 backdrop-blur-md text-foreground shadow-sm' 
    : 'text-[#fcfaf8] mix-blend-difference';

  return (
    <div className="bg-background min-h-screen font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden flex flex-col">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 p-6 flex justify-between items-center transition-all duration-500 ${navbarBg}`}>
        <Link to="/" className="font-serif text-2xl tracking-widest z-50">N U L I</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-light tracking-wide">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:opacity-70 transition-opacity">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-background z-40 flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center gap-10 text-2xl font-serif text-foreground">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors mt-8 uppercase tracking-widest text-sm text-muted-foreground">יצירת קשר</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- FOOTER / CONTACT --- */}
      <footer id="contact" className="bg-foreground text-background py-24 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-4xl mb-6">N U L I .</h3>
            <p className="text-background/60 font-light max-w-sm mb-8 leading-relaxed">
              קפה בוטיק וחנות מתנות שמביאה את העיצוב לחיים שלכם. הצטרפו אלינו לכוס קפה או חפשו מתנה ייחודית בגלריה שלנו.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-background/50">ביקור</h4>
            <ul className="space-y-4 font-light text-background/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>חזקיהו המלך 24,<br />ירושלים, 9364408</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span dir="ltr">055-988-9239</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-xs font-semibold mb-6 text-background/50">שעות פתיחה</h4>
            <ul className="space-y-4 font-light text-background/80">
              <li className="flex items-start gap-3 justify-between">
                <span>א׳-ה׳</span>
                <span>08:00 - 19:00</span>
              </li>
              <li className="flex items-start gap-3 justify-between">
                <span>ו׳</span>
                <span>07:30 - 14:00</span>
              </li>
              <li className="flex items-start gap-3 justify-between">
                <span>שבת</span>
                <span>סגור</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center text-xs font-light text-background/40">
          <p>© {new Date().getFullYear()} Nuli Boutique. כל הזכויות שמורות.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">תקנון האתר</a>
            <a href="#" className="hover:text-background transition-colors">הצהרת נגישות</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
