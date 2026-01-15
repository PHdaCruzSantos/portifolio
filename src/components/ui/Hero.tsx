import { motion } from 'framer-motion';
import Spotlight from './Spotlight';


const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-10 py-20">
            
            {/* Background Spotlight */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <Spotlight fill="rgba(139, 92, 246, 0.15)" className="w-full h-full"><div></div></Spotlight>
            </div>
            
            {/* Background decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] z-0 pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-10">
                
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 backdrop-blur-md hover:bg-white/10 transition-colors"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Disponível para novos projetos
                </motion.div>

                {/* Main Headline */}
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
                    >
                        Engenharia de Software,
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-300% animate-gradient">
                            com Design Inteligente.
                        </span>
                    </motion.h1>
                </div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
                >
                    Transformo requisitos complexos em sistemas web modernos e performáticos.
                    <br className="hidden md:block" />
                    Especialista em Vue.Js, React, React Native, Node.js e interfaces que encantam.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                     <a 
                        href="#projects"
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Ver Projetos
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="group px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <span className="flex items-center justify-center gap-2">
                            Entrar em Contato
                        </span>
                    </a>
                </motion.div>

                {/* Tech Badges (Optional / Minimal) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="pt-10 flex gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500"
                >
                     {/* Just simple icons or text, avoiding full logo loop here to keep it clean */}
                </motion.div>

            </div>

             {/* Scroll Indicator - Enhanced */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
                onClick={() => {
                    document.getElementById('aboutMe')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                {/* Text Label */}
                <span className="text-xs text-white/40 uppercase tracking-widest font-medium group-hover:text-white/60 transition-colors">
                    Scroll para explorar
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