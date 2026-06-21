/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, EyeOff, Lock, Server } from 'lucide-react';

export default function Privacy() {
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
            <Shield className="w-8 h-8 text-focus-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">{t('legal.privacyTitle')}</h1>
          <p className="text-gray-400 font-medium">{t('legal.privacyEffective')}</p>
        </div>

        <div className="space-y-12">

          <p className="text-xl text-gray-400 font-light leading-relaxed">
            {t('legal.privacyIntro')}
          </p>

          <div className="h-px w-full bg-white/10" />

          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Server className="w-6 h-6 text-focus-primary" />
              {t('legal.section1Title')}
            </h2>
            <p className="text-gray-400">{t('legal.section1Desc')}</p>
            <ul className="space-y-4 ml-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-focus-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-200">{t(`legal.s1Item${item}` as any)}</span>{' '}
                    <span className="text-gray-400">{t(`legal.s1Item${item}Desc` as any)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <EyeOff className="w-6 h-6 text-red-400" />
              {t('legal.section2Title')}
            </h2>
            <ul className="space-y-4 ml-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-400/50 mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-200">{t(`legal.s2Item${item}` as any)}</span>{' '}
                    <span className="text-gray-400">{t(`legal.s2Item${item}Desc` as any)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">{t('legal.section3Title')}</h2>
            <p className="text-gray-400">{t('legal.section3Desc')}</p>
            <ul className="space-y-4 ml-4">
              {[1, 2].map((item) => (
                <li key={item} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-200">{t(`legal.s3Item${item}` as any)}</span>{' '}
                    <span className="text-gray-400">{t(`legal.s3Item${item}Desc` as any)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Lock className="w-6 h-6 text-green-400" />
              {t('legal.section4Title')}
            </h2>
            <p className="text-gray-400 leading-relaxed">{t('legal.section4Desc')}</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">{t('legal.section5Title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('legal.section5Desc')}</p>
          </section>

        </div>
      </motion.div>
    </div>
  );
}
