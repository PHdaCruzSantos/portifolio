import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

// Import certificates
import bootcamImg from '../../assets/certificados/bootcam React.png';
import webModernoImg from '../../assets/certificados/Web-Moderno-cod3r.png';
import frontDesignImg from '../../assets/certificados/Certificado-FrontEnd-Design.png';
import designImg from '../../assets/certificados/Certificado_Design.png';
import infoEssencialImg from '../../assets/certificados/Certificado_informaticaEssencial.png';
import htmlCssImg from '../../assets/certificados/FundBradesco_HTMLeCSS.png';
import vueImg from '../../assets/certificados/certificadoVue.png';

const certificates = [
  {
    id: 1,
    title: "Bootcamp Front End React",
    issuer: "XP Educação",
    date: "2025",
    image: bootcamImg,
    description: "Formação intensiva cobrindo React, Hooks, Redux e ecossistema moderno."
  },
  {
    id: 2,
    title: "Web Moderno Completo",
    issuer: "Cod3r - Udemy",
    date: "2023",
    image: webModernoImg,
    description: "Desenvolvimento Web: JS, Node, Gulp, Webpack e mais."
  },
  {
    id: 3,
    title: "Front End Design",
    issuer: "Udemy",
    date: "2023",
    image: frontDesignImg,
    description: "Foco em UI/UX para desenvolvedores, cores, tipografia e layouts."
  },
  {
    id: 4,
    title: "Design Gráfico - UI/UX",
    issuer: "Central Cursos",
    date: "2018",
    image: designImg,
    description: "Design gráfico, interfaçe e experiencia de usuário."
  },
  {
    id: 5,
    title: "Informática Essencial",
    issuer: "Central Cursos",
    date: "2017",
    image: infoEssencialImg,
    description: "Fundamentos de sistemas operacionais e ferramentas de escritório."
  },
  {
    id: 6,
    title: "HTML e CSS",
    issuer: "Fundação Bradesco",
    date: "2020",
    image: htmlCssImg,
    description: "Estrutura e estilização web, semântica e responsividade."
  },
  {
    id: 7,
    title: "Vue.js Completo",
    issuer: "Vue.Js Brasil",
    date: "2023",
    image: vueImg,
    description: "Desenvolvimento reativo com Vue.js 3, Vuex e Vue Router."
  }
].sort((a, b) => Number(b.date) - Number(a.date));
const CertificatesSwap = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const activeCert = certificates[activeIndex];

    const swapCards = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        const cards = gsap.utils.toArray('.swap-card');
        if (cards.length === 0) return;

        const frontCard = cards[0] as HTMLElement;
        const dist = 15;
        const scaleStep = 0.03;
        const xStep = 8;

        const tl = gsap.timeline({
            onComplete: () => {
                containerRef.current?.appendChild(frontCard);
                gsap.set(frontCard, { clearProps: "all" });
                
                setActiveIndex((prev) => (prev + 1) % certificates.length);

                const newCards = gsap.utils.toArray('.swap-card');
                newCards.forEach((card: any, i) => {
                    gsap.to(card, {
                        scale: 1 - i * scaleStep,
                        y: -i * dist,
                        x: i * xStep,
                        zIndex: certificates.length - i,
                        rotationY: -5, 
                        rotationX: 2,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                });
                
                setIsAnimating(false);
            }
        });

        tl.to(frontCard, {
            y: 100,
            x: -20,
            rotation: -2,
            scale: 1.05,
            opacity: 0,
            zIndex: 0,
            duration: 0.3,
            ease: "power2.in"
        })
        .set(frontCard, { y: -100, x: 10, rotation: 0, scale: 0.95, opacity: 0 }) 
        .to(frontCard, {
            y: -(certificates.length - 1) * dist,
            x: (certificates.length - 1) * xStep,
            scale: 1 - (certificates.length - 1) * scaleStep,
            opacity: 1,
            rotationY: -5,
            rotationX: 2,
            duration: 0.4,
            ease: "back.out(1.1)"
        });

        cards.slice(1).forEach((card: any, i) => {
            gsap.to(card, {
                scale: 1 - i * scaleStep,
                y: -i * dist,
                x: i * xStep,
                zIndex: certificates.length - i,
                rotationY: -5,
                rotationX: 2,
                duration: 0.4,
                ease: "power3.out"
            });
        });
    };

    useEffect(() => {
        const cards = gsap.utils.toArray('.swap-card');
        const dist = 15;
        const scaleStep = 0.03;
        const xStep = 8;

        cards.forEach((card: any, i) => {
            gsap.set(card, {
                scale: 1 - i * scaleStep,
                y: -i * dist,
                x: i * xStep,
                zIndex: certificates.length - i,
                rotationY: -5,
                rotationX: 2,
                transformPerspective: 1000,
                transformOrigin: "center left"
            });
        });
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-20 min-h-[800px]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                
                {/* Left Column: Text Details */}
                <div className="w-full md:w-1/3 flex flex-col items-start text-left z-20">
                    <span className="text-sm font-mono text-purple-400 mb-4 tracking-wider uppercase">
                        Certificação em destaque
                    </span>
                    
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                {activeCert.title}
                            </h2>
                            
                            <div className="flex items-center gap-4 text-white/50 text-sm md:text-base">
                                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                                    {activeCert.issuer}
                                </span>
                                <span>•</span>
                                <span>{activeCert.date}</span>
                            </div>

                            <p className="text-white/70 text-lg leading-relaxed max-w-sm">
                                {activeCert.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                    
                    <button 
                        onClick={swapCards}
                        disabled={isAnimating}
                        className="mt-10 group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Próximo
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                    </button>

                    {/* Progress Indicator */}
                    <div className="mt-8 flex gap-2">
                        {certificates.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1 rounded-full transition-all duration-300 ${
                                    idx === activeIndex 
                                        ? 'w-8 bg-purple-400' 
                                        : 'w-1 bg-white/20'
                                }`}
                            />
                        ))}
                    </div>
                </div>


                {/* Right Column: Card Stack */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end relative min-h-[500px] items-center">
                    <div 
                        ref={containerRef} 
                        className="relative w-full max-w-[600px] h-[380px] md:h-[420px] cursor-pointer"
                        onClick={swapCards}
                    >
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="swap-card absolute inset-0 rounded-xl overflow-hidden shadow-2xl select-none ring-1 ring-white/10 bg-[#1e1e1e] transition-all duration-300 hover:ring-white/30"
                            >
                                {/* Window Header */}
                                <div className="h-8 bg-[#1a1b26]/95 backdrop-blur-md border-b border-white/5 flex items-center px-3 gap-2 absolute top-0 inset-x-0 z-20">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                    <div className="ml-3 text-[10px] text-white/30 font-mono truncate opacity-60">
                                        {cert.title} - Preview.png
                                    </div>
                                </div>

                                {/* Image Container */}
                                <div className="w-full h-full pt-8 bg-black">
                                    <img 
                                        src={cert.image} 
                                        alt={cert.title} 
                                        className="w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100" 
                                    />
                                    {/* Gloss Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CertificatesSwap;
