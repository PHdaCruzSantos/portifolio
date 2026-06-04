import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import BlurImage from './BlurImage';

import bootcamImg from '../../assets/certificados/bootcam React.png';
import webModernoImg from '../../assets/certificados/Web-Moderno-cod3r.png';
import frontDesignImg from '../../assets/certificados/Certificado-FrontEnd-Design.png';
import designImg from '../../assets/certificados/Certificado_Design.png';
import infoEssencialImg from '../../assets/certificados/Certificado_informaticaEssencial.png';
import htmlCssImg from '../../assets/certificados/FundBradesco_HTMLeCSS.png';
import vueImg from '../../assets/certificados/certificadoVue.png';

import reactIcon from '../../assets/techicons/React.png';
import jsIcon from '../../assets/techicons/JavaScript.png';
import vueIcon from '../../assets/techicons/Vue.js.png';
import htmlIcon from '../../assets/techicons/HTML5.png';
import figmaIcon from '../../assets/techicons/Figma.png';
import linuxIcon from '../../assets/techicons/Linux.png';
import cssIcon from '../../assets/techicons/CSS3.png';

const certificates = [
  {
    id: 1,
    title: "Bootcamp Front End React",
    issuer: "XP Educação",
    date: "2025",
    hours: "148h",
    image: bootcamImg,
    description: "Formação intensiva cobrindo React, Hooks, Redux e ecossistema moderno.",
    techIcon: reactIcon
  },
  {
    id: 2,
    title: "Web Moderno Completo",
    issuer: "Cod3r - Udemy",
    date: "2024",
    hours: "97.5h",
    image: webModernoImg,
    description: "Desenvolvimento Web: JS, Node, Gulp, Webpack e mais.",
    techIcon: jsIcon
  },
  {
    id: 3,
    title: "Front End Design",
    issuer: "Udemy",
    date: "2023",
    hours: "49.5h",
    image: frontDesignImg,
    description: "Foco em UI/UX para desenvolvedores, cores, tipografia e layouts.",
    techIcon: cssIcon
  },
  {
    id: 4,
    title: "Vue.js Completo",
    issuer: "Vue.Js Brasil",
    date: "2023",
    hours: "18h",
    image: vueImg,
    description: "Desenvolvimento reativo com Vue.js 3, Vuex e Vue Router.",
    techIcon: vueIcon
  },
  {
    id: 5,
    title: "HTML e CSS",
    issuer: "Fundação Bradesco",
    date: "2020",
    hours: "24h",
    image: htmlCssImg,
    description: "Estrutura e estilização web, semântica e responsividade.",
    techIcon: htmlIcon
  },
  {
    id: 6,
    title: "Design Gráfico - UI/UX",
    issuer: "Central Cursos",
    date: "2018",
    hours: "118h",
    image: designImg,
    description: "Design gráfico, interface e experiência de usuário.",
    techIcon: figmaIcon
  },
  {
    id: 7,
    title: "Informática Essencial",
    issuer: "Central Cursos",
    date: "2017",
    hours: "40h",
    image: infoEssencialImg,
    description: "Fundamentos de sistemas operacionais e ferramentas de escritório.",
    techIcon: linuxIcon
  }
];

const AUTOPLAY_DELAY = 5000;
type Certificate = (typeof certificates)[number];

export default function CertificatesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeCert = certificates[activeIndex];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      autoplayRef.current = setInterval(nextSlide, AUTOPLAY_DELAY);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isHovered, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section className="relative w-full overflow-hidden py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 grid gap-5 border-b border-[var(--cv-line)] pb-5 md:grid-cols-[0.34fr_0.66fr]"
        >
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--cv-accent)]">Aprendizado contínuo / 09</p>
          <div>
            <h2 className="cv-section-title">Certificações</h2>
            <p className="mt-5 max-w-xl text-lg leading-snug text-[var(--cv-muted)]">
              Evolução constante: mais de <span className="font-bold text-[var(--cv-ink)]">250 horas</span> em cursos.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <aside className="flex flex-col justify-between gap-8 border-y border-[var(--cv-line)] py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: direction >= 0 ? 16 : -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -16 : 16 }}
                transition={{ duration: 0.25 }}
              >
                <div className="cv-meta-row">
                  <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                  <span>{activeCert.date}</span>
                  <span className="ml-auto">{activeCert.hours}</span>
                </div>

                <div className="mt-6 flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-[var(--cv-line)] bg-[var(--cv-surface)]">
                    <BlurImage
                      src={activeCert.techIcon}
                      alt=""
                      className="h-9 w-9 object-contain grayscale"
                      containerClassName="h-9 w-9"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-[var(--cv-ink)]">
                      {activeCert.title}
                    </h3>
                    <p className="mt-2 text-sm font-bold uppercase text-[var(--cv-accent)]">
                      {activeCert.issuer}
                    </p>
                  </div>
                </div>

                <p className="mt-6 border-l border-[var(--cv-line)] pl-4 text-base leading-snug text-[var(--cv-muted)]">
                  {activeCert.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap gap-3">
              <button onClick={prevSlide} className="cv-button cv-button-ghost" aria-label="Certificado anterior">
                Anterior
              </button>
              <button onClick={nextSlide} className="cv-button cv-button-primary">
                Próximo
              </button>
            </div>
          </aside>

          <div
            className="relative min-h-[430px] overflow-hidden border border-[var(--cv-line)] bg-[var(--cv-surface)] p-5 md:min-h-[520px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 opacity-50 cv-grid" />
            <div className="relative flex h-full items-center justify-center">
              <AnimatePresence mode="popLayout" initial={false}>
                {certificates.map((cert, index) => {
                  let relativeOffset = (index - activeIndex) % certificates.length;
                  if (relativeOffset > certificates.length / 2) relativeOffset -= certificates.length;
                  if (relativeOffset < -certificates.length / 2) relativeOffset += certificates.length;

                  if (Math.abs(relativeOffset) > 2) return null;

                  return (
                    <CertificateCard
                      key={cert.id}
                      cert={cert}
                      offset={relativeOffset}
                      isActive={relativeOffset === 0}
                      onClick={() => goToSlide(index)}
                    />
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {certificates.map((cert, index) => (
            <button
              key={cert.id}
              onClick={() => goToSlide(index)}
              className={`h-2 border border-[var(--cv-line)] transition-all duration-300 ${
                index === activeIndex ? 'w-10 bg-[var(--cv-accent)]' : 'w-2 bg-transparent hover:bg-[var(--cv-line)]'
              }`}
              aria-label={`Abrir certificado ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CertificateCardProps {
  cert: Certificate;
  offset: number;
  isActive: boolean;
  onClick: () => void;
}

function CertificateCard({ cert, offset, isActive, onClick }: CertificateCardProps) {
  const xOffset = offset * 118;
  const scale = isActive ? 1 : 0.82;
  const zIndex = isActive ? 50 : 10 - Math.abs(offset);
  const opacity = isActive ? 1 : 0.42;

  return (
    <motion.button
      type="button"
      initial={{ scale: 0.8, opacity: 0, x: xOffset }}
      animate={{
        scale,
        opacity,
        x: xOffset,
        zIndex,
        rotate: isActive ? 0 : offset > 0 ? 2 : -2,
      }}
      exit={{ scale: 0.72, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onClick={onClick}
      className={`absolute aspect-[4/3] w-[260px] overflow-hidden border bg-[var(--cv-paper)] text-left shadow-[0_20px_60px_var(--cv-shadow)] md:w-[450px] ${
        isActive ? 'cursor-default border-[var(--cv-accent)]' : 'cursor-pointer border-[var(--cv-line)] grayscale hover:opacity-75'
      }`}
    >
      <div className="flex h-9 items-center border-b border-[var(--cv-line)] px-4 text-[10px] uppercase text-[var(--cv-muted)]">
        <span>{cert.title.toLowerCase().replace(/\s+/g, '-')}.pdf</span>
        <span className="ml-auto">{cert.date}</span>
      </div>

      <div className="relative flex h-[calc(100%-2.25rem)] items-center justify-center bg-[var(--cv-paper-soft)] p-2">
        <BlurImage
          src={cert.image}
          alt={cert.title}
          className="h-full w-full object-contain"
          containerClassName="h-full w-full"
        />
      </div>
    </motion.button>
  );
}
