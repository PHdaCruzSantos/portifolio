import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import BlurImage from './BlurImage';

// Import certificates
import bootcamImg from '../../assets/certificados/bootcam React.png';
import webModernoImg from '../../assets/certificados/Web-Moderno-cod3r.png';
import frontDesignImg from '../../assets/certificados/Certificado-FrontEnd-Design.png';
import designImg from '../../assets/certificados/Certificado_Design.png';
import infoEssencialImg from '../../assets/certificados/Certificado_informaticaEssencial.png';
import htmlCssImg from '../../assets/certificados/FundBradesco_HTMLeCSS.png';
import vueImg from '../../assets/certificados/certificadoVue.png';

// Import Tech Icons
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
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-orange-500 to-red-500",
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
    color: "from-green-500 to-emerald-500",
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
    color: "from-yellow-500 to-orange-500",
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
    color: "from-pink-500 to-purple-500",
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
    color: "from-indigo-500 to-blue-500",
    techIcon: linuxIcon
  }
];

const AUTOPLAY_DELAY = 5000; // 5 seconds

export default function CertificatesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCert = certificates[activeIndex];

  useEffect(() => {
    if (!isHovered) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, AUTOPLAY_DELAY);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [activeIndex, isHovered]);

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:text-left md:pl-8"
        >
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm font-medium text-purple-300 backdrop-blur-sm inline-block mb-4">
                📜  Aprendizado Contínuo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Certificações
            </h2>
             <p className="text-gray-400 text-lg max-w-xl">
                Evolução constante: mais de <span className="text-white font-bold">250 horas</span> em cursos.
            </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            
            <div className="w-full md:w-1/3 order-2 md:order-1 relative min-h-[300px] flex flex-col justify-center">
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3">
                             <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-purple-500/50 transition-colors`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${activeCert.color} opacity-20`} />
                                <BlurImage 
                                    src={activeCert.techIcon} 
                                    alt="Tech Icon" 
                                    className="w-8 h-8 object-contain relative z-10"
                                    containerClassName="w-8 h-8 absolute inset-0 m-auto" 
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                    {activeCert.title}
                                </h3>
                                <div className="text-purple-300 font-medium">
                                    {activeCert.issuer}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                                📅 {activeCert.date}
                            </span>
                             <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                                ⏱️ {activeCert.hours}
                            </span>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-4">
                            {activeCert.description}
                        </p>

                        <div className="flex gap-4 pt-4">
                             <button
                                onClick={prevSlide}
                                className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all group"
                                aria-label="Anterior"
                            >
                                <svg className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-all flex items-center gap-2 group"
                            >
                                Próximo
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>

                    </motion.div>
                 </AnimatePresence>
            </div>

            <div 
                ref={containerRef}
                className="w-full md:w-2/3 order-1 md:order-2 perspective-1000"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                  <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                    {certificates.map((cert, index) => {
                      let relativeOffset = (index - activeIndex) % certificates.length;
                      if (relativeOffset > certificates.length / 2) relativeOffset -= certificates.length;
                      else if (relativeOffset < -certificates.length / 2) relativeOffset += certificates.length;

                      const isVisible = Math.abs(relativeOffset) <= 2;

                      if (!isVisible) return null;

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

        <div className="flex md:hidden justify-center gap-2 mt-8">
            {certificates.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                index === activeIndex 
                    ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500' 
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
            />
            ))}
        </div>

      </div>
    </section>
  );
}

function CertificateCard({ cert, offset, isActive, onClick }: any) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const xOffset = offset * (isMobile ? 35 : 120);
  const scale = isActive ? 1 : 0.8;
  const zIndex = isActive ? 50 : 10 - Math.abs(offset);
  const opacity = isActive ? 1 : 0.5;

  return (
    <motion.div
      layoutId={`cert-${cert.id}`}
      initial={{ scale: 0.8, opacity: 0, x: xOffset }}
      animate={{
        scale,
        opacity,
        x: xOffset,
        zIndex,
        rotateY: isActive ? 0 : (offset > 0 ? -15 : 15),
      }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      onClick={onClick}
      className={`absolute w-[280px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ${
        isActive ? 'cursor-default' : 'cursor-pointer hover:brightness-110'
      }`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
    >
      <div className={`w-full h-full relative transition-all duration-300 bg-[#1e1e1e] flex flex-col ${
           isActive ? 'ring-2 ring-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]' : 'ring-1 ring-white/10 grayscale-[0.5]'
      }`}>
         <div className="h-8 min-h-[32px] w-full border-b border-white/5 bg-white/5 flex items-center px-4 gap-2 z-20">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-80" />
            <div className="ml-auto text-[10px] font-mono text-white/30 truncate max-w-[150px]">
                {cert.title.toLowerCase().replace(/\s+/g, '-')}.pdf
            </div>
         </div>

         <div className="relative flex-1 w-full overflow-hidden bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center p-1">
            <BlurImage 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-full object-contain opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                containerClassName="w-full h-full"
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none mix-blend-overlay" />
         </div>
         
         {!isActive && <div className="absolute inset-0 bg-black/40 z-10" />}
      </div>
    </motion.div>
  );
}