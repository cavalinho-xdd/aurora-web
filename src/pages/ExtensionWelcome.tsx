import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Settings, Zap, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ExtensionWelcome() {
  const { t } = useTranslation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-focus-primary" />,
      title: t('extWelcome.f1Title'),
      description: t('extWelcome.f1Desc')
    },
    {
      icon: <Settings className="w-6 h-6 text-pink-400" />,
      title: t('extWelcome.f2Title'),
      description: t('extWelcome.f2Desc')
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: t('extWelcome.f3Title'),
      description: t('extWelcome.f3Desc')
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 overflow-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-focus-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px] pointer-events-none opacity-30 mix-blend-screen" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-focus-primary/20 to-pink-500/20 rounded-full mb-8 border border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {t('extWelcome.title1')} <span className="text-gradient">{t('extWelcome.title2')}</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t('extWelcome.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col items-start backdrop-blur-md hover:border-focus-primary/30 group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-black/30 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden border border-white/10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-focus-primary/10 via-pink-500/5 to-focus-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t('extWelcome.howTitle')}</h2>
            <p className="text-gray-300 mb-10 max-w-xl mx-auto font-light text-lg">
              {t('extWelcome.howDesc')}
            </p>
            <button 
              onClick={() => window.open('aurora://', '_self')}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 duration-300"
            >
              {t('extWelcome.openApp')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
