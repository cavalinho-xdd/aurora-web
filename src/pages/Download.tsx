import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Info, Download as DownloadIcon } from 'lucide-react';
import { WindowsIcon, AppleIcon, LinuxIcon } from '../components/OSIcons';

const initialDownloadLinks = [
  {
    os: "Windows",
    arch: "x64",
    type: ".exe",
    Icon: WindowsIcon,
    iconColor: "text-blue-400",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.10-alpha.4/Aurora-Setup-1.0.10-alpha.4.exe"
  },
  {
    os: "macOS",
    arch: "Arm64",
    type: ".dmg",
    Icon: AppleIcon,
    iconColor: "text-gray-200",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.10-alpha.4/Aurora-1.0.10-alpha.4-arm64.dmg"
  },
  {
    os: "Linux",
    arch: "Universal",
    type: ".AppImage",
    Icon: LinuxIcon,
    iconColor: "text-yellow-500",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.10-alpha.4/Aurora-1.0.10-alpha.4.AppImage"
  },
  {
    os: "Linux",
    arch: "Debian/Ubuntu",
    type: ".deb",
    Icon: LinuxIcon,
    iconColor: "text-yellow-500",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.10-alpha.4/aurora_1.0.10-alpha.4_amd64.deb"
  }
];

export default function Download() {
  const { t } = useTranslation();
  const [links, setLinks] = useState(initialDownloadLinks);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    fetch("https://api.github.com/repos/cavalinho-xdd/aurora/releases/latest")
      .then(res => res.json())
      .then(data => {
        if (!data.assets) return;
        
        setLinks(prevLinks => prevLinks.map(link => {
          const matchedAsset = data.assets.find((asset: { name: string; browser_download_url: string }) => asset.name.endsWith(link.type));
          if (matchedAsset) {
            return { ...link, url: matchedAsset.browser_download_url };
          }
          return link;
        }));
      })
      .catch(err => console.error("Failed to fetch latest release:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, transform: shouldReduceMotion ? "translateY(0px)" : "translateY(20px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient">{t('downloadPage.title')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            {t('downloadPage.subtitle')}
          </p>
        </div>

        {/* Windows + macOS — big */}
        <div className="grid grid-cols-2 gap-px mb-px">
          {links.slice(0, 2).map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { transform: "translateY(-4px)" }}
              whileTap={shouldReduceMotion ? {} : { transform: "scale(0.98)" }}
              className="group flex flex-col text-left p-8 md:p-12 border-t border-white/10 hover:border-focus-primary/50 transition-colors duration-200"
            >
              <link.Icon className={`w-12 h-12 ${link.iconColor} mb-10`} />
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none mb-2">{link.os}</h3>
              <p className="text-gray-500 text-sm mb-10">{link.arch}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-mono text-sm text-gray-500">{link.type}</span>
                <span className="w-10 h-10 rounded-full bg-gradient-to-r from-focus-primary to-focus-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <DownloadIcon className="w-4 h-4 text-white" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Linux — smaller, same row */}
        <div className="grid grid-cols-2 gap-px mb-20">
          {links.slice(2).map((link, idx) => (
            <motion.a
              key={idx + 2}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { transform: "translateY(-4px)" }}
              whileTap={shouldReduceMotion ? {} : { transform: "scale(0.98)" }}
              className="group flex flex-col text-left p-6 md:p-8 border-t border-white/10 hover:border-focus-primary/50 transition-colors duration-200"
            >
              <link.Icon className={`w-8 h-8 ${link.iconColor} mb-6`} />
              <h3 className="text-2xl font-bold text-white tracking-tight leading-none mb-1">{link.os}</h3>
              <p className="text-gray-500 text-sm mb-6">{link.arch}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-mono text-sm text-gray-500">{link.type}</span>
                <span className="w-9 h-9 rounded-full bg-gradient-to-r from-focus-primary to-focus-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <DownloadIcon className="w-3.5 h-3.5 text-white" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>


        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-left max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-focus-primary" />
            <h3 className="text-xl font-bold text-white">{t('downloadWarning.title')}</h3>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
            {t('downloadWarning.desc')}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/20 rounded-xl p-4 border border-white/5">
              <h4 className="font-bold text-gray-200 text-sm mb-1">{t('downloadWarning.winTitle')}</h4>
              <p className="text-gray-400 text-sm">{t('downloadWarning.winDesc')}</p>
            </div>
            <div className="bg-black/20 rounded-xl p-4 border border-white/5">
              <h4 className="font-bold text-gray-200 text-sm mb-1">{t('downloadWarning.macTitle')}</h4>
              <p className="text-gray-400 text-sm">{t('downloadWarning.macDesc')}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
