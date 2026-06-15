import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AuroraIntro from './AuroraIntro';

export default function Layout() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('en') ? 'cs' : 'en';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('focus-web-lang', nextLang);
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      
      {/* Aurora Intro Background shared across all pages */}
      <AuroraIntro />

      {/* Background with Ambient Blobs shared across all pages */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 2 }}
        className="fixed inset-0 w-full h-full -z-50 pointer-events-none"
      >
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
      </motion.div>
      
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 p-4 md:p-6 flex justify-between items-center z-50">
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight hover:text-focus-primary transition-colors">
          focus
        </Link>
        
        {/* Desktop Nav */}
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
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all font-medium text-sm flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {i18n.language.startsWith('en') ? 'EN' : 'CS'}
            </button>
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

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all font-medium text-xs flex items-center gap-1"
          >
            <Globe className="w-3 h-3" />
            {i18n.language.startsWith('en') ? 'EN' : 'CS'}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
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
                  className="mt-4 px-8 py-3 rounded-full bg-focus-primary text-white font-bold text-lg shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                >
                  {t('nav.download')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* CTA Footer shared across all pages */}
      <section className="relative py-24 md:py-32 px-4 text-center z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-focus-primary/10 to-transparent z-[-1]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-8">
            Ready to <span className="text-gradient">focus</span>?
          </h2>
          <Link to="/download">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-focus-primary text-white font-bold text-lg shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:shadow-[0_0_60px_rgba(236,72,153,0.5)] transition-all"
            >
              {t('nav.download')}
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
