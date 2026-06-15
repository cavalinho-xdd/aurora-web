import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function PhilosophyScroll() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] 
  });

  const glowOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 0.1]);

  return (
    <section ref={containerRef} className="relative w-full max-w-5xl mx-auto px-6 py-32 md:py-48 z-10 flex flex-col gap-32 md:gap-48">
      
      {/* Background SVG Line (The Thread) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full overflow-visible"
        >
          {/* Animated glowing line - REMOVED drop-shadow for massive performance boost */}
          <motion.path 
            d="M 50 0 L 20 8 L 80 15 L 15 22 L 85 30 L 30 38 L 50 45 C 80 50, 80 60, 50 65 C 20 70, 20 80, 50 85 C 80 90, 80 100, 50 100"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: scrollYProgress }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
              <stop offset="90%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Paragraphs - Unified elegant typography */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-2xl md:text-4xl font-light text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
      >
        {t('manifest.p1')}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-2xl md:text-4xl font-light text-gray-400 leading-relaxed text-center max-w-3xl mx-auto"
      >
        {t('manifest.p2')}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-2xl md:text-4xl font-light text-gray-200 leading-relaxed text-center max-w-3xl mx-auto mt-10"
      >
        {t('manifest.p3')}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl md:text-5xl font-medium text-white leading-tight text-center max-w-3xl mx-auto mt-10"
      >
        {t('manifest.p4')}
      </motion.div>

      {/* Final ambient glow - Moved down to bleed into the next section instead of cutting off */}
      <motion.div 
        style={{ opacity: glowOpacity }}
        className="absolute -bottom-[300px] left-1/2 -translate-x-1/2 w-[150%] h-[600px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.25)_0%,transparent_60%)] pointer-events-none -z-20"
      />

    </section>
  );
}
