const STORAGE_KEY = "trp-dashboard-v1";
const CONTENT_VERSION = 2;
const LEGACY_CLIP_STATUSES = {
  t1: "idea",
  v1c1: "idea", v1c2: "selected", v1c3: "selected", v1c4: "idea",
  v2c1: "idea", v2c2: "selected", v2c3: "idea", v2c4: "selected", v2c5: "idea",
  v3c1: "idea", v3c2: "selected", v3c3: "idea", v3c4: "idea", v3c5: "idea"
};
const LEGACY_POST_STATUSES = {
  p1: "selected", p2: "selected", p3: "idea", p4: "idea",
  p5: "selected", p6: "idea", p7: "idea", p8: "idea"
};

const initialState = {
  contentVersion: CONTENT_VERSION,
  metrics: [
    { id: "youtube", label: "Prehratia hlavných videí", value: 0, target: 500, color: "#1d62c7" },
    { id: "reach", label: "Unikátny reach", value: 0, target: 500, color: "#48b7ae" },
    { id: "social", label: "Prehratia sociálnych videí", value: 0, target: 700, color: "#d53a4a" }
  ],
  resultsNote: "",
  tasks: [
    { id: 1, title: "Potvrdiť publikačný dátum prvého videa", detail: "Zladiť termín so Zuzkou a publikovaním teaseru.", due: "2026-06-19", phase: "Jún", status: "next" },
    { id: 2, title: "Pripraviť post k téme Bezpečie v triede", detail: "Použiť hlavné CTA: Pozrite si celé video na YouTube.", due: "2026-06-17", phase: "Jún", status: "next" },
    { id: 3, title: "Vyrobiť prvý reel z úseku 7:15–7:43", detail: "Video 1: učenie je bez bezpečia takmer nemožné.", due: "2026-06-18", phase: "Jún", status: "next" },
    { id: 4, title: "Poslať Zuzke draft postu a stories", detail: "Jeden dokument, jedno CTA, odkazy na teaser a Video 1.", due: "2026-06-18", phase: "Jún", status: "next" },
    { id: 5, title: "Zapísať prvé výsledky kampane", detail: "YouTube views, unikátny reach a social video views samostatne.", due: "2026-06-22", phase: "Priebežne", status: "progress" },
    { id: 6, title: "Pripraviť letný post o regenerácii", detail: "Použiť Video 3 a jemné CTA na kurz.", due: "2026-07-15", phase: "Leto", status: "backlog" },
    { id: 7, title: "Pripraviť augustový preventívny obsah", detail: "Tvorba bezpečia začína pred prvým problémom.", due: "2026-08-24", phase: "August", status: "backlog" }
  ],
  videos: [
    {
      id: "teaser", label: "Teaser", title: "Prečo vznikol miniseriál", duration: "0:55",
      url: "https://www.youtube.com/watch?v=uLuK8L4_81A",
      role: "Štart kampane a pozvanie k celej sérii.",
      post: "Ticho v triede ešte nemusí znamenať bezpečie. Náročné správanie môže byť signálom, že nervový systém dieťaťa hľadá spôsob, ako situáciu zvládnuť.",
      clips: [
        { id: "t1", time: "0:00–0:30", title: "Za správaním je príbeh", hook: "Čo ak náročné správanie nie je problém, ale správa?", point: "Správanie môže komunikovať vnútornú nepohodu a dospelý má pri regulácii kľúčovú rolu.", status: "selected" },
        { id: "t2", time: "0:14–0:46", title: "Čo prinesie séria", hook: "Bezpečná škola nezačína pri pravidlách, ale pri porozumení nervovému systému.", point: "Séria prepája bezpečie, porozumenie správaniu a regeneráciu detí aj dospelých.", status: "idea" }
      ]
    },
    {
      id: "v1", label: "Video 1", title: "Tvorba bezpečia", duration: "11:05",
      url: "https://www.youtube.com/watch?v=wALeNS80uEY",
      role: "Hlavné júnové video. Vysvetľuje bezpečie, učenie, kontext, voľbu a spojenie.",
      post: "Bezpečie v triede nie je bonus. Je to podmienka učenia. Učiteľ ho spoluvytvára cez kontext, primeranú voľbu a spojenie.",
      clips: [
        { id: "v1c1", time: "2:39–3:13", title: "Čo je bezpečie", hook: "Bezpečie nie je len absencia nebezpečenstva.", point: "Je to pocit prijatia a orientácie vo svete, bez ktorého sa dieťa nedokáže naplno učiť.", status: "selected" },
        { id: "v1c2", time: "7:15–7:43", title: "Bez bezpečia sa neučíme", hook: "Keď mozog hľadá hrozby, nové učivo ide bokom.", point: "Učiteľ vytvára bezpečie každodenne cez kontext, voľbu a spojenie.", status: "selected" },
        { id: "v1c3", time: "7:44–8:20", title: "Čo potrebuje dieťa po konflikte", hook: "Dieťa po konflikte môže sedieť v triede, ale jeho energia je stále zameraná na prežitie.", point: "Kontext, voľba a spojenie pomáhajú presunúť energiu z obrany späť k učeniu.", status: "idea" },
        { id: "v1c4", time: "8:20–8:45", title: "Učiteľ ako dôležitý dospelý", hook: "Bezpečie nie je luxus. Je to základ všetkého učenia.", point: "Bezpečná skúsenosť s učiteľom môže vyvažovať aj záťaž, ktorú dieťa zažíva mimo školy.", status: "selected" },
        { id: "v1c5", time: "3:00–3:36", title: "Tri piliere bezpečia", hook: "Tri praktické nástroje, ktoré vnášajú poriadok tam, kde vzniká stres.", point: "Kontext, voľba a spojenie ukotvujú nervovú sústavu detí aj dospelých.", status: "idea" }
      ]
    },
    {
      id: "v2", label: "Video 2", title: "Náročné správanie a regulácia", duration: "9:19",
      url: "https://www.youtube.com/watch?v=wtE9UbLJ5tA",
      role: "Druhá fáza kampane. Predstavuje TRP ako optiku a učiteľa ako termostat.",
      post: "Čo ak náročné správanie nie je útok na učiteľa? Môže byť neúspešným pokusom dieťaťa zvládnuť napätie, ktoré ešte nevie inak spracovať.",
      clips: [
        { id: "v2c1", time: "0:25–1:10", title: "Vymeňme nálepku za otázku", hook: "Drzáň. Nervák. Ignorant. Manipulátor. Čo nám tieto nálepky nepovedia?", point: "TRP mení hodnotenie za pozorovanie a otázku „Čo sa ti stalo?“.", status: "selected" },
        { id: "v2c2", time: "1:21–2:04", title: "Správanie je signál", hook: "Útok, vyrušovanie aj zamrznutie môžu mať rovnaký koreň.", point: "Nervový systém môže na stratu bezpečia reagovať hlučne aj úplným stiahnutím.", status: "idea" },
        { id: "v2c3", time: "2:19–2:57", title: "Nie je to útok na mňa", hook: "Náročné správanie dieťaťa nie je útokom na vás ako na osobu.", point: "Môže byť neúspešným pokusom dieťaťa regulovať napätie, ktoré nevie inak spracovať.", status: "selected" },
        { id: "v2c4", time: "3:14–4:21", title: "Tri úrovne regulácie", hook: "Keď je dieťa v napätí, samotné vysvetľovanie nemusí fungovať.", point: "Regulácia prebieha cez telo, bezpečný vzťah a až potom cez rozum.", status: "idea" },
        { id: "v2c5", time: "4:58–5:47", title: "Teplomer alebo termostat", hook: "Ste v napätej triede teplomer alebo termostat?", point: "Termostat napätie vníma, ale nepridáva k nemu vlastný výbuch. Aktívne prináša pokoj.", status: "selected" },
        { id: "v2c6", time: "5:47–6:21", title: "Dieťa sa reguluje cez nás", hook: "Dieťa sa nenaučí regulovať iba pokynom „upokoj sa“.", point: "Nezrelá nervová sústava potrebuje najprv opakovane zažívať pokoj a sebaistotu dospelého.", status: "selected" },
        { id: "v2c7", time: "8:24–8:56", title: "Najprv telo, potom rozhovor", hook: "Rozhovor v stave ohrozenia často prichádza priskoro.", point: "Keď je rozumový mozog dočasne odpojený, prvým krokom je upokojiť telo cez dych, zmysly alebo pohyb.", status: "idea" }
      ]
    },
    {
      id: "v3", label: "Video 3", title: "Regenerácia a odolnosť", duration: "11:00",
      url: "https://www.youtube.com/watch?v=B51FxrnwLZ4",
      role: "Letný obsah, regenerácia učiteľov a jemné CTA na kurz.",
      post: "Odolnosť nevzniká tým, že vydržíme stále viac, ale tým, že sa po záťaži dokážeme vrátiť k pokoju, bezpečiu a svojim zdrojom.",
      clips: [
        { id: "v3c1", time: "0:51–1:49", title: "Bezpečie nie je život bez stresu", hook: "Ak by bezpečie znamenalo úplnú neprítomnosť stresu, nikdy by sme ho nedosiahli.", point: "Stres je bežnou súčasťou života a sám osebe nemusí znamenať stratu bezpečia.", status: "idea" },
        { id: "v3c2", time: "2:02–2:42", title: "Kedy stres buduje odolnosť", hook: "Nie každý stres zraňuje. Rozhodujú podmienky, v ktorých ho zažívame.", point: "Posilňujúci stres je mierny, krátkodobý, predvídateľný, ovplyvniteľný a sprevádzaný podporou.", status: "idea" },
        { id: "v3c3", time: "2:55–3:25", title: "Neodstraňujme stres, urobme ho zvládnuteľným", hook: "Cieľom školy nie je odstrániť všetok stres.", point: "Predvídateľnosť, čas na prípravu a podpora môžu z náročnej situácie urobiť posilňujúcu skúsenosť.", status: "selected" },
        { id: "v3c4", time: "3:58–4:32", title: "Odolnosť vzniká pri zotavení", hook: "To, čo nás posilňuje, nie je absencia stresu, ale schopnosť zotaviť sa z neho.", point: "Bez priebežnej regenerácie sa nervový systém vyčerpáva a stráca schopnosť učiť sa.", status: "selected" },
        { id: "v3c5", time: "4:48–5:23", title: "Ako sa najlepšie učíme", hook: "Učíme sa lepšie v úplnom pokoji alebo pod tlakom?", point: "Najlepšie sa učíme pri miernom nabudení, keď zostáva zachovaný pocit bezpečia.", status: "idea" },
        { id: "v3c6", time: "6:35–7:20", title: "Aj učiteľ potrebuje regeneráciu", hook: "Aby sme mohli byť oporou pre deti, musíme sa postarať o vlastný nervový systém.", point: "Spánok, pohyb, jedlo, dych a skutočné prestávky sú základné pracovné zdroje, nie odmena.", status: "selected" },
        { id: "v3c7", time: "7:20–8:03", title: "Bezpečná zborovňa, bezpečnejšia trieda", hook: "Bezpečie v zborovni priamo ovplyvňuje bezpečie v triede.", point: "Vzťahová podpora, hranice, mentoring a reflexia pomáhajú učiteľovi zachovať odborný odstup.", status: "idea" },
        { id: "v3c8", time: "10:37–10:50", title: "Tvorba bezpečia začína u nás", hook: "Tvorba bezpečia začína u nás samých.", point: "Dospelý, ktorý má prístup k svojim zdrojom, dokáže vytvárať prostredie pre rozvoj detí.", status: "selected" }
      ]
    }
  ],
  posts: [
    {
      id: "p1", format: "carousel", status: "selected",
      title: "Ticho nemusí znamenať bezpečie",
      source: "Video 2 · Náročné správanie a regulácia",
      time: "1:21–2:04",
      url: "https://www.youtube.com/watch?v=wtE9UbLJ5tA&t=81s",
      why: "Pasáž priamo pomenúva vyrušovanie, útok aj zamrznutie ako možné reakcie nervového systému na stratu bezpečia. Myšlienka „ticho nemusí znamenať bezpečie“ je redakčný záver vychádzajúci z tohto kontrastu.",
      fit: "Carousel vie postupne narušiť skratku „tichá trieda = bezpečná trieda“ a ukázať viditeľné aj tiché prejavy stresu bez zjednodušovania.",
      slides: [
        "Ticho v triede ešte nemusí znamenať bezpečie.",
        "Dieťa v ohrození nemusí iba kričať alebo vyrušovať.",
        "Môže zamrznúť, stiahnuť sa alebo prestať reagovať.",
        "Navonok je pokojné. Jeho nervový systém však môže byť v pohotovosti.",
        "Preto nesledujeme iba hlasitosť triedy, ale aj kontakt, zapojenie a schopnosť reagovať.",
        "Otázka pre dospelého: Čo by tomuto dieťaťu pomohlo vrátiť sa do kontaktu?",
        "Pozrite si celé video o náročnom správaní a regulácii."
      ],
      draft: "Tichá trieda môže pôsobiť pokojne. Nie každé ticho však znamená, že sa deti cítia bezpečne.\n\nStresová reakcia môže vyzerať aj ako zamrznutie, stiahnutie sa alebo nereagovanie. TRP nás učí nevnímať iba to, či dieťa ruší, ale aj to, či zostáva v kontakte a má kapacitu zapojiť sa.\n\nPozrite si druhú časť série o náročnom správaní a regulácii."
    },
    {
      id: "p2", format: "carousel", status: "selected",
      title: "Tri piliere bezpečia v triede",
      source: "Video 1 · Tvorba bezpečia",
      time: "3:00–7:08",
      url: "https://www.youtube.com/watch?v=wALeNS80uEY&t=180s",
      why: "Kontext, voľba a spojenie tvoria ucelený praktický rámec. Každý pilier potrebuje vlastné vysvetlenie a príklad, preto by sa v krátkom reelse pointa zbytočne stlačila.",
      fit: "Carousel umožní venovať každému pilieru samostatný slide a zakončiť ho konkrétnou otázkou pre učiteľa.",
      slides: [
        "Bezpečie v triede stojí na troch pilieroch.",
        "1. Kontext: Viem, čo sa bude diať, ako a prečo.",
        "Bez kontextu si chýbajúce informácie dopĺňame. Často podľa minulých obáv.",
        "2. Voľba: Mám primeranú možnosť ovplyvniť situáciu.",
        "Príliš málo voľby vytvára pocit pasce. Príliš veľa môže zahltiť.",
        "3. Spojenie: Zažívam prijatie a dôveryhodný vzťah.",
        "Malé opakované kroky v kontexte, voľbe a spojení menia prežívanie triedy.",
        "Ktorý z troch pilierov potrebuje vaša trieda posilniť?"
      ],
      draft: "Bezpečie nie je samostatná aktivita navyše. Vzniká v bežných chvíľach: keď deti vedia, čo ich čaká, majú primeranú možnosť voľby a zažívajú prijatie vo vzťahu.\n\nKontext, voľba a spojenie sú tri praktické piliere, cez ktoré môže učiteľ každý deň znižovať neistotu a podporovať učenie.\n\nViac príkladov nájdete v prvom videu série Tvorba bezpečia."
    },
    {
      id: "p3", format: "static", status: "idea",
      title: "Bezpečie nie je iba absencia nebezpečenstva",
      source: "Video 1 · Tvorba bezpečia",
      time: "2:39–3:13",
      url: "https://www.youtube.com/watch?v=wALeNS80uEY&t=159s",
      why: "Ide o krátku, nosnú definíciu, ktorá obstojí ako samostatný výrok a otvorí diskusiu v captione.",
      fit: "Jedna výrazná veta na grafike a stručné vysvetlenie v texte budú účinnejšie než rozťahanie jednoduchej myšlienky do viacerých slidov.",
      slides: [
        "Bezpečie nie je iba absencia nebezpečenstva.",
        "Je to aj pocit, že som prijímaný, som v poriadku a rozumiem tomu, čo sa okolo mňa deje."
      ],
      draft: "Keď sa v triede nič viditeľne zlé nedeje, ešte to neznamená, že každý prežíva bezpečie.\n\nPocit bezpečia zahŕňa aj prijatie, zrozumiteľnosť a možnosť orientovať sa v tom, čo sa deje. Práve v takom stave má nervový systém viac priestoru na kontakt, premýšľanie a učenie.\n\nPozrite si celé video Tvorba bezpečia."
    },
    {
      id: "p4", format: "carousel", status: "idea",
      title: "Od nálepky k pozorovaniu",
      source: "Video 2 · Náročné správanie a regulácia",
      time: "0:25–1:10",
      url: "https://www.youtube.com/watch?v=wtE9UbLJ5tA&t=25s",
      why: "Pasáž obsahuje viac krokov zmeny pohľadu: nálepka, pozorovanie, komunikácia a nová otázka. V carouseli sa dajú porovnať vedľa seba.",
      fit: "Formát pred/po je ľahko uložiteľný a poskytne učiteľovi konkrétny jazyk, ku ktorému sa môže vrátiť.",
      slides: [
        "Nálepka situáciu pomenuje. Nie vždy jej pomôže porozumieť.",
        "„Je drzý.“ → Čo konkrétne vidím a počujem?",
        "„Ignoruje ma.“ → Dokáže teraz reagovať a zostať v kontakte?",
        "„Manipuluje.“ → Akú potrebu sa týmto spôsobom snaží naplniť?",
        "TRP mení hodnotenie za pozorovanie.",
        "Namiesto „Čo s tebou nie je v poriadku?“ sa pýta „Čo sa ti stalo?“",
        "Porozumenie neruší hranice. Pomáha zvoliť účinnejšiu reakciu."
      ],
      draft: "Nálepky nám pomáhajú rýchlo pomenovať situáciu. Málokedy nám však povedia, čo dieťa potrebuje alebo čo jeho správanie komunikuje.\n\nTrauma rešpektujúci prístup pozýva urobiť krok späť: oddeliť pozorovanie od hodnotenia a pýtať sa, aký zmysel môže mať správanie v danej situácii.\n\nNeznamená to zrušiť hranice. Znamená to reagovať s väčším porozumením a menšou pravdepodobnosťou ďalšej eskalácie."
    },
    {
      id: "p5", format: "carousel", status: "selected",
      title: "Tri úrovne regulácie",
      source: "Video 2 · Náročné správanie a regulácia",
      time: "3:14–4:30",
      url: "https://www.youtube.com/watch?v=wtE9UbLJ5tA&t=194s",
      why: "Telesná, vzťahová a rozumová regulácia sa ľahko zamieňajú alebo redukujú iba na rozhovor. Téma potrebuje prehľadnú štruktúru a príklady.",
      fit: "Carousel funguje ako praktická pomôcka, ktorú si môže učiteľ uložiť a použiť pri plánovaní hodiny alebo riešení náročnej situácie.",
      slides: [
        "Regulácia neprebieha iba cez rozum.",
        "1. Telesná: pohyb, dych, zmysly a úprava prostredia.",
        "Pomáha telu znížiť napätie, ktoré sa počas dňa hromadí.",
        "2. Vzťahová: bezpečný kontakt, prijatie a uznanie pocitov.",
        "Vzťah s pokojným dospelým je silným nástrojom regulácie.",
        "3. Rozumová: jasné informácie, predvídateľnosť, voľba a reflexia.",
        "Rozumové vysvetľovanie funguje až vtedy, keď je dieťa dostatočne pokojné.",
        "Telo. Vzťah. Rozum. V tomto poradí sa oplatí rozmýšľať aj v eskalácii."
      ],
      draft: "Keď je dieťa v silnom napätí, ďalšie vysvetľovanie nemusí byť prvým krokom.\n\nRegulácia prebieha na troch prepojených úrovniach: telesnej, vzťahovej a rozumovej. Všetky sú dôležité, ale rozumová časť je dostupná až vtedy, keď sa nervový systém cíti dostatočne bezpečne.\n\nUložte si prehľad troch úrovní alebo si pozrite celé video o náročnom správaní a regulácii."
    },
    {
      id: "p6", format: "carousel", status: "idea",
      title: "Teplomer alebo termostat?",
      source: "Video 2 · Náročné správanie a regulácia",
      time: "4:58–5:47",
      url: "https://www.youtube.com/watch?v=wtE9UbLJ5tA&t=298s",
      why: "Metafora obsahuje jasný kontrast a umožňuje učiteľovi rýchlo rozpoznať vlastnú reakciu bez obviňovania.",
      fit: "Porovnávací carousel dokáže rozdiel medzi pasívnym preberaním napätia a aktívnou reguláciou ukázať názorne.",
      slides: [
        "Ste v triede teplomer alebo termostat?",
        "Teplomer odráža teplotu v miestnosti.",
        "Keď napätie v triede rastie, rastie spolu s ním aj napätie dospelého.",
        "Termostat si zmenu všimne, ale aktívne udržiava primeranú teplotu.",
        "Pokoj dospelého neznamená pasivitu. Umožňuje vedome zvoliť reakciu.",
        "Úlohou dospelého nie je nemať emócie, ale nepridávať k situácii ďalšie nekontrolované napätie.",
        "Čo vám pomáha zostať termostatom?"
      ],
      draft: "Napätie v triede prirodzene pôsobí aj na dospelého. Rozdiel je v tom, či ho iba preberieme, alebo s ním dokážeme vedome pracovať.\n\nMetafora termostatu nežiada od učiteľa dokonalý pokoj. Pripomína, že vlastná regulácia nám dáva viac možností, ako reagovať a ako priniesť pokoj späť do triedy.\n\nPozrite si druhé video série o regulácii."
    },
    {
      id: "p7", format: "carousel", status: "idea",
      title: "Kedy stres posilňuje a kedy zraňuje",
      source: "Video 3 · Regenerácia a odolnosť",
      time: "2:02–3:51",
      url: "https://www.youtube.com/watch?v=B51FxrnwLZ4&t=122s",
      why: "Video rozlišuje viac podmienok stresu. Bez ich porovnania môže zostať iba nepresná skratka, že stres je dobrý alebo zlý.",
      fit: "Carousel umožní vytvoriť dve jasné skupiny podmienok a doplniť praktický školský príklad.",
      slides: [
        "Stres nie je automaticky zlý. Rozhodujú podmienky.",
        "Posilňujúci stres je mierny a krátkodobý.",
        "Je aspoň čiastočne predvídateľný a ovplyvniteľný.",
        "Dieťa pri ňom nezažíva náročnú situáciu samo.",
        "Zraňujúci stres je príliš silný, dlhodobý alebo bez možnosti zotavenia.",
        "Riziko rastie, keď chýba podpora druhého človeka.",
        "V škole môžeme doplniť informácie, čas na prípravu, prestávku alebo pokojného dospelého.",
        "Cieľom nie je odstrániť všetky výzvy. Cieľom je urobiť ich zvládnuteľnými."
      ],
      draft: "Odolnosť nevzniká tým, že odstránime zo školy všetky nároky. Vzniká pri zvládnuteľných výzvach, na ktoré sa dá pripraviť a pri ktorých dieťa nezostáva samo.\n\nAk je stres príliš silný, trvá príliš dlho alebo po ňom nepríde zotavenie, prestáva posilňovať.\n\nPri náročnej situácii sa preto môžeme pýtať: Chýbajú informácie, možnosť ovplyvniť dianie, oddych alebo podpora pokojného človeka?"
    },
    {
      id: "p8", format: "carousel", status: "idea",
      title: "Regenerácia učiteľa na troch úrovniach",
      source: "Video 3 · Regenerácia a odolnosť",
      time: "6:35–8:03",
      url: "https://www.youtube.com/watch?v=B51FxrnwLZ4&t=395s",
      why: "Pasáž ponúka konkrétny inventár zdrojov a prepája starostlivosť o učiteľa s bezpečím v triede. Je vhodná na uloženie a návrat počas leta.",
      fit: "Carousel môže fungovať ako nenásilný checklist bez toho, aby regeneráciu zmenil na ďalšiu povinnosť.",
      slides: [
        "Aj učiteľov nervový systém potrebuje regeneráciu.",
        "Telesná úroveň: spánok, jedlo, pohyb, dych a skutočná prestávka.",
        "Vzťahová úroveň: bezpečná zborovňa, zdieľanie a hranice medzi prácou a súkromím.",
        "Rozumová úroveň: mentoring, vzdelávanie, reflexia a zmysel práce.",
        "Regenerácia nie je odmena až po úplnom vyčerpaní.",
        "Je to priebežná súčasť schopnosti zostať oporou pre deti.",
        "Ktorý zdroj potrebuje počas leta najviac doplniť váš nervový systém?"
      ],
      draft: "Učiteľ nemôže byť nekonečným zdrojom pokoja. Aby mohol byť oporou pre deti, potrebuje priebežne dopĺňať aj vlastné zdroje.\n\nRegenerácia má telesnú, vzťahovú aj rozumovú stránku. Niekedy je to spánok a prestávka. Inokedy rozhovor s kolegyňou, jasnejšia hranica alebo odborný rámec, ktorý pomôže situácii porozumieť.\n\nLeto nemusí byť ďalším projektom na sebazdokonaľovanie. Môže byť priestorom na návrat k zdrojom."
    },
    {
      id: "p9", format: "carousel", status: "selected",
      title: "Náročné správanie nie je útok na vás",
      source: "Video 2 · Náročné správanie a regulácia",
      time: "2:19–2:57",
      url: "https://www.youtube.com/watch?v=wtE9UbLJ5tA&t=139s",
      why: "Ide o jednu z najsilnejších a emocionálne najrelevantnejších pasáží pre učiteľov. Priamo pomenúva, prečo si správanie berieme osobne, a ponúka odstup bez zľahčovania situácie.",
      fit: "Carousel umožní najprv uznať prežívanie učiteľa a až potom preformulovať správanie ako signál nepohody. Takáto postupnosť znižuje riziko, že obsah bude pôsobiť obviňujúco.",
      slides: [
        "Náročné správanie dieťaťa nie je útokom na vás ako na osobu.",
        "Je prirodzené, že si odmietnutie pomoci alebo vzťahu berieme osobne.",
        "Aj nervový systém dospelého môže situáciu vyhodnotiť ako ohrozenie kompetencie.",
        "Správanie dieťaťa však môže byť neúspešným pokusom zvládnuť napätie.",
        "Nie ospravedlnenie správania. Informácia o tom, čo sa práve deje.",
        "Odstup nám pomáha zvoliť reakciu, ktorá situáciu ďalej neeskaluje.",
        "Otázka nie je iba „Ako to zastavím?“, ale aj „Čo toto správanie signalizuje?“"
      ],
      draft: "Keď dieťa odmieta pomoc, útočí alebo provokuje, je prirodzené cítiť hnev či pochybnosť o vlastnej kompetencii.\n\nTRP nežiada, aby sme správanie tolerovali bez hraníc. Pomáha nám oddeliť človeka od jeho aktuálnej reakcie a čítať správanie ako informáciu o napätí či strate bezpečia.\n\nTento odstup dáva dospelému väčšiu šancu reagovať vedome, nie iba z vlastného ohrozenia."
    },
    {
      id: "p10", format: "carousel", status: "selected",
      title: "Odolnosť nevzniká bez stresu. Vzniká pri zotavení.",
      source: "Video 3 · Regenerácia a odolnosť",
      time: "3:58–4:32",
      url: "https://www.youtube.com/watch?v=B51FxrnwLZ4&t=238s",
      why: "Pasáž obsahuje jasnú a mierne protirečivú pointu: problémom nie je každá záťaž, ale chýbajúci návrat do pokoja. Je silná pre letnú komunikáciu aj pre tému prevencie vyhorenia.",
      fit: "Carousel dokáže ukázať celý cyklus výzva – stres – zvládnutie – regenerácia a vysvetliť, v ktorom bode sa bežná záťaž mení na toxickú.",
      slides: [
        "Odolnosť nevzniká tým, že sa stresu vyhneme.",
        "Vzniká, keď po záťaži dokážeme znovu nájsť pokoj a rovnováhu.",
        "Výzva aktivuje nervový systém.",
        "Podpora a zvládnutie prinášajú skúsenosť: dokážem to.",
        "Regenerácia pripraví systém na ďalšiu výzvu.",
        "Ak zotavenie chýba, stres sa hromadí a môže sa stať toxickým.",
        "Nevyčerpáva nás iba stres. Vyčerpáva nás stres bez návratu k zdrojom."
      ],
      draft: "Odolnosť nie je schopnosť vydržať bez prestávky.\n\nBuduje sa v cykle: výzva, primeraný stres, zvládnutie a následná regenerácia. Práve návrat do pokoja učí nervový systém, že náročnú situáciu možno prežiť a znovu sa dostať do rovnováhy.\n\nKeď fáza zotavenia opakovane chýba, záťaž sa hromadí. Preto regenerácia nie je bonus. Je súčasťou učenia aj odolnosti."
    },
    {
      id: "p11", format: "static", status: "idea",
      title: "Bezpečná zborovňa ovplyvňuje bezpečie v triede",
      source: "Video 3 · Regenerácia a odolnosť",
      time: "7:20–7:47",
      url: "https://www.youtube.com/watch?v=B51FxrnwLZ4&t=440s",
      why: "Krátka veta prepája starostlivosť o učiteľov priamo s hlavnou témou kampane. Posúva regeneráciu z individuálnej povinnosti na otázku pracovného prostredia a vzťahov.",
      fit: "Silný samostatný výrok funguje na jednej grafike. Caption môže rozvinúť zdieľanie, hranice a pocit, že učiteľ na náročné situácie nezostáva sám.",
      slides: [
        "Bezpečné prostredie v zborovni priamo ovplyvňuje bezpečie v triede.",
        "Učiteľ, ktorý má podporu, má viac kapacity prinášať pokoj aj deťom."
      ],
      draft: "Bezpečie v škole nevzniká iba medzi učiteľom a dieťaťom.\n\nOvplyvňuje ho aj to, či má učiteľ priestor zdieľať náročné situácie, nastaviť hranice a zažiť, že v tom nie je sám. Podpora v zborovni nie je oddelená od práce s deťmi. Prenáša sa priamo do klímy triedy."
    },
    {
      id: "p12", format: "static", status: "selected",
      title: "Tvorba bezpečia začína u nás samých",
      source: "Video 3 · Regenerácia a odolnosť",
      time: "10:37–10:50",
      url: "https://www.youtube.com/watch?v=B51FxrnwLZ4&t=637s",
      why: "Je to najčistejšia záverečná veta celej série a prirodzene spája rolu dôležitého dospelého s potrebou vlastnej regulácie.",
      fit: "Krátky manifestový výrok nepotrebuje carousel. Je vhodný ako záverečný statický post série alebo augustový návrat ku kampani.",
      slides: [
        "Tvorba bezpečia začína u nás samých.",
        "Len dospelý, ktorý má prístup k svojim zdrojom, môže byť zdrojom bezpečia pre deti."
      ],
      draft: "Tvorba bezpečia nie je technika, ktorú zapneme iba pri probléme.\n\nZačína pri tom, ako dospelý rozumie vlastnému nervovému systému, ako sa vracia k svojim zdrojom a ako reaguje v náročnej chvíli.\n\nNemusíme byť stále dokonale pokojní. Potrebujeme však vedieť hľadať cestu späť k regulácii, aby sme ju mohli ponúknuť aj deťom."
    }
  ],
  calendar: [
    { id: 1, date: "2026-06-19", title: "Teaser série", channel: "Instagram / Facebook", cta: "Pozrite si Video 1", status: "planned" },
    { id: 2, date: "2026-06-22", title: "Učíme sa len v bezpečí", channel: "Reel", cta: "Pozrite si celé video", status: "planned" },
    { id: 3, date: "2026-06-24", title: "Učiteľ ako dôležitý dospelý", channel: "Reel / Post", cta: "Pozrite si celé video", status: "planned" },
    { id: 4, date: "2026-06-26", title: "Tri piliere bezpečia", channel: "Carousel", cta: "Pozrite si celé video", status: "planned" },
    { id: 5, date: "2026-06-29", title: "Nie je to útok na mňa", channel: "Reel", cta: "Pozrite si Video 2", status: "planned" },
    { id: 6, date: "2026-07-15", title: "Odolnosť vzniká pri zotavení", channel: "Reel / Post", cta: "Pozrite si Video 3", status: "planned" },
    { id: 7, date: "2026-08-24", title: "Bezpečie začína pred prvým problémom", channel: "Instagram / Facebook", cta: "Pozrite si sériu", status: "planned" }
  ]
};

const library = [
  { type: "YouTube", title: "Teaser minisérie", description: "Krátke predstavenie celej série.", href: "https://www.youtube.com/watch?v=uLuK8L4_81A", external: true },
  { type: "YouTube", title: "1. Tvorba bezpečia", description: "Bezpečie, kontext, voľba a spojenie.", href: "https://www.youtube.com/watch?v=wALeNS80uEY", external: true },
  { type: "YouTube", title: "2. Náročné správanie", description: "Regulácia, odstup a úloha dospelého.", href: "https://www.youtube.com/watch?v=wtE9UbLJ5tA", external: true },
  { type: "YouTube", title: "3. Regenerácia a odolnosť", description: "Stres, zotavenie a zdroje učiteľov.", href: "https://www.youtube.com/watch?v=B51FxrnwLZ4", external: true },
  { type: "Pracovný podklad", title: "Obsahová mapa videí", description: "Detailné časové značky, hooky a drafty.", href: "../TRP_video_obsahova_mapa.md" },
  { type: "Pracovný podklad", title: "Realizačný balíček", description: "Kompletný pôvodný návrh kampane.", href: "../TRP_realizacny_balicek.md" },
  { type: "Tabuľka", title: "Pôvodný obsahový kalendár", description: "Zdrojová CSV tabuľka.", href: "../TRP_obsahovy_kalendar_jun_2026.csv" },
  { type: "Tabuľka", title: "Pôvodný merací tracker", description: "Zdrojová CSV tabuľka KPI.", href: "../TRP_meraci_tracker.csv" },
  { type: "Prezentácia", title: "Klientska prezentácia", description: "PDF návrhu kampane.", href: "../output/pdf/TRP_minikampan_klientska_prezentacia.pdf" }
];

let state = loadState();
let activeVideo = "v1";
let taskFilter = "all";
let activePost = "p1";
let postFilter = "all";

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? mergeSavedState(saved) : structuredClone(initialState);
  } catch {
    return structuredClone(initialState);
  }
}

function mergeSavedState(saved) {
  const merged = { ...structuredClone(initialState), ...saved, contentVersion: CONTENT_VERSION };
  const isCurrentContent = saved.contentVersion === CONTENT_VERSION;

  merged.videos = initialState.videos.map(video => {
    const savedVideo = saved.videos?.find(item => item.id === video.id);
    return {
      ...video,
      clips: video.clips.map(clip => {
        const savedClip = savedVideo?.clips?.find(item => item.id === clip.id && item.title === clip.title);
        const wasUserChanged = savedClip && savedClip.status !== LEGACY_CLIP_STATUSES[clip.id];
        return { ...clip, status: isCurrentContent || wasUserChanged ? savedClip?.status || clip.status : clip.status };
      })
    };
  });

  merged.posts = initialState.posts.map(post => {
    const savedPost = saved.posts?.find(item => item.id === post.id);
    const wasUserChanged = savedPost && savedPost.status !== LEGACY_POST_STATUSES[post.id];
    return {
      ...post,
      status: isCurrentContent || wasUserChanged ? savedPost?.status || post.status : post.status,
      draft: savedPost?.draft || post.draft
    };
  });

  return merged;
}

function saveState(message = "Zmena bola uložená") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  showToast(message);
  renderOverview();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("visible"), 1800);
}

function formatDate(value) {
  if (!value) return "Bez termínu";
  return new Intl.DateTimeFormat("sk-SK", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function statusLabel(status) {
  return { next: "Najbližšie", progress: "Rozpracované", done: "Hotové", backlog: "Neskôr", planned: "Plánované", published: "Publikované", idea: "Nápad", selected: "Vybrané", editing: "V strihu" }[status] || status;
}

function setView(id) {
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === id));
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === id));
  const titles = { overview: "Prehľad projektu", tasks: "Úlohy", content: "Reels", posts: "Príspevky", calendar: "Kalendár", results: "Výsledky", library: "Knižnica" };
  document.getElementById("viewTitle").textContent = titles[id];
  document.querySelector(".sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPosts() {
  const visiblePosts = state.posts.filter(post => postFilter === "all" || post.format === postFilter);
  if (!visiblePosts.some(post => post.id === activePost)) activePost = visiblePosts[0]?.id;

  document.getElementById("postIndex").innerHTML = visiblePosts.map(post => `
    <button class="post-index-item ${post.id === activePost ? "active" : ""}" data-post="${post.id}">
      <span>${post.format === "carousel" ? "Carousel" : "Statický post"} · ${statusLabel(post.status)}</span>
      <strong>${escapeHtml(post.title)}</strong>
      <small>${escapeHtml(post.source)} · ${post.time}</small>
    </button>
  `).join("") || "<p>V tomto filtri nie sú žiadne návrhy.</p>";

  const post = state.posts.find(item => item.id === activePost);
  if (!post) {
    document.getElementById("postDetail").innerHTML = "";
    return;
  }

  document.getElementById("postDetail").innerHTML = `
    <article class="post-article">
      <div class="post-detail-head">
        <div>
          <span class="section-kicker">${post.format === "carousel" ? "Carousel" : "Statický post"}</span>
          <h3>${escapeHtml(post.title)}</h3>
        </div>
        <select class="status-select" data-post-status="${post.id}">
          ${["idea","selected","editing","published"].map(status => `<option value="${status}" ${post.status === status ? "selected" : ""}>${statusLabel(status)}</option>`).join("")}
        </select>
      </div>

      <dl class="post-reasoning">
        <div>
          <dt>Zdroj</dt>
          <dd><a href="${post.url}" target="_blank" rel="noreferrer">${escapeHtml(post.source)}, ${post.time}</a></dd>
        </div>
        <div>
          <dt>Prečo táto téma</dt>
          <dd>${escapeHtml(post.why)}</dd>
        </div>
        <div>
          <dt>Prečo tento formát</dt>
          <dd>${escapeHtml(post.fit)}</dd>
        </div>
      </dl>

      <section class="slide-plan">
        <div class="post-section-title">
          <span class="section-kicker">${post.format === "carousel" ? "Osnova carouselu" : "Text na grafiku"}</span>
          <strong>${post.slides.length} ${post.format === "carousel" ? "slidov" : "texty"}</strong>
        </div>
        <ol>
          ${post.slides.map(slide => `<li>${escapeHtml(slide)}</li>`).join("")}
        </ol>
      </section>

      <label class="draft-field">
        Draft sprievodného textu
        <textarea rows="12" data-post-draft="${post.id}">${escapeHtml(post.draft)}</textarea>
        <small>Text sa ukladá automaticky v tomto prehliadači.</small>
      </label>
    </article>
  `;
}

function renderOverview() {
  const priority = state.tasks.filter(task => task.status === "next" || task.status === "progress").sort((a,b) => (a.due || "9999").localeCompare(b.due || "9999")).slice(0, 3);
  document.getElementById("nextActions").innerHTML = priority.map(task => `
    <article class="action-card ${task.status === "done" ? "done" : ""}">
      <div class="action-card-top">
        <span class="status-dot ${task.status}"></span>
        <span class="date-pill">${formatDate(task.due)}</span>
      </div>
      <h4>${escapeHtml(task.title)}</h4>
      <p>${escapeHtml(task.detail)}</p>
    </article>
  `).join("") || "<p>Všetky najbližšie úlohy sú hotové.</p>";

  document.getElementById("overviewMetrics").innerHTML = state.metrics.map(metric => {
    const progress = Math.min(100, Math.round(metric.value / metric.target * 100));
    return `<div>
      <div class="metric-row-head"><span>${metric.label}</span><strong>${metric.value} / ${metric.target}</strong></div>
      <div class="progress-track"><div class="progress-fill" style="width:${progress}%;background:${metric.color}"></div></div>
    </div>`;
  }).join("");

  document.getElementById("phaseList").innerHTML = [
    ["do 30. 6.", "Bezpečie v triede", "Video 1, teaser a prvé reels", "current"],
    ["júl", "Regenerácia", "Jeden ľahší letný obsah", ""],
    ["koniec aug.", "Prevencia", "Bezpečie pred začiatkom roka", ""],
    ["priebežne", "Meranie", "Prehratia, dosah a zistenia", ""]
  ].map(([date,title,text,current]) => `<div class="phase">
    <span class="phase-date">${date}</span>
    <div><strong>${title}</strong><p>${text}</p></div>
    <span class="phase-state ${current}">${current ? "Teraz" : "Neskôr"}</span>
  </div>`).join("");

  const focus = state.tasks.find(task => task.status === "next") || state.tasks.find(task => task.status === "progress");
  document.getElementById("focusTitle").textContent = focus ? focus.title : "Skontrolovať výsledky";
  document.getElementById("focusDescription").textContent = focus ? focus.detail : "Aktualizuj metriky a vyber ďalší obsah.";
  document.getElementById("focusLink").href = state.videos.find(video => video.id === "v1").url;
}

function renderTasks() {
  const filtered = state.tasks.filter(task => {
    if (taskFilter === "all") return true;
    return task.status === taskFilter;
  }).sort((a,b) => (a.due || "9999").localeCompare(b.due || "9999"));

  document.getElementById("taskList").innerHTML = filtered.map(task => `
    <article class="task-item ${task.status === "done" ? "completed" : ""}">
      <input class="task-check" type="checkbox" ${task.status === "done" ? "checked" : ""} data-task-check="${task.id}" aria-label="Označiť úlohu ako hotovú">
      <div><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.detail || "")}</p></div>
      <span class="task-phase">${task.phase}</span>
      <span class="task-due">${formatDate(task.due)}</span>
      <div>
        <select class="status-select" data-task-status="${task.id}">
          ${["next","progress","backlog","done"].map(status => `<option value="${status}" ${task.status === status ? "selected" : ""}>${statusLabel(status)}</option>`).join("")}
        </select>
        <button class="delete-button" data-task-delete="${task.id}" aria-label="Odstrániť">×</button>
      </div>
    </article>
  `).join("") || "<p>V tomto filtri nie sú žiadne úlohy.</p>";
}

function renderContent() {
  document.getElementById("videoTabs").innerHTML = state.videos.map(video => `
    <button class="video-tab ${video.id === activeVideo ? "active" : ""}" data-video="${video.id}">
      <span>${video.label} · ${video.duration}</span>${video.title}
    </button>
  `).join("");

  const video = state.videos.find(item => item.id === activeVideo);
  document.getElementById("videoDetail").innerHTML = `
    <div class="video-layout">
      <aside class="video-summary">
        <span class="tag">${video.label} · ${video.duration}</span>
        <h3>${video.title}</h3>
        <p>${video.role}</p>
        <p><strong>Hlavná myšlienka:</strong><br>${video.post}</p>
        <a class="button" href="${video.url}" target="_blank" rel="noreferrer">Otvoriť na YouTube</a>
      </aside>
      <div class="clip-list">
        ${video.clips.map(clip => `
          <article class="clip">
            <div class="clip-top">
              <div>
                <span class="clip-time">${clip.time}</span>
                <h4>${clip.title}</h4>
              </div>
              <span class="phase-state ${clip.status === "selected" ? "current" : ""}">${statusLabel(clip.status)}</span>
            </div>
            <p class="clip-hook"><strong>Hook:</strong> ${clip.hook}</p>
            <p><strong>Pointa:</strong> ${clip.point}</p>
            <div class="clip-actions">
              <span>CTA: Pozrite si celé video na YouTube</span>
              <select class="clip-status" data-clip="${clip.id}" data-video-id="${video.id}">
                ${["idea","selected","editing","published"].map(status => `<option value="${status}" ${clip.status === status ? "selected" : ""}>${statusLabel(status)}</option>`).join("")}
              </select>
            </div>
          </article>
        `).join("")}
      </div>
    </div>`;
}

function renderCalendar() {
  const items = [...state.calendar].sort((a,b) => a.date.localeCompare(b.date));
  document.getElementById("calendarList").innerHTML = items.map(item => `
    <article class="calendar-item">
      <span class="calendar-date">${formatDate(item.date)}</span>
      <div class="calendar-title"><strong>${escapeHtml(item.title)}</strong><span>${statusLabel(item.status)}</span></div>
      <span class="calendar-channel">${escapeHtml(item.channel)}</span>
      <span class="calendar-cta">${escapeHtml(item.cta)}</span>
      <select class="status-select" data-calendar-status="${item.id}">
        ${["planned","published"].map(status => `<option value="${status}" ${item.status === status ? "selected" : ""}>${statusLabel(status)}</option>`).join("")}
      </select>
      <button class="delete-button" data-calendar-delete="${item.id}" aria-label="Odstrániť">×</button>
    </article>
  `).join("");
}

function renderResults() {
  document.getElementById("metricEditor").innerHTML = state.metrics.map(metric => `
    <article class="metric-card">
      <label for="metric-${metric.id}">${metric.label}</label>
      <div class="metric-input-row">
        <input id="metric-${metric.id}" type="number" min="0" value="${metric.value}" data-metric="${metric.id}">
        <span>/ ${metric.target}</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${Math.min(100, metric.value / metric.target * 100)}%;background:${metric.color}"></div></div>
      <small>${Math.round(metric.value / metric.target * 100)} % cieľa</small>
    </article>
  `).join("");
  document.getElementById("resultsNote").value = state.resultsNote || "";
}

function renderLibrary() {
  document.getElementById("libraryGrid").innerHTML = library.map(item => `
    <a class="library-card" href="${item.href}" ${item.external ? 'target="_blank" rel="noreferrer"' : ""}>
      <span class="library-type">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <strong>Otvoriť →</strong>
    </a>
  `).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" })[character]);
}

function bindEvents() {
  document.addEventListener("click", event => {
    const nav = event.target.closest("[data-view]");
    if (nav) setView(nav.dataset.view);
    const go = event.target.closest("[data-go]");
    if (go) setView(go.dataset.go);
    const video = event.target.closest("[data-video]");
    if (video) { activeVideo = video.dataset.video; renderContent(); }
    const post = event.target.closest("[data-post]");
    if (post) { activePost = post.dataset.post; renderPosts(); }
    const deleteTask = event.target.closest("[data-task-delete]");
    if (deleteTask) { state.tasks = state.tasks.filter(task => task.id !== Number(deleteTask.dataset.taskDelete)); saveState("Úloha bola odstránená"); renderTasks(); }
    const deleteCalendar = event.target.closest("[data-calendar-delete]");
    if (deleteCalendar) { state.calendar = state.calendar.filter(item => item.id !== Number(deleteCalendar.dataset.calendarDelete)); saveState("Výstup bol odstránený"); renderCalendar(); }
  });

  document.addEventListener("change", event => {
    if (event.target.matches("[data-task-check]")) {
      const task = state.tasks.find(item => item.id === Number(event.target.dataset.taskCheck));
      task.status = event.target.checked ? "done" : "next";
      saveState(); renderTasks();
    }
    if (event.target.matches("[data-task-status]")) {
      state.tasks.find(item => item.id === Number(event.target.dataset.taskStatus)).status = event.target.value;
      saveState(); renderTasks();
    }
    if (event.target.matches("[data-calendar-status]")) {
      state.calendar.find(item => item.id === Number(event.target.dataset.calendarStatus)).status = event.target.value;
      saveState(); renderCalendar();
    }
    if (event.target.matches("[data-clip]")) {
      const video = state.videos.find(item => item.id === event.target.dataset.videoId);
      video.clips.find(clip => clip.id === event.target.dataset.clip).status = event.target.value;
      saveState(); renderContent();
    }
    if (event.target.matches("[data-post-status]")) {
      state.posts.find(post => post.id === event.target.dataset.postStatus).status = event.target.value;
      saveState(); renderPosts();
    }
    if (event.target.matches("[data-metric]")) {
      state.metrics.find(metric => metric.id === event.target.dataset.metric).value = Math.max(0, Number(event.target.value) || 0);
      saveState("Metrika bola uložená"); renderResults();
    }
  });

  document.getElementById("taskFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    taskFilter = button.dataset.filter;
    document.querySelectorAll("#taskFilters .filter").forEach(item => item.classList.toggle("active", item === button));
    renderTasks();
  });

  document.getElementById("postFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-post-filter]");
    if (!button) return;
    postFilter = button.dataset.postFilter;
    document.querySelectorAll("#postFilters .filter").forEach(item => item.classList.toggle("active", item === button));
    renderPosts();
  });

  document.getElementById("postDetail").addEventListener("input", event => {
    if (!event.target.matches("[data-post-draft]")) return;
    state.posts.find(post => post.id === event.target.dataset.postDraft).draft = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  });

  document.getElementById("resultsNote").addEventListener("input", event => {
    state.resultsNote = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  });

  document.getElementById("addTaskButton").addEventListener("click", () => document.getElementById("taskDialog").showModal());
  document.getElementById("addCalendarButton").addEventListener("click", () => document.getElementById("calendarDialog").showModal());
  document.getElementById("menuButton").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));

  document.getElementById("taskForm").addEventListener("submit", event => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    const form = new FormData(event.target);
    state.tasks.push({ id: Date.now(), title: form.get("title"), due: form.get("due"), phase: form.get("phase"), detail: form.get("detail"), status: "next" });
    saveState("Úloha bola pridaná");
    event.target.reset();
    document.getElementById("taskDialog").close();
    renderTasks();
  });

  document.getElementById("calendarForm").addEventListener("submit", event => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    const form = new FormData(event.target);
    state.calendar.push({ id: Date.now(), date: form.get("date"), title: form.get("title"), channel: form.get("channel"), cta: form.get("cta"), status: "planned" });
    saveState("Výstup bol pridaný");
    event.target.reset();
    document.getElementById("calendarDialog").close();
    renderCalendar();
  });

  document.getElementById("exportButton").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `TRP_dashboard_zaloha_${new Date().toISOString().slice(0,10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("importInput").addEventListener("change", event => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state = mergeSavedState(JSON.parse(reader.result));
        saveState("Záloha bola obnovená");
        renderAll();
      } catch {
        showToast("Súbor nie je platná záloha");
      }
    };
    reader.readAsText(file);
  });
}

function renderAll() {
  renderOverview();
  renderTasks();
  renderContent();
  renderPosts();
  renderCalendar();
  renderResults();
  renderLibrary();
}

document.getElementById("todayLabel").textContent = new Intl.DateTimeFormat("sk-SK", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date());
bindEvents();
renderAll();
