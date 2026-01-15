import { motion } from 'framer-motion';

const milestones = [
    {
        year: "2021",
        title: "Ingresso na UFOP",
        description: "Início da graduação em Sistemas de Informação. Primeiros contatos com lógica de programação, algoritmos e C++.",
        icon: (
            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        )
    },
    {
        year: "2023",
        title: "Descobrindo a Web",
        description: "Mergulho no desenvolvimento Front-end. Domínio de HTML, CSS e JavaScript Vanilla. Criação dos primeiros sites responsivos.",
        icon: (
            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        )
    },
    {
        year: "2024",
        title: "Ecossistema React",
        description: "Especialização em React, TypeScript e Node.js. Participação em bootcamps intensivos e desenvolvimento de aplicações SPA complexas.",
        icon: (
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
    {
        year: "2025",
        title: "Full Stack Engineer",
        description: "Atuando como freelancer e buscando oportunidades juniors. Foco em arquitetura escalável, Docker, CI/CD e Clean Code.",
        icon: (
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    }
];

const JourneyTimeline = () => {
    return (
        <section id="journey" className="relative w-full max-w-5xl mx-auto px-4 py-20">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent hidden md:block" />
             
             <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                Minha Jornada
            </h2>

             <div className="space-y-12">
                {milestones.map((milestone, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row items-center gap-8 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Content Card */}
                        <div className="flex-1 w-full md:w-1/2">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm relative group">
                                <span className="absolute top-6 right-6 text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors hidden md:block">
                                    {milestone.year}
                                </span>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                            {milestone.icon}
                                        </div>
                                        <span className="md:hidden px-2 py-1 rounded text-xs font-bold bg-white/10 text-white/60">
                                            {milestone.year}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        {milestone.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {milestone.description}
                                </p>
                            </div>
                        </div>

                        {/* Center Node */}
                        <div className="relative z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                            <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                        </div>

                        {/* Spacer for symmetry on desktop */}
                        <div className="flex-1 hidden md:block" />
                    </motion.div>
                ))}
             </div>
        </section>
    );
};

export default JourneyTimeline;
