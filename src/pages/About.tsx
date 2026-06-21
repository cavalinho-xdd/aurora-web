import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Coffee, GithubLogo, ArrowRight, Target, LockKey, Flame, CheckCircle, Clock, X } from '@phosphor-icons/react';
import { siElectron, siReact, siVite, siFirebase, siGooglegemini, siTypescript } from 'simple-icons';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t } = useTranslation();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. Hero Entrance Sequence
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo('.hero-text-stagger', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.05, delay: 0.1 }
      )
      .fromTo('.hero-image-reveal',
        { scale: 0.95, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
        '-=0.6'
      );

      // 2. Feature Text Scroll Reveals
      (gsap.utils.toArray('.feature-text') as HTMLElement[]).forEach((element) => {
        gsap.fromTo(element.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
            }
          }
        );
      });

      // 3. Narrative Text Reveal
      gsap.fromTo('.narrative-text',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.narrative-text',
            start: 'top 85%',
          }
        }
      );

      // 4. Chart Bars Animation
      gsap.fromTo('.chart-bar',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.chart-container',
            start: 'top 85%',
          }
        }
      );

      // 5. Narrative vertical line scrub
      gsap.fromTo('.narrative-line', 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.narrative-section',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          }
        }
      );

      // 6. Parallax images
      const images = gsap.utils.toArray('.parallax-img');
      (images as HTMLElement[]).forEach((img) => {
        gsap.fromTo(img,
          { y: 60 },
          {
            y: -60,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top 90%',
              end: 'bottom 10%',
              scrub: true,
            }
          }
        );
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.fromTo('.hero-text-stagger', { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.05, delay: 0.1 });
      gsap.fromTo('.hero-image-reveal', { opacity: 0 }, { opacity: 1, duration: 1.2, delay: 0.3 });

      (gsap.utils.toArray('.feature-text') as HTMLElement[]).forEach((element) => {
        gsap.fromTo(element.children, { opacity: 0 }, { opacity: 1, duration: 0.8, stagger: 0.05, scrollTrigger: { trigger: element, start: 'top 85%' } });
      });

      gsap.fromTo('.narrative-text', { opacity: 0 }, { opacity: 1, duration: 1, scrollTrigger: { trigger: '.narrative-text', start: 'top 85%' } });

      gsap.fromTo('.chart-bar', { opacity: 0 }, { opacity: 1, duration: 0.6, stagger: 0.05, scrollTrigger: { trigger: '.chart-container', start: 'top 85%' } });

      gsap.fromTo('.narrative-line', { opacity: 0 }, { opacity: 1, scrollTrigger: { trigger: '.narrative-section', start: 'top 80%', end: 'top 40%', scrub: true } });
    });

  }, { scope: container });

  return (
    <div ref={container} className="w-full relative overflow-x-hidden pt-24 pb-24">
      
      {/* AMBIENT HORIZON BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Deep violet/pink horizontal swoosh */}
        <div className="absolute top-[10%] left-0 w-[150%] h-[400px] bg-gradient-to-r from-focus-primary/10 via-focus-secondary/20 to-transparent blur-[140px] mix-blend-screen opacity-80 transform -skew-y-6 origin-left" />
      </div>

      {/* NEW HERO SECTION (2-COLUMN) */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-16 pt-8 pb-12 flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="w-full md:w-[45%] space-y-6 z-10 shrink-0">
          <h1 className="hero-text-stagger text-5xl md:text-[clamp(3rem,4.5vw,5.5rem)] font-bold tracking-tight leading-[1] text-white">
            {t('aboutNew.heroTitle1')} <span className="text-gradient pb-1">{t('aboutNew.heroTitle2')}</span> {t('aboutNew.heroTitle3')}
          </h1>
          <p className="hero-text-stagger text-xl md:text-2xl text-gray-400 font-light max-w-md">
            {t('aboutNew.heroDesc')}
          </p>
          <div className="hero-text-stagger pt-6">
            <button className="bg-gradient-to-r from-focus-primary to-focus-secondary text-white font-bold rounded-full pl-8 pr-2 py-2 flex items-center gap-6 group shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:scale-105 transition duration-200">
              {t('nav.download')}
              <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight weight="bold" className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
        
        <div className="hero-image-reveal w-full md:w-[55%] flex justify-center md:justify-end shrink-0">
          <div className="relative w-full max-w-[800px] md:scale-110 md:origin-right rounded-[2rem] overflow-hidden shadow-[0_0_120px_rgba(139,92,246,0.25)] bg-black/40">
            <img src="/app-dashboard.png" alt="Aurora Dashboard" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* NEW NARRATIVE SECTION */}
      <section className="narrative-section relative w-full max-w-7xl mx-auto px-4 md:px-16 py-20 z-10">
        <div className="max-w-4xl flex gap-8 md:gap-12">
          {/* Animated Vertical gradient line */}
          <div className="narrative-line w-[2px] shrink-0 bg-gradient-to-b from-focus-primary via-focus-secondary to-transparent rounded-full opacity-60 origin-top" />
          
          <p className="narrative-text text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight leading-[1.3] text-gray-300">
            {t('aboutNew.narrative')}
          </p>
        </div>
      </section>

      {/* FEATURE PARALLAX SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-16 py-20 flex flex-col gap-24 z-10">
        
        {/* DASHBOARD */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-[45%] flex justify-center h-[40vh] md:h-[60vh] relative pointer-events-none items-center shrink-0">
            <div className="parallax-img w-[90%] max-w-[420px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-6">
              <div>
                <h3 className="text-white font-bold text-sm mb-4">{t('aboutNew.focusOverview')}</h3>
                <div className="chart-container flex gap-2 justify-between items-end h-24 pb-2">
                  {[t('aboutNew.days.mon'), t('aboutNew.days.tue'), t('aboutNew.days.wed'), t('aboutNew.days.thu'), t('aboutNew.days.fri'), t('aboutNew.days.sat'), t('aboutNew.days.sun')].map((day, i) => {
                     const heights = [20, 35, 15, 45, 25, 10, 60];
                     return (
                     <div key={day as string} className="flex flex-col items-center justify-end gap-2 h-full">
                        <div className={`chart-bar origin-bottom w-8 md:w-10 rounded-md ${i === 6 ? 'bg-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'bg-white/10'}`} style={{ height: `${heights[i]}px` }}></div>
                        <span className={`text-[9px] font-bold ${i === 6 ? 'text-[#8b5cf6]' : 'text-gray-400'}`}>{day}</span>
                     </div>
                     );
                  })}
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-1 bg-black/20 border border-white/5 rounded-xl p-3">
                   <span className="block text-white font-bold text-lg md:text-xl leading-none mb-1">32h</span>
                   <span className="text-[9px] text-gray-500 font-bold tracking-widest uppercase">{t('aboutNew.thisWeek')}</span>
                </div>
                <div className="flex-1 bg-black/20 border border-white/5 rounded-xl p-3">
                   <span className="block text-white font-bold text-lg md:text-xl leading-none mb-1">142</span>
                   <span className="text-[9px] text-gray-500 font-bold tracking-widest uppercase">{t('aboutNew.sessions30d')}</span>
                </div>
                <div className="flex-1 bg-black/20 border border-white/5 rounded-xl p-3">
                   <span className="block text-white font-bold text-lg md:text-xl leading-none mb-1">6h 15m</span>
                   <span className="text-[9px] text-gray-500 font-bold tracking-widest uppercase">{t('aboutNew.bestDay')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-text w-full md:w-[55%] space-y-6 shrink-0">
            <h2 className="text-4xl md:text-[clamp(3rem,4.5vw,5rem)] font-bold tracking-tight leading-none text-white">{t('aboutNew.totalControlTitle1')}<br/>{t('aboutNew.totalControlTitle2')}</h2>
            <p className="text-xl text-gray-400 font-light max-w-md">{t('aboutNew.totalControlDesc')}</p>
          </div>
        </div>

        {/* TASKS / BACKLOG */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <div className="w-full md:w-[45%] flex justify-center h-[40vh] md:h-[60vh] relative pointer-events-none items-center shrink-0">
            <div className="parallax-img relative w-[90%] max-w-[380px]">
               <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-8 shadow-[0_0_50px_rgba(217,70,239,0.2)] z-20">
                  <div className="flex justify-between items-center mb-8">
                     <span className="text-[10px] font-bold tracking-[0.1em] text-[#d946ef] uppercase px-3 py-1.5 bg-[#d946ef]/10 rounded-full border border-[#d946ef]/20">{t('aboutNew.lockedIn')}</span>
                     <Target className="w-5 h-5 text-[#d946ef]" weight="duotone" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{t('aboutNew.shipMvp')}</h4>
                  <p className="text-sm md:text-base text-gray-400 mb-8 font-light">{t('aboutNew.noDistractions')}</p>
                  <div className="w-full h-12 rounded-xl border border-white/5 flex items-center justify-center text-gray-400 text-sm font-medium bg-black/20 shadow-inner">
                     <LockKey className="w-4 h-4 mr-2" weight="bold" /> {t('aboutNew.cannotSwitch')}
                  </div>
               </div>
            </div>
          </div>
          <div className="feature-text w-full md:w-[55%] space-y-6 md:text-right shrink-0">
            <h2 className="text-4xl md:text-[clamp(3rem,4.5vw,5rem)] font-bold tracking-tight leading-none text-white">{t('aboutNew.neverForgetTitle1')}<br/>{t('aboutNew.neverForgetTitle2')}</h2>
            <p className="text-xl text-gray-400 font-light max-w-md ml-auto">{t('aboutNew.neverForgetDesc')}</p>
          </div>
        </div>

        {/* PROFILE / LEADERBOARD */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-[45%] flex justify-center h-[40vh] md:h-[60vh] relative pointer-events-none items-center shrink-0">
            <div className="parallax-img w-[90%] max-w-[380px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
               <div className="flex justify-between items-start mb-8 relative">
                  <div className="flex items-center gap-4">
                     <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-black/40 border-2 border-[#5b21b6] flex items-center justify-center text-xl font-bold text-[#8b5cf6]">C</div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#8b5cf6] border-2 border-transparent"></div>
                     </div>
                     <div>
                        <div className="flex items-center gap-2 mb-1">
                           <h4 className="font-bold text-white text-lg">cavalinho-xdd</h4>
                           <span className="px-1.5 py-0.5 rounded-md bg-[#5b21b6]/30 text-[#8b5cf6] border border-[#5b21b6]/50 text-[9px] font-bold tracking-wider flex items-center gap-1">
                              <CheckCircle weight="fill" className="w-3 h-3" /> DEV
                           </span>
                        </div>
                        <span className="text-xs text-gray-500 font-medium">{t('aboutNew.thatsYou')}</span>
                     </div>
                  </div>
                  <X className="w-4 h-4 text-white/40 absolute top-0 right-0" weight="bold" />
               </div>
               
               <div className="mb-8">
                  <div className="flex justify-between items-end mb-3">
                     <span className="text-4xl font-bold text-white font-mono tracking-tighter">Lv.14</span>
                     <span className="text-[10px] text-gray-500 font-mono font-bold tracking-widest"><span className="text-gray-400">4,250</span> / 5,000 XP</span>
                  </div>
                  <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                     <div className="h-full w-[85%] bg-[#8b5cf6] rounded-full shadow-[0_0_15px_rgba(139,92,246,0.6)]"></div>
                  </div>
               </div>
               
               <div className="flex justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/20 border border-white/5">
                     <Flame className="w-4 h-4 text-[#8b5cf6]" weight="duotone" />
                     <span className="text-[11px] text-white font-bold">14 <span className="text-gray-400 font-normal">{t('aboutNew.streak')}</span></span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/20 border border-white/5">
                     <Target className="w-4 h-4 text-gray-400" weight="duotone" />
                     <span className="text-[11px] text-white font-bold">142 <span className="text-gray-400 font-normal">{t('aboutNew.sessions')}</span></span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/20 border border-white/5">
                     <Clock className="w-4 h-4 text-gray-400" weight="duotone" />
                     <span className="text-[11px] text-white font-bold">142h</span>
                  </div>
               </div>
            </div>
          </div>
          <div className="feature-text w-full md:w-[55%] space-y-6 shrink-0">
            <h2 className="text-4xl md:text-[clamp(3rem,4.5vw,5rem)] font-bold tracking-tight leading-none text-white">{t('aboutNew.earnItTitle1')}<br/>{t('aboutNew.earnItTitle2')}</h2>
            <p className="text-xl text-gray-400 font-light max-w-md">{t('aboutNew.earnItDesc')}</p>
          </div>
        </div>

      </section>

      {/* TECH STACK SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-16 py-20 mt-16 z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center">
          
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              {t('aboutNew.openSourceTitle1')}<br/>{t('aboutNew.openSourceTitle2')}<br/>{t('aboutNew.openSourceTitle3')}
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-md">
              {t('aboutNew.openSourceDesc')}
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="flex items-center gap-2 text-focus-primary font-bold hover:text-white transition-colors">
                <GithubLogo weight="bold" className="w-6 h-6" />
                {t('aboutNew.viewGithub')}
              </a>
              <a href="#" className="flex items-center gap-2 bg-[#FF5E5B] text-white px-6 py-3 rounded-full font-bold hover:bg-[#FF4A47] transition-colors shadow-[0_0_20px_rgba(255,94,91,0.3)]">
                <Coffee weight="bold" className="w-5 h-5" />
                {t('aboutNew.supportKofi')}
              </a>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              
              <div className="flex flex-col items-center justify-center gap-4 text-center group cursor-default">
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-500 group-hover:text-[#47848F] transition-colors duration-200">
                  <path d={siElectron.path} />
                </svg>
                <span className="text-gray-300 font-medium">Electron</span>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-4 text-center group cursor-default">
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-500 group-hover:text-[#61DAFB] transition-colors duration-200">
                  <path d={siReact.path} />
                </svg>
                <span className="text-gray-300 font-medium">React</span>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-4 text-center group cursor-default">
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-500 group-hover:text-[#646CFF] transition-colors duration-200">
                  <path d={siVite.path} />
                </svg>
                <span className="text-gray-300 font-medium">Vite</span>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-4 text-center group cursor-default">
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-500 group-hover:text-[#FFCA28] transition-colors duration-200">
                  <path d={siFirebase.path} />
                </svg>
                <span className="text-gray-300 font-medium">Firebase</span>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-4 text-center group cursor-default">
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-500 group-hover:text-[#8E75B2] transition-colors duration-200">
                  <path d={siGooglegemini.path} />
                </svg>
                <span className="text-gray-300 font-medium">Google Gemini</span>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-4 text-center group cursor-default">
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-500 group-hover:text-[#3178C6] transition-colors duration-200">
                  <path d={siTypescript.path} />
                </svg>
                <span className="text-gray-300 font-medium">TypeScript</span>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
