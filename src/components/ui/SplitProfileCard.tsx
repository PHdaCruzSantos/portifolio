import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';
import BlurImage from './BlurImage';


interface SplitProfileCardProps {
    name: string;
    role: string;
    description: string;
    imageUrl: string;
    socials?: { icon: ReactNode; link: string }[];
}

const SplitProfileCard = ({ name, role, imageUrl }: Omit<SplitProfileCardProps, 'description'>) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20 };
    const mouseXSpring = useSpring(x, springConfig);
    const mouseYSpring = useSpring(y, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]); // Reduced angle for subtlety
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-red shadow-2xl group perspective-1000"
        >

            <motion.div 
                style={{
                    background: useTransform(
                        [glareX, glareY],
                        ([latestX, latestY]) => `radial-gradient(circle at ${latestX} ${latestY}, rgba(255,255,255,0.2) 0%, transparent 50%)`
                    ),
                    zIndex: 20 
                }}
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40 opacity-50 pointer-events-none z-0" />
            
            <div className="relative z-10 w-full md:w-2/5 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                
                <motion.div 
                    style={{ transform: "translateZ(35px)" }} // Adjusted depth
                    className="relative w-40 h-40 mb-6 rounded-full p-1 bg-gradient-to-br from-white/20 to-transparent shadow-2xl ring-1 ring-white/10"
                >
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                        <BlurImage 
                            src={imageUrl} 
                            alt={name} 
                            className="w-full h-full object-cover filter brightness-110 contrast-110"
                            containerClassName="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-40" />
                    </div>
                </motion.div>

                <motion.div style={{ transform: "translateZ(25px)" }} className="text-center">
                    <h2 className="text-3xl font-bold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        {name}
                    </h2>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        {role}
                    </p>
                </motion.div>
                
                 <motion.div 
                    style={{ transform: "translateZ(15px)" }}
                    className="mt-6 flex gap-2 items-center"
                >
                </motion.div>
            </div>

            <div className="relative z-10 w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center text-left">
                <motion.div style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-xl font-medium text-white/90 mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-purple-500/50"></span>
                        Sobre Mim
                    </h3>
                        Olá! Sou acadêmico de Sistemas de Informação na Universidade Federal de Ouro Preto (UFOP).
                        <br /><br />
                        Sou desenvolvedor full stack com foco em criar produtos digitais bem estruturados, escaláveis e fáceis de evoluir. Trabalho do design à implementação, unindo front-end moderno, back-end sólido e boas práticas de engenharia. Gosto de resolver problemas reais, aprender continuamente e construir soluções que fazem sentido para usuários e para o negócio.
                    
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a 
                            href="#projects"
                            className="inline-block cursor-pointer px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors shadow-lg shadow-white/5 transform active:scale-95 duration-200"
                        >
                            Ver Projetos
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Floating Magnetic Buttons */}
            <div className="absolute top-6 right-6 z-30 hidden md:block" style={{ transform: "translateZ(40px)" }}>
                 <MagneticButton 
                    href="https://www.linkedin.com/in/phdacruzsantos/" 
                    className="w-10 h-10 bg-[#0e76a8]/20 rounded-full border border-[#0e76a8]/30 text-white backdrop-blur-md hover:bg-[#0e76a8] hover:scale-110"
                >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                 </MagneticButton>
            </div>

            <div className="absolute bottom-6 right-6 z-30 hidden md:block" style={{ transform: "translateZ(30px)" }}>
                 <MagneticButton 
                    href="https://github.com/PHdaCruzSantos" 
                    className="w-10 h-10 bg-white/10 rounded-full border border-white/20 text-white backdrop-blur-md hover:bg-white/20 hover:scale-110"
                >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                 </MagneticButton>
            </div>

            <div className="absolute inset-0 opacity-[0.03] z-[-1] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover" />
            
        </motion.div>
    );
};

export default SplitProfileCard;
