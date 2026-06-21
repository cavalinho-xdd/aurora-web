import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      
      "homeNew": {
        "title1": "Stay",
        "title2": "focused",
        "title3": "with",
        "title4": "aurora.",
        "subtitle": "Light up your mind.",
        "appsBlocked": "23 Apps Blocked",
        "irreversible": "IRREVERSIBLE",
        "sessionScore": "Session Score",
        "pomodoroTitle": "Pomodoro Engine",
        "pomodoroDesc": "Customizable focus blocks and breaks designed around the proven Pomodoro technique.",
        "gamificationTitle": "Gamification & XP",
        "streakToday": "streak today",
        "lvl": "LVL",
        "dominateTitle1": "Dominate",
        "dominateTitle2": "your day.",
        "dominateDesc": "Earn XP, level up, and maintain daily streaks to stay motivated over the long term. Sync your progress to the cloud and compete with friends on the global leaderboard."
      },

      "aboutNew": {
        "heroTitle1": "We built",
        "heroTitle2": "Aurora",
        "heroTitle3": "because nothing else was brutal enough.",
        "heroDesc": "Most productivity apps ask nicely. Aurora locks you in.",
        "narrative": "Your mind wanders. You multitask. You branch into a thousand directions. Aurora exists to forcefully pull you out of the chaos and into absolute clarity.",
        "focusOverview": "Focus overview",
        "days": { "mon": "MON", "tue": "TUE", "wed": "WED", "thu": "THU", "fri": "FRI", "sat": "SAT", "sun": "SUN" },
        "thisWeek": "This Week",
        "sessions30d": "Sessions / 30D",
        "bestDay": "Best Day",
        "totalControlTitle1": "Total",
        "totalControlTitle2": "Control.",
        "totalControlDesc": "Everything you need to orchestrate your day. No distractions, just raw metrics and your upcoming focus blocks.",
        "lockedIn": "LOCKED IN",
        "shipMvp": "Ship the MVP",
        "noDistractions": "No distractions allowed until this is checked off.",
        "cannotSwitch": "Cannot Switch",
        "neverForgetTitle1": "Never",
        "neverForgetTitle2": "Forget.",
        "neverForgetDesc": "Dump your tasks into the backlog. Pick one. Lock it in. The system won't let you switch until it's done.",
        "thatsYou": "that's you",
        "streak": "streak",
        "sessions": "sessions",
        "earnItTitle1": "Earn",
        "earnItTitle2": "It.",
        "earnItDesc": "Level up your profile. Track your streaks. Compete on the global leaderboard. Gamification that actually means something.",
        "openSourceTitle1": "Open source.",
        "openSourceTitle2": "Cross-platform.",
        "openSourceTitle3": "Free.",
        "openSourceDesc": "Built with modern tools. MIT licensed. Runs natively on Windows, macOS, and Linux.",
        "viewGithub": "View on GitHub →",
        "supportKofi": "Support on Ko-fi"
      },

      "nav": {
        "home": "Home",
        "about": "About",
        "download": "Download App",
        "scroll": "Scroll to discover"
      },
      "hero": {
        "subtitle": "\"Light up your mind.\""
      },
      "aboutGallery": {
        "title": "Designed for Focus",
        "subtitle": "Take a look at the interface crafted to minimize distractions.",
        "login": "Secure Login",
        "loginDesc": "Your focus journey starts here. Clean, fast, and secure authentication.",
        "dashboard": "Dashboard",
        "dashboardDesc": "Track your progress, level up, and see your focus time at a glance.",
        "timer": "Focus Phase",
        "timerDesc": "A distraction-free timer that actively enforces your focus.",
        "settings": "Settings",
        "settingsDesc": "Configure your AI integration, app blocklist, and performance settings."
      },
      "demo": {
        "question": "What do you want to learn?",
        "goal": "Learn Rust lifetimes",
        "focusingOn": "Focusing on:",
        "evaluation": "AI Evaluation",
        "aiAsk": "Aurora session complete. What did you learn about",
        "userAnswer": "Borrow checker rules and memory safety.",
        "xpAwarded": "+50 XP",
        "aiResponse": "Excellent summary. Your conceptual understanding is expanding."
      },
      "manifest": {
        "p1": "In today's fast-paced world, it's hard to stop and focus on what truly matters.",
        "p2": "Our minds constantly wander. We multitask. Branching out in a thousand directions.",
        "p3": "Yet it should flow with absolute clarity. Like an aurora cutting through the dark.",
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
        "title": "Awaken your mind.",
        "button": "Download AppImage"
      },
      "apiGuide": {
        "button": "How to get free AI features?",
        "title": "Get free AI features",
        "subtitle": "It takes 3 clicks. No technical knowledge required.",
        "step1": {
          "title": "Step 1: Log In",
          "desc": "Go to Google AI Studio and sign in with your normal Google account.",
          "btn": "Open Google AI Studio"
        },
        "step2": {
          "title": "Step 2: Create Key",
          "desc": "Click the blue 'Create API Key' button and copy the generated text.",
          "tooltip": "Ctrl+C (Copy)"
        },
        "step3": {
          "title": "Step 3: Paste in Aurora App",
          "desc": "Open settings in Aurora App and paste the code into the box. Done!",
          "settings": "Settings",
          "apiKey": "Gemini API Key",
          "tip": "Tip: Use Ctrl+V (Paste)"
        },
        "back": "Back",
        "next": "Next Step",
        "done": "Got it, let's go!"
      },
      "legal": {
        "termsTitle": "Terms of Service",
        "termsEffective": "Effective Date: June 18, 2026",
        "termsIntro": "By downloading and using Aurora App, you agree to these Terms of Service. Aurora is a productivity tool designed to enforce focus.",
        "tSection1Title": "1. Assumption of Risk",
        "tSection1Desc": "Aurora App uses system-level blocking ('System Blocker') and a 'Hardcore Mode' to terminate distracting applications and prevent you from closing the app during a focus phase. YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF AURORA APP IS AT YOUR SOLE RISK.",
        "tSection2Title": "2. Limitation of Liability",
        "tSection2Desc": "In no event shall the developer of Aurora App be liable for any lost data, unsaved work, lost profits, or any indirect, incidental, or consequential damages arising out of your use or inability to use the application.",
        "tSection3Title": "3. Fair Use & Third-Party APIs",
        "tSection3Desc": "While Aurora is open-source and you are free to study or modify the code, you agree not to abuse our hosted infrastructure or backend services. Features that rely on third-party APIs (such as Google Gemini) require you to comply with their respective Terms of Service.",
        "privacyTitle": "Privacy Policy",
        "privacyEffective": "Effective Date: June 16, 2026",
        "privacyIntro": "Welcome to Aurora App! Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you use our application.",
        "section1Title": "1. Information We Collect",
        "section1Desc": "Aurora App operates mostly offline, but requires a Google Firebase account for some features. We collect the following:",
        "s1Item1": "Email Address:",
        "s1Item1Desc": "Used exclusively for account creation and login via Firebase Authentication.",
        "s1Item2": "Display Name:",
        "s1Item2Desc": "Fetched from your Google account to personalize your experience.",
        "s1Item3": "Profile Picture:",
        "s1Item3Desc": "Fetched from your Google account for UI purposes.",
        "section2Title": "2. What We Don't Collect",
        "s2Item1": "Passwords:",
        "s2Item1Desc": "We do not store or see your passwords. All authentication is handled securely by Google Firebase.",
        "s2Item2": "API Keys:",
        "s2Item2Desc": "Your Gemini API key is stored locally on your device. We do not have access to it.",
        "s2Item3": "Process Data (Blocker):",
        "s2Item3Desc": "The list of applications running on your computer during a focus session is processed locally and never sent to our servers.",
        "section3Title": "3. Third-Party Services",
        "section3Desc": "Aurora relies on third-party services to function:",
        "s3Item1": "Google Firebase:",
        "s3Item1Desc": "Used for authentication and database storage (leaderboards, friend lists).",
        "s3Item2": "Google Gemini API:",
        "s3Item2Desc": "If you provide your own API key, your prompts (goal topics) are sent directly to Google for AI evaluation.",
        "section4Title": "4. How We Protect Your Data",
        "section4Desc": "We implement industry-standard security measures, including Firebase Authentication, to protect your account. However, no method of transmission over the Internet or electronic storage is 100% secure.",
        "section5Title": "5. Changes to This Policy",
        "section5Desc": "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
      },
      "extWelcome": {
        "title1": "Installation",
        "title2": "Successful",
        "subtitle": "The Aurora Focus Companion is now active in your browser. Get ready for distraction-free deep work.",
        "f1Title": "Seamless Blocking",
        "f1Desc": "When your focus timer runs in Aurora, distracting websites are blocked instantly at the browser level.",
        "f2Title": "Zero Setup Required",
        "f2Desc": "There's no configuration here in the browser. Just set your Blacklisted Websites in the Aurora desktop app settings.",
        "f3Title": "Hardcore Ready",
        "f3Desc": "It works during regular sessions and Hardcore Mode. Your focus is completely protected.",
        "howTitle": "How to use it?",
        "howDesc": "Open your Aurora desktop application, go to Settings, and add the websites you want to block. The extension will automatically enforce them whenever you start a timer.",
        "openApp": "Open Aurora App"
      },
      "downloadWarning": {
        "title": "Installation Warning (Windows & Mac)",
        "desc": "As Aurora App is an independent project, it does not currently include expensive corporate \"Code Signing\" certificates. Your system might warn you upon first launch. The application is 100% safe and contains no malicious code.",
        "winTitle": "Windows Installation:",
        "winDesc": "If you see a blue \"Windows SmartScreen\", click on \"More info\" and then on the \"Run anyway\" button.",
        "macTitle": "macOS Installation:",
        "macDesc": "If your Mac says the application cannot be opened (unidentified developer), right-click (or two-finger tap) the app icon and select \"Open\"."
      },
      "downloadPage": {
        "title": "Alpha Release",
        "subtitle": "Aurora is in active development. Try out the initial release on your platform."
      },
      "footer": {
        "description": "An application that doesn't just count down. It actively forces you to focus by blocking distractions mercilessly.",
        "ready": "Ready for",
        "supportTitle": "Support Aurora's Development",
        "supportDesc": "Help cover the costs of the Apple Developer Program and Microsoft signing certificates. Without them, the app cannot be distributed natively without security warnings.",
        "supportBtn": "Support on Ko-fi",
        "product": "Product",
        "connect": "Connect",
        "legal": "Legal",
        "rights": "All rights reserved."
      }
    }
  },
  cs: {
    translation: {
      "hero": {
        "subtitle": "\"Rozsviťte svou mysl.\""
      },

      "homeNew": {
        "appsBlocked": "23 zablokovaných aplikací",
        "irreversible": "NEZVRATNÉ",
        "sessionScore": "Skóre bloku",
        "pomodoroTitle": "Pomodoro Engine",
        "pomodoroDesc": "Přizpůsobitelné bloky soustředění a přestávky navržené podle osvědčené techniky Pomodoro.",
        "gamificationTitle": "Gamifikace a XP",
        "streakToday": "dnešní série",
        "lvl": "ÚR",
        "dominateTitle1": "Ovládni",
        "dominateTitle2": "svůj den.",
        "dominateDesc": "Získávej XP, zvyšuj úroveň a udržuj si denní sérii, abys zůstal dlouhodobě motivovaný. Synchronizuj svůj postup do cloudu a soutěž s přáteli v globálním žebříčku."
      },

      "aboutNew": {
        "heroTitle1": "Vytvořili jsme",
        "heroTitle2": "Auroru",
        "heroTitle3": "protože nic jiného nebylo dostatečně brutální.",
        "heroDesc": "Většina aplikací pro produktivitu o to hezky poprosí. Aurora tě zamkne.",
        "narrative": "Tvá mysl těká. Děláš sto věcí najednou. Tříštíš pozornost do všech stran. Aurora vznikla proto, aby tě z toho chaosu nekompromisně vytáhla zpět do naprosté jasnosti.",
        "focusOverview": "Přehled soustředění",
        "days": { "mon": "PO", "tue": "ÚT", "wed": "ST", "thu": "ČT", "fri": "PÁ", "sat": "SO", "sun": "NE" },
        "thisWeek": "Tento týden",
        "sessions30d": "Bloků / 30D",
        "bestDay": "Nejlepší den",
        "totalControlTitle1": "Naprostá",
        "totalControlTitle2": "kontrola.",
        "totalControlDesc": "Vše, co potřebuješ k ovládnutí svého dne. Žádná vyrušení, jen čistá data a tvé další bloky soustředění.",
        "lockedIn": "ZAMKNUTO",
        "shipMvp": "Vydat MVP",
        "noDistractions": "Dokud tohle neodškrtneš, neexistuje nic jiného.",
        "cannotSwitch": "Nelze přepnout",
        "neverForgetTitle1": "Nikdy",
        "neverForgetTitle2": "nezapomeň.",
        "neverForgetDesc": "Naházej své úkoly do backlogu. Vyber si jeden. Zamkni ho. Systém ti nedovolí přepnout, dokud ho nedokončíš.",
        "thatsYou": "to jsi ty",
        "streak": "série",
        "sessions": "bloky",
        "earnItTitle1": "Zasluž",
        "earnItTitle2": "si to.",
        "earnItDesc": "Vylepšuj svůj profil. Sleduj své série. Soutěž v globálním žebříčku. Gamifikace, která má skutečný význam.",
        "openSourceTitle1": "Open source.",
        "openSourceTitle2": "Multiplatformní.",
        "openSourceTitle3": "Zdarma.",
        "openSourceDesc": "Postaveno na moderních nástrojích. Licence MIT. Běží nativně na Windows, macOS a Linuxu.",
        "viewGithub": "Zobrazit na GitHubu →",
        "supportKofi": "Podpořit na Ko-fi"
      },

      "nav": {
        "home": "Domů",
        "about": "O aplikaci",
        "download": "Stáhnout aplikaci",
        "scroll": "Skrolujte pro objevení"
      },
      "aboutGallery": {
        "title": "Design pro soustředění",
        "subtitle": "Podívejte se na rozhraní, které je navrženo k minimalizaci rozptylování.",
        "login": "Bezpečné přihlášení",
        "loginDesc": "Vaše cesta k soustředění začíná zde. Čisté, rychlé a bezpečné přihlášení.",
        "dashboard": "Přehled",
        "dashboardDesc": "Sledujte svůj pokrok, zvyšujte úroveň a mějte přehled o čase soustředění.",
        "timer": "Fáze soustředění",
        "timerDesc": "Časovač bez rušivých elementů, který aktivně vynucuje vaši pozornost.",
        "settings": "Nastavení",
        "settingsDesc": "Nakonfigurujte si AI integraci, seznam blokovaných aplikací a nastavení výkonu."
      },
      "demo": {
        "question": "Jaký je tvůj úkol?",
        "goal": "Naučit se Rust lifetimes",
        "focusingOn": "Soustředění na:",
        "evaluation": "AI Shrnutí",
        "aiAsk": "Aurora blok dokončen. Co ses naučil o tématu",
        "userAnswer": "Pravidla borrow checkeru a memory safety.",
        "xpAwarded": "+50 XP",
        "aiResponse": "Skvělé shrnutí. Tvé porozumění konceptu se rozšiřuje."
      },
      "manifest": {
        "p1": "V dnešním zrychleném světě je těžké se zastavit a soustředit na to, co je opravdu důležité.",
        "p2": "Naše mysl neustále těká. Multitaskuje. Rozvětvuje se do tisíce směrů.",
        "p3": "Přitom by měla plynout naprosto čistě. Jako polární záře v temnotě.",
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
        "title": "Probuďte svou mysl.",
        "button": "Stáhnout AppImage"
      },
      "apiGuide": {
        "button": "Jak získat AI funkce zdarma?",
        "title": "Získej AI funkce zdarma",
        "subtitle": "Zabere to 3 kliknutí. Nepotřebuješ žádné technické znalosti.",
        "step1": {
          "title": "Krok 1: Přihlášení",
          "desc": "Přejdi na stránku Google AI Studio a přihlas se svým normálním Google účtem.",
          "btn": "Otevřít Google AI Studio"
        },
        "step2": {
          "title": "Krok 2: Vytvoření klíče",
          "desc": "Klikni na modré tlačítko 'Create API Key' a zkopíruj si vygenerovaný text.",
          "tooltip": "Ctrl+C (Kopírovat)"
        },
        "step3": {
          "title": "Krok 3: Vložení do aplikace Aurora",
          "desc": "Otevři nastavení v aplikaci Aurora a vlož kód do políčka. Hotovo!",
          "settings": "Nastavení",
          "apiKey": "Gemini API Klíč",
          "tip": "Tip: Použij Ctrl+V (Vložit)"
        },
        "back": "Zpět",
        "next": "Další krok",
        "done": "Rozumím, jdu na to!"
      },
      "legal": {
        "termsTitle": "Podmínky použití (EULA)",
        "termsEffective": "Datum účinnosti: 18. června 2026",
        "termsIntro": "Stažením a používáním aplikace Aurora souhlasíte s těmito Podmínkami použití. Aurora je nástroj navržený k vynucení soustředění.",
        "tSection1Title": "1. Převzetí rizika",
        "tSection1Desc": "Aplikace Aurora používá blokování na úrovni systému ('System Blocker') a tzv. 'Hardcore mód', který ukončuje rušivé aplikace a znemožňuje vypnutí Aurory během bloku. VÝSLOVNĚ ROZUMÍTE A SOUHLASÍTE S TÍM, ŽE AURORU POUŽÍVÁTE VÝHRADNĚ NA VLASTNÍ NEBEZPEČÍ.",
        "tSection2Title": "2. Omezení odpovědnosti",
        "tSection2Desc": "Vývojář aplikace Aurora nenese v žádném případě odpovědnost za jakákoli ztracená data, neuloženou práci, ušlý zisk ani za žádné nepřímé, náhodné nebo následné škody vyplývající z používání nebo nemožnosti používat tuto aplikaci.",
        "tSection3Title": "3. Férové používání a API třetích stran",
        "tSection3Desc": "Přestože je Aurora open-source a můžete její kód libovolně zkoumat či upravovat, souhlasíte s tím, že nebudete zneužívat naši hostovanou infrastrukturu nebo backend. Funkce závislé na API třetích stran (např. Google Gemini) vyžadují dodržování i jejich příslušných Podmínek použití.",
        "privacyTitle": "Zásady ochrany osobních údajů",
        "privacyEffective": "Datum účinnosti: 16. června 2026",
        "privacyIntro": "Vítejte v aplikaci Aurora! Vaše soukromí je pro nás nesmírně důležité. Tyto Zásady vysvětlují, jak shromažďujeme, používáme a chráníme vaše osobní údaje při používání naší aplikace.",
        "section1Title": "1. Informace, které shromažďujeme",
        "section1Desc": "Aplikace Aurora funguje převážně offline, ale pro některé funkce vyžaduje účet Google Firebase. Shromažďujeme následující:",
        "s1Item1": "E-mailová adresa:",
        "s1Item1Desc": "Používá se výhradně k vytvoření účtu a přihlášení přes Firebase Authentication.",
        "s1Item2": "Zobrazované jméno:",
        "s1Item2Desc": "Přebírá se z vašeho Google účtu pro přizpůsobení uživatelského rozhraní.",
        "s1Item3": "Profilový obrázek:",
        "s1Item3Desc": "Přebírá se z vašeho Google účtu pro zobrazení v aplikaci.",
        "section2Title": "2. Co neshromažďujeme",
        "s2Item1": "Hesla:",
        "s2Item1Desc": "Hesla neukládáme ani je nevidíme. Veškeré ověřování bezpečně zpracovává Google Firebase.",
        "s2Item2": "API klíče:",
        "s2Item2Desc": "Váš klíč k Gemini API je uložen lokálně na vašem zařízení. Nemáme k němu přístup.",
        "s2Item3": "Procesní data (Blocker):",
        "s2Item3Desc": "Seznam aplikací běžících na vašem počítači během Aurora bloku je zpracováván lokálně a nikdy není odesílán na naše servery.",
        "section3Title": "3. Služby třetích stran",
        "section3Desc": "Aurora ke svému fungování využívá služby třetích stran:",
        "s3Item1": "Google Firebase:",
        "s3Item1Desc": "Slouží k ověřování a ukládání do databáze (žebříčky, seznamy přátel).",
        "s3Item2": "Google Gemini API:",
        "s3Item2Desc": "Pokud zadáte vlastní API klíč, vaše zadání (témata cílů) se odesílají přímo společnosti Google k vyhodnocení umělou inteligencí.",
        "section4Title": "4. Jak chráníme vaše data",
        "section4Desc": "Implementujeme standardní bezpečnostní opatření, včetně autentizace Firebase, abychom ochránili váš účet. Žádná metoda přenosu přes internet nebo elektronické ukládání však není 100% bezpečná.",
        "section5Title": "5. Změny těchto zásad",
        "section5Desc": "Tyto Zásady ochrany osobních údajů můžeme občas aktualizovat. O případných změnách vás budeme informovat zveřejněním nových zásad na této stránce."
      },
      "extWelcome": {
        "title1": "Instalace",
        "title2": "byla úspěšná",
        "subtitle": "Aurora Focus Companion je nyní aktivní ve vašem prohlížeči. Připravte se na hlubokou práci bez vyrušení.",
        "f1Title": "Okamžité blokování",
        "f1Desc": "Když běží váš časovač v Auroře, rušivé webové stránky jsou okamžitě blokovány na úrovni prohlížeče.",
        "f2Title": "Nulové nastavování",
        "f2Desc": "V prohlížeči není třeba nic konfigurovat. Stačí přidat weby na černou listinu v nastavení desktopové aplikace Aurora.",
        "f3Title": "Hardcore Ready",
        "f3Desc": "Funguje to během běžných bloků i v Hardcore módu. Vaše soustředění je plně chráněno.",
        "howTitle": "Jak to funguje?",
        "howDesc": "Otevřete desktopovou aplikaci Aurora, přejděte do Nastavení a přidejte weby, které chcete blokovat. Rozšíření je automaticky zablokuje, jakmile spustíte časovač.",
        "openApp": "Otevřít aplikaci Aurora"
      },
      "downloadWarning": {
        "title": "Upozornění pro instalaci (Windows & Mac)",
        "desc": "Jelikož je Aurora nezávislý projekt, neobsahuje zatím drahé korporátní \"Code Signing\" certifikáty. Váš systém vás může při prvním spuštění varovat. Aplikace je 100% bezpečná a neobsahuje žádný škodlivý kód.",
        "winTitle": "Při instalaci na Windows:",
        "winDesc": "Pokud na vás vyskočí modrá obrazovka \"Windows SmartScreen\", klikněte na text \"Více informací\" (More info) a následně na tlačítko \"Přesto spustit\" (Run anyway).",
        "macTitle": "Při spuštění na macOS:",
        "macDesc": "Pokud vám Mac napíše, že aplikaci nelze otevřít (neznámý vývojář), klikněte na ikonku aplikace pravým tlačítkem (nebo dvěma prsty) a z nabídky vyberte \"Otevřít\" (Open)."
      },
      "downloadPage": {
        "title": "Alfa Verze",
        "subtitle": "Aurora je v aktivním vývoji. Vyzkoušejte si prvotní verzi na vaší platformě."
      },
      "footer": {
        "description": "Aplikace, která se nespokojí jen s odpočítáváním. Aktivně vás nutí soustředit se nemilosrdným blokováním všeho, co vás rozptyluje.",
        "supportTitle": "Podpořte vývoj Aurory",
        "supportDesc": "Pomozte pokrýt náklady na Apple Developer Program a podepisovací certifikáty od Microsoftu. Bez nich nelze aplikaci distribuovat nativně bez bezpečnostních varování.",
        "supportBtn": "Podpořit na Ko-fi",
        "product": "Produkt",
        "connect": "Odkazy",
        "legal": "Právní",
        "rights": "Všechna práva vyhrazena."
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
