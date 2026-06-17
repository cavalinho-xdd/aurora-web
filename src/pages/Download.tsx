import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Info, Download as DownloadIcon } from 'lucide-react';
import { WindowsIcon, AppleIcon, LinuxIcon } from '../components/OSIcons';

const downloadLinks = [
  {
    os: "Windows",
    arch: "x64",
    type: ".exe",
    Icon: WindowsIcon,
    iconColor: "text-blue-400",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.8/Aurora-Setup-1.0.8.exe"
  },
  {
    os: "macOS",
    arch: "Arm64",
    type: ".dmg",
    Icon: AppleIcon,
    iconColor: "text-gray-200",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.8/Aurora-1.0.8-arm64.dmg"
  },
  {
    os: "Linux",
    arch: "Universal",
    type: ".AppImage",
    Icon: LinuxIcon,
    iconColor: "text-yellow-500",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.8/Aurora-1.0.8.AppImage"
  },
  {
    os: "Linux",
    arch: "Debian/Ubuntu",
    type: ".deb",
    Icon: LinuxIcon,
    iconColor: "text-yellow-500",
    url: "https://github.com/cavalinho-xdd/aurora/releases/download/v1.0.8/aurora_1.0.8_amd64.deb"
  }
];

export default function Download() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">{t('downloadPage.title')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            {t('downloadPage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {downloadLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-focus-primary/10 hover:border-focus-primary/50 transition-all duration-300 group relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center">
                <link.Icon className={`w-12 h-12 ${link.iconColor}`} />
                <h3 className="text-xl font-bold mt-6 mb-1 text-white">{link.os}</h3>
                <p className="text-gray-400 text-sm mb-6">{link.arch}</p>
                <div className="flex items-center gap-2 text-focus-primary font-bold text-sm bg-focus-primary/20 px-4 py-2 rounded-full border border-focus-primary/20 group-hover:bg-focus-primary group-hover:text-white transition-colors">
                  <DownloadIcon className="w-4 h-4" /> {link.type}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Installation Warning */}
        <div className="bg-focus-primary/10 border border-focus-primary/20 rounded-2xl p-6 md:p-8 backdrop-blur-md text-left shadow-[0_0_30px_rgba(139,92,246,0.1)] max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-focus-primary" />
            <h3 className="text-xl font-bold text-white">{t('downloadWarning.title')}</h3>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
            {t('downloadWarning.desc')}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-xl p-4 border border-white/5">
              <h4 className="font-bold text-gray-200 text-sm mb-1">{t('downloadWarning.winTitle')}</h4>
              <p className="text-gray-400 text-sm">{t('downloadWarning.winDesc')}</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-white/5">
              <h4 className="font-bold text-gray-200 text-sm mb-1">{t('downloadWarning.macTitle')}</h4>
              <p className="text-gray-400 text-sm">{t('downloadWarning.macDesc')}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
