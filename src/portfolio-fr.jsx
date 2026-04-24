import React, { useMemo, useState, useEffect } from "react";
import portraitImg from "./assets/portrait.jpg";

/**
 * Portfolio multilingue — Mohamed Chedly Bahles
 * React + Vite + Tailwind
 * - Bouton FR / EN dans le header
 * - Fiche projet avec galerie et contenu scrollable
 */

export default function PortfolioFR() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("fr");              // langue active
  const baseTag = lang === "fr" ? "Tout" : "All";      // libellé du filtre global
  const DATA = lang === "fr" ? DATA_FR : DATA_EN;      // jeu de données

  // ✅ le tag actif est initialisé sur baseTag
  const [activeTag, setActiveTag] = useState(baseTag);

  const [lightbox, setLightbox] = useState(null);
  const [openProject, setOpenProject] = useState(null);

  const projects = Array.isArray(DATA?.projects) ? DATA.projects : [];

  // ✅ quand la langue change, on remet le filtre sur "Tout/All"
  useEffect(() => {
    setActiveTag(baseTag);
  }, [baseTag]);

  // Liste des tags (avec "Tout/All" en premier)
  const tags = useMemo(() => {
    const all = projects.flatMap((p) => (Array.isArray(p.tags) ? p.tags : []));
    return [baseTag, ...Array.from(new Set(all))];
  }, [projects, baseTag]);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  // Filtrage des projets (affiche tout si activeTag === baseTag)
  const filtered = useMemo(() => {
    return projects.filter(
      (p) => activeTag === baseTag || (Array.isArray(p.tags) && p.tags.includes(activeTag))
    );
  }, [activeTag, projects, baseTag]);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-amber-200/60 selection:text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#accueil" className="font-semibold tracking-tight text-lg">
            {DATA.identity.brand}
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            {[
              [DATA.ui.about, "apropos"],
              [DATA.ui.experiences, "experiences"],
              [DATA.ui.projects, "projets"],
              [DATA.ui.contact, "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="hover:text-amber-600 transition">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {/* bouton langue */}
            <button
              onClick={() => setLang((l) => (l === "fr" ? "en" : "fr"))}
              className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-amber-500 text-sm"
              aria-label="Toggle language"
              title={lang === "fr" ? "Switch to English" : "Passer en Français"}
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            {DATA.links.cv && (
              <a
                href={DATA.links.cv}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex px-3 py-1.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 hover:border-amber-500 hover:text-amber-600"
              >
                {DATA.ui.downloadCV}
              </a>
            )}
            <button
              aria-label="Basculer le thème"
              onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-amber-500"
            >
              <span className="i-lucide-sun dark:i-lucide-moon" />
              <svg className="hidden" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="accueil" className="relative isolate overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              {DATA.identity.title}
            </h1>
            <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-prose">{DATA.identity.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {DATA.identity.badges.map((b) => (
                <span key={b} className="px-3 py-1 rounded-full text-xs border border-slate-300 dark:border-slate-700">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="aspect-square w-full max-w-sm mx-auto rounded-3xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-800 shadow">
              <img
                src={DATA.identity.portrait}
                alt="Portrait"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = portraitImg;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" className="bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold">{DATA.ui.aboutMe}</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300 whitespace-pre-line">{DATA.about.bio}</p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-3xl p-6 ring-1 ring-slate-200/70 dark:ring-slate-800">
                <h3 className="font-semibold">{DATA.ui.skills}</h3>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                  {DATA.about.skills.map((s) => (
                    <li key={s} className="px-2.5 py-1 rounded-full border border-slate-300 dark:border-slate-700">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl p-6 ring-1 ring-slate-200/70 dark:ring-slate-800">
                <h3 className="font-semibold">{DATA.ui.languages}</h3>
                <ul className="mt-3 space-y-1 text-sm">
                  {DATA.about.languages.map((l) => (
                    <li key={l} className="flex items-center justify-between">
                      <span>{l.split("—")[0].trim()}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full border border-slate-300 dark:border-slate-700">
                        {l.split("—")[1]?.trim()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl p-6 ring-1 ring-slate-200/70 dark:ring-slate-800">
              <h3 className="font-semibold">{DATA.ui.contact}</h3>
              <ul className="mt-3 text-sm space-y-1">
                <li>
                  <span className="font-medium">{DATA.ui.phone} :</span> +216 29218186
                </li>
                <li>
                  <span className="font-medium">Email :</span>{" "}
                  <a className="text-amber-600 hover:underline" href="mailto:medchedly.bahles@esprit.tn">
                    medchedly.bahles@esprit.tn
                  </a>
                </li>
                <li>
                  <span className="font-medium">{DATA.ui.location} :</span> Tunis, La Marsa
                </li>
              </ul>
            </div>
            <div className="rounded-3xl p-6 ring-1 ring-slate-200/70 dark:ring-slate-800">
              <h3 className="font-semibold">{DATA.ui.education}</h3>
              <ul className="mt-3 text-sm space-y-3">
                {DATA.about.education.map((e, i) => (
                  <li key={i}>
                    <p className="font-medium">{e.title}</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {e.place} — {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Expériences */}
      <section id="experiences" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">{DATA.ui.experiences}</h2>
        <ol className="mt-8 relative border-s border-slate-200 dark:border-slate-800">
          {DATA.experiences.map((e, i) => (
            <li key={i} className="pl-6 py-4 relative">
              <span className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-amber-500" />
              <div className="flex items-center justify-between">
                <p className="font-medium">
                  {e.role} — <span className="text-amber-600">{e.org}</span>
                </p>
                <span className="text-xs opacity-70">{e.period}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{e.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Réalisations */}
      <section id="projets" className="bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">{DATA.ui.projects}</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{DATA.ui.projectsSubtitle}</p>
              </div>
              <div className="hidden md:flex flex-wrap gap-2">
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTag(t)}
                    className={`px-3 py-1.5 rounded-full text-sm border transition ${
                      activeTag === t
                        ? "border-amber-500 text-amber-600"
                        : "border-slate-300 dark:border-slate-700 hover:border-amber-500"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </header>

          {/* Grille projets */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.id} className="group rounded-3xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-800 hover:shadow-lg transition">
                <div
                  className="aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => setOpenProject(p)}
                  title={DATA.ui.viewDetails}
                >
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                    onError={(e) => {
                      e.currentTarget.src = "/bi-the-way/1.png";
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold tracking-tight">{p.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {(Array.isArray(p.tags) ? p.tags : []).map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full border border-slate-300 dark:border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <button onClick={() => setOpenProject(p)} className="text-sm text-amber-600 hover:underline">
                      {DATA.ui.viewDetails}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{DATA.ui.contact}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-prose">{DATA.ui.contactLead}</p>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <span className="font-medium">{DATA.ui.phone} :</span> +216 29218186
              </p>
              <p>
                <span className="font-medium">Email :</span>{" "}
                <a className="text-amber-600 hover:underline" href="mailto:medchedly.bahles@esprit.tn">
                  medchedly.bahles@esprit.tn
                </a>
              </p>
              <p>
                <span className="font-medium">{DATA.ui.location} :</span> Tunis, La Marsa
              </p>
              <p>
                <span className="font-medium">LinkedIn :</span>{" "}
                <a className="text-amber-600 hover:underline" href={DATA.links.linkedin} target="_blank" rel="noreferrer">
                  {DATA.ui.profile}
                </a>
              </p>
            </div>
          </div>
          <form
            action="mailto:medchedly.bahles@esprit.tn"
            method="post"
            encType="text/plain"
            className="rounded-3xl p-6 ring-1 ring-slate-200/70 dark:ring-slate-800"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm">{DATA.ui.name}</label>
                <input name="nom" required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
              </div>
              <div>
                <label className="text-sm">{DATA.ui.message}</label>
                <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
              </div>
              <button className="justify-self-start px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white shadow">{DATA.ui.send}</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-wrap items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {DATA.identity.brand}. {DATA.ui.rights}
          </p>
          <div className="flex gap-3">
            <a href="#accueil" className="hover:text-amber-600">
              {DATA.ui.backToTop}
            </a>
            {DATA.links.cv && (
              <a href={DATA.links.cv} target="_blank" rel="noreferrer" className="hover:text-amber-600">
                {DATA.ui.cv}
              </a>
            )}
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="w-full h-auto rounded-2xl shadow" />
            <figcaption className="mt-3 text-slate-200 text-sm">{lightbox.title}</figcaption>
            <button onClick={() => setLightbox(null)} className="mt-4 px-4 py-2 rounded-xl bg-white/90 text-slate-900 hover:bg-white">
              {DATA.ui.close}
            </button>
          </figure>
        </div>
      )}

      {/* Modal projet */}
      {openProject && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setOpenProject(null)}>
          <article
            className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 max-w-5xl w-full rounded-3xl shadow-2xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-800"
            onClick={(e) => e.stopPropagation()}
            style={{ height: "85vh" }}
          >
            <header className="flex items-start justify-between p-6 border-b border-slate-200/70 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-semibold">{openProject.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{openProject.year} · {(openProject.tags || []).join(" · ")}</p>
              </div>
              <button className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-amber-500" onClick={() => setOpenProject(null)}>
                {DATA.ui.close}
              </button>
            </header>

            {/* Corps scrollable */}
            <div className="p-6 grid md:grid-cols-3 gap-6 h-[calc(85vh-88px)]">
              {/* Colonne gauche */}
              <div className="md:col-span-2 space-y-4 overflow-y-auto pr-2">
                <img
                  src={openProject.cover}
                  alt="cover"
                  className="w-full rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "/bi-the-way/1.png";
                  }}
                />
                {openProject.details && (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {(openProject.details.paragraphs || []).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    {openProject.details.features && (
                      <>
                        <h4>{DATA.ui.keyFeatures}</h4>
                        <ul>
                          {openProject.details.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {openProject.details.stack && (
                      <>
                        <h4>{DATA.ui.stack}</h4>
                        <ul>
                          {openProject.details.stack.map((t, i) => (
                            <li key={i}>{t}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Colonne droite */}
              <aside className="space-y-3 overflow-y-auto pr-1">
                <h4 className="font-semibold">{DATA.ui.gallery}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {(openProject.gallery || []).map((g, idx) => (
                    <button
                      key={idx}
                      className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-slate-200/70 dark:ring-slate-800"
                      onClick={() => setLightbox({ src: g, title: openProject.title })}
                    >
                      <img
                        src={g}
                        alt=""
                        className="w-full h-full object-cover hover:scale-105 transition"
                        onError={(e) => {
                          e.currentTarget.src = "/bi-the-way/1.png";
                        }}
                      />
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}

/* ======================
   ———— DATA (FR/EN) ———
   ====================== */

const COMMON_LINKS = {
  cv: "",
  linkedin: "https://www.linkedin.com/in/med-chedly-bahles-569b89272",
  portfolio: "",
};

/* ---------- FR ---------- */
const DATA_FR = {
  ui: {
    about: "À propos",
    aboutMe: "À propos de moi",
    experiences: "Expériences",
    projects: "Réalisations",
    projectsSubtitle: "Sélection de projets académiques et personnels.",
    contact: "Contact",
    phone: "Téléphone",
    location: "Localisation",
    education: "Éducation",
    skills: "Compétences",
    languages: "Langues",
    downloadCV: "Télécharger CV",
    viewDetails: "Voir détails",
    send: "Envoyer",
    name: "Nom",
    message: "Message",
    profile: "Profil",
    backToTop: "Haut de page",
    cv: "CV",
    rights: "Tous droits réservés.",
    close: "Fermer",
    keyFeatures: "Fonctionnalités clés",
    stack: "Technologies",
    gallery: "Galerie",
    contactLead: "Pour une opportunité, un stage ou une collaboration, contactez-moi.",
  },
  identity: {
    brand: "Mohamed Chedly Bahles",
    title: "Étudiant Ingénieur — Business Intelligence ",
    subtitle:
      "je conçois des solutions permettant de transformer la donnée en décisions stratégiques. Curieux et rigoureux, j’explore les liens entre data engineering, visualisation et modélisation prédictive afin de créer des outils d’aide à la décision performants et durables.",
    email: "medchedly.bahles@esprit.tn",
    portrait: portraitImg,
    badges: ["Power BI", "SQL", "Talend", "Python", "Flask", "Machine Learning", "Deep Learning", "Angular"],
  },
  links: COMMON_LINKS,
  about: {
    education: [
      { title: "Baccalauréat Sciences Techniques", place: "Lycée IAD - La Marsa", period: "2020 — 2021" },
      { title: "Diplôme d’Ingénieur en Informatique (en cours)", place: "ESPRIT", period: "2021 — Présent" },
    ],
    skills: [
      "Power BI","SQL","Talend","Python","Flask","Machine Learning","Deep Learning","Java","PHP","C/C++","HTML/CSS","JavaScript","Symfony","FlutterFlow","Angular",
    ],
    languages: ["Français — Professionnel (B2)", "Anglais — Courant (B2)", "Arabe — Langue maternelle"],
    bio: `Étudiant en 3ᵉ année du cycle ingénieur à ESPRIT en Business Intelligence, je combine les rôles de Data Engineer, Data Analyst et Data Scientist. J’aime concevoir des solutions data-driven capables de transformer l’information brute en leviers d’innovation et de performance.

Actuellement à la recherche d’un stage de fin d’études (PFE) en Tunisie ou à l’étranger, je suis disponible à partir du 1er janvier 2026.`,
  },
  experiences: [
    { role: "Stagiaire", org: "Arab Tunisien Bank (ATB)", period: "01/08/2023 – 31/08/2023", desc: "Stage de formation humaine et sociale (4 semaines)." },
    { role: "Stagiaire", org: "Monétique Tunisie (SMT)", period: "01/08/2024 – 15/09/2024", desc: "Stage d’immersion en entreprise (6 semaines)." },
    { role: "Stagiaire Ingénieur", org: "OMD Tunisia", period: "01/07/2025 – 31/08/2025", desc: "Stage d’ingénieur (8 semaines)." },
  ],
  projects: [
    {
      id: "bi-the-way",
      title: "BI The Way — Plateforme BI & IA pour Cliniques",
      year: "2025",
      cover: "/bi-the-way/4.png?v=1",
      summary:
        "Plateforme d’aide à la décision pour cliniques privées : dashboards par rôle, modèles IA/ML, DWH Talend, Flask + Angular, Face ID.",
      tags: ["BI", "ML/DL", "Flask", "Angular", "Power BI", "Talend"],
      gallery: [
        "/bi-the-way/1.png","/bi-the-way/2.png","/bi-the-way/3.png","/bi-the-way/4.png","/bi-the-way/5.png",
        "/bi-the-way/6.png","/bi-the-way/7.png","/bi-the-way/8.png","/bi-the-way/9.png","/bi-the-way/10.png"
      ],
      details: {
        paragraphs: [
          "Plateforme complète de Business Intelligence et d’Intelligence Artificielle pour soutenir la décision en clinique privée.",
          "Deux rôles principaux : Administrateur et Chef de service, avec des tableaux de bord et insights adaptés.",
          "Intégration IA/ML (séjour, cancers, AVC, sentiments, tracking du staff) + dashboards Power BI + DWH Talend.",
        ],
        features: [
          "Modèles IA/ML : Length of Stay, cancers (prostate, sein), AVC (DL), sentiment analysis (DL), staff tracking (DL).",
          "Dashboards Power BI : flux patients, ressources, satisfaction, rentabilité.",
          "Data engineering : DWH (étoile) avec Talend, nettoyage/transformations, web scraping (actualités médicales).",
          "Déploiement : APIs Flask + Front Angular, connexion Face ID, contenu dynamique selon profil.",
        ],
        stack: ["Python (ML/DL), Flask", "Angular", "Talend", "Power BI", "Scikit-learn, TensorFlow", "HTML/CSS", "Face Recognition"],
      },
    },
    {
      id: "sdl-2d",
      title: "SDL-Project — Jeu 2D",
      year: "2022",
      cover: "/bi-the-way/jeux.jpg?v=1",
      gallery: ["/bi-the-way/jeux2.png","/bi-the-way/jeux3.png","/bi-the-way/jeux4.png"],
      summary: "Jeu 2D en C/SDL : affichage, collisions, assets et gameplay.",
      tags: ["C", "SDL", "Jeu 2D"],
    },
    {
      id: "tuni-troc",
      title: "Tuni-Troc — Plateforme d’échange de meubles",
      year: "2022",
      cover: "/bi-the-way/troc.png?v=1",
      summary:
        "Plateforme web (PHP7/JS/Oracle) : annonces avec photos, recherche par localisation/catégorie/marque, messagerie intégrée.",
      tags: ["PHP 7", "JavaScript", "Oracle", "CSS"],
    },
    {
      id: "centre-visite",
      title: "Gestion des équipements d’un centre de visite",
      year: "2023",
      cover: "/bi-the-way/centre.png?v=1",
      summary: "Application desktop (C++/Qt) avec maquette RFID (Arduino) pour gérer un centre de visite technique véhicules.",
      tags: ["C++", "Qt", "Arduino", "Desktop"],
    },
    {
      id: "mrbeast-shop",
      title: "MrBeast — Boutique (Desktop/Mobile/Web)",
      year: "2024",
      cover: "/bi-the-way/mrbeastlogo.png",
      gallery: ["/bi-the-way/mrbest1.PNG","/bi-the-way/mrbest2.PNG","/bi-the-way/mrbest3.PNG","/bi-the-way/mrbest4.PNG"],
      details: {
        paragraphs: [
          "Application Desktop, Mobile et site Web d'une boutique d’articles de sport.",
          "JavaFX (desktop), FlutterFlow (mobile), Symfony (web) avec dashboard d’administration.",
        ],
      },
      summary: "Suite e-commerce : JavaFX (desktop), FlutterFlow (mobile), Symfony (web) + dashboard admin.",
      tags: ["JavaFX", "FlutterFlow", "Symfony", "Web"],
    },
    {
      id: "agro-predict",
      title: "AgroPredict — Web App ML & BI",
      year: "2024",
      cover: "/bi-the-way/agro6.PNG?v=1",
      gallery: ["/bi-the-way/agro5.PNG","/bi-the-way/agro4.PNG","/bi-the-way/agro3.PNG","/bi-the-way/agro2.PNG","/bi-the-way/agro&.PNG"],
      details: {
        paragraphs: [
          "Application web intelligente pour la prévision et la recommandation de cultures en Inde (ML + Power BI).",
          "KNN pour la prédiction de production, chatbot AgriBot, formulaires dynamiques, UI Flask sécurisée.",
        ],
      },
      summary: "Prédiction & recommandation de cultures (KNN), dashboard Power BI, chatbot, Flask sécurisé.",
      tags: ["Flask", "ML", "Power BI"],
    },
  ],
};

/* ---------- EN ---------- */
const DATA_EN = {
  ui: {
    about: "About",
    aboutMe: "About me",
    experiences: "Experience",
    projects: "Projects",
    projectsSubtitle: "Selected academic and personal projects.",
    contact: "Contact",
    phone: "Phone",
    location: "Location",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    downloadCV: "Download CV",
    viewDetails: "View details",
    send: "Send",
    name: "Name",
    message: "Message",
    profile: "Profile",
    backToTop: "Back to top",
    cv: "CV",
    rights: "All rights reserved.",
    close: "Close",
    keyFeatures: "Key features",
    stack: "Tech stack",
    gallery: "Gallery",
    contactLead: "For opportunities, internships or collaborations, get in touch.",
  },
  identity: {
    brand: "Mohamed Chedly Bahles",
    title: "Engineering Student — Business Intelligence & AI",
    subtitle:
      "Passionate about data analysis, prediction and technologies that turn data into strategic value. I build data-driven solutions mixing BI, AI and web.",
    email: "medchedly.bahles@esprit.tn",
    portrait: portraitImg,
    badges: ["Power BI", "SQL", "Talend", "Python", "Flask", "Machine Learning", "Deep Learning", "Angular"],
  },
  links: COMMON_LINKS,
  about: {
    education: [
      { title: "High-school Baccalaureate — Technical Sciences", place: "IAD High School - La Marsa", period: "2020 — 2021" },
      { title: "Computer Engineering Degree (ongoing)", place: "ESPRIT", period: "2021 — Present" },
    ],
    skills: [
      "Power BI","SQL","Talend","Python","Flask","Machine Learning","Deep Learning","Java","PHP","C/C++","HTML/CSS","JavaScript","Symfony","FlutterFlow","Angular",
    ],
    languages: ["French — Professional (B2)", "English — Fluent (B2)", "Arabic — Native"],
    bio: `As a 3rd-year engineering student at ESPRIT (BI), I turn data into decisions with BI & AI. I enjoy building concrete, data-driven solutions.`,
  },
  experiences: [
    { role: "Intern", org: "Arab Tunisian Bank (ATB)", period: "01/08/2023 – 31/08/2023", desc: "Human & social training internship (4 weeks)." },
    { role: "Intern", org: "Monétique Tunisie (SMT)", period: "01/08/2024 – 15/09/2024", desc: "Company immersion internship (6 weeks)." },
    { role: "Engineer Intern", org: "OMD Tunisia", period: "01/07/2025 – 31/08/2025", desc: "Engineering internship (8 weeks)." },
  ],
  projects: [
    {
      id: "bi-the-way",
      title: "BI The Way — BI & AI Platform for Clinics",
      year: "2025",
      cover: "/bi-the-way/4.png?v=1",
      summary:
        "Decision-support platform for private clinics: role-based dashboards, AI/ML models, Talend DWH, Flask + Angular, Face ID.",
      tags: ["BI", "ML/DL", "Flask", "Angular", "Power BI", "Talend"],
      gallery: [
        "/bi-the-way/1.png","/bi-the-way/2.png","/bi-the-way/3.png","/bi-the-way/4.png","/bi-the-way/5.png",
        "/bi-the-way/6.png","/bi-the-way/7.png","/bi-the-way/8.png","/bi-the-way/9.png","/bi-the-way/10.png"
      ],
      details: {
        paragraphs: [
          "End-to-end BI & AI platform to support decisions in private clinics.",
          "Two main roles: Administrator and Head of Service with tailored dashboards and insights.",
          "Integrated ML/DL (length of stay, cancers, stroke, sentiment, staff tracking) + Power BI dashboards + Talend DWH.",
        ],
        features: [
          "AI/ML models: LoS, prostate & breast cancer, stroke (DL), sentiment (DL), staff tracking (DL).",
          "Power BI dashboards: patient flow, resources, satisfaction, profitability.",
          "Data engineering: star-schema DWH with Talend, cleaning/ETL, medical news web-scraping.",
          "Deployment: Flask APIs + Angular front-end, Face ID login, role-based dynamic content.",
        ],
        stack: ["Python (ML/DL), Flask", "Angular", "Talend", "Power BI", "Scikit-learn, TensorFlow", "HTML/CSS", "Face Recognition"],
      },
    },
    {
      id: "sdl-2d",
      title: "SDL Project — 2D Game",
      year: "2022",
      cover: "/bi-the-way/jeux.jpg?v=1",
      gallery: ["/bi-the-way/jeux2.png","/bi-the-way/jeux3.png","/bi-the-way/jeux4.png"],
      summary: "2D game in C/SDL: rendering, collisions, assets and gameplay.",
      tags: ["C", "SDL", "2D Game"],
    },
    {
      id: "tuni-troc",
      title: "Tuni-Troc — Furniture Exchange Platform",
      year: "2022",
      cover: "/bi-the-way/troc.png?v=1",
      summary:
        "Web platform (PHP7/JS/Oracle): listings with photos, search by location/category/brand, integrated messaging.",
      tags: ["PHP 7", "JavaScript", "Oracle", "CSS"],
    },
    {
      id: "centre-visite",
      title: "Vehicle Inspection Center Equipment Management",
      year: "2023",
      cover: "/bi-the-way/centre.png?v=1",
      summary: "Desktop app (C++/Qt) with RFID mock-up (Arduino) to manage a vehicle inspection center.",
      tags: ["C++", "Qt", "Arduino", "Desktop"],
    },
    {
      id: "mrbeast-shop",
      title: "MrBeast — Shop (Desktop/Mobile/Web)",
      year: "2024",
      cover: "/bi-the-way/mrbeastlogo.png",
      gallery: ["/bi-the-way/mrbest1.PNG","/bi-the-way/mrbest2.PNG","/bi-the-way/mrbest3.PNG","/bi-the-way/mrbest4.PNG"],
      details: {
        paragraphs: [
          "Desktop, mobile and web shop for sport items.",
          "JavaFX (desktop), FlutterFlow (mobile), Symfony (web) with admin dashboard.",
        ],
      },
      summary: "E-commerce suite: JavaFX (desktop), FlutterFlow (mobile), Symfony (web) + admin dashboard.",
      tags: ["JavaFX", "FlutterFlow", "Symfony", "Web"],
    },
    {
      id: "agro-predict",
      title: "AgroPredict — ML & BI Web App",
      year: "2024",
      cover: "/bi-the-way/agro6.PNG?v=1",
      gallery: ["/bi-the-way/agro5.PNG","/bi-the-way/agro4.PNG","/bi-the-way/agro3.PNG","/bi-the-way/agro2.PNG","/bi-the-way/agro&.PNG"],
      details: {
        paragraphs: [
          "Intelligent web app for crop production forecasting and recommendation in India (ML + Power BI).",
          "KNN predictions, AgriBot chatbot, dynamic forms, secure Flask UI.",
        ],
      },
      summary: "Crop prediction & recommendation (KNN), Power BI dashboard, chatbot, secure Flask UI.",
      tags: ["Flask", "ML", "Power BI"],
    },
  ],
};
