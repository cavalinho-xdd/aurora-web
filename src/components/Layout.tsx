import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Zap, Heart, Coffee } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AuroraIntro from './AuroraIntro';
import { usePerformanceMode } from './PerformanceContext';

export default function Layout() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isPerformanceMode, togglePerformanceMode } = usePerformanceMode();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('focus-web-lang', lang);
    setLangDropdownOpen(false);
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      

      <AuroraIntro />


      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 2 }}
        className="fixed inset-0 w-full h-full -z-50 pointer-events-none"
      >
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </motion.div>
      

      <motion.nav 
        className="fixed top-0 inset-x-0 flex justify-between items-center z-50"
        initial={{ padding: '24px 24px', backgroundColor: 'rgba(11, 10, 21, 0)', backdropFilter: 'blur(0px)', borderBottom: '1px solid rgba(255,255,255,0)' }}
        animate={{ 
          padding: isScrolled ? '16px 24px' : '24px 24px',
          backgroundColor: isScrolled ? 'rgba(11, 10, 21, 0.75)' : 'rgba(11, 10, 21, 0)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(255,255,255,0)'
        }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight hover:text-focus-primary transition-colors">
          aurora
        </Link>
        

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
            <Link 
              to="/" 
              className={`hover:text-white transition-colors ${location.pathname === '/' ? 'text-white' : ''}`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-white transition-colors ${location.pathname === '/about' ? 'text-white' : ''}`}
            >
              {t('nav.about')}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={togglePerformanceMode}
              className={`p-2 rounded-full backdrop-blur-md border border-white/10 transition-all flex items-center justify-center ${isPerformanceMode ? 'bg-focus-primary/20 text-focus-primary' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
              title="Performance Mode"
            >
              <Zap className="w-5 h-5" />
            </button>
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="px-3 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all font-medium text-sm flex items-center gap-2"
              >
                {i18n.language.startsWith('en') ? '🇬🇧 EN' : '🇨🇿 CS'}
              </button>
              
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 bg-focus-bg/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex flex-col gap-1 min-w-[120px] shadow-2xl"
                  >
                    <button 
                      onClick={() => changeLang('en')}
                      className={`px-4 py-2 rounded-xl text-left text-sm transition-colors hover:bg-white/10 ${i18n.language.startsWith('en') ? 'text-focus-primary font-bold' : 'text-gray-300'}`}
                    >
                      🇬🇧 English
                    </button>
                    <button 
                      onClick={() => changeLang('cs')}
                      className={`px-4 py-2 rounded-xl text-left text-sm transition-colors hover:bg-white/10 ${i18n.language.startsWith('cs') ? 'text-focus-primary font-bold' : 'text-gray-300'}`}
                    >
                      🇨🇿 Čeština
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/download">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all font-medium text-sm"
              >
                {t('nav.download')}
              </motion.button>
            </Link>
          </div>
        </div>


        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={togglePerformanceMode}
            className={`p-2 rounded-full backdrop-blur-md border border-white/10 transition-all flex items-center justify-center ${isPerformanceMode ? 'bg-focus-primary/20 text-focus-primary' : 'bg-white/5 text-gray-400'}`}
          >
            <Zap className="w-5 h-5" />
          </button>
          <button 
            onClick={() => changeLang(i18n.language.startsWith('en') ? 'cs' : 'en')}
            className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all font-medium text-xs flex items-center gap-1"
          >
            {i18n.language.startsWith('en') ? 'EN' : 'CS'}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </motion.nav>


      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#0B0A15]/90 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-4 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="flex flex-col items-center gap-8 text-2xl font-light">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:text-focus-primary transition-colors ${location.pathname === '/' ? 'text-white font-medium' : 'text-gray-400'}`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className={`hover:text-focus-primary transition-colors ${location.pathname === '/about' ? 'text-white font-medium' : 'text-gray-400'}`}
              >
                {t('nav.about')}
              </Link>
              <Link to="/download" onClick={() => setMobileMenuOpen(false)}>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-8 py-3 rounded-full bg-focus-primary text-white font-bold text-lg shadow-glow-secondary"
                >
                  {t('nav.download')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <main>
        <Outlet />
      </main>


      <section className="relative py-24 md:py-32 px-4 text-center z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-focus-primary/10 to-transparent z-[-1]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white">
            {t('footer.ready', 'Ready for')} <span className="text-gradient pb-2 drop-shadow-2xl">aurora</span>?
          </h2>
          <Link to="/download">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-focus-primary text-white font-bold text-lg shadow-glow-secondary hover:shadow-glow-secondary-lg transition-all"
            >
              {t('nav.download')}
            </motion.button>
          </Link>
        </motion.div>
      </section>


      <footer className="relative pt-24 pb-12 px-4 md:px-8 z-10 border-t border-white/5 bg-[#07060A]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          

          <div className="flex flex-col items-start gap-4 max-w-xs">
            <Link to="/" className="text-3xl font-bold tracking-tight text-white hover:text-focus-primary transition-colors">
              aurora
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description', "An application that doesn't just count down. It actively forces you to focus by blocking distractions mercilessly.")}
            </p>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold mb-2">{t('footer.product', 'Product')}</h4>
              <Link to="/download" className="text-gray-400 hover:text-focus-primary text-sm transition-colors">{t('nav.download')}</Link>
              <Link to="/about" className="text-gray-400 hover:text-focus-primary text-sm transition-colors">{t('nav.about')}</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold mb-2">{t('footer.connect', 'Connect')}</h4>
              <a href="https://github.com/cavalinho-xdd/focus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-focus-primary text-sm transition-colors flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> GitHub
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold mb-2">{t('footer.legal', 'Legal')}</h4>
              <Link to="/privacy" className="text-gray-400 hover:text-focus-primary text-sm transition-colors">{t('legal.privacyTitle', 'Privacy Policy')}</Link>
              <Link to="/terms" className="text-gray-400 hover:text-focus-primary text-sm transition-colors">{t('legal.termsTitle', 'Terms of Service')}</Link>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-focus-primary/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-r from-focus-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex flex-col gap-3 max-w-2xl relative z-10">
            <h4 className="text-white font-bold flex items-center gap-2 text-lg">
              <Heart className="w-5 h-5 text-focus-primary fill-focus-primary/20" />
              {t('footer.supportTitle', "Support Aurora's Development")}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.supportDesc')}
            </p>
          </div>
          <a 
            href="https://ko-fi.com/cavalinhoxdd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 px-8 py-3 rounded-full bg-focus-primary/10 hover:bg-focus-primary/20 border border-focus-primary/30 text-focus-primary font-bold text-sm transition-all whitespace-nowrap flex items-center gap-2 shadow-glow-secondary hover:shadow-glow-secondary-lg"
          >
            <Coffee className="w-4 h-4" />
            {t('footer.supportBtn', 'Support on Ko-fi')}
          </a>
        </div>


        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Aurora App.</p>
          <p>cavalinho-xdd</p>
        </div>
      </footer>
    </div>
  );
}
