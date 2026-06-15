import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Shield, Brain, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AppDemo from '../components/AppDemo';

// Global flag tracking if the user has already seen the initial app intro
let isFirstLoad = true;

const FeatureRow = ({ icon: Icon, title, desc, align = 'left' }: any) => {
  const isRight = align === 'right';
  
  return (
    <div className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 py-24 border-b border-white/5 last:border-0 relative`}>
      
      {/* Text Column */}
      <motion.div 
        initial={{ opacity: 0, x: isRight ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 space-y-6 z-10"
      >
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h3>
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
          {desc}
        </p>
      </motion.div>

      {/* Graphic / Large Icon Column */}
      <div className="flex-1 hidden md:flex items-center justify-center relative w-full h-full">
        {/* Background ambient glow behind the icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-focus-primary/15 rounded-full blur-3xl pointer-events-none" />
        
        {/* Large Glassmorphic Icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-56 h-56 rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl relative z-10"
        >
          <Icon className="w-24 h-24 text-white/40" />
        </motion.div>
      </div>
    </div>
  );
};

export default function Home() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Read the global flag only once when the component mounts
  const [initialLoad] = useState(isFirstLoad);

  useEffect(() => {
    // After the first render, mark the intro as played
    isFirstLoad = false;
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ y, opacity }}
          className="text-center z-10 flex flex-col items-center max-w-5xl px-4 -translate-y-24 md:-translate-y-32"
        >
          {/* Wrapper to delay the title fade-in until after line drawing & blobs ONLY on first load */}
          <motion.div
            initial={initialLoad ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: initialLoad ? 3.2 : 0, duration: initialLoad ? 1.5 : 0 }}
            className="mb-6 md:mb-12"
          >
            <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-none mb-4 flex flex-col">
              <span className="text-white">Earn your</span>
              <span className="text-gradient drop-shadow-2xl">focus.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-light tracking-wide mt-8">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.0, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-[0.3em]">{t('nav.scroll')}</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      {/* Features Showcase */}
      <section className="relative min-h-screen py-32 px-4 md:px-16 max-w-7xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter">
            {t('features.title')} <span className="text-gradient">{t('features.titleHighlight')}</span>.
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 font-light max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col mt-20">
          <FeatureRow 
            icon={Target}
            title={t('features.blocker')}
            desc={t('features.blockerDesc')}
            align="left"
          />
          <FeatureRow 
            icon={Shield}
            title={t('features.hardcore')}
            desc={t('features.hardcoreDesc')}
            align="right"
          />
          <FeatureRow 
            icon={Brain}
            title={t('features.ai')}
            desc={t('features.aiDesc')}
            align="left"
          />
        </div>
      </section>

      {/* App Core Loop Demonstration */}
      <section className="relative w-full z-20 py-20">
        <AppDemo />
      </section>
    </>
  );
}
