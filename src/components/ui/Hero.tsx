import { motion } from 'framer-motion';
import Spotlight from './Spotlight';


const Hero = () => {
    const metrics = [
        { value: "7", label: "projetos selecionados" },
        { value: "4", label: "ecossistemas frontend" },
        { value: "3", label: "projetos com Docker" },
    ];

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-10 py-24">
            
            <div className="absolute inset-0 pointer-events-none z-0">
                <Spotlight fill="rgba(45, 212, 191, 0.12)" className="w-full h-full"><div></div></Spotlight>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
                
                <div className="space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 py-2 px-3 rounded-md bg-teal-300/10 border border-teal-300/20 text-sm font-medium text-teal-100 backdrop-blur-md"
                    >
                        <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_18px_rgba(45,212,191,0.9)]" />
                        Disponível para estágio, júnior e projetos full stack
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[0.98]"
                    >
                        Construo sistemas web com base técnica, produto e clareza.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed"
                    >
                        Sou Pedro Henrique, estudante de Sistemas de Informação na UFOP e desenvolvedor full stack. Trabalho com React, Vue, Node.js, TypeScript, bancos relacionais e Docker para transformar requisitos em aplicações usáveis, documentadas e fáceis de evoluir.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <a 
                            href="#projects"
                            className="group relative px-7 py-4 bg-teal-300 text-[#071311] font-bold rounded-md overflow-hidden hover:bg-teal-200 transition-colors duration-300 text-center"
                        >
                            Ver Projetos
                        </a>

                        <a
                            href="#contact"
                            className="group px-7 py-4 rounded-md bg-white/5 border border-white/10 text-white font-medium backdrop-blur-sm hover:bg-white/10 hover:border-teal-300/40 transition-all duration-300 text-center"
                        >
                            Entrar em Contato
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="rounded-lg border border-white/10 bg-[#0b1117]/75 backdrop-blur-md p-5 md:p-7 shadow-2xl"
                >
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="text-sm text-slate-400">portfolio/status</span>
                        <span className="text-sm text-teal-300">active</span>
                    </div>

                    <div className="mt-6 space-y-4 font-mono text-sm">
                        <p><span className="text-slate-500">$</span> stack --focus</p>
                        <p className="text-slate-300">frontend: React, Vue, Angular, Flutter</p>
                        <p className="text-slate-300">backend: Node.js, Express, Fastify, NestJS, Prisma</p>
                        <p className="text-slate-300">infra: Docker, PostgreSQL, RabbitMQ, CI/CD</p>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                        {metrics.map((metric) => (
                            <div key={metric.label} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                                <div className="text-2xl font-bold text-white">{metric.value}</div>
                                <div className="mt-1 text-xs text-slate-400 leading-snug">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 cursor-pointer group"
                onClick={() => {
                    document.getElementById('aboutMe')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                {/* Text Label */}
                <span className="text-xs text-white/40 uppercase tracking-widest font-medium group-hover:text-white/60 transition-colors">
                    Explorar
                </span>
                
                {/* Mouse Icon with animated scroll wheel */}
                <div className="relative w-[26px] h-[40px] rounded-full border-2 border-white/30 group-hover:border-white/50 transition-colors">
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/60 rounded-full"
                    />
                </div>

                {/* Animated Arrow */}
                <motion.svg
                    animate={{
                        y: [0, 8, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-5 h-5 text-white/30 group-hover:text-white/50 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
            </motion.div>

        </section>
    );
};

export default Hero;
