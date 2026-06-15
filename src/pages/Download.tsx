import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Download() {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Coming Soon</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light mb-12">
          We are currently preparing the initial release. Check back soon for the download link.
        </p>
        <button 
          disabled
          className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-gray-500 font-bold text-lg cursor-not-allowed"
        >
          {t('nav.download')}
        </button>
      </motion.div>
    </div>
  );
}
