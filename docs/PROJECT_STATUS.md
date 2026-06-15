# 🚀 Focus App - Stav Projektu

**Poslední aktualizace:** Začátek noční směny -> Půl jedné ráno. 

## 🎯 Co je aktuálně HOTOVO:

### 1. Core Funkcionalita (Základní MVP)
- Blokování aplikací prokrastinace pomocí upraveného bash skriptu (`pkill`).
- Gemini API napojení pro generování a vyhodnocování kontrolních kvízů po konci soustředění.
- Gamifikace: Uživatelský profil získává XP a levely na základě úspěšnosti v kvízu.
- Firebase integrace (Autentizace, ukládání statistik a XP).

### 2. Hardcore Mód (Anti-Cheat)
- Pokud si uživatel zaškrtne Hardcore Mód, aplikaci **nelze** nijak zavřít z hlavního okna. Tlačítko "Zrušit" úplně zmizí.
- Zablokován i pokus o vypnutí přes křížek (okno pouze ignoruje příkaz).
- Není možné aplikaci vypnout ani přes lištu nebo Tray menu.

### 3. Pomodoro Mód
- Uživatelé mohou využívat fáze střídání (např. 25 minut práce, 5 minut pauza).
- UI se inteligentně přizpůsobuje: Časovač plynule přechází mezi fialovou (Focus) a zelenou (Break).
- Aplikace se během fáze pauzy automaticky odblokují a během práce znovu zablokují.

### 4. UI/UX "Pro Max" Upgrade (Aesthetics)
- Nudné ploché UI dostalo moderní kyberpunkový kabát.
- Nasazen **Glassmorphism 2.0** s vnitřními stíny a vylepšenými rámečky karet.
- Rozsvícení aktivních záložek, plynulý custom scrollbar, gradientní hlavní nadpisy.
- Původní ošklivé bílé checkboxy byly nahrazeny a sladěny s celkovým vizuálem (červený pro Hardcore, fialový pro Pomodoro).
- Vygenerována nová, filozofická ikona (Neonová Vlna symbolizující "Flow State").

### 5. Distribuce a Buildování
- Systém kompletně běží na jednom kódu (Electron).
- Připraven Linux build systém v `package.json` (`npm run package:linux`).
- Systém nyní generuje z jedné rány:
  1. `AppImage` pro přenositelnost.
  2. `.deb` instalátor pro Ubuntu/Mint (zajistí vytvoření ikonky v menu).

---

## 📅 Co nás čeká dál (Next Steps):

1. **Přepínač (Toggle) Místo Checkboxů:** Nahradit normální zaškrtávací pole za moderní Apple-like "switche", aby UI bylo dokonalé.
2. **Landing Page:** Vytvořit prezentační promo web ve Vite/Next.js s animacemi a velkým tlačítkem pro stažení, přes který by se projekt dal monetizovat a propagovat na Redditu nebo TikToku.
3. **Instalační skript na web:** Umístit na Landing page bash skript pro instalaci na Arch/Fedoru (`curl ... | bash`), který sám stáhne AppImage a nahodí Desktop ikonu.

---
*Dobrou noc! Zítra v tom budeme pokračovat.* 🌙
