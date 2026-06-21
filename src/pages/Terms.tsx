import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Scale, AlertTriangle, ShieldAlert, Cpu } from 'lucide-react';

export default function Terms() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <motion.div 
        initial={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0px)" : "translateY(20px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-focus-primary/10 rounded-full mb-4 border border-focus-primary/30">
            <Scale className="w-8 h-8 text-focus-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{t('legal.termsTitle')}</h1>
          <p className="text-gray-400 font-medium">{t('legal.termsEffective')}</p>
        </div>

        <div className="space-y-12">

          <p className="text-xl text-gray-400 font-light leading-relaxed">
            {t('legal.termsIntro')}
          </p>

          <div className="h-px w-full bg-white/10" />

          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              {t('legal.tSection1Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed">{t('legal.tSection1Desc')}</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-focus-primary" />
              {t('legal.tSection2Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed">{t('legal.tSection2Desc')}</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Cpu className="w-6 h-6 text-blue-400" />
              {t('legal.tSection3Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed">{t('legal.tSection3Desc')}</p>
          </section>

        </div>
      </motion.div>
    </div>
  );
}
