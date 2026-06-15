import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AuroraIntro from './AuroraIntro';

export default function Layout() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

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
      <nav className="fixed top-0 inset-x-0 p-6 flex justify-between items-center z-50">
        <Link to="/" className="text-2xl font-bold tracking-tight hover:text-focus-primary transition-colors">
          focus
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
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
      </nav>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* CTA Footer shared across all pages */}
      <section className="relative py-32 px-4 text-center z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-focus-primary/10 to-transparent z-[-1]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
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
