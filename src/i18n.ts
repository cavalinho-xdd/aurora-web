import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "download": "Download App",
        "scroll": "Scroll to discover"
      },
      "hero": {
        "subtitle": "\"Where attention goes, energy flows\""
      },
      "demo": {
        "question": "What do you want to learn?",
        "goal": "Learn Rust lifetimes",
        "focusingOn": "Focusing on:",
        "evaluation": "AI Evaluation",
        "aiAsk": "Focus session complete. What did you learn about",
        "userAnswer": "Borrow checker rules and memory safety.",
        "xpAwarded": "+50 XP",
        "aiResponse": "Excellent summary. Your conceptual understanding is expanding."
      },
      "manifest": {
        "p1": "In today's fast-paced world, it's hard to stop and focus on what truly matters.",
        "p2": "Our minds constantly wander. We multitask. Branching out in a thousand directions.",
        "p3": "Yet it should flow with absolute clarity. Like a wave of light in the dark.",
        "p4": "The first step is simply to start. That's why this app exists. To forcefully pull you out of the chaos and make you find that calm."
      },
      "features": {
        "title": "Reclaim your",
        "titleHighlight": "time",
        "subtitle": "An app that doesn't just count down. It actively forces you to focus.",
        "blocker": "System Blocker",
        "blockerDesc": "Mercilessly terminates distracting applications. No Discord, no games. It's time to focus.",
        "hardcore": "Hardcore Mode",
        "hardcoreDesc": "When things get tough. If you activate Hardcore mode, the app cannot be closed in any way.",
        "ai": "AI Evaluation",
        "aiDesc": "After the session, Google Gemini will test what you learned. Earn a rating and XP."
      },
      "cta": {
        "title": "Enter the Flow.",
        "button": "Download AppImage"
      }
    }
  },
  cs: {
    translation: {
      "nav": {
        "home": "Domů",
        "about": "O aplikaci",
        "download": "Stáhnout aplikaci",
        "scroll": "Skrolujte pro objevení"
      },
      "hero": {
        "subtitle": "\"Where attention goes, energy flows\""
      },
      "demo": {
        "question": "Jaký je tvůj úkol?",
        "goal": "Naučit se Rust lifetimes",
        "focusingOn": "Soustředění na:",
        "evaluation": "AI Shrnutí",
        "aiAsk": "Focus blok dokončen. Co ses naučil o tématu",
        "userAnswer": "Pravidla borrow checkeru a memory safety.",
        "xpAwarded": "+50 XP",
        "aiResponse": "Skvělé shrnutí. Tvé porozumění konceptu se rozšiřuje."
      },
      "manifest": {
        "p1": "V dnešním zrychleném světě je těžké se zastavit a soustředit na to, co je opravdu důležité.",
        "p2": "Naše mysl neustále těká. Multitaskuje. Rozvětvuje se do tisíce směrů.",
        "p3": "Přitom by měla plynout naprosto čistě. Jako vlna světla v temnotě.",
        "p4": "Prvním krokem je zkrátka začít. Proto vznikla tahle aplikace. Aby vás na sílu vytrhla z chaosu a donutila vás najít ten klid."
      },
      "features": {
        "title": "Získejte zpět svůj",
        "titleHighlight": "čas",
        "subtitle": "Aplikace, která se nespokojí jen s odpočítáváním. Aktivně vás nutí soustředit se.",
        "blocker": "Systémový Blocker",
        "blockerDesc": "Nemilosrdně ukončuje aplikace, které vás rozptylují. Žádný Discord, žádné hry. Je čas se soustředit.",
        "hardcore": "Hardcore Mód",
        "hardcoreDesc": "Když jde do tuhého. Pokud aktivujete Hardcore mód, aplikaci nelze absolutně nijak vypnout.",
        "ai": "AI Evaluace",
        "aiDesc": "Po skončení se vás Google Gemini zeptá na to, co jste se učili. Získáte hodnocení a XP."
      },
      "cta": {
        "title": "Vstupte do Flow.",
        "button": "Stáhnout AppImage"
      }
    }
  }
};

const savedLang = localStorage.getItem('focus-web-lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
