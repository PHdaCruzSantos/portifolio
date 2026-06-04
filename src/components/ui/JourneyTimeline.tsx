import { motion } from 'framer-motion';

const milestones = [
    {
        year: "2021",
        title: "Ingresso na UFOP",
        description: "Início da graduação em Sistemas de Informação, com base em algoritmos, modelagem, estruturas de dados e fundamentos de computação.",
    },
    {
        year: "2023",
        title: "Base Web e Design",
        description: "Construção de interfaces responsivas, noções fortes de UI e evolução para SPAs com JavaScript moderno.",
    },
    {
        year: "2024",
        title: "Frontend Moderno",
        description: "React, Vue, TypeScript, Material UI, Tailwind e gerenciamento de estado em dashboards, marketplaces e extensões.",
    },
    {
        year: "2025",
        title: "Full Stack e Arquitetura",
        description: "Projetos com Node.js, Prisma, PostgreSQL, Docker, microsserviços, mensageria, APIs e pipelines de dados.",
    }
];

const JourneyTimeline = () => {
    return (
        <section id="journey" className="relative mx-auto w-full max-w-7xl px-0 py-20 text-[var(--cv-ink)]">
             <div className="mb-12 grid gap-4 border-b border-[var(--cv-ink)]/30 pb-4 md:grid-cols-[0.34fr_0.66fr]">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--cv-accent)]">Linha do tempo / 07</p>
                <h2 className="text-4xl font-black uppercase leading-[0.85] tracking-[-0.075em] md:text-7xl">
                    Evolução técnica
                </h2>
            </div>

             <div className="grid gap-0 border-t border-[var(--cv-ink)]/20 md:grid-cols-4">
                {milestones.map((milestone, index) => (
                    <motion.article
                        key={milestone.year}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="min-h-64 border-b border-[var(--cv-ink)]/20 py-6 md:border-r md:px-5 md:last:border-r-0"
                    >
                        <p className="text-6xl font-black leading-none tracking-[-0.08em] text-[var(--cv-accent)]/90">
                            {milestone.year}
                        </p>
                        <h3 className="mt-8 text-xl font-semibold leading-tight tracking-[-0.04em]">
                            {milestone.title}
                        </h3>
                        <p className="mt-4 text-sm leading-snug text-[var(--cv-muted)]">
                            {milestone.description}
                        </p>
                    </motion.article>
                ))}
             </div>
        </section>
    );
};

export default JourneyTimeline;
