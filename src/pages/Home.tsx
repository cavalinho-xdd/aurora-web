import { useEffect, useState, type ReactNode, type ElementType } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Target, Shield, Brain, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AppDemo from '../components/AppDemo';
import ApiGuideModal from '../components/ApiGuideModal';
import { usePerformanceMode } from '../components/PerformanceContext';

let isFirstLoad = true;

interface FeatureRowProps {
  icon: ElementType;
  title: string;
  desc: string;
  align?: 'left' | 'right';
  children?: ReactNode;
}

const FeatureRow = ({ icon: Icon, title, desc, align = 'left', children }: FeatureRowProps) => {
  const isRight = align === 'right';
  
  return (
    <div className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 py-12 md:py-24 border-b border-white/5 last:border-0 relative`}>
      
      <motion.div 
        initial={{ opacity: 0, x: isRight ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex-1 space-y-6 z-10 text-center md:text-left"
      >
        <h3 className="text-4xl md:text-6xl font-bold tracking-tight">{title}</h3>
        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
          {desc}
        </p>
        <div className="flex flex-col items-center md:items-start w-full">
          {children}
        </div>
      </motion.div>

      <div className="flex-1 hidden md:flex items-center justify-center relative w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-focus-primary/15 rounded-full blur-3xl pointer-events-none" />
        
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

  const [initialLoad] = useState(isFirstLoad);
  const { isPerformanceMode } = usePerformanceMode();
  
  const [isApiGuideOpen, setIsApiGuideOpen] = useState(false);

  const [wordIndex, setWordIndex] = useState(0);
  const words = ["focused", "calm", "organized", "unstoppable"];

  useEffect(() => {
    isFirstLoad = false;

    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ y, opacity }}
          className="text-center z-10 flex flex-col items-center max-w-5xl px-4 -translate-y-24 md:-translate-y-32"
        >
          <motion.div
            initial={initialLoad ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: initialLoad ? 0.2 : 0, duration: initialLoad ? 0.8 : 0, ease: "easeOut" }}
            className="mb-6 md:mb-12"
          >
            <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] font-black tracking-tighter leading-none mb-4 flex flex-col items-center overflow-hidden py-4">
              <motion.div layout className="text-white flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5 gap-y-2">
                <motion.span layout>Stay</motion.span> 
                <AnimatePresence mode="popLayout">
                  <motion.span
                    layout
                    key={wordIndex}
                    initial={{ y: 30, opacity: 0, filter: isPerformanceMode ? "none" : "blur(5px)" }}
                    animate={{ y: 0, opacity: 1, filter: isPerformanceMode ? "none" : "blur(0px)" }}
                    exit={{ y: -30, opacity: 0, filter: isPerformanceMode ? "none" : "blur(5px)" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-focus-primary inline-block"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <motion.span layout>with</motion.span>
              </motion.div>
              <motion.span layout className={`text-gradient mt-2 md:mt-0 text-[4.5rem] sm:text-[5.5rem] md:text-[9rem] lg:text-[11rem] leading-none ${isPerformanceMode ? '' : 'drop-shadow-2xl'}`}>
                aurora.
              </motion.span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-light tracking-wide mt-6">
              "Light up your mind."
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-[0.3em]">{t('nav.scroll')}</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </section>

      <section className="relative min-h-screen py-16 md:py-32 px-4 md:px-16 max-w-7xl mx-auto z-10">
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
          >
            <button
              onClick={() => setIsApiGuideOpen(true)}
              className="mt-6 px-8 py-4 bg-focus-primary/20 border border-focus-primary/50 text-white rounded-full font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:bg-focus-primary hover:text-white transition-all duration-300 flex items-center gap-3 w-fit"
            >
              <Target className="w-5 h-5" />
              {t('apiGuide.button')}
            </button>
          </FeatureRow>
        </div>
      </section>

      <ApiGuideModal isOpen={isApiGuideOpen} onClose={() => setIsApiGuideOpen(false)} />

      <section className="relative w-full z-20 py-20">
        <AppDemo />
      </section>
    </>
  );
}
