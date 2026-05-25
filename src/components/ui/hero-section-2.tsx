import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Globe, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: <Globe className="h-5 w-5 text-primary" />,
        phone: <Phone className="h-5 w-5 text-primary" />,
        address: <MapPin className="h-5 w-5 text-primary" />,
    };
    // Changing mr-2 to me-2 for RTL support (margin-end instead of margin-right)
    return <div className="me-2 flex-shrink-0">{icons[type]}</div>;
};

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  callToAction: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  contactInfo?: {
    website?: string;
    phone?: string;
    address?: string;
  };
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {
    
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    };

    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom easing for premium feel
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Content Side */}
        <div className="flex w-full flex-col justify-between p-8 pt-24 md:w-1/2 md:p-12 lg:w-3/5 lg:p-24 z-10 relative">
            {/* Soft background glow to ensure text readability */}
            <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] md:hidden z-[-1]"></div>
            
            <div>
                {logo && (
                    <motion.header className="mb-12" variants={itemVariants}>
                        <div className="flex items-center">
                            {logo.url && <img src={logo.url} alt={logo.alt} className="me-4 h-12 w-auto object-contain drop-shadow-sm" />}
                            <div>
                                {logo.text && <p className="text-2xl font-serif font-bold text-primary tracking-tight">{logo.text}</p>}
                                {slogan && <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{slogan}</p>}
                            </div>
                        </div>
                    </motion.header>
                )}

                <motion.main variants={containerVariants} className="mt-8 md:mt-20">
                    <motion.h1 className="text-5xl font-serif font-light leading-tight text-foreground md:text-6xl lg:text-7xl" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    <motion.div className="my-8 h-[2px] w-16 bg-primary opacity-60" variants={itemVariants}></motion.div>
                    <motion.div className="mb-10 max-w-md text-lg text-muted-foreground leading-relaxed font-light" variants={itemVariants}>
                        {subtitle}
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Link to={callToAction.href} className="inline-flex text-sm font-semibold tracking-widest text-primary transition-all hover:text-primary/70 hover:me-2 group">
                            {callToAction.text}
                            <span className="opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 ms-2">←</span>
                        </Link>
                    </motion.div>
                </motion.main>
            </div>

            {/* Footer Info */}
            {contactInfo && (
              <motion.footer className="mt-16 w-full pt-8 border-t border-muted" variants={itemVariants}>
                  <div className="grid grid-cols-1 gap-6 text-sm text-muted-foreground sm:grid-cols-3 font-light">
                      {contactInfo.website && (
                        <div className="flex items-center">
                            <InfoIcon type="website" />
                            <span className="mt-0.5">{contactInfo.website}</span>
                        </div>
                      )}
                      {contactInfo.phone && (
                        <div className="flex items-center">
                            <InfoIcon type="phone" />
                            <span className="mt-0.5">{contactInfo.phone}</span>
                        </div>
                      )}
                      {contactInfo.address && (
                        <div className="flex items-center">
                            <InfoIcon type="address" />
                            <span className="mt-0.5">{contactInfo.address}</span>
                        </div>
                      )}
                  </div>
              </motion.footer>
            )}
        </div>

        {/* Image Side with Clip Path Animation engineered for RTL */}
        <motion.div 
          className="w-full min-h-[400px] bg-cover bg-center md:w-1/2 md:min-h-screen lg:w-2/5 absolute inset-0 md:relative"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
          animate={{ clipPath: 'polygon(0 0, 75% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Subtle overlay for luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-l from-background/40 to-transparent mix-blend-overlay"></div>
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
