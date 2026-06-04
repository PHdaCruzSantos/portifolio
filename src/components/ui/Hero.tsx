import { useRef } from "react";
import { motion } from "framer-motion";
import StarburstMark from "./StarburstMark";
import WireGlobeMark from "./WireGlobeMark";
import type { WireGlobeMarkHandle } from "./WireGlobeMark";
import { globeRef } from "./globePulseRef";

const contacts = [
  {
    label: "github.com/PHdaCruzSantos",
    href: "https://github.com/PHdaCruzSantos",
    note: "Código",
  },
  {
    label: "phdacruzsantos.dev.br",
    href: "https://phdacruzsantos.dev.br",
    note: "Você está aqui",
    current: true,
  },
  {
    label: "phdacruzsantos.dev@gmail.com",
    href: "mailto:phdacruzsantos.dev@gmail.com",
    note: "Email",
  },
];

const experiences = [
  {
    period: "2024 - Atual",
    role: "Desenvolvedor Full Stack Freelancer",
    description:
      "Desenvolvimento de aplicações web, APIs, integrações entre sistemas, automações e manutenção de sistemas em produção. Levantamento de requisitos, deploy em VPS e melhoria contínua.",
  },
  {
    period: "2024",
    role: "BKAPS LOG - Shipping Hub",
    description:
      "Sistema full stack em produção para automatizar o fluxo logístico de vendedores digitais, integrando vendas da Braip e Payt com emissão de etiquetas, rastreamento, gestão operacional via APIs externas e webhooks.",
  },
  {
    period: "2023 - 2026",
    role: "Projetos Web e Produto",
    description:
      "Dashboards, extensões Chrome, aplicações mobile, pipelines em Python e interfaces responsivas com foco em clareza, arquitetura pragmática e leitura rápida para o usuário final.",
  },
];

const skills = [
  "React",
  "Vue",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
];

const SectionHeader = ({
  title,
  number,
}: {
  title: string;
  number: string;
}) => (
  <div className="flex items-center gap-4 border-b border-current/35 pb-2 text-[0.72rem] uppercase tracking-[-0.02em]">
    <span>{title}</span>
    <span className="ml-auto">{number}</span>
  </div>
);

const Hero = () => {
  const localRef = useRef<WireGlobeMarkHandle>(null);

  // Sync with the shared module-level ref so PillNav can reach it
  const setRef = (handle: WireGlobeMarkHandle | null) => {
    (localRef as React.MutableRefObject<WireGlobeMarkHandle | null>).current =
      handle;
    globeRef.current = handle;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full px-5 pb-24 pt-24 text-[var(--cv-ink)] sm:px-8 lg:px-10"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="grid items-start gap-8 border-b border-[var(--cv-line)] pb-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12"
        >
          <div className="relative w-fit lg:justify-self-start">
            <WireGlobeMark
              ref={setRef}
              className="h-[clamp(8.5rem,18vw,13rem)] w-[clamp(8.5rem,18vw,13rem)] text-[var(--cv-accent)]"
            />
            <StarburstMark className="absolute -bottom-3 -right-6 h-14 w-14 text-[var(--cv-ink)]/55 sm:h-20 sm:w-20" />
          </div>

          <div className="self-start">
            <h1 className="max-w-5xl text-[clamp(3.15rem,8.5vw,8.2rem)] font-black uppercase leading-[0.78] tracking-[-0.095em]">
              Pedro Santos,
              <br />
              <span className="cv-outline-text">Desenvolvedor</span>
              <br />
              Full Stack
            </h1>
          </div>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="flex flex-col gap-10 border-y border-[var(--cv-line)] py-6 lg:border-y-0 lg:border-r lg:py-6 lg:pr-8"
          >
            <div className="grid gap-8 text-[0.76rem] leading-relaxed sm:grid-cols-3 lg:grid-cols-1">
              <div>
                <SectionHeader title="Contatos" number="01" />
                <div className="mt-5 space-y-2 uppercase">
                  {contacts.map((contact) => (
                    <a
                      key={contact.href}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-current={contact.current ? "page" : undefined}
                      className="group grid gap-1 border-b border-[var(--cv-line-soft)] pb-2 transition-colors last:border-b-0 hover:text-[var(--cv-accent)]"
                    >
                      <span className="break-words">{contact.label}</span>
                      <span className="flex items-center gap-2 text-[0.62rem] leading-none text-[var(--cv-muted)] transition-colors group-hover:text-[var(--cv-accent)]">
                        <span className="h-px w-4 bg-current opacity-50" />
                        {contact.note}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeader title="Formação" number="03" />
                <div className="mt-5 space-y-2">
                  <p className="text-[0.7rem]">2021 - 2027.01</p>
                  <p className="text-base font-semibold leading-tight">
                    Universidade Federal de Ouro Preto - UFOP
                  </p>
                  <p>Sistemas de Informação</p>
                </div>
              </div>

              <div>
                <SectionHeader title="Idiomas" number="05" />
                <div className="mt-5 space-y-3">
                  {[
                    ["Português", "Nativo"],
                    ["Inglês", "Técnico"],
                  ].map(([language, level]) => (
                    <p key={language} className="flex justify-between gap-4">
                      <span>{language}</span>
                      <span>{level}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="grid gap-9 border-y border-[var(--cv-line)] py-6 lg:grid-cols-[1fr_0.98fr]"
          >
            <div className="space-y-7">
              <SectionHeader title="Experiência" number="02" />
              <div className="space-y-6">
                {experiences.map((experience) => (
                  <article
                    key={experience.role}
                    className="max-w-md border-b border-[var(--cv-line-soft)] pb-6 last:border-b-0 last:pb-0"
                  >
                    <p className="mb-2 text-[0.7rem]">{experience.period}</p>
                    <h2 className="text-xl font-semibold leading-tight tracking-[-0.04em]">
                      {experience.role}
                    </h2>
                    <p className="mt-3 text-sm leading-snug text-current/82">
                      {experience.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="space-y-7">
              <SectionHeader title="Skills" number="04" />
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="border-t border-current/35 pt-7">
                <p className="text-xs uppercase tracking-[0.24em] text-current/55">
                  Resumo
                </p>
                <p className="mt-4 max-w-sm text-sm leading-snug text-current/82">
                  Estudante de Sistemas de Informação na UFOP, focado em
                  produtos web, APIs, automações, integrações e sistemas em
                  produção com leitura clara de negócio.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#projects" className="cv-button cv-button-primary">
                  Ver projetos
                </a>
                <a href="#contact" className="cv-button cv-button-ghost">
                  Contato
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
