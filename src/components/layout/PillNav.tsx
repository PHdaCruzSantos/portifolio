import { useState, useEffect, useCallback } from "react";
import { globeRef } from "../ui/globePulseRef";

type Theme = "default" | "dark" | "white" | "gray";

interface ThemeConfig {
  label: string;
  dataTheme: string | null;
  accent: string;
  bg: string;
}

const THEMES: Record<Theme, ThemeConfig> = {
  default: { label: "Warm", dataTheme: null, accent: "#f7f1e4", bg: "#d73700" },
  dark: { label: "Dark", dataTheme: "dark", accent: "#f0eee8", bg: "#202020" },
  white: {
    label: "White",
    dataTheme: "white",
    accent: "#080808",
    bg: "#f8f8f6",
  },
  gray: { label: "Gray", dataTheme: "gray", accent: "#111318", bg: "#d6d8dd" },
};

let clipPathStyleEl: HTMLStyleElement | null = null;

function getGlobeCenter(): { x: number; y: number } {
  const el = document.querySelector(".wire-globe-mark") as HTMLElement | null;
  if (el) {
    const rect = el.getBoundingClientRect();
    return {
      x: Math.round(rect.left + rect.width / 2),
      y: Math.round(rect.top + rect.height / 2),
    };
  }
  return { x: 120, y: 120 };
}

function injectRippleKeyframes(x: number, y: number, color: string) {
  if (!clipPathStyleEl) {
    clipPathStyleEl = document.createElement("style");
    document.head.appendChild(clipPathStyleEl);
  }
  const maxR = Math.ceil(
    Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    ),
  );

  clipPathStyleEl.textContent = `
    ::view-transition-new(root) {
      animation: cv-ripple-expand 680ms cubic-bezier(0.22, 1, 0.36, 1) both;
      clip-path: circle(0px at ${x}px ${y}px);
    }
    ::view-transition-old(root) {
      animation: none;
      z-index: 0;
    }
    ::view-transition-new(root) {
      z-index: 1;
    }
    @keyframes cv-ripple-expand {
      from { clip-path: circle(0px at ${x}px ${y}px); }
      to   { clip-path: circle(${maxR}px at ${x}px ${y}px); }
    }
  `;
  document.documentElement.style.setProperty("--cv-ripple-color", color);
}

const NAV_LINKS = [
  { href: "#hero", label: "Início" },
  { href: "#aboutMe", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projetos" },
  { href: "#certificates", label: "Cursos" },
  { href: "#contact", label: "Contato" },
];

export default function PillNav() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "default";
    const saved = localStorage.getItem("cv-theme") as Theme | null;
    return saved && saved in THEMES ? saved : "default";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const { dataTheme } = THEMES[theme];
    const html = document.documentElement;
    if (dataTheme) html.setAttribute("data-theme", dataTheme);
    else html.removeAttribute("data-theme");
  }, [theme]);

  const switchTheme = useCallback(
    async (next: Theme) => {
      if (next === theme) return;

      const { accent, bg, dataTheme } = THEMES[next];
      const { x, y } = getGlobeCenter();

      globeRef.current?.triggerPulse(accent);

      injectRippleKeyframes(x, y, bg);

      if (document.startViewTransition) {
        document.documentElement.classList.add("theme-changing");
        const transition = document.startViewTransition(() => {
          const html = document.documentElement;
          if (dataTheme) html.setAttribute("data-theme", dataTheme);
          else html.removeAttribute("data-theme");
        });
        await transition.finished;
        document.documentElement.classList.remove("theme-changing");
      } else {
        document.documentElement.classList.add("theme-changing");
        const html = document.documentElement;
        if (dataTheme) html.setAttribute("data-theme", dataTheme);
        else html.removeAttribute("data-theme");
        setTimeout(
          () => document.documentElement.classList.remove("theme-changing"),
          750,
        );
      }

      setTheme(next);
      localStorage.setItem("cv-theme", next);
    },
    [theme],
  );

  return (
    <>
      <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-stretch border border-[var(--cv-line)] bg-[var(--cv-paper)] shadow-sm backdrop-blur-md">
          {/* Nav links — hidden on small screens */}
          <div className="hidden items-stretch sm:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="flex items-center border-r border-[var(--cv-line)] px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.04em] text-[var(--cv-muted)] transition-colors hover:bg-[var(--cv-accent)] hover:text-[var(--cv-inverse)]"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Theme switcher squares */}
          <div className="flex items-center gap-1 border-l border-[var(--cv-line)] px-2 py-2 sm:border-l-0">
            {(Object.entries(THEMES) as [Theme, ThemeConfig][]).map(
              ([key, cfg]) => (
                <button
                  key={key}
                  onClick={() => switchTheme(key)}
                  aria-label={`Tema ${cfg.label}`}
                  title={cfg.label}
                  className={[
                    "h-5 w-5 border transition-transform",
                    theme === key
                      ? "scale-110 border-[var(--cv-ink)] ring-2 ring-[var(--cv-accent)]/40"
                      : "border-[var(--cv-line)] hover:scale-110",
                  ].join(" ")}
                  style={{ background: cfg.bg }}
                />
              ),
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="flex min-h-full w-10 items-center justify-center border-l border-[var(--cv-line)] text-[var(--cv-muted)] transition-colors hover:bg-[var(--cv-accent)] hover:text-[var(--cv-inverse)] sm:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span className="text-[0.9rem]">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="absolute left-1/2 mt-2 w-56 -translate-x-1/2 border border-[var(--cv-line)] bg-[var(--cv-surface-strong)] shadow-lg backdrop-blur-md sm:hidden">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-[var(--cv-line)] px-5 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.04em] text-[var(--cv-muted)] last:border-b-0 hover:bg-[var(--cv-accent)] hover:text-[var(--cv-inverse)]"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
