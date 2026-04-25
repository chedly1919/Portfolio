import React, { useEffect, useMemo, useState } from "react";
import { portfolioContent } from "./data/portfolioData";

const ALL_TAGS = {
  fr: "Tout",
  en: "All",
};

const PAGE_IDS = ["accueil", "apropos", "experiences", "projets", "resume", "contact"];

function getPageFromHash() {
  const hash = window.location.hash.replace("#", "");
  return PAGE_IDS.includes(hash) ? hash : "accueil";
}

function getSkillIcon(skill) {
  const icons = {
    "Power BI": "📊",
    SQL: "🗄",
    Talend: "⚙",
    Python: "🐍",
    Flask: "🌐",
    "Machine Learning": "🤖",
    "Deep Learning": "🧠",
    Java: "☕",
    PHP: "🐘",
    "Spring Boot": "🍃",
    "C/C++": "💻",
    "HTML/CSS": "🎨",
    JavaScript: "✨",
    Symfony: "🔷",
    FlutterFlow: "📱",
    Angular: "🅰",
  };

  return icons[skill] || "•";
}

export default function PortfolioFR() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("fr");
  const [currentPage, setCurrentPage] = useState(() => getPageFromHash());
  const [activeTag, setActiveTag] = useState(ALL_TAGS.fr);
  const [lightbox, setLightbox] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const data = portfolioContent[lang];
  const allTagLabel = ALL_TAGS[lang];
  const projects = data.projects;

  useEffect(() => {
    setActiveTag(allTagLabel);
    setOpenProject(null);
    setLightbox(null);
  }, [allTagLabel]);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      setOpenProject(null);
      setLightbox(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const tags = useMemo(() => {
    const allTags = projects.flatMap((project) => project.tags || []);
    return [allTagLabel, ...new Set(allTags)];
  }, [allTagLabel, projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return activeTag === allTagLabel || project.tags?.includes(activeTag);
    });
  }, [activeTag, allTagLabel, projects]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    setOpenProject(null);
    setLightbox(null);

    if (window.location.hash.replace("#", "") !== page) {
      window.location.hash = page;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject =
      lang === "fr"
        ? `Contact portfolio - ${formData.name}`
        : `Portfolio contact - ${formData.name}`;

    const body = [
      `${data.ui.name}: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${data.identity.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-slate-900 transition-colors duration-300 dark:bg-[var(--color-bg-dark)] dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-90">
        <div className="hero-mesh absolute inset-0" />
        <div className="hero-grid absolute inset-0" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/82 backdrop-blur-xl dark:border-white/10 dark:bg-[#060816]/92">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <button
            type="button"
            onClick={() => goToPage("accueil")}
            className="text-left text-base font-semibold tracking-tight text-slate-900 sm:text-xl dark:text-white"
          >
            {data.identity.brand}
          </button>

          <nav className="hidden items-center gap-3 text-sm md:flex">
            {[
              [data.ui.home, "accueil", "⌂"],
              [data.ui.about, "apropos", "◌"],
              [data.ui.experiences, "experiences", "▣"],
              [data.ui.projects, "projets", "⌘"],
              [data.ui.resume, "resume", "☰"],
            ].map(([label, id, icon]) => (
              <button
                key={id}
                type="button"
                onClick={() => goToPage(id)}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 transition ${
                  currentPage === id
                    ? "bg-slate-900/5 text-amber-600 dark:bg-white/10 dark:text-amber-300"
                    : "text-slate-700 hover:bg-slate-900/5 hover:text-amber-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                <span className="text-sm opacity-80">{icon}</span>
                {label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goToPage("contact")}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 shadow-sm transition ${
                currentPage === "contact"
                  ? "bg-violet-500 text-white"
                  : "bg-violet-500/90 text-white hover:bg-violet-500"
              }`}
            >
              {data.ui.contact}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang((current) => (current === "fr" ? "en" : "fr"))}
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:border-amber-500 hover:text-amber-600 dark:border-white/12 dark:bg-white/[0.03] dark:text-slate-100"
              aria-label="Toggle language"
              title={lang === "fr" ? "Switch to English" : "Passer en francais"}
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <button
              type="button"
              aria-label={data.ui.themeToggle}
              onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-slate-800 transition hover:border-amber-500 dark:border-white/12 dark:bg-white/[0.03] dark:text-slate-100"
            >
              <span aria-hidden="true" className="text-lg leading-none">
                {theme === "light" ? "☀" : "☾"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {currentPage === "accueil" ? (
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:pb-24 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="reveal-up">
              <p className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
                {data.identity.eyebrow}
              </p>
              <div className="mt-5 flex items-center gap-3 text-xl font-medium tracking-tight text-slate-700 md:text-2xl dark:text-slate-100">
                <span>{data.identity.greeting}</span>
                <span className="inline-block text-3xl md:text-4xl">
                  {data.identity.greetingEmoji}
                </span>
              </div>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                <span className="text-slate-900 dark:text-white">{data.identity.nameLead}</span>{" "}
                <span className="text-violet-400">{data.identity.nameAccent}</span>
              </h1>
              <div className="mt-4 flex min-h-[3.5rem] items-center">
                <p className="text-2xl font-semibold tracking-tight text-violet-600 dark:text-violet-300 md:text-4xl">
                  {data.identity.heroRoles[0]}
                </p>
              </div>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                {data.identity.subtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => goToPage("projets")}
                  className="rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition hover:bg-amber-600"
                >
                  {data.ui.primaryCta}
                </button>
                <button
                  type="button"
                  onClick={() => goToPage("contact")}
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-amber-500 hover:text-amber-600 dark:border-slate-700"
                >
                  {data.ui.secondaryCta}
                </button>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="light-panel rounded-[1.75rem] border border-emerald-500/25 bg-emerald-50/80 p-5 shadow-lg shadow-emerald-100/60 dark:bg-emerald-500/10 dark:shadow-none">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
                    {data.identity.currentStatusLabel}
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight">
                    {data.identity.currentStatusTitle}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {data.identity.currentStatusText}
                  </p>
                </div>
                <div className="light-panel rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-5 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    {data.identity.valueLabel}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {data.identity.valueText}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {data.identity.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="stat-card light-elevated rounded-3xl border border-white/60 bg-white/80 p-5 backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none"
                  >
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-up lg:justify-self-end">
              <div className="hero-visual light-elevated relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 p-4 backdrop-blur dark:border-white/10 dark:bg-slate-900/70 dark:shadow-none">
                <div className="absolute inset-x-6 top-0 h-24 rounded-full bg-amber-500/20 blur-3xl" />
                <div className="floating-chip absolute right-6 top-6 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-lg dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-200">
                  {data.identity.heroChip}
                </div>
                <img
                  src={data.identity.portrait}
                  alt={data.identity.brand}
                  className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                />
                <div className="relative mt-4 rounded-[1.5rem] bg-slate-950 px-5 py-4 text-white dark:bg-black">
                  <p className="text-sm font-semibold">{data.identity.brand}</p>
                  <p className="mt-1 text-sm text-white/70">{data.identity.focus}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        ) : null}

        {currentPage === "apropos" ? (
        <SectionShell title={data.ui.aboutMe} subtitle={data.about.intro}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-[2rem] border border-slate-200/70 bg-white/85 p-7 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-white/10 dark:bg-slate-900/75 dark:shadow-none">
              <p className="whitespace-pre-line text-base leading-8 text-slate-700 dark:text-slate-300">
                {data.about.bio}
              </p>
            </article>

            <div className="grid gap-6">
              <InfoCard title={data.ui.skills}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {data.about.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-lg shadow-sm dark:bg-slate-900">
                        {getSkillIcon(skill)}
                      </span>
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard title={data.ui.languages}>
                <ul className="space-y-3 text-sm">
                  {data.about.languages.map((language) => (
                    <li key={language.name} className="flex items-center justify-between gap-3">
                      <span>{language.name}</span>
                      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                        {language.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <InfoCard title={data.ui.education}>
              <ul className="space-y-4">
                {data.about.education.map((item) => (
                  <li key={`${item.title}-${item.period}`}>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {item.place}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                      {item.period}
                    </p>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title={data.ui.contact}>
              <div className="grid gap-4 text-sm sm:grid-cols-2">
                {data.contact.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/70"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {fact.label}
                    </p>
                    {fact.href ? (
                      <a
                        href={fact.href}
                        target={fact.href.startsWith("http") ? "_blank" : undefined}
                        rel={fact.href.startsWith("http") ? "noreferrer" : undefined}
                        className="mt-2 block font-medium text-amber-600"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      <p className="mt-2 font-medium">{fact.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </InfoCard>
          </div>
        </SectionShell>
        ) : null}

        {currentPage === "experiences" ? (
        <SectionShell title={data.ui.experiences} subtitle={data.ui.experienceLead}>
          <div className="grid gap-5">
            {data.experiences.map((experience) => (
              <article
                key={`${experience.org}-${experience.period}`}
                className={`rounded-[2rem] border p-6 shadow-xl backdrop-blur dark:shadow-none ${
                  experience.highlight
                    ? "border-emerald-500/25 bg-emerald-50/80 shadow-emerald-100/60 dark:bg-emerald-500/10"
                    : "border-slate-200/70 bg-white/85 shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/75"
                }`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    {experience.badge ? (
                      <p className="mb-2 w-fit rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white dark:bg-white dark:text-slate-900">
                        {experience.badge}
                      </p>
                    ) : null}
                    <p className="text-lg font-semibold tracking-tight">{experience.role}</p>
                    <p className="mt-1 text-sm font-medium text-amber-600">{experience.org}</p>
                  </div>
                  <span className="w-fit rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                    {experience.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {experience.desc}
                </p>
              </article>
            ))}
          </div>
        </SectionShell>
        ) : null}

        {currentPage === "projets" ? (
        <SectionShell title={data.ui.projects} subtitle={data.ui.projectsSubtitle}>
          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeTag === tag
                    ? "border-amber-500 bg-amber-500 text-white"
                    : "border-slate-300 bg-white/70 hover:border-amber-500 hover:text-amber-600 dark:border-slate-700 dark:bg-slate-900/60"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/85 shadow-xl shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/75 dark:shadow-none"
              >
                <button
                  type="button"
                  onClick={() => setOpenProject(project)}
                  className="block w-full text-left"
                >
                  <div className="overflow-hidden">
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                        {project.year}
                      </span>
                    </div>
                    <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-300 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-500 dark:border-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </SectionShell>
        ) : null}

        {currentPage === "contact" ? (
        <SectionShell title={data.ui.contact} subtitle={data.ui.contactLead}>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <InfoCard title={data.ui.letsTalk}>
              <div className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <p>{data.contact.lead}</p>
                <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-950/70">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {data.contact.availabilityLabel}
                  </p>
                  <p className="mt-2 font-medium text-slate-800 dark:text-slate-100">
                    {data.contact.availabilityText}
                  </p>
                </div>
                <a
                  href={`mailto:${data.identity.email}`}
                  className="inline-flex rounded-2xl bg-slate-900 px-4 py-3 font-medium text-white transition hover:bg-amber-500 dark:bg-white dark:text-slate-900"
                >
                  {data.identity.email}
                </a>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={data.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-slate-300 px-4 py-2 font-medium transition hover:border-amber-500 hover:text-amber-600 dark:border-slate-700"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={data.links.cv}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-slate-300 px-4 py-2 font-medium transition hover:border-amber-500 hover:text-amber-600 dark:border-slate-700"
                  >
                    {data.ui.downloadCV}
                  </a>
                </div>
              </div>
            </InfoCard>

            <form
              onSubmit={handleContactSubmit}
              className="rounded-[2rem] border border-slate-200/70 bg-white/85 p-7 shadow-xl shadow-slate-200/50 backdrop-blur dark:border-white/10 dark:bg-slate-900/75 dark:shadow-none"
            >
              <div className="grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-medium">{data.ui.name}</span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950/60"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950/60"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium">{data.ui.message}</span>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none transition focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950/60"
                  />
                </label>
                <button
                  type="submit"
                  className="w-fit rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
                >
                  {data.ui.send}
                </button>
              </div>
            </form>
          </div>
        </SectionShell>
        ) : null}

        {currentPage === "resume" ? (
        <SectionShell title={data.ui.resumeTitle} subtitle={data.ui.resumeLead}>
          <div className="grid gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-xl shadow-slate-200/50 backdrop-blur dark:border-white/10 dark:bg-slate-900/75 dark:shadow-none">
              <div>
                <p className="text-lg font-semibold tracking-tight">{data.ui.resumeCardTitle}</p>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {data.ui.resumeCardText}
                </p>
              </div>
              <a
                href={data.links.cv}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                {data.ui.downloadCV}
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 shadow-2xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none">
              <iframe
                src={data.links.cv}
                title={data.ui.resume}
                className="h-[78vh] w-full bg-white"
              />
            </div>
          </div>
        </SectionShell>
        ) : null}
      </main>

      <footer className="relative z-10 border-t border-slate-200/70 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
          <p>
            (c) {new Date().getFullYear()} {data.identity.brand}. {data.ui.rights}
          </p>
          <button type="button" onClick={() => goToPage("accueil")} className="text-left transition hover:text-amber-600">
            {data.ui.backToTop}
          </button>
        </div>
      </footer>

      {lightbox && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <figure
            className="max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-h-[75vh] w-full rounded-[1.5rem] object-contain"
            />
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-sm text-slate-300">
              <span>{lightbox.title}</span>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="rounded-xl border border-white/15 px-3 py-2 transition hover:border-amber-500 hover:text-amber-300"
              >
                {data.ui.close}
              </button>
            </figcaption>
          </figure>
        </div>
      )}

      {openProject && (
        <ProjectModal
          data={data}
          project={openProject}
          onClose={() => setOpenProject(null)}
          onOpenLightbox={setLightbox}
        />
      )}
    </div>
  );
}

function SectionShell({ title, subtitle, children }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-600">
          SECTION
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {subtitle ? (
          <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function InfoCard({ title, children }) {
  return (
    <article className="rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-xl shadow-slate-200/50 backdrop-blur dark:border-white/10 dark:bg-slate-900/75 dark:shadow-none">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <div className="mt-5">{children}</div>
    </article>
  );
}

function ProjectModal({ data, project, onClose, onOpenLightbox }) {
  const details = project.details || { paragraphs: [], features: [], stack: [] };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        className="max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex flex-col gap-4 border-b border-slate-200/70 p-6 dark:border-white/10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
              {project.year}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-500 dark:border-slate-700 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-fit rounded-xl border border-slate-300 px-4 py-2 text-sm transition hover:border-amber-500 hover:text-amber-600 dark:border-slate-700"
          >
            {data.ui.close}
          </button>
        </header>

        <div className="grid max-h-[calc(88vh-140px)] gap-0 overflow-y-auto lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-b border-slate-200/70 p-6 dark:border-white/10 lg:border-b-0 lg:border-r">
            <img
              src={project.cover}
              alt={project.title}
              className="aspect-[16/10] w-full rounded-[1.5rem] object-cover"
            />
            <div className="prose prose-slate mt-6 max-w-none dark:prose-invert">
              {details.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {details.features?.length ? (
                <>
                  <h4>{data.ui.keyFeatures}</h4>
                  <ul>
                    {details.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </>
              ) : null}
              {details.stack?.length ? (
                <>
                  <h4>{data.ui.stack}</h4>
                  <ul>
                    {details.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>

          <aside className="p-6">
            <h4 className="text-lg font-semibold tracking-tight">{data.ui.gallery}</h4>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {(project.gallery || [project.cover]).map((image) => (
                <button
                  key={image}
                  type="button"
                  className="overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10"
                  onClick={() => onOpenLightbox({ src: image, title: project.title })}
                >
                  <img
                    src={image}
                    alt={project.title}
                    className="aspect-[4/3] w-full object-cover transition hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
