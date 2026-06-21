/* eslint-disable */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, User, Zap, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePerformanceMode } from './PerformanceContext';

export default function AppDemo() {
  const { t } = useTranslation();
  const [phase, setPhase] = useState(0);
  const { isPerformanceMode } = usePerformanceMode();

  const heavyBlur = isPerformanceMode ? "none" : "blur(10px)";
  const noBlur = isPerformanceMode ? "none" : "blur(0px)";

  const goalText = t('demo.goal', 'Build the marketing page');
  const [typedGoal, setTypedGoal] = useState("");

  const [timeStr, setTimeStr] = useState("25:00");
  const [timerProgress, setTimerProgress] = useState(0);

  const [chatPhase, setChatPhase] = useState(0); 
  const userText = t('demo.userAnswer', 'I wrote the hero section and fixed the layout bugs.');
  const [chatTyped, setChatTyped] = useState("");

  useEffect(() => {
    let active = true;

    if (phase === 0) {
      setTypedGoal("");
      setTimeStr("25:00");
      setTimerProgress(0);
      setChatPhase(0);
      setChatTyped("");

      let i = 0;
      const interval = setInterval(() => {
        if (!active) return;
        setTypedGoal(goalText.substring(0, i + 1));
        i++;
        if (i === goalText.length) {
          clearInterval(interval);
          setTimeout(() => { if (active) setPhase(1); }, 1000);
        }
      }, 80);

      return () => { active = false; clearInterval(interval); };
    } 
    else if (phase === 1) {
      const startTime = performance.now();
      const duration = 2500;

      const updateTime = () => {
        if (!active) return;
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setTimerProgress(progress);
        
        const remainingSeconds = Math.floor((1 - progress) * 25 * 60);
        const m = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
        const s = (remainingSeconds % 60).toString().padStart(2, '0');
        setTimeStr(`${m}:${s}`);

        if (progress < 1) {
          requestAnimationFrame(updateTime);
        } else {
          setTimeout(() => { if (active) setPhase(2); }, 500);
        }
      };
      requestAnimationFrame(updateTime);
      return () => { active = false; };
    }
    else if (phase === 2) {
      const t1 = setTimeout(() => { if (active) setChatPhase(1); }, 600);

      const t2 = setTimeout(() => {
        if (!active) return;
        let i = 0;
        const interval = setInterval(() => {
          if (!active) { clearInterval(interval); return; }
          setChatTyped(userText.substring(0, i + 1));
          i++;
          if (i === userText.length) {
            clearInterval(interval);
            setTimeout(() => { if (active) setChatPhase(2); }, 800);
          }
        }, 50);
      }, 1500);

      const t3 = setTimeout(() => {
        if (active) setPhase(0);
      }, 7000);

      return () => { active = false; clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [phase]);

  return (
    <div className="w-full max-w-2xl mx-auto my-32">
      <div className="relative w-full h-[450px] bg-[#0f0d15]/40 backdrop-blur-3xl border border-white/10 shadow-glow-primary-lg overflow-hidden flex flex-col p-6 md:p-12" style={{ borderRadius: '2rem' }}>
        
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-focus-primary/50 to-transparent" />
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-focus-primary/20 rounded-full blur-[100px]" />
        
        <div className="flex gap-2 items-center mb-10 absolute top-6 left-6">
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/10" />
        </div>

        <div className="flex-1 relative flex items-center justify-center mt-6">
          <AnimatePresence mode="wait">
            
            {phase === 0 && (
              <motion.div 
                key="input" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20, filter: heavyBlur }} 
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="w-full flex flex-col items-center"
              >
                <div className="text-gray-400 mb-6 text-xl md:text-2xl font-light">{t('demo.question', 'What is your goal for this session?')}</div>
                <div className="text-3xl md:text-5xl font-black text-center w-full max-w-lg mx-auto pb-4">
                  <span className="text-white">
                    {typedGoal}
                  </span>
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-1 h-10 bg-focus-primary ml-1 align-middle"
                  />
                </div>
              </motion.div>
            )}

            {phase === 1 && (
              <motion.div 
                key="timer" 
                initial={{ opacity: 0, scale: 0.9, filter: heavyBlur }} 
                animate={{ opacity: 1, scale: 1, filter: noBlur }} 
                exit={{ opacity: 0, scale: 1.1, filter: heavyBlur }} 
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="w-full flex flex-col items-center justify-center"
              >
                <div className="relative w-56 h-56 flex items-center justify-center mb-8">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle 
                      cx="112" cy="112" r="108" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="transparent" 
                      className="text-white/5" 
                    />
                    <circle 
                      cx="112" cy="112" r="108" 
                      stroke="url(#timerGradient)" 
                      strokeWidth="4" 
                      fill="transparent" 
                      strokeDasharray={2 * Math.PI * 108} 
                      strokeDashoffset={2 * Math.PI * 108 * (1 - timerProgress)} 
                      strokeLinecap="round" 
                    />
                    <defs>
                      <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#d946ef" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-6xl font-black tabular-nums tracking-tighter text-white">
                    {timeStr}
                  </div>
                </div>
                <div className="bg-focus-primary/10 border border-focus-primary/20 text-focus-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm px-6 py-2 rounded-full flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> {t('demo.focusingOn', 'Focusing on')} {goalText}
                </div>
              </motion.div>
            )}

            {phase === 2 && (
              <motion.div 
                key="chat" 
                initial={{ opacity: 0, y: 20, filter: heavyBlur }} 
                animate={{ opacity: 1, y: 0, filter: noBlur }} 
                exit={{ opacity: 0, y: -20, filter: heavyBlur }} 
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="w-full h-full flex flex-col justify-end gap-6"
              >
                <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] text-center absolute top-0 inset-x-0">
                  {t('demo.evaluation', 'Session Evaluation')}
                </div>
                
                <AnimatePresence>
                  {chatPhase >= 0 && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20, scale: 0.95 }} 
                      animate={{ opacity: 1, x: 0, scale: 1 }} 
                      transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-focus-primary/20 border border-focus-primary/30 flex items-center justify-center shrink-0">
                        <Brain className="w-5 h-5 text-focus-primary" />
                      </div>
                      <div className="bg-white/5 border border-white/5 rounded-3xl rounded-tl-sm p-4 md:p-5 text-gray-300 text-base md:text-lg">
                        {t('demo.aiAsk', 'Did you achieve your goal:')} <span className="text-white font-semibold">{goalText}</span>?
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {chatPhase >= 1 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }} 
                      animate={{ opacity: 1, y: 0, scale: 1 }} 
                      transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                      className="flex gap-4 items-start self-end flex-row-reverse"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-focus-primary/20 border border-focus-primary/50 shadow-glow-secondary rounded-3xl rounded-tr-sm p-4 md:p-5 text-white text-base md:text-lg">
                        {chatTyped}
                        {chatPhase === 1 && chatTyped.length < userText.length && (
                          <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity }} className="ml-1">|</motion.span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {chatPhase >= 2 && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20, scale: 0.95 }} 
                      animate={{ opacity: 1, x: 0, scale: 1 }} 
                      transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-focus-primary/20 border border-focus-primary/30 flex items-center justify-center shrink-0">
                        <Brain className="w-5 h-5 text-focus-primary" />
                      </div>
                      <div className="bg-[#0B0A15]/40 border border-focus-primary/20 rounded-3xl rounded-tl-sm p-4 md:p-5 text-white backdrop-blur-md">
                        <div className="flex items-center gap-2 text-green-400 font-black mb-2 tracking-wide uppercase text-sm">
                          <Zap className="w-4 h-4 fill-green-400" /> {t('demo.xpAwarded', '+150 XP AWARDED')}
                        </div>
                        <span className="text-gray-300 text-base md:text-lg">{t('demo.aiResponse', 'Excellent work staying focused. Your productivity is increasing.')}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
