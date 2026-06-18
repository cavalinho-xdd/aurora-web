import { motion } from 'framer-motion';
import SoftAurora from './SoftAurora';
import { usePerformanceMode } from './PerformanceContext';

export default function AuroraIntro() {
  const { isPerformanceMode } = usePerformanceMode();
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        {!isPerformanceMode ? (
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={0.8}
            color1="#8B5CF6"
            color2="#EC4899"
            noiseFrequency={2.5}
            noiseAmplitude={1}
            bandHeight={0.5}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            enableMouseInteraction
            mouseInfluence={0.25}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-[#0B0A15] via-focus-primary/10 to-[#0B0A15]" />
        )}
      </motion.div>

    </div>
  );
}
