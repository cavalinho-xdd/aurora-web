import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Target, LockKey, X } from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AppDemo from '../components/AppDemo';
import ApiGuideModal from '../components/ApiGuideModal';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { t } = useTranslation();
  const container = useRef<HTMLDivElement>(null);
  const [isApiGuideOpen, setIsApiGuideOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(13 * 60 + 24); // 13:24

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Hero animations
      gsap.from('.hero-word', {
        y: 80,
        opacity: 0,
        stagger: 0.05,
        duration: 1.5,
        ease: 'expo.out',
        delay: 0.1,
      });

      // Feature reveals
      const features = gsap.utils.toArray('.feature-section');
      (features as HTMLElement[]).forEach((feature) => {
        gsap.from(feature, {
          scrollTrigger: {
            trigger: feature,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out'
        });
      });

      // Sub-elements stagger within features
      (features as HTMLElement[]).forEach((feature) => {
        const elements = feature.querySelectorAll('.stagger-el');
        if (elements.length > 0) {
          gsap.from(elements, {
            scrollTrigger: {
              trigger: feature,
              start: 'top 75%',
            },
            y: 30,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2
          });
        }
      });

      // Pulse animation for +8 card
      gsap.to('.pulse-card', {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Breathing pulse for Timer
      gsap.to('.breathing-pulse', {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Floating animation for Hardcore lock
      gsap.to('.floating-icon', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Number counter for 96
      gsap.to({ value: 0 }, {
        value: 96,
        duration: 2.5,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.score-counter',
          start: 'top 85%',
        },
        onUpdate: function () {
          const el = document.querySelector('.score-counter');
          if (el) el.innerHTML = Math.round(this.targets()[0].value).toString();
        }
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.from('.hero-word', { opacity: 0, duration: 1, stagger: 0.05 });
      const features = gsap.utils.toArray('.feature-section');
      (features as HTMLElement[]).forEach((feature) => {
        gsap.from(feature, { scrollTrigger: { trigger: feature, start: 'top 75%' }, opacity: 0, duration: 1 });
        const elements = feature.querySelectorAll('.stagger-el');
        if (elements.length > 0) {
          gsap.from(elements, { scrollTrigger: { trigger: feature, start: 'top 75%' }, opacity: 0, duration: 1, stagger: 0.05 });
        }
      });
      gsap.to({ value: 0 }, {
        value: 96, duration: 2.5,
        scrollTrigger: { trigger: '.score-counter', start: 'top 85%' },
        onUpdate: function () {
          const el = document.querySelector('.score-counter');
          if (el) el.innerHTML = Math.round(this.targets()[0].value).toString();
        }
      });
    });

  }, { scope: container });

  return (
    <div ref={container} className="w-full relative overflow-x-hidden pb-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-20 px-4">
        <div className="max-w-6xl mx-auto text-center z-10 w-full flex flex-col items-center">
          <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-black tracking-tighter leading-[1.05] mb-8 overflow-hidden py-4 text-balance text-white">
             <span className="hero-word">{t('homeNew.title1')} </span>
             <span className="hero-word">{t('homeNew.title2')} </span>
             <span className="hero-word">{t('homeNew.title3')} </span>
             <span className="hero-word text-gradient pb-2 drop-shadow-2xl">{t('homeNew.title4')}</span>
          </h1>
          <p className="hero-word text-2xl md:text-4xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
            {t('homeNew.subtitle')}
          </p>
        </div>
      </section>

      {/* SYSTEM BLOCKER */}
      <section className="feature-section relative max-w-7xl mx-auto px-4 md:px-16 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 md:gap-24 z-10">
        <div className="flex-1 space-y-8 text-left">
          <div className="stagger-el w-16 h-16 rounded-full border border-focus-primary/30 flex items-center justify-center bg-focus-primary/10">
            <Target className="w-8 h-8 text-focus-primary" weight="duotone" />
          </div>
          <h2 className="stagger-el text-5xl md:text-7xl font-bold tracking-tight">{t('features.blocker') || 'System Blocker'}</h2>
          <p className="stagger-el text-xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-2xl">
            {t('features.blockerDesc') || "Mercilessly terminates distracting applications. No Discord, no games. It's time to focus."}
          </p>
        </div>
        
        <div className="flex-1 w-full flex justify-center md:justify-end stagger-el">
          <div className="relative group cursor-default">
            <div className="text-center mb-8">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-focus-secondary uppercase">{t('homeNew.appsBlocked')}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 ease-out">
                  <X className="w-10 h-10 md:w-12 md:h-12 text-focus-secondary" weight="bold" />
                </div>
              ))}
              <div className="pulse-card w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                 <span className="font-mono text-2xl md:text-3xl font-bold text-gray-400">+8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HARDCORE MODE */}
      <section className="feature-section relative max-w-5xl mx-auto px-4 md:px-16 py-20 md:py-28 flex flex-col items-center justify-center text-center z-10">
         <div className="stagger-el mb-12 relative group cursor-default">
            <div className="absolute inset-0 bg-focus-secondary/20 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <LockKey className="floating-icon w-32 h-32 md:w-40 md:h-40 text-focus-secondary relative z-10" weight="duotone" />
         </div>
         <span className="stagger-el text-xs md:text-sm font-bold tracking-[0.2em] text-focus-secondary uppercase mb-8 bg-focus-secondary/10 px-6 py-2 rounded-full border border-focus-secondary/20">
            {t('homeNew.irreversible')}
         </span>
         <h2 className="stagger-el text-5xl md:text-[5rem] font-bold tracking-tight mb-8 leading-none">
            {t('features.hardcore') || 'Hardcore Mode'}
         </h2>
         <p className="stagger-el text-xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-4xl">
            {t('features.hardcoreDesc') || 'When things get tough. If you activate Hardcore mode, the app cannot be closed in any way.'}
         </p>
      </section>

      {/* AI EVALUATION */}
      <section className="feature-section relative max-w-7xl mx-auto px-4 md:px-16 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 md:gap-24 z-10">
        <div className="flex-1 space-y-8 text-left">
          <h2 className="stagger-el text-5xl md:text-7xl font-bold tracking-tight">{t('features.ai') || 'AI Evaluation'}</h2>
          <p className="stagger-el text-xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-2xl">
            {t('features.aiDesc') || 'After the session, Google Gemini will test what you learned. Earn a rating and XP.'}
          </p>
          <div className="stagger-el pt-4">
            <button 
              onClick={() => setIsApiGuideOpen(true)}
              className="bg-focus-primary text-white font-bold rounded-full px-8 py-4 shadow-[0_0_24px_rgba(139,92,246,0.25)] hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-shadow duration-300 active:scale-95 flex items-center gap-2"
            >
              {t('apiGuide.button')}
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full flex justify-center md:justify-end stagger-el">
           <div className="flex flex-col items-center group cursor-default">
              <span className="text-sm font-bold tracking-[0.2em] text-focus-accent uppercase mb-4">{t('homeNew.sessionScore')}</span>
              <div className="flex items-baseline gap-2 group-hover:scale-105 transition-transform duration-200 ease-out origin-bottom">
                 <span className="score-counter font-mono text-[clamp(6rem,12vw,14rem)] font-black leading-none tracking-tighter text-white">0</span>
                 <span className="font-mono text-[clamp(2rem,4vw,5rem)] text-gray-500 font-bold">/ 100</span>
              </div>
           </div>
        </div>
      </section>

      {/* POMODORO & DOMINATE */}
      <section className="feature-section relative max-w-7xl mx-auto px-4 md:px-16 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 md:gap-24 z-10">
        <div className="flex-1 flex flex-col gap-12 w-full pr-0 md:pr-16">
           <div className="stagger-el flex items-center gap-8 group cursor-default">
              <div className="breathing-pulse w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors duration-200">
                 <span className="font-mono text-2xl font-bold text-white group-hover:text-black">
                   {formatTime(timeLeft)}
                 </span>
              </div>
              <div>
                 <h3 className="text-2xl font-bold mb-2">{t('homeNew.pomodoroTitle')}</h3>
                 <p className="text-gray-400 text-base max-w-xs leading-relaxed">{t('homeNew.pomodoroDesc')}</p>
              </div>
           </div>
           
           <div className="stagger-el h-px w-full bg-white/10"></div>

           <div className="stagger-el flex items-center gap-8 group cursor-default">
              <div className="flex-1">
                 <h3 className="text-2xl font-bold mb-3">{t('homeNew.gamificationTitle')}</h3>
                 <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-5 h-5 rounded-full bg-focus-primary shadow-[0_0_10px_rgba(139,92,246,0.6)]"></div>
                      <div className="w-5 h-5 rounded-full bg-focus-accent shadow-[0_0_10px_rgba(14,165,233,0.6)]"></div>
                      <div className="w-5 h-5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>
                    </div>
                    <span className="text-sm text-gray-500 ml-2 font-medium">
                      <span className="font-mono">3</span> {t('homeNew.streakToday')}
                    </span>
                 </div>
              </div>
              <div className="flex flex-col items-center justify-center shrink-0">
                 <span className="text-sm text-gray-500 font-bold tracking-widest">{t('homeNew.lvl')}</span>
                 <span className="font-mono text-[3.5rem] font-black leading-none mt-1 text-white">7</span>
              </div>
           </div>
        </div>
        
        <div className="flex-1 text-left md:text-right mt-16 md:mt-0">
           <h2 className="stagger-el text-[clamp(4rem,7vw,7rem)] font-black tracking-tighter leading-[1] mb-8">
              {t('homeNew.dominateTitle1')}<br/>{t('homeNew.dominateTitle2')}
           </h2>
           <p className="stagger-el text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-lg ml-auto">
              {t('homeNew.dominateDesc')}
           </p>
        </div>
      </section>

      <ApiGuideModal isOpen={isApiGuideOpen} onClose={() => setIsApiGuideOpen(false)} />

      <section className="relative w-full z-20 py-16 px-4 mt-16">
        <AppDemo />
      </section>
    </div>
  );
}
