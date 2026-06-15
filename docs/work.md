# Work Log - Procrastination Helper

Tento soubor slouží k postupnému zapisování změn, updatů a oprav (changelog) během vývoje projektu.

## Update 1: Oprava spouštění a Wayland chyby (13. 6. 2026)

**Problém:** 
`ERR_CONNECTION_REFUSED` při `npm start`. Aplikace se snažila načíst `localhost:5173` (dev server), ačkoliv běžela produkční verze. Dále se objevovala chyba s Vulkanem na Waylandu.

**Řešení:**
- Přepnuta logika v `main.js`: `isDev` nyní reaguje na proměnnou `NODE_ENV=development` místo `!app.isPackaged`.
- Do `package.json` přidán skript `npm run start:dev`, který tuto proměnnou nastavuje. Běžný `npm start` nyní správně načítá `dist/index.html`.
- Přidán `app.commandLine.appendSwitch('disable-vulkan')` do `main.js` k potlačení nekompatibility Wayland/Vulkan.

## Update 2: Kompletní redesign UI (OLED Dark Mode) (13. 6. 2026)

**Problém:** 
Původní glassmorphism UI bylo zastaralé a nerespektovalo moderní SaaS UX vzory, navíc používalo systémová emoji jako ikony.

**Řešení:**
- Nahrazeno komplet UI téma na "OLED Dark Mode" (slate-950 pozadí) dle `ui-ux-pro-max`.
- Hlavní akcentová barva změněna z tyrkysové na neonově zelenou (`#22C55E`), přidán lehký neon-glow pro Focus prvky (Timer, CTA).
- Typografie změněna z *Inter* na *Plus Jakarta Sans*.
- Odstraněna veškerá emoji a přidána knihovna `lucide-react` (nainstalováno, do kódu přidány komponenty `<SettingsIcon />`, `<Trophy />`, atd.).
- Statistiky uspořádány do moderního Bento Grid layoutu (`Dashboard.jsx`).
- Výrazně vylepšené a čistější formuláře u kvízů a nastavení API.

## Update 3: Liquid Neon Glassmorphism (13. 6. 2026)

**Problém:**
OLED Dark Mode (zelená/černá) neodpovídal zamýšlené atmosféře "focus", chybělo mu to správné "liquid" skleněné kouzlo inspirované referenčními obrázky.

**Řešení:**
- Pozadí změněno na absolutní černou s CSS `radial-gradient` animovanými "blobs" (neonově fialové a modré skvrny na pozadí).
- Aplikován extrémní `backdrop-filter: blur(24px)` na hlavní panely, čímž vznikl žádaný "Glassmorphism" efekt reagující na animované pozadí.
- Barvy přesunuty do fialovo-růžovo-modré palety (zcela nahradilo původní zelenou).
- Timer kruh používá `linearGradient` přesahující z fialové do růžové. Tlačítka dostala plynulé barevné gradienty a silnější neonový glow efekt.

## Update 4: Firebase, Účty a Leaderboards (13. 6. 2026)

**Problém:**
Chyběla možnost sdílet úspěchy s komunitou a ukládat XP na cloud, aby se zamezilo ztrátě dat a vytvořil se gamifikační tlak přes leaderboardy s přáteli.

**Řešení:**
- Přidán `firebase` NPM balíček a nakonfigurováno spojení s novým `focus-15019` projektem (`src/firebase.js`).
- Vytvořena nová `AuthScreen.jsx` s přihlášením/registrací (Email+Heslo) respektující Liquid Glassmorphism design.
- Vytvořena `SocialScreen.jsx` pro zobrazení "Globálního" a "Friends" leaderboardu.
- Umožněno vyhledávat uživatele podle emailu a přidávat je do pole `friends` ve Firestore dokumentu.
- Lokální zisk XP po dokončení Gemini Kvízu (`App.jsx`) se nyní rovnou propisuje do Firestore kolekce `users`.

## Update 5: Integrace WebGL SoftAurora pozadí (13. 6. 2026)

**Problém:**
Původní ambientní CSS blobs na pozadí byly příliš jednoduché, statické a chyběla jim interaktivita, která by dodala pocit skutečně prémiové desktopové aplikace.

**Řešení:**
- Inicializován nástroj `jsrepo` v projektu a stažena JS-CSS verze komponenty `SoftAurora` z React Bits (bez nutnosti instalovat a konfigurovat Tailwind CSS).
- Nainstalována WebGL knihovna `ogl` pro rychlé vykreslování v plátně (Canvas).
- Upraven poslech událostí myši (`handleMouseMove`) v `SoftAurora.jsx` z plátna na globální `window`, což umožnilo nastavit na kontejner pozadí `pointer-events: none` (pozadí neblokuje klikání na UI panely, ale přesto reaguje na pohyb myši).
- Zakomponováno jako globální pozadí v `App.jsx` s barvami `--primary` (fialová) a `--cta` (růžová), které se krásně prolínají za skleněnými panely s `backdrop-filter: blur(24px)`.
- Deaktivovány původní statické CSS blobs v `index.css`.
- Přidán Google font **Poppins** přes preconnect linky v `index.html`. Nastaven jako hlavní font rodina v `index.css` a přidány třídy `.poppins-*` pro všechny řezy a styly.
