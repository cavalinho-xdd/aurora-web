import { motion } from 'framer-motion';
import SoftAurora from './SoftAurora';

export default function AuroraIntro() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      
      {/* Aurora Canvas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
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
      </motion.div>

      {/* Krycí vrstva pro feathered mask (odkrývá Auroru jako čáru) */}
      <motion.div
        className="absolute top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: "200vw",
          left: "-150px", // Gradient centrován na 0vw (úplný okraj)
          background: "linear-gradient(to right, transparent 0px, transparent 50px, #0B0A15 250px, #0B0A15 100%)"
        }}
        initial={{ x: "0vw" }}
        animate={{ x: "100vw" }}
        transition={{
          duration: 3.0,
          ease: "easeInOut"
        }}
      />

    </div>
  );
}
